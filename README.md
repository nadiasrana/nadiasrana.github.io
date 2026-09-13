# nadiasrana.com

Portfolio site for Nadia Sultan Rana. Static, built with
[Eleventy](https://www.11ty.dev/), deployed to GitHub Pages.

**Ships no JavaScript.** Plain HTML, one hand-written stylesheet, two
self-hosted typefaces.

## Run it

```
npm install
npm run dev      # http://localhost:4173, live reload
npm run build    # writes _site/
npm run clean    # removes _site/
npm run verify   # build, then assert DESIGN_SYSTEM.md against the output
```

`npm run verify` is the check that matters. It asserts landmarks, heading
order, alt text, accessible names, link targets, the closed spacing scale,
the two-family font limit, every colour coming from a token, the absence of
any JavaScript, and that every figure on the site is one `CONTENT.md`
permits. It exits non-zero on a violation.

There is no CSS build and no bundler. `src/assets/css/styles.css` is
hand-written and copied through as-is.

## Layout

```
.eleventy.js              build config: the mediaFigure shortcode, filters
tools/grade-images.mjs    one-off: crop + grade pictures/ into src/assets/img/
tools/verify.mjs          assertions against the built _site
tools/serve.mjs           plain static server, for verification only
pictures/                 original photographs, untouched
src/
  _data/site.js           title, url, nav, draft flag
  _data/work.js           the five work entries, on one fixed schema
  _includes/layouts/      base, page, project
  _includes/macros/       components.njk — the fixed-slot components
  _includes/partials/     nav, colophon
  index.njk               hero, what I do, work, project, now, contact
  about.njk               bio, record, milestones, principles, toolkit
  projects/entries/*.md   case studies
  404.njk, sitemap.njk, robots.njk
  assets/css              hand-written, copied verbatim
  assets/fonts            Instrument Serif + Instrument Sans, self-hosted
  assets/img              graded plates — generated, resized at build time
```

Routes: `/`, `/about/`, `/projects/`, `/projects/diamond-price-drivers/`,
`/404.html`, plus `sitemap.xml` and `robots.txt`.

## Before launch

`src/_data/site.js` has `draft: true`. That single flag drives `noindex` on
every page, the draft banner, and `Disallow: /` in robots.txt. Set it to
`false` to launch.

The launch gate itself is in `CONTENT.md`. **Read it before publishing:** it
records what is verified, what is blocked, and which figures may appear.
`DESIGN_SYSTEM.md` holds the visual system and `CONTENT_AUDIT.md` records
what is real, what was removed and what is missing. All are binding.

## Content rules

This site makes factual claims about a real person. See `CLAUDE.md`. In short:
nothing is invented, every figure traces to `CONTENT.md`, and placeholder
content is marked `TKTK` or `[NEEDS CONTENT: …]` so it cannot reach production
by accident.
