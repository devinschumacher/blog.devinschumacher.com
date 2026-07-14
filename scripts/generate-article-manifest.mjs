#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const manifestPath = path.join(repositoryRoot, "article-manifest.json");
const blogBaseUrl = "https://blog.devinschumacher.com";
const urlPattern = /https?:\/\/[^\s<>"'`\[\]()]+/giu;

function parseFrontMatter(source, filename) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u);

  if (!match) {
    return null;
  }

  const frontMatter = match[1];
  const title = extractFrontMatterScalar(frontMatter, "title");
  const slug = extractFrontMatterScalar(frontMatter, "slug");

  if (!title || !slug) {
    throw new Error(`${filename} is missing a title or slug in its front matter.`);
  }

  return { title, slug };
}

function extractFrontMatterScalar(frontMatter, key) {
  const lines = frontMatter.split(/\r?\n/u);
  const keyPattern = new RegExp(`^${key}:\\s*(.*)$`, "u");
  const lineIndex = lines.findIndex((line) => keyPattern.test(line));

  if (lineIndex === -1) {
    return null;
  }

  let scalar = lines[lineIndex].match(keyPattern)[1];
  const quote = scalar[0];

  if ((quote === '"' || quote === "'") && !scalar.endsWith(quote)) {
    for (let index = lineIndex + 1; index < lines.length; index += 1) {
      scalar += `\n${lines[index]}`;

      if (lines[index].endsWith(quote)) {
        break;
      }
    }
  }

  return parseYamlScalar(scalar);
}

function parseYamlScalar(value) {
  const scalar = value.trim();

  if (scalar.startsWith('"') && scalar.endsWith('"')) {
    return JSON.parse(scalar.replaceAll("\n", "\\n")).replace(/\s+/gu, " ").trim();
  }

  if (scalar.startsWith("'") && scalar.endsWith("'")) {
    return scalar.slice(1, -1).replaceAll("''", "'").replace(/\s+/gu, " ").trim();
  }

  return scalar;
}

function cleanUrl(rawUrl) {
  return rawUrl
    .replace(/\\(?=[_~*])/gu, "")
    .replace(/[\]\[{}(),.;:!?]+$/gu, "");
}

function extractUrls(source) {
  const youtubeUrls = [];
  const serpLyUrls = [];
  const seenYoutubeUrls = new Set();
  const seenSerpLyUrls = new Set();

  for (const match of source.matchAll(urlPattern)) {
    const url = cleanUrl(match[0]);
    let hostname;

    try {
      hostname = new URL(url).hostname.toLowerCase();
    } catch {
      continue;
    }

    const isYoutube =
      hostname === "youtube.com" ||
      hostname.endsWith(".youtube.com") ||
      hostname === "youtu.be" ||
      hostname.endsWith(".youtu.be") ||
      hostname === "youtube-nocookie.com" ||
      hostname.endsWith(".youtube-nocookie.com");
    const isSerpLy = hostname === "serp.ly" || hostname.endsWith(".serp.ly");

    if (isYoutube && !seenYoutubeUrls.has(url)) {
      seenYoutubeUrls.add(url);
      youtubeUrls.push(url);
    }

    if (isSerpLy && !seenSerpLyUrls.has(url)) {
      seenSerpLyUrls.add(url);
      serpLyUrls.push(url);
    }
  }

  return { youtubeUrls, serpLyUrls };
}

function isDownloaderArticle({ title, slug }) {
  // The current downloader tutorials all identify themselves with one of these
  // words in either the human-readable title or the more descriptive slug.
  return /\bdownload(?:ed|er|ing|s)?\b/iu.test(`${title} ${slug}`);
}

const filenames = (await readdir(repositoryRoot))
  .filter((filename) => filename.endsWith(".md"))
  .sort((left, right) => left.localeCompare(right));
const articles = [];

for (const filename of filenames) {
  const source = await readFile(path.join(repositoryRoot, filename), "utf8");
  const frontMatter = parseFrontMatter(source, filename);

  // Repository documentation such as README.md is not a Hashnode article.
  if (!frontMatter) {
    continue;
  }

  const { youtubeUrls, serpLyUrls } = extractUrls(source);

  articles.push({
    filename,
    title: frontMatter.title,
    slug: `${blogBaseUrl}/${frontMatter.slug}`,
    isDownloaderArticle: isDownloaderArticle(frontMatter),
    youtube_urls: youtubeUrls,
    serp_ly_urls: serpLyUrls,
  });
}

await writeFile(manifestPath, `${JSON.stringify(articles, null, 2)}\n`, "utf8");
console.log(`Wrote ${articles.length} articles to ${path.relative(repositoryRoot, manifestPath)}.`);
