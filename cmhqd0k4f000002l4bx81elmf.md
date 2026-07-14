---
title: "🎥 How to Download Videos from Whop (Mux Streams) with yt-dlp"
datePublished: 2025-10-22T18:59:36.629Z
cuid: cmhqd0k4f000002l4bx81elmf
slug: how-to-download-whop-videos
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1762610890738/c3e7e8c8-79ef-46e8-aab8-69fa9bd513d1.jpeg

---


# 🎥 How to Download Videos from Whop (Mux Streams) with yt-dlp

Whop.com hosts its videos using **Mux**, which serves them over **HLS streaming** (`.m3u8` playlists with short-lived tokens). 

If you want to save these videos locally as clean `.mp4` files, you can do it reliably with the following process...

👉 Or you can just get the [Whop Video Downloader](https://serp.ly/whop-video-downloader?via=blog.devinschumacher.com)


---

## 🔎 Step 1: Capture the `.m3u8?token=...` URL

1. Open the video on Whop.
2. Open DevTools → **Network tab**.
3. Play the video.
4. Filter requests by `m3u8`.
5. Copy the `https://stream.mux.com/...m3u8?token=...` link.

* ⚠️ This link is **time-limited** (`?token=` contains an expiry). If it stops working, grab a fresh one.

---

## 💻 Step 2: Run yt-dlp

Use this command to download the video:

```bash
yt-dlp \
  --no-playlist \
  --concurrent-fragments 16 \
  -f "bv*+ba/b" \
  --merge-output-format mp4 \
  --postprocessor-args "ffmpeg:-movflags +faststart" \
  -o "video.mp4" \
  "URL"
```



## 🔑 Flag Breakdown

* `--no-playlist` → ensures only the video you give is downloaded.
* `--concurrent-fragments 16` → downloads HLS segments in parallel for speed.
* `-f "bv*+ba/b"` → grabs **best video + best audio** and merges, fallback if only one stream exists.
* `--merge-output-format mp4` → ensures the final file is `.mp4`.
* `--postprocessor-args "ffmpeg:-movflags +faststart"` → optimizes MP4 for instant playback.
* `-o "video.mp4"` → avoids filename-too-long errors caused by tokenized URLs.


## Related

- [SERP Apps](https://apps.serp.co)
- [SERP Apps github](https://github.com/serpapps)
 - [Whop Downloader](https://apps.serp.co/whop-video-downloader)
 - [Whop Downloader Repo](https://github.com/serpapps/whop-video-downloader)
