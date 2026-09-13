# nadiasrana.com — Field Notes

Personal site and journal for Nadia Sultan Rana. Static, built with
[Eleventy](https://www.11ty.dev/), deployed to GitHub Pages.

## Run it

```
npm install
npm run dev      # http://localhost:4173, live reload
npm run build    # writes _site/
npm run clean    # removes _site/
```

There is no CSS build and no bundler. `src/assets/css/styles.css` is
hand-written and copied through as-is.

## Layout

```
.eleventy.js              build config: collections, filters, plugins
src/
  _data/site.js           title, url, nav, issue number, draft flag
  _data/library.js        Library entries (data, not pages)
  _includes/layouts/      base, page, article, project, note
  _includes/partials/     masthead, footer, figure macro
  index.njk               the cover
  writing/posts/*.md      essays, field notes, project logs
  notes/entries/*.md      digital-garden notes
  projects/entries/*.md   case studies
  library/, about.njk, 404.njk, sitemap.njk, robots.njk
  assets/                 css, fonts, js, img — copied verbatim
```

## Before launch

`src/_data/site.js` has `draft: true`. That single flag drives `noindex` on
every page, the draft banner, and `Disallow: /` in robots.txt. Set it to
`false` to launch.

The launch gate itself is in `CONTENT.md`. **Read it before publishing:** it
records what is verified, what is blocked, and which figures may appear.
`DESIGN.md` holds the visual system. Both are binding.

## Content rules

This site makes factual claims about a real person. See `CLAUDE.md`. In short:
nothing is invented, every figure traces to `CONTENT.md`, and placeholder
content is marked `TKTK` or `[NEEDS CONTENT: …]` so it cannot reach production
by accident.
