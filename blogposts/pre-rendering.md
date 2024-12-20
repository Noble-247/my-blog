---
title: "Two Forms of Pre-rendering"
date: "2024-03-14"
---

Next.JS has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The differnce is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

IMPORTANTLY, NextJS lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" NextJS app by using Static Generation for most pages and using Server-side Rendering for others.
