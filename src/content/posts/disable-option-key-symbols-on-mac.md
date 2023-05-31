---
title: Disable option-key symbols on Mac
description:
keywords:
tags:
- configuration
- keyboard
math: false
toc: false
draft: true
pubDate: 2023-05-20
lastMod:
---

I recently discovered that Mac users have the ability to easily type out various symbols using `⌥ + <letter>` combinations (that's the symbol for the Option key). For example,
 
- `⌥ s` inserts `ß` at cursor, and 
- `⌥ w` inserts `∑` at cursor.

[Here](https://mackeeper.com/blog/special-characters-mac-keyboard/) is a list of these symbols and their trigger. However, this wasn't a feature I wanted or needed on my keyboard.

<!-- Maybe remove this bit about my keyboard because it adds nothing. -->
In short, my daily (keyboard) driver is the [Corne](https://github.com/foostan/crkbd), a 42-key split ortholinear keyboard. I love this thing, but the lack of keys when compared to a standard keyboard has forced me (and all other users of this type of keyboard) to be a little more clever with where many keys are placed; for example, the number, symbol, and modifier keys. I've adopted the well-known[^1] configuration of using something known as [home-row modifiers](https://precondition.github.io/home-row-mods). Basically, the modifiers are placed right on the home-row of my keyboard but only activated when I hold down the appropriate keys. I know, it probably doesn't make too much sense... but basically, because the modifier keys are on my home-row keys, there's a non-zero chance that I'll accidentally trigger a modifier combination when I don't intend to because of lazy typing, and this is how I accidentally discovered the `⌥ + <letter>` combinations. 

Okay, back to the main purpose of this post! I dug around for a little longer than expected, but came across a nice solution to disable the `⌥ + <letter>` combinations. See [here](https://superuser.com/a/942256) for the solution along with an explanation. However, I will copy and paste the gist of it here 

> Save the following to `~/Library/KeyBindings/DefaultKeyBinding.dict` (create if necessary).
>
>```
>{ "~a" = (); "~b" = (); "~c" = (); "~d" = (); "~e" = (); "~f" = (); "~g" = (); "~h" = (); "~i" = (); "~j" = (); "~k" = (); "~l" = (); "~m" = (); "~n" = (); "~o" = (); "~p" = (); "~q" = (); "~r" = (); "~s" = (); "~t" = (); "~u" = (); "~v" = (); "~w" = (); "~x" = (); "~y" = (); "~z" = (); }
>```
>
>This disables all the `⌥ + <letter>` combinations. Restart apps to take effect.

[^1]: Well-known within the custom split keyboard community 😛