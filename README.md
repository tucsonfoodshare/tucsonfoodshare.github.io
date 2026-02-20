# Tucson Food Share Website

This website used to be WordPress. It got refactored to be pure HTML and then later [hugo](https://gohugo.io/), so keep that in mind if things seem quirky. Hugo is a simple static site generator based around a separation of content (written in markdown-ish) and layouts (HTML with some templating and slightly opaque composition rules).

To get started with hugo, once you have it installed, you can launch a development server with

```bash
hugo serve
```

Which spawns a web server on `localhost:1313` by default. The project's structure looks like:

```txt
tucsonfoodshare.github.io
|- content
|- layouts
|- static
.gitignore
hugo.toml
````

- **content** is the folder where markdown lives. Because markdown can contain HTML elements, it's not always a clear distinction, but it should tend that way.
  - Some markdown files contain `{{% shortcodes %}}`. These map to html snippets in [layouts/shortcodes](layouts/shortcodes), allowing more fine-grained styling (via typical HTML and CSS classes) of components of your content.
- **layouts** is the folder where html lives. For each file in `content`, it looks for a corresponding layout and falls back to `_default/baseof.html` if one doesn't exist. `baseof.html`, I believe, then instantiates [layouts/_default/single.html](layouts/_default/single.html) or, for the homepage because of [static/js/homepage.js](static/js/homepage.js), [layouts/index.html](layouts/index.html). Meanwhile, layouts can instantiate `layouts/partials`. Partials are, similar to shortcodes, reusable HTML snippets you can insert as needed. _Partial_ files.

Aside from that, Hugo is mysterious sometimes, and I still don't always 100\% get it.
