# DESIGN_SYSTEM.md

The visual system for nadiasrana.com. This document supersedes `DESIGN.md` on
palette, typography, motion, layout and imagery.

**Register:** an architecture-and-design journal. A warm ivory paper panel on
a neutral canvas. Large serif headings against small uppercase sans metadata.
Thin warm-grey rules. A disciplined grid with generous margins and deliberate
asymmetry.

Every contrast ratio below was computed from the hex values in this document
using the WCAG 2.x relative-luminance formula, not estimated. Every crop
rectangle was rendered from the source file and inspected before it was
written down.

---

## 1. Colour tokens

```css
:root {
  /* Grounds */
  --paper:             #F4F1E8;  /* the panel */
  --paper-light:       #F8F6F0;  /* raised blocks inside the panel */
  --paper-deep:        #EAE5D9;  /* the canvas behind the panel */
  --dark:              #292723;  /* colophon only */

  /* Text */
  --ink:               #1A1917;  /* headings, body, links */
  --ink-secondary:     #5F5C56;  /* decks, captions, secondary prose */
  --ink-muted:         #67645E;  /* metadata, labels — CORRECTED, see below */
  --ink-muted-inverse: #B0ABA2;  /* metadata on --dark — ADDED, see below */
  --numeral:           #817D75;  /* large numerals ONLY, ≥24px */

  /* Rules — hairlines only, never text */
  --line:              #D3CEC3;
  --line-soft:         #E4E0D7;

  /* Focus */
  --focus:             var(--ink);
}

/* The colophon is the only dark region. Tokens flip inside it. */
.canvas--dark {
  --ink:           var(--paper);
  --ink-secondary: #CBC6BC;
  --ink-muted:     var(--ink-muted-inverse);
  --focus:         var(--paper);
}
```

### Measured contrast

**Text on `--paper` `#F4F1E8`**

| Foreground | Ratio | AA normal (4.5) | AAA (7.0) |
|---|---|---|---|
| `--ink` `#1A1917` | **15.56** | Pass | Pass |
| `--ink-secondary` `#5F5C56` | **5.90** | Pass | Fail |
| `--ink-muted` `#67645E` | **5.22** | Pass | Fail |
| `--numeral` `#817D75` | 3.63 | **Fail** — large text only (3.0) | — |

**Text on `--paper-light` `#F8F6F0`**

| Foreground | Ratio | AA normal |
|---|---|---|
| `--ink` | **16.26** | Pass |
| `--ink-secondary` | **6.17** | Pass |
| `--ink-muted` | **5.46** | Pass |

**Text on `--paper-deep` `#EAE5D9`** — the canvas. Only used for text where a
heading or label sits directly on the canvas outside the panel.

| Foreground | Ratio | AA normal |
|---|---|---|
| `--ink` | **13.98** | Pass |
| `--ink-secondary` | **5.30** | Pass |
| `--ink-muted` | **4.69** | Pass |
| `--numeral` | 3.26 | Large text only |

**Text on `--dark` `#292723`**

| Foreground | Ratio | AA normal |
|---|---|---|
| `--paper` | **13.20** | Pass |
| `#CBC6BC` (secondary, inverse) | **8.76** | Pass |
| `--ink-muted-inverse` `#B0ABA2` | **6.53** | Pass |

**Non-text**

| Pair | Ratio | Use |
|---|---|---|
| `--line` on `--paper` | 1.39 | Hairline rules. Decorative separation only — never the sole carrier of meaning |
| `--line-soft` on `--paper` | 1.17 | The faintest rule. Inside components only |
| `--focus` on `--paper` | 15.56 | Focus ring, needs 3.0 |
| `--focus` on `--dark` | 13.20 | Focus ring in the colophon |

### Two corrections to the supplied palette

**`--ink-muted` was `#817D75`, measured 3.63:1 on `--paper`.** That is below
the 4.5:1 AA threshold for normal-size text. The brief specifies metadata at
10–12px, which is normal-size text under WCAG regardless of letter-spacing or
case. Raised to **`#67645E`**, the same warm-grey hue at 80% luminance,
measuring **5.22:1**.

The original `#817D75` is kept as **`--numeral`** and is legal at ≥24px,
where the 3:1 large-text threshold applies. That is exactly the
`NumberedSections` numeral, so nothing is discarded.

Consequence worth naming: `--ink-secondary` (5.90) and `--ink-muted` (5.22)
are now close in value, so the three-step ink ramp no longer separates by
lightness alone. It separates by **treatment** instead — muted text is always
small, uppercase and tracked, which distinguishes it more reliably than a
value step would. If a wider value gap is wanted later, darken
`--ink-secondary` to `#4E4B45` (7.70:1) rather than lightening `--ink-muted`.

**`--ink-muted-inverse` `#B0ABA2` is new.** The supplied set had no legal text
colour for the `--dark` ground: `--ink-muted` measures 3.64:1 there and
`--line` is banned as text. Without this token the colophon cannot carry
metadata.

### Rules

- No pure white (`#FFF`) and no pure black (`#000`) anywhere, including
  `box-shadow` and SVG.
- No gradients. No `backdrop-filter`.
- No accent colour by default. Links are distinguished by an underline, not
  by hue. If an accent is ever introduced it is one colour, used for one
  purpose, and it is added to this file with its measured ratios first.
- `--line` and `--line-soft` are `border-color` and `background-color` only.
  They never appear as `color`.
- Colour is never the only signal. A link has an underline; a state has a
  word.

---

## 2. Type

Two families. No more.

| Role | Family | Licence | Present in repo |
|---|---|---|---|
| Headings, numerals | **Instrument Serif** | SIL OFL 1.1 | Yes — 3 WOFF2, 55KB |
| Body, decks, labels, captions, metadata, UI | **Instrument Sans** | SIL OFL 1.1 | Yes — 2 WOFF2 variable, 41KB |

Instrument Sans is recommended as the neutral sans because it is the
companion face to Instrument Serif from the same foundry, so the pairing is
designed rather than assembled, and it is a plain grotesque that holds up at
10px uppercase with open tracking. Any neutral grotesque with a real
uppercase and tabular figures would serve; the recommendation is a default,
not a constraint.

Both are self-hosted as WOFF2 in `src/assets/fonts/`, subset to Latin,
`font-display: swap`, with only the two faces actually used preloaded.
Instrument Serif ships a single weight (Regular) plus an Italic — that is
sufficient; heading weight comes from size, not from a bold.

Clash Display, Newsreader and their four WOFF2 files are removed.

```css
--face-display: 'Instrument Serif', Georgia, 'Times New Roman', serif;
--face-text:    'Instrument Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
```

No third family. No monospace face is loaded; the diamond study's tables use
`--face-text` with `font-variant-numeric: tabular-nums`.

### Scale

| Token | Size | Family | Line height | Tracking | Case | Use |
|---|---|---|---|---|---|---|
| `--t-display` | `clamp(3rem, 6vw, 6.25rem)` — 48→100px | display | 0.95 | -0.02em | sentence | Page title, one per page |
| `--t-h2` | `clamp(2rem, 3.4vw, 3.25rem)` — 32→52px | display | 1.05 | -0.015em | sentence | Section headings |
| `--t-h3` | `clamp(1.375rem, 1.8vw, 1.75rem)` — 22→28px | display | 1.15 | -0.01em | sentence | Entry titles, subsections |
| `--t-h4` | `clamp(1.125rem, 1.2vw, 1.25rem)` — 18→20px | text, 600 | 1.3 | 0 | sentence | Rare. Inside long prose only |
| `--t-deck` | `clamp(1.125rem, 1.3vw, 1.375rem)` — 18→22px | text, 400 | 1.45 | 0 | sentence | The standfirst under a title |
| `--t-body` | `clamp(0.9375rem, 0.35vw + 0.86rem, 1.125rem)` — 15→18px | text, 400 | 1.65 | 0 | sentence | All running prose |
| `--t-small` | `0.875rem` — 14px | text, 400 | 1.5 | 0 | sentence | Captions, footnotes, table cells |
| `--t-meta` | `0.75rem` — 12px | text, 500 | 1.2 | 0.08em | UPPER | Kickers, labels, nav |
| `--t-meta-sm` | `0.625rem` — 10px | text, 500 | 1.2 | 0.12em | UPPER | Figure meta, index numerals, colophon |
| `--t-numeral` | `clamp(3.5rem, 7vw, 7.5rem)` — 56→120px | display | 0.9 | -0.02em | — | `NumberedSections` only |

Body reaches its 18px ceiling at roughly 1370px viewport and its 15px floor
below 375px. Nothing on the site uses a size outside this table.

### Measure and rhythm

| | |
|---|---|
| Body measure | `65ch`, in the 62–68 band |
| Deck measure | `50ch` — a deck that runs as wide as the body reads as a first paragraph |
| Display measure | `16ch` — forces the two-to-three-line break the register depends on |
| Paragraph spacing | `--space-4` (16px). No first-line indent, no blank-line-plus-indent mix |
| Heading spacing | Three steps above, one step below, so a heading belongs to what follows it |

### Typographic rules

- **Headings are set in the serif at size, not at weight.** Instrument Serif
  has one weight. Never synthesise a bold.
- **Metadata is always** `--face-text`, uppercase, tracked, `--ink-muted`.
  It is the only uppercase on the site.
- **Numerals in tables and figure rails** use
  `font-variant-numeric: tabular-nums` so columns align.
- **Italic** is Instrument Serif Italic, used for titles of works and for
  genuine emphasis. Never for whole paragraphs.
- No gradient text, no outlined or stroked text, no text-shadow, no animated
  split words, no per-letter reveal, no variable-font weight animation.
- `text-wrap: balance` on headings and decks; `text-wrap: pretty` on body.
- Hyphenation off. Widows and orphans are handled by measure, not by
  `&nbsp;` scattered through the copy.

---

## 3. Spacing

The scale is fixed and closed. Every margin, padding and gap on the site is
one of these eleven values.

```css
--space-1:   4px;    --space-7:   48px;
--space-2:   8px;    --space-8:   64px;
--space-3:   12px;   --space-9:   96px;
--space-4:   16px;   --space-10:  128px;
--space-5:   24px;   --space-11:  160px;
--space-6:   32px;
```

| Band | Values | Use |
|---|---|---|
| Intra-component | 4 · 8 · 12 · 16 | Label to value, caption to image, list items |
| Component | 24 · 32 · 48 | Between blocks inside a section |
| Section | 64 · 96 | Between sections |
| Page | 128 · 160 | Panel padding at desktop, space above the colophon |

No arbitrary values. No `calc()` that produces an off-scale number. Section
rhythm is the visible structure of the page, and it only reads as structure
if it repeats exactly.

---

## 4. Grid and layout

### Columns

| Breakpoint | Columns | Gutter | Canvas margin | Panel padding |
|---|---|---|---|---|
| `≥1200px` | **12** | 24px | 32px | 96px (`--space-9`) |
| `768–1199px` | **8** | 20px | 16px | 48px (`--space-7`) |
| `<768px` | **4** | 16px | 0 | 24px (`--space-5`) |

Maximum panel width 1440px, centred. Below 768px the panel goes full-bleed:
an 8px canvas frame at 375px is not a frame, it is lost width.

### Panel on canvas

```
┌─ canvas: --paper-deep ───────────────────────────┐
│   ┌─ panel: --paper, radius 8px ──────────────┐  │
│   │                                            │  │
│   │   content grid, 12 columns                 │  │
│   │                                            │  │
│   └────────────────────────────────────────────┘  │
│   ┌─ colophon: --dark, radius 0 ───────────────┐  │
└───┴────────────────────────────────────────────┴──┘
```

The canvas is neutral (`--paper-deep`), not photographic. A photographic
canvas is available in the register but not here: the five source photographs
are all of one person and none is a texture plate, so using one as a
site-wide ground would put her face behind every page.

### Placements

**Amended during the build.** A shared `.g-*` placement set was written first
and removed: nothing consumed it, and a documented grid that nothing uses is
worse than none. Each component declares the grid it needs, all on the same
column counts and the same `--gutter`:

| Component | 12-col | 8-col / 4-col |
|---|---|---|
| `.entry__grid` — a work entry | numeral 1–3, body 3–9, record 10–13 | single column |
| `.e-index__row` | index 1–3, body 3–10, meta 10–13 | single column |
| `.section` with a `.section__head` | head 1–4, body 4–12 | head above body |
| `.article` — the project page | title 1–10, record 1–7, prose 3–11 | single column |
| `.bio` | media 1–5, text 6–12 | single column |

### Asymmetry

The asymmetry is deliberate and consistent: **content sits right of centre on
the 12-column grid, with metadata in the left margin.** Headings begin at
column 3, not column 1. The empty columns 1–2 are the site's most visible
design decision and they are not to be filled with anything except margin
kickers and section numerals.

That asymmetry collapses at 8 columns and below. Below 1200px everything is
single-column, metadata stacks above its content, and the design is carried
by rules, space and type alone.

### Radius

| Element | Radius |
|---|---|
| Panel | 8px at ≥768px, 0 below |
| Everything else | **0** |

`--radius: 8px` exists as a token with exactly one consumer. Images, figures,
tables, buttons, inputs and metadata blocks all have square corners. Uniform
rounding on everything is the tell the register is defined against.

### Rules (the hairlines)

- `1px solid var(--line)` for structural division: between metadata rows,
  above the colophon, between index entries.
- `1px solid var(--line-soft)` inside a component only.
- Never a double rule. Never a rule that terminates mid-gutter without
  aligning to a column edge.
- Rules are `border-block-start` on the following element, never
  `border-block-end` on the preceding one, so a rule never appears after the
  last item in a list.

---

## 5. Components

Nine components. **Every instance of a component has the same shape: the same
slots, all filled.** Variation lives in content, never in structure. Each is
implemented as a Nunjucks macro with required parameters, so a missing slot is
a build-visible omission rather than a silently shorter card.

The rule for an empty slot: **you do not omit it.** Either the slot carries
real content, or the whole component is replaced by `QuietEmptyState`. There
is no third case.

---

### `SiteShell`

Page frame. One per page.

| Slot | Required | Content |
|---|---|---|
| `skipLink` | Yes | "Skip to content", first focusable element |
| `nav` | Yes | `EditorialNav` |
| `main` | Yes | `<main id="main">` |
| `colophon` | Yes | `<footer>`, `--dark` ground |

Landmarks: exactly one `<header>`, one `<nav>`, one `<main>`, one `<footer>`
per page. `<main>` is never nested inside another landmark.

---

### `EditorialNav`

| Slot | Required | Content |
|---|---|---|
| `wordmark` | Yes | **Nadia Sultan Rana**, `--t-h3`, display face. Plain text on `/`, a link to `/` elsewhere |
| `links` | Yes | The fixed nav set, `--t-meta` |

- A real `<nav>` containing a real `<ul>` of real `<a>` elements.
- Current page marked with `aria-current="page"`.
- **Amended during the build:** the `<details>`/`<summary>` disclosure
  specified here was dropped. There are four links, each a single short
  uppercase word; they wrap to two lines at 375px and cost nothing. A
  disclosure would have added a control, a state, and a fight with the UA
  stylesheet's closed-state hiding to save one line of height. The
  native-element rule is about not rebuilding native behaviour with divs — it
  is not a reason to add a widget that is not needed.
- No dropdowns, no mega-menu, no sticky behaviour, no scroll-hide.
- **No volume number, no issue number, no date line.** The masthead carries
  her name and the sections. That is all it carries.

---

### `EditorialHeading`

The page and section heading. The single most repeated component on the site,
so its shape matters most.

| Slot | Required | Content | Type |
|---|---|---|---|
| `kicker` | **Yes** | Real metadata: role, place, dates, or section name | `--t-meta`, `--ink-muted` |
| `title` | **Yes** | The heading | `--t-display` or `--t-h2` |
| `deck` | **Yes** | One sentence saying what this is | `--t-deck`, `--ink-secondary` |

**The kicker is never an invented identifier.** No `OBS.01`, no
`OBSERVATION / 06.26`, no `FIELD NOTE`, no volume, no issue. That labelling
belongs to an interior-design practice and reads as costume on an analyst's
site. Her real metadata is specific and is what a hiring manager came to
read:

```
DATA ANALYTICS INTERN · ARCHROMA · SUMMER 2026
STUDENT INVESTMENT ANALYST · STOCKTON, CA · JAN – MAY 2025
CASE STUDY · SPRING 2026
```

Heading order is enforced: one `<h1>` per page, `<h2>` for sections, `<h3>`
for entries. The kicker and deck are `<p>`, never headings, so they never
appear in the document outline.

---

### `MediaFigure`

**Not a Nunjucks macro — the `mediaFigure` async shortcode in `.eleventy.js`.**
Image generation is async, and `{% set x %}{% image %}{% endset %}` captures
synchronously: it silently yields an empty string. The first build of this
redesign shipped a hero figure with no image inside it for exactly that
reason. As a shortcode the slots are function arguments, and a missing one
throws and fails the build.

| Slot | Required | Content |
|---|---|---|
| `image` | Yes | Responsive `<picture>` from `@11ty/eleventy-img`, with `width`/`height` |
| `alt` | Yes | Real alternative text. Never the filename, never "image of" |
| `caption` | Yes | What this is, in a sentence, `--t-small`, `--ink-secondary` |
| `meta` | Yes | Place and date, `--t-meta-sm`, `--ink-muted`, above a `--line` rule |

A `<figure>` with a real `<figcaption>`. `alt` and `caption` do different
jobs and are never the same string.

If there is no caption — if nobody can say what the photograph is — the
photograph does not go on the page. A figure with an empty caption slot is
the failure this component exists to prevent.

Rendered at `wide` (columns 2–11), square corners, no border, no shadow, no
overlay, no text on top of the image.

---

### `RecordMetadata`

Label/value rows divided by thin rules. This is the component that fixes the
inconsistency identified in the redesign brief.

| Slot | Required | Content |
|---|---|---|
| `rows` | Yes | A fixed row set, defined per schema below |

Markup: `<dl>` with one `<div>` per row, `<dt>` label left, `<dd>` value
right, `1px solid var(--line)` above each row. Label `--t-meta`,
`--ink-muted`; value `--t-small`, `--ink`. Right-aligned values at ≥768px,
stacked below.

**The schema is fixed. Every record of a given type prints every row.**

#### Schema A — `WorkRecord` (five entries)

| Row | Archroma | Fraqt | Summer Conf. | Eberhardt | Northstar |
|---|---|---|---|---|---|
| **Role** | Data analytics intern, Commercial Excellence | *(Q-FRAQT)* | Operations analytics assistant | Student investment analyst | Co-founder |
| **Dates** | Summer 2026 | Pre-launch | May – Aug 2025 | Jan – May 2025 | Jan 2023 – Dec 2024 |
| **Tools** | Entity resolution · Reconciliation · Data dictionary · Human review · SAP · Power BI · Excel | Schema design · Corpus structuring | Data validation · SQL · Excel · SPSS · Power BI | Financial analysis · Valuation · Research documentation | Scoping · Analysis · Reporting |
| **Evidence** | 1,080 records routed to human review | 1,194 federal source passages structured | 3,000+ participants in the programme | $6M portfolio *(gated on the public-source check)* | Held — engagement and revenue figures not confirmed |

Two decisions this schema makes, both of which follow from the fixed-slot
rule:

- **Location is not in the schema.** `CONTENT.md` records it for two of five
  entries and states the choice directly: get the other three, or drop all
  five. Two of five reads as an oversight, and printing "Not on record" three
  times is worse. Stockton, CA stays in the prose of entries 03 and 04, where
  it is a fact about the role rather than a missing field.
- **Evidence is exactly one figure per entry.** Archroma has five figures on
  record; showing three there and one elsewhere is precisely the ragged shape
  the brief objects to. One headline figure each — for Archroma, the 1,080
  routed records, which `CONTENT.md` names as the strongest single item
  because it is the judgement call and not the volume. Archroma's other four
  figures live in its prose, where they already read well.

  Northstar's Evidence slot is filled, not empty: "Held — engagement and
  revenue figures not confirmed." `CONTENT.md` sanctions saying this on the
  page. It is the same shape as every other row and it is true.

#### Schema B — `ProjectRecord`

| Row | Diamond price drivers |
|---|---|
| **Period** | Spring 2026 |
| **Tools** | Excel · Regression · Data validation · Web scraping |
| **Data** | 918 stones, four retailers, collected 29 March 2026 |
| **Status** | Complete |

---

### `NumberedSections`

Large low-contrast numerals against section headings. Used for the Work list
and the diamond study's structure.

| Slot | Required | Content |
|---|---|---|
| `numeral` | Yes | Two digits, `01`–`nn`, zero-padded, `--t-numeral`, `--numeral` colour |
| `heading` | Yes | `--t-h2` or `--t-h3`, display face |
| `body` | Yes | The section content |

- A real `<ol>`. The numeral is decorative duplication of the list order, so
  it carries `aria-hidden="true"` and is never the only place the order
  exists.
- `--numeral` `#817D75` is 3.63:1 on `--paper` and legal only because the
  numeral is ≥56px. It must never be used below 24px.
- Numerals sit in the `margin` placement (columns 1–2) at ≥1200px, hanging
  left of the heading. Below 1200px they sit inline above the heading at a
  reduced size.

---

### `EditorialIndex`

The list of work entries or projects. **Not a card grid.** Rows divided by
hairlines, aligned to the column grid.

| Slot | Required | Content |
|---|---|---|
| `index` | Yes | `01`, `--t-meta-sm` |
| `title` | Yes | Linked, `--t-h3`, display face |
| `meta` | Yes | Real metadata — role, place, dates |
| `summary` | Yes | One sentence |

No thumbnails, no tags, no read-time, no "read more" chevron, no category
pill. The whole row is not a link — the title is the link, so the accessible
name is the title and nothing else.

---

### `QuietEmptyState`

What appears where a section exists structurally but has no content.

| Slot | Required | Content |
|---|---|---|
| `message` | Yes | Default: **"Content in preparation."** |

`--t-small`, `--ink-muted`, a `--line` rule above, one line, no illustration,
no icon, no call to action, no "coming soon", no animated ellipsis.

Distinct from the `[NEEDS CONTENT: …]` marker, which is a **build-time**
device for the authors and must stay obviously fake per `CLAUDE.md` rule 3.
`QuietEmptyState` is a **published** state for a section that is genuinely
and legitimately empty. If a section would be nothing but a
`QuietEmptyState`, remove the section — an empty section advertises absence.

---

### `PaperPanel` / `Canvas`

Layout primitives.

| Slot | Required | Content |
|---|---|---|
| `Canvas.ground` | Yes | `--paper-deep` (default) or `--dark` (colophon) |
| `Canvas.children` | Yes | One or more panels |
| `PaperPanel.children` | Yes | Grid content |

`PaperPanel` owns its padding and radius. It does not reach outside itself,
and nothing outside it sets its width with a descendant selector.

---

## 6. Images

### The problem, stated

Five photographs, four colour temperatures: green grass, blue lake, warm
sandstone, orange sunset. An ivory palette cannot absorb that range.
Ungraded, they read as a camera roll pasted into a design.

Four of five are phone exports at 1330–1536px wide. **None of them can fill a
1440px viewport at 2× device pixel ratio.** The layout must not ask them to.
Only `IMG_3857` (2912 × 5184 after orientation) has the pixels for a large
treatment.

`IMG_3857` is stored landscape with **EXIF orientation 8**. Any processing
that skips auto-orientation renders it on its side.

### The grade

One grade, with one documented exception. Rendered and inspected on the
three hardest cases — sandstone, green hillside, blue lake — before being
written here.

```js
sharp(source)
  .rotate()                                      // EXIF orientation FIRST
  .extract(crop)                                 // per-placement, below
  .modulate({ saturation: 0.60, brightness: 1.03 })
  .linear(0.92, 14)                              // lift blacks ~14/255, ease contrast
  .recomb([[1.04, 0, 0],                         // warm: +4% red
           [0,    1.00, 0],
           [0,    0,    0.93]])                  // −7% blue
  .jpeg({ quality: 84, mozjpeg: true })
```

`.rotate()` must precede `.extract()`, or the crop rectangle is applied to the
unrotated frame and lands in the wrong place.

Effect: saturated greens fall back to sage, blue sky goes to a warm neutral,
the sandstone resolves to something close to `--paper` itself.

**Exception: the studio headshot gets a gentler version.**

```js
.modulate({ saturation: 0.88, brightness: 1.02 })
.linear(0.96, 6)
.recomb([[1.015, 0, 0], [0, 1.0, 0], [0, 0, 0.975]])
```

This is a deliberate exception, not an inconsistency. The full grade exists to
reconcile four *outdoor* colour temperatures with an ivory palette. A studio
portrait on a warm neutral backdrop is already in that palette — its ground
measures close to `--paper-deep` unmodified. Rendered side by side, the full
grade desaturates skin to the point of looking unwell and lifts the blazer's
blacks into a muddy grey. The gentler version keeps the family resemblance
without damaging the two things the photograph is actually of.

The rule this follows: **the grade serves the palette, and the palette serves
the photograph.** Applying a correction to an image that does not need it is
not consistency, it is damage.

### Pipeline

Two stages, deliberately separated.

1. **Crop and grade once, offline, and commit the result** into
   `src/assets/img/` as graded derivatives at full crop resolution. A
   one-off Node script using `sharp` (already present under
   `@11ty/eleventy-img`), run by hand, not on every build.

   The crop is a design decision and belongs in the repository where it can
   be reviewed in a diff. Re-grading on every build would also make the
   output depend on a transitive dependency's version.

2. **Resize and format at build time** with `@11ty/eleventy-img` — already
   installed, currently unused, so this adds no dependency. Widths
   `[400, 640, 900, 1280]`, formats `['avif', 'webp', 'jpeg']`, output to
   `_site/assets/img/`, `<picture>` with explicit `width`/`height` on the
   `<img>` so nothing shifts on load.

   No width is generated above the source's own crop width. `eleventy-img`
   will not upscale by default; the widths array must not promise sizes the
   source cannot supply.

The originals stay in `pictures/`, which should be committed so the crops are
reproducible. `pictures/` is currently untracked.

### Per-placement crops

All rectangles are on the **orientation-corrected** frame and have been
rendered and visually checked.

| Placement | Source | Crop `{left, top, width, height}` | Result | Ratio |
|---|---|---|---|---|
| **Hero** | `IMG_3013.JPG` | `{0, 950, 1536, 1024}` | Sandstone walls fill the frame, figure centred, green foliage and sky removed | 3:2 |
| **About — portrait** | `nadia-headshot.jpg` | none — every pixel is needed | Studio headshot, dark blazer, warm neutral backdrop | 1:1 |
| **About — secondary** | `IMG_4273.JPG` | `{308, 614, 1228, 819}` | Second person fully removed; lake and golden hills behind | 3:2 |

**The portrait is a 400 × 400 export** — a LinkedIn profile crop, and the
smallest source on the site. `.figure--portrait` caps the figure at its native
400px so it is never upscaled at any breakpoint. That matters most between
768 and 1199px, where the bio is a single column and an uncapped figure would
stretch past 1000px from a 400px file.

The cap is asserted, not assumed: verification measures every rendered image
against its own `naturalWidth` at 375 and 1440 and fails on any upscale.

A higher-resolution original would allow a larger portrait. Worth asking for.

**On `IMG_4273`:** cropping the left edge alone is not sufficient. The second
person's arm occupies roughly the left 16% of the frame, but their knee
extends to about 33% at the bottom. The rectangle above is a horizontal band
that clears both, verified by rendering it. It removes the second person
entirely — not partially, not blurred.

### Images that do not survive their crop

Per the brief: leave the slot out rather than force it.

| Source | Assigned placement | Verdict |
|---|---|---|
| `IMG_3857.JPG` | About — portrait (former) | **Comes off.** It was the stand-in for the missing headshot. The headshot now exists, and keeping both a studio portrait and a full-figure portrait of the same person is a gallery, not a composition. It remains the highest-resolution source in the set if a large image is ever needed |
| `background.jpg` | none | **Never use.** A stock-looking coastline with no relationship to her or the work, and a saturated cyan that fights the ivory. Stays in `pictures/`, unused |
| `IMG_3898.JPG` | About — secondary | **Leave out.** Compositionally busy — tangled bare branches across the upper two-thirds — and no crop resolves that without losing the subject. The grade handles the blue cast well, but at 1330px wide it cannot carry a `wide` placement, and the clothing is loungewear where the other frames are not |
| `IMG_4353.JPG` | Optional | **Leave out.** The sunset sky is a saturated orange-to-blue ramp that is the single furthest thing from the palette in the set. The grade reduces it but cannot reconcile it. Cropping the sky out removes the reason the photograph exists |

Result: **three images on the site**, one per placement, each at a placement
its resolution can carry — a studio portrait, a hero, and one environmental
frame. Three graded photographs that agree with each other is the register.
Seven that do not is a camera roll.

### Alt text

Every image carries real alternative text describing the photograph, written
per image, never the filename, never "image of", never duplicated from the
caption. Decorative images do not exist on this site; if an image is
decorative it is removed instead.

### Bans

No stock photography. No generated imagery. No decorative background images.
No image used as a section background with text over it. No parallax. No
Ken Burns. No overlay tint to force cohesion — the grade does that work in
the file, where it can be inspected.

---

## 7. Responsive rules

| | `<768px` | `768–1199px` | `≥1200px` |
|---|---|---|---|
| Columns | 4 | 8 | 12 |
| Panel | Full-bleed, radius 0 | Inset 16px, radius 8px | Inset 32px, radius 8px |
| Panel padding | 24px | 48px | 96px |
| Nav | `<details>` disclosure | Inline row | Inline row |
| Asymmetry | None — single column | None — single column | Content at columns 3–11, margin at 1–2 |
| Metadata | Stacked above content | Stacked above content | Left margin or right aside |
| `RecordMetadata` | Label above value | Label left, value right | Label left, value right |
| Display type | 48px | ~64–80px | up to 100px |
| Images | `full` | `wide` | `wide` |
| Section spacing | 64px | 96px | 96px |

Two breakpoints, both set where the layout actually breaks rather than at
device names. No orientation queries, no device-specific CSS, no
`user-scalable=no`, no fixed heights that assume a viewport.

Testing widths: **375px** and **1440px** are the two that must be screenshotted;
768px and 1199px are the two where the rules change and must be checked for
overflow.

---

## 8. Motion

**Amended during the build: one motion, and no JavaScript.**

The site has exactly one motion: a link underline changes colour on hover,
160ms.

The image reveal originally specified here is gone, and `reveal.js` with it.
Verification found it had **zero targets** in the built site — it shipped 70
lines of JavaScript, a network request and a whole class of failure (content
left permanently hidden when the observer never fires) to animate nothing.

The site now ships **no JavaScript at all**. That is a stronger guarantee
than "works with JavaScript disabled", and it is asserted on every build:
`tools/verify.mjs` fails if any `<script>` tag other than the JSON-LD block,
any inline event-handler attribute, or any `.js` file reaches `_site`.

Under `prefers-reduced-motion: reduce` the one transition is disabled — not
slowed. Verified by measurement: zero elements on the page report a non-zero
`transition-duration` or `animation-duration`, and `document.getAnimations()`
returns empty.

Still banned: scroll-jacking, scroll-linked animation, parallax, page
transitions, loading skeletons, entrance animation on text, staggered reveals,
smooth-scroll overrides.

## 9. Accessibility floor

Non-negotiable. Verified by assertion, not by screenshot.

- **Native elements first.** `<nav>` with a real list. `<details>`/`<summary>`
  for the mobile menu. `<dialog>` if a modal is ever needed. Real `<label>`
  elements, never placeholder-as-label. Most accessibility bugs come from
  replacing a native element with a div.
- **Focus is always visible.** Never `outline: none` and never
  `outline: 0`. The ring is `2px solid var(--focus)` at
  `outline-offset: 3px`, measuring 15.56:1 on paper and 13.20:1 on dark.
  Tab through every route with the mouse untouched.
- **Heading order is strictly nested.** One `<h1>` per page, no skipped
  levels. Kickers and decks are `<p>`.
- **Landmarks:** one each of `header`, `nav`, `main`, `footer`.
- **Accessible names** on every link and button. No bare "Read more", no
  icon-only control without a label, no whole-row link that reads out an
  entire paragraph.
- **Alt text** on every image, written per image.
- **Colour is never the only signal.**
- **No horizontal overflow** at any width from 320px up.
- **Text zoom to 200%** without loss of content or function.
- **Works with JavaScript disabled.** Every route, every image, every
  control. The site is readable and navigable with the one JS file removed.

---

## 10. Banned

Explicit. If it appears in a review, it is a defect, not a preference.

**Colour**
`#FFFFFF` · `#000000` · gradients of any kind · glassmorphism ·
`backdrop-filter` · coloured shadows · neon or saturated accents ·
dark-mode-as-default · `--line` or `--line-soft` used as text colour ·
any colour not in §1

**Type**
More than two families · gradient text · outlined or stroked text ·
`text-shadow` · animated split words or per-letter reveals · variable-weight
animation · all-caps body copy · justified text · any size not in the §2
scale · synthesised bold on Instrument Serif

**Layout**
Card grids · uniform rounded corners on everything · radius above 8px ·
box shadows for elevation · borders on every element · centred everything ·
full-viewport hero sections · sticky headers · floating action buttons ·
`!important` · global selectors reaching into components

**Register — the SaaS/agency tells**
Feature grids with icons · three-up value propositions · logo walls ·
testimonial carousels · stat counters that animate up · "Trusted by" ·
pricing tables · newsletter popups · cookie banners that are not required ·
chat widgets · badges and pills · progress or skill bars · emoji as UI ·
"Let's build something together" CTAs

**Borrowed conceit**
`OBS.01` · `OBSERVATION / 06.26` · volume and issue numbers · "Field Notes"
as a brand · seedling/budding/evergreen · "Planted"/"Tended" · keyword
tickers or marquees · any invented taxonomy that implies a body of work that
does not exist

**Content** *(these restate `CLAUDE.md` and are repeated because they are
design-adjacent)*
Lorem ipsum · plausible filler copy · invented dates, metrics, clients,
testimonials, tags, categories or reading times · stock photography ·
generated imagery · decorative background images · placeholder social icons
linking nowhere · a number that is not in `CONTENT.md`

**Motion**
More than three motions · scroll-jacking · scroll-linked animation ·
parallax · page transitions · loading skeletons · entrance animation on text
· any motion that does not fully stop under `prefers-reduced-motion`

**Build**
Any new runtime dependency · any client framework · any CSS framework ·
anything shipped to the browser from `node_modules`

---

## 11. Build record

All four blockers listed here before the build are closed.

1. **Fonts supplied.** Instrument Serif (3 WOFF2, 55KB) and Instrument Sans
   (2 variable WOFF2, 41KB), self-hosted from Google Fonts under the SIL OFL,
   `font-display: swap`. Total 96KB, down from 311KB for Clash Display and
   Newsreader.
2. **`nadia2.jpg` does not exist.** `IMG_3857` carries the About portrait, as
   approved. A studio headshot is still the open item.
3. **`--ink-muted` corrected** to `#67645E` (5.22:1). `#817D75` retained as
   `--numeral`; a build assertion fails if it is used more than once or
   anywhere but `.entry__numeral`.
4. **`--ink-muted-inverse` `#B0ABA2` added** (6.53:1 on `--dark`).

### Amendments made during the build

Each of these changed the spec rather than the other way round, and each is
marked in place above.

| Amended | Why |
|---|---|
| Nav disclosure dropped | Four short links wrap fine at 375px; a disclosure added state and a UA-stylesheet fight to save one line |
| `.g-*` placement set removed | Nothing consumed it. Components own their grids |
| MediaFigure is a shortcode, not a macro | `{% set %}` captures synchronously and silently swallowed the hero image |
| Motion: three → one | The image reveal had zero targets. `reveal.js` deleted; the site ships no JavaScript |
| Section head/body grid added | Content hugged the left with ~40% of the panel dead at 1440 |

### Verification

`node tools/verify.mjs` asserts the rules in this document against the built
output: landmark counts, heading order, alt text, accessible names, internal
link and `srcset` targets, duplicate ids, banned register tokens, the closed
spacing scale, the two-family limit, font files declared vs shipped, every
colour coming from a token, no `!important`, no removed focus outline, the
`--numeral` size guard, the absence of any JavaScript, the five work entries
having identical slot counts, and the figures CONTENT.md permits and forbids.

It fails the build on any violation. Browser-side checks — contrast computed
from rendered pixels, horizontal overflow, focus rings, reduced motion,
JavaScript disabled — are run with Playwright against the production output.

---

*`DESIGN.md` is superseded by this document and has been deleted. The
references in `CLAUDE.md` and `README.md` point here.*
