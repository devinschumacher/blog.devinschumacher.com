---
title: "How to Get A YouTube Video Thumbnail Image Easily [All You Need is the YouTube Video Link]"
datePublished: 2024-11-05T13:57:58.381Z
cuid: cm34ilxpp000609lb5l2lf2k3
slug: how-to-get-a-youtube-video-thumbnail-image-easily-all-you-need-is-the-youtube-video-link
tags: youtube, social-media

---

# How to Get A YouTube Video Thumbnail Image Easily \[All You Need is the YouTube Video Link\]

For some reason, I found myself needing my YouTube thumbnail images for stuff…

Blog post featured images, putting together mini products or lead magnets, etc.

And for whatever reason, YouTube decided to make it incredibly obnoxious to get the thumbnail images — apparently “right click + save image” for YouTube videos just is not chill.

So here’s what you do instead:

You restructure the URL pattern of the YouTube Video (using the video ID) to get whichever version of the image you want.

<aside>
🤔 **Silver Lining**: You can get multiple sizes/resolutions of the images this way
</aside>

Let’s take a look at how it’s done.

## **YouTube Video URL**

For the example, I will use this YouTube video of mine where I store some of my most confidential information:

https://www.youtube.com/watch?v=T0nSPx4qLM8

It’s helpful to first understand the primary structure of a YouTube video URL

Here’s the URL for that one: `https://www.youtube.com/watch?v=T0nSPx4qLM8`

### YouTube Video URL Structure

There are 2 parts:

1. The Base URL: `https://www.youtube.com/watch?v=`
    
2. Video ID: `T0nSPx4qLM8`
    

To get the image, you just need the Video ID!

## **YouTube Image URLs**

There are many image resolutions available for YouTube videos, with the default thumbnail image being 120x90 pixels.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1730815122331/169e4f15-f978-4b39-a3ec-66c8afeec970.jpeg align="center")

Aka “shit” 😂

Here are the different URL patterns which correspond to different image sizes & resolutions that you can use to grab the images:

1. Default Quality: `http://img.youtube.com/vi/T0nSPx4qLM8/default.jpg`
    
2. Medium Quality Default: `http://img.youtube.com/vi/T0nSPx4qLM8/mqdefault.jpg`
    
3. High Quality Default: `http://img.youtube.com/vi/T0nSPx4qLM8/hqdefault.jpg`
    
4. Standard Definition Default: `http://img.youtube.com/vi/T0nSPx4qLM8/sddefault.jpg`
    
5. Maximum Resolution Default: `http://img.youtube.com/vi/T0nSPx4qLM8/maxresdefault.jpg`
    

If it’s not already glaringly apparent how this shakes out, they only differ from the actual video URLs in a couple ways:

1. The images are hosted on a subdomain (`img.youtube.com` )
    
2. the URL path after the hostname is `/vi/` instead of `/watch?v=` (probably because it stands for “video image” … I’m guessing)
    
3. After the Video ID there is another URL subpath which specifies the image resolution, ex: `/maxresdefault.jpg`
    

Here they are for each one, with an example of the image you get for each.

### Default Quality

1. Base: `http://img.youtube.com/vi/`
    
2. Video ID: `T0nSPx4qLM8`
    
3. Suffix: `/default.jpg`
    

Fully constructed: `http://img.youtube.com/vi/T0nSPx4qLM8/default.jpg`

### Medium Quality Default

1. Base: `http://img.youtube.com/vi/`
    
2. Video ID: `T0nSPx4qLM8`
    
3. Suffix: `/mqdefault.jpg`
    

Fully constructed: `http://img.youtube.com/vi/T0nSPx4qLM8/mqdefault.jpg`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1730815143194/e709c521-6eda-4a18-9b68-f6edc347618b.jpeg align="center")

### High Quality Default

1. Base: `http://img.youtube.com/vi/`
    
2. Video ID: `T0nSPx4qLM8`
    
3. Suffix: `/hqdefault.jpg`
    

Fully constructed: `http://img.youtube.com/vi/T0nSPx4qLM8/hqdefault.jpg`

### Standard Definition

1. Base: `http://img.youtube.com/vi/`
    
2. Video ID: `T0nSPx4qLM8`
    
3. Suffix: `/sddefault.jpg`
    

Fully constructed: `http://img.youtube.com/vi/T0nSPx4qLM8/sddefault.jpg`

### Maximum Resolution Default

1. Base: `http://img.youtube.com/vi/`
    
2. Video ID: `T0nSPx4qLM8`
    
3. Suffix: `/maxresdefault.jpg`
    

Fully constructed: `http://img.youtube.com/vi/T0nSPx4qLM8/maxresdefault.jpg`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1730815177276/641951c1-4d52-4895-bfe9-a15096c42068.jpeg align="center")

… Womp Womp.

I don’t have one (bc the image I uploaded originally was not high quality enough).

So all I get is this:

## Final thoughts

There could be more image sizes but I thought that was enough.