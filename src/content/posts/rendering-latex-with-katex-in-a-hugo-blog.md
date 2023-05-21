---
title: Rendering LaTeX with KaTeX in a Hugo blog
date: 2022-11-03T00:21:12-07:00
description: A tutorial on using KaTeX to render LaTeX for blogs built with Hugo.
keywords:
tags: ["hugo", "latex"]
math: true
draft: true
pubDate: 2022-11-28
lastMod:
---

I recently started my Hugo blog, and I plan on using it mostly as a knowledge dump for myself and anyone else in the world who might find what I learn useful. That being said, I definitely needed to figure out how to render LaTeX. It seems like people generally use either [KaTeX](https://katex.org/) or [MathJax](https://www.mathjax.org/). After doing some research, I chose KaTeX because of its [speed](https://www.intmath.com/cg5/katex-mathjax-comparison.php) and its look - the math font from MathJax was just a little bit too bold for me. Anyway, here's what I did
to get KaTeX setup!

There are three main steps:

1. Create a KaTeX partial.
2. Include the KaTeX partial in your header or footer partial.
3. Depending on how the KaTeX partial is included, optionally activate the KaTeX partial using the front matter of any Markdown file that contains LaTeX expressions.

## Create a KaTeX partial

Generally speaking, a Hugo partial is a template that contains code that can be inserted into any
page. A KaTeX partial will contain the required JavaScript and CSS files for rendering LaTeX. Create a file called `katex.html` in the `layouts/partial` directory of your project, and add the following to the file:

```html
<!-- CSS -->
<link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css"
    integrity="sha384-Cqd8ihRLum0CCg8rz0hYKPoLZ3uw+gES2rXQXycqnL5pgVQIflxAUDS7ZSjITLb5"
    crossorigin="anonymous">
<!-- The loading of KaTeX is deferred to speed up page rendering -->
<script defer
    src="https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.js"
    integrity="sha384-1Or6BdeNQb0ezrmtGeqQHFpppNd7a/gw29xeiSikBbsb44xu3uAo8c7FwbF5jhbd"
    crossorigin="anonymous"></script>
<!-- To automatically render math in text elements, include the auto-render extension -->
<script defer
    src="https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/contrib/auto-render.min.js"
    integrity="sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl"
    crossorigin="anonymous"
    onload="renderMathInElement(document.body);"></script>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        renderMathInElement(document.body, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false },
            ],
            throwOnError : false
        });
    });
</script>
```

See [here](https://katex.org/docs/browser.html) for more on where I got the snippet from.

## Include the KaTeX partial

We now have to include the KaTeX partial in every header or footer of each page that will contain LaTeX expressions. For this tutorial, let's put the KaTeX partial in the header partial. If you don't already have a header partial, go ahead and create `head.html` in the `layouts/partials` directory of your project. If you already have a theme, then you can copy your theme's `head.html` into your `layouts/partials` instead. Note that this "local" copy will override the
theme's. See [here](https://gohugo.io/templates/partials/#partial-template-lookup-order) for
information on partial template lookup order. If you'd prefer to not have a local copy of your theme's partials, and would rather just modify the theme's partials directly, that's totally fine, too!

Then, add the following snippet to your `head.html`:

```go
{{ if .Page.Params.math }}
    {{ partial "katex.html" . }}
{{ end }}
```

This snippet uses Go's template libraries to conditionally include the KaTeX partial only when
compiling pages that specify it contains LaTeX expressions.

## Optionally activate the KaTeX partial

Finally, to specify when KaTeX is needed for a particular page, we just need to specify an extra bit of [front matter](https://gohugo.io/content-management/front-matter/) in the Markdown file:

```markdown
---
<!-- Other front matter -->
math: true
---
```

And that's it! That extra front matter will cause `.Page.Params.math` to evaluate as true when the current page is compiled, which loads the JavaScript and CSS necessary for rendering LaTeX with KaTeX. We are now ready to include LaTeX math expressions in our posts.

## Writing LaTeX in Markdown

It is actually rather straightforward, assuming we already know how to use LaTeX, to include math expressions in out posts. We can display both inline math and displayed math using either a single dollar sign or double dollar sign, respectively. For example,

```markdown
$\int_{-\infty}^{\infty} e^{-x^2} dx$.
```

will be rendered as $\int_{-\infty}^{\infty} e^{-x^2} dx$.

```markdown
$$\int_{-\infty}^{\infty} e^{-x^2} dx$$.
```

will be rendered as: 

$$
\int_{-\infty}^{\infty} e^{-x^2} dx.
$$

Note that the delimiters are specified in the KaTeX partial we created earlier, so you may configure them to your liking.

And that's it! Now you can write about math to your heart's content on your own blog. I hope you found this helpful!
