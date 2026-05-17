---
title: "How to Bulk Transfer Github Issues to Another Repository"
datePublished: 2025-05-26T19:15:35.994Z
cuid: cmb5gwhbu000y09ledvxb4el7
slug: how-to-bulk-transfer-github-issues-to-another-repository
tags: github, programming-tips

---

## Pre-requisites:

1. Make sure you have Github CLI installed:
    

`$ brew install gh` - (Mac)

2. Make sure you are “authenticated” through Github CLI:
    

`$ gh auth login`

3. Make sure that the repository you’re transferring from & to have the same *labels, fields, etc.*
    

NOTE: I didn't actually test step #3 above... maybe it's not a problem.

Just test it first if you're worried and LMK in the comments if it matters!

**Now you’re ready to bulk transfer your issues!**

%[https://www.youtube.com/watch?v=jUAmZDyNOLA&ab_channel=devinschumacher] 

## Bulk Transfer your Issues CLI

1. Open your terminal & run the command below
    

```bash
gh issue list -s all -L 500 --json number -R devinschumacher/repository-a | \
    jq -r '.[] | .number' | \
    while read issue; do
        gh issue transfer "$issue" devinschumacher/repository-b -R devinschumacher/repository-a
        sleep 3
    done
```

*Just make sure to replace the \`organization/repository\` name syntax with the ones that you want.*

* "repository-a" is the source repository - aka where you want to transfer (move) your issues FROM
    
* "repository-b" is the destination repository - aka where you want to transfer (move) your issues TO
    

***In my example, those are:***

* ***devinschumacher/repository-a***
    
* ***devinschumacher/repository-b*** *\-R* ***devinschumacher/repository-a***
    

> Note: Adjust the `sleep <number>` number at your own risk. I started without sleep and have seen account rate limits so far with 0 wait, 1 second, and even 2 seconds. It only happened once on 2 seconds but the repo had 80+ issues. So now i've changed it to 3.

> Note: It does not COPY them it moves them.

> Note: This will bulk transfer both the active and in-active (archived, closed, whatever) issues - which may not be what you want. To transfer only the active ones, see below

## Bulk transfer only the ACTIVE issues (skip the closed/archived ones)

```bash
gh issue list -s open -L 500 --json number -R devinschumacher/repository-a | \
    jq -r '.[] | .number' | \
    while read issue; do
        gh issue transfer "$issue" devinschumacher/repository-b -R devinschumacher/repository-a
        sleep 3
    done
```

%[https://gist.github.com/devinschumacher/d5fdf0edf2719f000e6f52e807ec928f]