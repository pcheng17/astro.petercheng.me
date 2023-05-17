---
title: "Visualizing directory structures in plain text"
date: 2022-11-15T21:50:13-08:00
description: Visualizing the directory structure using `tree`, a command line tool.
keywords:
categories:
- note
tags:
- cli
- workflow
math: false
toc: false
draft: false
pubDate: 2022-11-25
lastmod:
---

# Visualizing directory structures in plain text

I discovered a neat command line tool, `tree`, which displays the content of the current directory
in a tree-like structure in plain text. This is super convenient to show, for example, a project's
directory structure in a Markdown file.

To use `tree` on a Mac (or Linux if you're using [homebrew](https://brew.sh/)), simply run
`brew install tree` to install it. Then, run `tree` to use it.

Running `man tree` will display all the details about this tool, including all of the different
flags you can pass to it to adjust the output. For example, `tree -L 2 -d` will only display the top
two levels of the current directory, and only includes directories:

```shell
.
├── archetypes
│   └── til-bundle
├── content
│   ├── about
│   ├── blog
│   └── til
├── public
├── resources
│   └── _gen
└── themes
    └── mini
```
