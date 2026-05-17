---
title: "How to Filter by Special Characters (?, &, $, etc.) in Google Sheets"
seoTitle: "How to Filter by Special Characters (?, &, $, etc.) in Google Sheets"
datePublished: 2025-08-15T21:26:55.690Z
cuid: cmedc9dca000202lb5oembloq
slug: how-to-filter-by-special-characters-and-etc-in-google-sheets
tags: data-science, google-sheets

---

# How to filter by special characters (?, &, $, etc.) in Google Sheets

Google sheets doesn't work if your'e trying to filter by special characters.

For example, if you wnt to find all URLs in a column with a `?` in them, you would naturally try this:

<img width="401" height="731" alt="image" src="https://github-production-user-asset-6210df.s3.amazonaws.com/45643901/478578338-07b85892-1eb4-4eb6-a66c-fcfd34fd35c5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250815T212423Z&X-Amz-Expires=300&X-Amz-Signature=af1fd16ba5a04472b7391a936315c1b9f0c99efeb47a6fa53f4f5234ed824162&X-Amz-SignedHeaders=host" />

However it doesnt work. You can see it found "4" but there are WAY more than 4 rows with a `?` in them.

Then, you might logically try this (which is already frustrating to have to think about):

<img width="339" height="498" alt="image" src="https://github-production-user-asset-6210df.s3.amazonaws.com/45643901/478578484-943216ac-010b-468f-85b5-ebf2bfd5afd5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250815T212433Z&X-Amz-Expires=300&X-Amz-Signature=be80eb2ae6db66ee6cc2d75be111e0bfdbbc2e720f8320255fa9e5ed54d807d4&X-Amz-SignedHeaders=host" />

but that still doesnt work (just shows everything)

<img width="413" height="772" alt="image" src="https://github-production-user-asset-6210df.s3.amazonaws.com/45643901/478578601-05468044-06fe-417c-987c-0398b488062e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250815T212440Z&X-Amz-Expires=300&X-Amz-Signature=60db80736cd72ac6479ea0cb21a8ba29d55e10a656365f19b3bc3234068f885f&X-Amz-SignedHeaders=host" />

What you have to do is use an "escape character" + this "filter by condition" area.

The escape character in almost everything in computer world is `\`, but of course Google chose not to use that (classic)...

The escape character for Google sheets is a tilde `~`. (You put it before the character you are trying to escape)

So this example would be:

<img width="342" height="483" alt="image" src="https://github-production-user-asset-6210df.s3.amazonaws.com/45643901/478578928-93f0630c-46ee-4695-898b-4577b7af173f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250815T212503Z&X-Amz-Expires=300&X-Amz-Signature=acd92e784b9c852960370d566a5cca3d4886f4762ac64ba6c34268414960212e&X-Amz-SignedHeaders=host" />

and tada!

<img width="1661" height="801" alt="image" src="https://github-production-user-asset-6210df.s3.amazonaws.com/45643901/478579007-c85e1a7b-87f7-4554-bc77-bf5063ec3523.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250815T212458Z&X-Amz-Expires=300&X-Amz-Signature=8413fdb1eaa3160749618b19a269ad73da9094c5cbe160ae31d5a2f15296b2cc&X-Amz-SignedHeaders=host" />

1000ish rows!
 
TLDR: Use FILTER BY CONDITION > TEXT CONTAINS and use a tilde escape character when searching for special characters.