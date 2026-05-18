---
title: "How To Combine / Merge Multiple CSV Or Excel Files (For Mac, PC & Linux)"
datePublished: 2025-05-21T11:24:44.198Z
cuid: cmaxuvorq000p09jv3yuo9vu0
slug: how-to-combine-merge-multiple-csv-or-excel-files-for-mac-pc-and-linux
tags: productivity

---

So, allow me make it just one micron less painful for you – by show you  **how to combine CSVs together in a matter of seconds** .

## How do i combine multiple files into one file?

Relax! I’m getting there..

Just kidding – i just needed to stuff that  [keyword](https://devinschumacher.com/seo-keywords/)  phrase to pick up a couple more terms for  [SEO](https://devinschumacher.com/what-is-seo/)  purposes.

**But actually there’s a few ways to do it:**

* **Merge CSVs at the command line**  (how we are going to do it today)
    
* **Merge CSVs with a**  [free csv merge tool](https://serp.co/tools/combine-csv-files/)  I made for ya
    
* **Merge CSVs with python**
    
* Merge CSVs by smashing them together with hulk hands (not a real method)
    

In this article I will show you  **how to quickly & easily combine and merge multiple CSV files into one CSV file for free on a mac using the terminal**  — but it also works on PCs.

But for all you lazy people, here’s a video:

If you run into any problems – we even created a free tool that you can try.

So follow along, and start combining!

**Update**: Back in the day I shot a video about how to do this manually on a mac, and it still works. But since then we’ve had a lot of people ask about doing it on a PC.

So we actually just made a tool that combines CSVs for you.

And it’s way faster than the manual method.

And it’s free.

👉 Here’s a link to the tool for all you lazies who don’t wanna read or watch a video:  [https://serp.co/tools/combine-csv-files/](https://serp.co/tools/combine-csv-files/)

---

If this was helpful, subscribe to the yt channel. i’m going to be making a lot more videos that will help you be more productive, faster on a computer, and make your life suck less 🙂

> \&gt;  [click here to subscribe to the yt channel](https://devin.to/yt)

---

## Table of Contents

* [How do i combine multiple files into one file?](https://devinschumacher.com/how-to-combine-merge-multiple-csv-or-excel-files-for-mac-pc/#how-do-i-combine-multiple-files-into-one-file)
    
* [Step 1 – Create a new folder](https://devinschumacher.com/how-to-combine-merge-multiple-csv-or-excel-files-for-mac-pc/#step-1-create-a-new-folder)
    
* [Step 2 – Open Terminal (aka “the shell” or “the command line”)](https://devinschumacher.com/how-to-combine-merge-multiple-csv-or-excel-files-for-mac-pc/#step-2-open-terminal-aka-the-shell-or-the-command-line)
    
    * [Applications &gt; Utilities &gt; Terminal](https://devinschumacher.com/how-to-combine-merge-multiple-csv-or-excel-files-for-mac-pc/#applications-gt-utilities-gt-terminal)
        
* [Step 3 – Print Working Directory](https://devinschumacher.com/how-to-combine-merge-multiple-csv-or-excel-files-for-mac-pc/#step-3-print-working-directory)
    
* [Step 4 – Choose the folder you created](https://devinschumacher.com/how-to-combine-merge-multiple-csv-or-excel-files-for-mac-pc/#step-4-choose-the-folder-you-created)
    
* [Step 5 – Merge the files](https://devinschumacher.com/how-to-combine-merge-multiple-csv-or-excel-files-for-mac-pc/#step-5-merge-the-files)
    
* [Step 6 – Check your folder](https://devinschumacher.com/how-to-combine-merge-multiple-csv-or-excel-files-for-mac-pc/#step-6-check-your-folder)
    
* [Final thoughts](https://devinschumacher.com/how-to-combine-merge-multiple-csv-or-excel-files-for-mac-pc/#final-thoughts)
    

If you have multiple CSV or Excel files that you need combined, follow this simple process to get them combined in a flash, using the built in “terminal” on your Mac.

👉 Bookmark this FREE SOP (checklist) that you can run anytime you need to combine more CSVs:  [devin.to/csv-sop](https://devin.to/csv-sop)

## Step 1 – Create a new folder

Create a new folder on your Desktop & put all of your CSV files into the folder.

I will call mine “combine”.

It will look like this:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37a03ae4-7c30-4b2b-acb7-bcbfd6cff13c_1024x444.png align="left")

**Caution** : Everything in this folder will be combined.

## Step 2 – Open Terminal (aka “the shell” or “the command line”)

The program “Terminal” is located in your “ [Applications](https://devinschumacher.com/how-to-completely-delete-applications-on-mac-full-uninstallation/) ” folder under “Utilities”

### Applications &gt; Utilities &gt; Terminal

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37a03ae4-7c30-4b2b-acb7-bcbfd6cff13c_1024x444.png align="left")

Open Terminal.

It will look like this:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37a03ae4-7c30-4b2b-acb7-bcbfd6cff13c_1024x444.png align="left")

## Step 3 – Print Working Directory

This is a fancy name. Don’t worry about it, just follow the steps.

1. Type:  `pwd`
    
2. Hit the  `return`  key
    

```plaintext
`pwd`
```

  
It will look like this:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37a03ae4-7c30-4b2b-acb7-bcbfd6cff13c_1024x444.png align="left")

`pwd`  means “print working directory”.

It’s showing you what “directory” (aka folder) you are currently at on your operating system. Don’t worry about it. Just keep following along.

## Step 4 – Choose the folder you created

Set your “directory” to the folder you created that has your CSV files in it.

1. type:  `cd /Users/devin/Desktop/combine`  &lt;== obviously replace “devin” with your name… unless your name is devin.
    
2. hit the  `return`  key
    

**Note** : you will need to change your file path so it matches your username & folder name

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37a03ae4-7c30-4b2b-acb7-bcbfd6cff13c_1024x444.png align="left")

## Step 5 – Merge the files

Now you are ready to merge your files.

1. type:  `cat *.csv >combined.csv`
    
2. hit the  `return`  key
    

  
It will look like this:

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd99c1dd9-ddf4-4cc0-9fe8-a6c0d7cb002f_614x385.png align="left")

## Step 6 – Check your folder

If you followed along correctly, you are done!

Inside your folder there will be a file called “combined.csv”, which contains all of your csv files combined together.

Note: you might have to delete the duplicate header columns though.

Just apply a filter to your entire sheet, and sort A-Z on column A and you should see them.

**It will look like this:**

![](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd99c1dd9-ddf4-4cc0-9fe8-a6c0d7cb002f_614x385.png align="left")

## Final thoughts

If this was helpful for you –  [subscribe to the yt channel](https://www.youtube.com/@devinschumacher1?sub_confirmation=1)

I’m going to be making a lot more videos with tips that will help save you time, increase your productivity, and basically make you feel like a hacker… or Neo from the matrix. which is always a good thing.

Cheers & stay funky, my friends. 🦩
