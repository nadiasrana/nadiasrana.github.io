# CONTENT_AUDIT.md

Audit of the repository as it stands at commit `1e19c43`, taken before any
redesign work. Nothing in the tree has been modified to produce this document.

`CONTENT.md` is treated as the authority throughout. Where this audit or the
redesign brief disagrees with it, the conflict is recorded in
[Conflicts to resolve](#conflicts-to-resolve) rather than settled here.

---

## Headline findings

Five things emerged that change the shape of the redesign. They are stated
here because each one is a decision, not a task.

1. **The strongest verified content on the site is no longer on the site.**
   The five Work entries — Archroma, Fraqt, Summer Conference, Eberhardt,
   Northstar, with their figures, tools and dates — were removed in the
   "Rebuild as Field Notes" commit. They survive only in git history at
   `c80a500:index.html`. What remains is a six-line timeline on `/about/`
   with no figures and no tools. Every fact in those entries is verified in
   `CONTENT.md`, and they are the site's entire evidence base outside the
   diamond study.

2. **The redesign brief describes the previous site, not this one.** The
   brief's criticism — "five work entries each fill a different subset of
   location, dates, role, and figures" — is accurate, but it describes
   `c80a500`. The critique is correct and worth acting on; it just applies to
   content that has to be restored before it can be fixed.

3. **`nadia2.jpg` does not exist.** `pictures/` contains five files, not six.
   There is no studio headshot anywhere in the repository. `CONTENT.md`
   agrees — Q-PHOTO records the portrait slot as empty. The About portrait
   placement in the brief has no source file.

4. **One supplied token fails WCAG AA.** `--ink-muted` `#817D75` measures
   3.63:1 on `--paper`. Metadata at 10–12px is normal-size text and needs
   4.5:1. Measurements and a proposed replacement are in `DESIGN_SYSTEM.md`.

5. **Neither new typeface is in the repository.** Instrument Serif is not
   present, and there is no sans-serif of any kind in `src/assets/fonts/` —
   the current site is a display serif plus a reading serif. Two font
   families have to be supplied before the build can proceed.

---

## Real content to keep

Everything below is verified in `CONTENT.md` and is already written. It is
the whole of the site's substance.

### Pages

| Route | Source | Keep | Note |
|---|---|---|---|
| `/` | `src/index.njk` | Structure only | Copy is real; the journal scaffolding around it is not |
| `/about/` | `src/about.njk` | Yes | The densest real page on the site |
| `/projects/` | `src/projects/index.njk` | Yes, reframed | Becomes a single-entry index |
| `/projects/diamond-price-drivers/` | markdown | Yes, intact | The one finished, inspectable project |
| `/404.html` | `src/404.njk` | Yes | Links need repointing once sections are cut |
| `/sitemap.xml`, `/robots.txt` | njk | Yes | Mechanical |

### Text blocks that are hers and verified

**Home — hero and "What I do".** The role line, the lead, the positioning
paragraph, and the four-figure rail (1,080 / 1,194 / 203 / 3,000+). Every
figure traces to the attribution table in `CONTENT.md`, which records that
table as closed.

**Home — "Now".** Two of four rows are real: *Studying* (M.S. Data Analytics
Engineering, Northeastern, 2026–2027) and *Looking for* (full-time analytics
roles). Two are `[NEEDS CONTENT]`.

**About — "The record".** Six of eight rows are real and verified: Studied
(Pacific, Aug 2022 – Dec 2025, the confirmed end date), Now (Northeastern,
Jan 2026 – May 2027), Languages, Honors, Service (Delta Sigma Pi), Research
(Carlson Lab — see conflicts). *From* and *Based* are placeholders.

**About — "Selected milestones".** Six rows, all real, all dated, all
traceable. This is the only place the employment history currently survives.

**About — "How I work".** Four principles, each written from a specific
decision she actually made — the human-review routing, the relaxed
confidence interval, rubrics before scoring, reasoning attached to numbers.
This is the best prose on the site and none of it is invented.

**About — "Toolkit".** All five groups, all seventeen entries with their
Daily / Comfortable / Exposure levels, exactly as `CONTENT.md` sets them.

**Contact.** `nadiasrana@gmail.com`, in the hero, the About page and the
footer.

### The diamond study — keep entirely

`src/projects/entries/diamond-price-drivers.md`. Question, data, retailer
table (918 stones across four named retailers), method, the two-group
findings table with `n` on every row, the retailer spread, the Rapaport
benchmark, and all three limitations. `CONTENT.md` closed Q-R2 against the
source workbook and records the retailer names as cleared for publication.

The limitations section is the reason this page exists. It carries one live
`[NEEDS CONTENT]` — "What I would do differently" — which `CONTENT.md`
confirms is not inferable.

### The five Work entries — recover from git

Verified, currently absent, recoverable verbatim from
`git show c80a500:index.html`.

| # | Entry | Dates | Evidence on record |
|---|---|---|---|
| 01 | Archroma, Data analytics intern, Commercial Excellence | Summer 2026 | 3 systems reconciled · 1,080 records routed to human review · 203-field dictionary · 31-item defect log · 40-point release audit |
| 02 | Fraqt | Pre-launch | 1,194 federal source passages structured |
| 03 | Summer Conference, University of the Pacific | May – Aug 2025 | Programme serving 3,000+ participants |
| 04 | Eberhardt Student Investment Fund | Jan – May 2025 | S&P 500 equity research; portfolio ~$6M *(gated)* |
| 05 | Northstar Insight Group, co-founder | Jan 2023 – Dec 2024 | Figures held pending Q1 |

### Images

Five files in `pictures/`, all real photographs of her, none stock. The
directory is **untracked** — it has never been committed.

| File | Native | Displayed | Content — verified by inspection |
|---|---|---|---|
| `IMG_3013.JPG` | 1536 × 2734 | 9:16 | Sandstone canyon, back turned. Matches the brief |
| `IMG_3857.JPG` | 5184 × 2912, **EXIF orientation 8** | 2912 × 5184, 9:16 | Green hillside, standing, **facing camera** |
| `IMG_3898.JPG` | 1330 × 2364 | 9:16 | Seated above a lake, back turned. Matches the brief |
| `IMG_4273.JPG` | 1536 × 2048 | **3:4** | Stone wall by a lake. Another person's arm *and leg* in frame at left |
| `IMG_4353.JPG` | 1536 × 2048 | **3:4** | Beach at sunset. Matches the brief |

Three corrections to the brief's description of this set:

- They are not all 9:16. `IMG_4273` and `IMG_4353` are 3:4.
- `IMG_3857` is stored landscape with an EXIF rotation flag. Any processing
  that skips auto-orientation renders it sideways. `@11ty/eleventy-img` v7
  calls `sharp.rotate()` when it detects a rotation flag, so the plugin path
  is safe; a hand-rolled `sharp` script is not unless `.rotate()` is called
  first.
- On `IMG_4273`, cropping the left edge alone is not enough. The second
  person's arm occupies roughly the left 16%, but their knee extends to about
  33% at the bottom of the frame. A horizontal band crop clears both; the
  exact rectangle is specified in `DESIGN_SYSTEM.md` and has been rendered
  and checked.

Resolution matters here. Four of the five are phone exports at 1330–1536px
wide. None can fill a 1440px viewport at 2× device pixel ratio. Only
`IMG_3857` has the pixels for a large treatment.

### Links

Three real, outbound-capable links exist on the whole site: the `mailto:`
(three occurrences) and `/feed.xml`. Everything else is internal. There is
no LinkedIn URL, no résumé, and no social account on file.

---

## Content to remove

### Placeholder entries — delete the files

| Path | Count | Why |
|---|---|---|
| `src/writing/posts/2026-08-20-specimen.md` | 1 | A type specimen that says so in its own first paragraph. `CONTENT.md` marks it ⛔ delete before launch |
| `src/writing/posts/2026-03-05-*`, `2026-04-28-*`, `2026-06-02-*`, `2026-07-14-*` | 4 | TKTK titles, `[NEEDS CONTENT]` decks and bodies. The descriptions are briefs, not copy |
| `src/notes/entries/*.md` | 3 | TKTK titles, one-line `[NEEDS CONTENT]` bodies |
| `src/_data/library.js` | 15 entries | Thirteen TKTK titles; the two real ones (Excel, Power BI) carry unwritten notes |
| `src/writing/index.njk`, `src/notes/index.njk`, `src/library/index.njk` | 3 | Indexes over content that is being deleted |
| `src/writing/posts/posts.json`, `src/notes/entries/entries.json` | 2 | Directory data files for removed collections |
| `src/_includes/layouts/article.njk`, `note.njk` | 2 | Layouts with no remaining consumers |

That is **11 of 21 built routes** removed, plus `/feed.xml`.

### Placeholder project shells — delete

`src/projects/entries/rubric-audit.md` and `validation-workbook.md`. Both
open with "**Not started.**" and contain nothing but `[NEEDS CONTENT]`
markers. `CONTENT.md` lists them as ideas, not work. `/projects/` becomes a
one-entry index.

### Navigation

Cut Writing, Notes and Library from `site.nav`. Cut the Library and Notes
links from the footer's "Elsewhere" column.

### Editorial costume — remove with the journal

The brief bans observation-log labelling (`OBS.01`, `OBSERVATION / 06.26`) as
borrowed conceit. The site carries the same move in a different costume, and
it should go for the same reason:

- **"Field Notes — Vol. 01 / 2026"** in the masthead, and `site.brand`,
  `site.issue`. A volume number implies back issues. There will be none.
- **The ticker.** A marquee of eight keywords, `aria-hidden`, decorative.
- **"The feature" / "Contents" / "The archive"** — magazine furniture over
  four unwritten posts.
- **Seedling / budding / evergreen**, and **"Planted" / "Tended"** date
  labels. Digital-garden vocabulary belonging to the notes being deleted.
- **"The feed"** callout and the Atom feed. The feed is configured over the
  `writing` collection; with that collection gone it would serve an empty
  document.
- **Reading times.** Computed from real content, so not invented — but the
  brief bans them and there is nothing left to time.

### Unsupported by CONTENT.md

- **Carlson Lab** research row on `/about/`. Not in `CONTENT.md`'s verified
  background list. `CLAUDE.md` rule 4 prohibits unpublished lab data. The
  row is phrased generally ("multi-trial experimental data, using
  bioinformatics tools") and may well be fine — but it is not on the
  verified list, so it needs confirmation rather than assumption.
- **"Raleigh–Durham–Chapel Hill area"** inside the `/about/` placeholder.
  `CONTENT.md` open question 6 records the location wording as undecided.
  It is currently inside a `[NEEDS CONTENT]` marker, so it is visibly
  provisional, and it should stay that way until confirmed.

### Decorative

The generated SVG "Plate" on the home page — a deterministic scatter with
`aria-label` text describing a resolution rule. It is drawn in code, not
stock, so it does not break the imagery ban. But the brief bans decorative
backgrounds, and a chart with "no data source" in its own caption argues
against the site's central claim that numbers come with their reasoning
attached. Recommend removing it.

---

## Empty content areas

What cannot be filled from anything in the repository. Each needs a decision
or a supplied fact.

### Blocks a page

| Gap | Where | What is needed |
|---|---|---|
| **First-person biography** | `/about/`, the one thing that cannot be assembled from the record | Three or four sentences in her words: biology to analytics, what she is like to work with |
| **Studio headshot** | About portrait placement | `nadia2.jpg` as described in the brief. Not in the repo |
| **Instrument Serif + a neutral sans** | Every page | Two WOFF2 families, self-hosted. Neither is present |

### Leaves a visible gap

| Gap | Where | Status in `CONTENT.md` |
|---|---|---|
| Résumé PDF | Hero, About contact | Open #1. Held on Q1–Q5 |
| LinkedIn URL | About contact, footer | Open #6. Only a PDF export on file |
| Location wording | About, footer | Open #6 |
| "What I would do differently" | Diamond study | Explicitly not inferable |
| Fraqt title and dates | Work entry 02 | Q-FRAQT |
| Eberhardt $6M public confirmation | Work entry 04 | Open #3. Gates launch |
| SQL level / what the Pacific query logic was | Toolkit | Q-SQL, half open |
| Locations for Archroma, Fraqt, Northstar | Work entries | Two of five have them |
| Where she is from | About | Nothing on file |
| "Building" and "Reading" | Home "Now" | Not on file |

### Not a gap — a decision

- **Education section.** `CONTENT.md` flags that the rebuilt home page has
  none, and that Pacific appears nowhere outside the About paragraph. It
  calls this "a gap worth a decision, not an oversight to fix silently."
- **A second project.** `CONTENT.md` holds the custom domain until one
  lands. One project reads as a coursework page.
- **Phone number.** On the résumé. `CONTENT.md` default is: no.

---

## Current technical stack

| | |
|---|---|
| **Framework** | Eleventy 3.1.6, ESM config, Nunjucks for both markdown and HTML |
| **Package manager** | npm. `package-lock.json` committed; CI uses `npm ci` |
| **Dependencies** | Six, all `devDependencies`. Nothing ships to the browser from `node_modules` |
| | `@11ty/eleventy` · `@11ty/eleventy-img` 7.0.0 · `@11ty/eleventy-plugin-rss` · `@11ty/eleventy-plugin-syntaxhighlight` · `markdown-it-anchor` · `markdown-it-footnote` |
| **Styling** | One hand-written stylesheet, `src/assets/css/styles.css`, 1,514 lines, passed through unprocessed. No CSS build, no framework |
| **Fonts** | Self-hosted variable WOFF2. Clash Display (display) and Newsreader (body, three subsets incl. italic). Two families, both serif or display — **no sans is present** |
| **JavaScript** | One file, 70 lines: copy-link buttons and an IntersectionObserver image reveal. Both degrade to nothing. The reveal bails out early under `prefers-reduced-motion` and carries a 4-second failsafe so nothing stays hidden |
| **Content system** | Markdown with YAML front matter in three collections (`writing`, `notes`, `projects`), plus `src/_data/library.js` as data. Eleven custom filters |
| **Images** | `@11ty/eleventy-img` is **installed but never imported**. `src/assets/` is passthrough-copied verbatim. `src/assets/img/` contains only a README |
| **Deployment** | GitHub Actions → GitHub Pages. Triggers on `main` and `master`. Node 22, `npm ci`, `npm run build`, upload `_site` |
| **Build** | Clean. 21 files in 0.80s, no warnings |

Two gaps against `CLAUDE.md`:

- **No `CNAME` file** anywhere in the repo. `CLAUDE.md` requires one in the
  root containing `nadiasrana.com`. As it stands the Pages deploy will not
  serve the custom domain. (For Eleventy it belongs in `src/` or the
  passthrough set, so it lands in `_site/`.)
- **`pictures/` is untracked.** Not ignored — never added. The photographs
  exist only on this machine.

`site.draft` is `true`, which drives `noindex` on every page, the draft
banner, and `Disallow: /` in `robots.txt`. One flag, correctly wired.

---

## Proposed changes

### Redesign

- **Rewrite `DESIGN.md`.** The brief supersedes it on palette, typography,
  motion and layout, and `CLAUDE.md` points at it as binding. Two conflicting
  documents is the worse outcome. Replace it with `DESIGN_SYSTEM.md` and
  leave `DESIGN.md` as a one-line pointer, or delete it and update the two
  references in `CLAUDE.md` and `README.md`.
- **Rebuild the stylesheet** around the new tokens, type scale and grid.
  Some of the current CSS survives as structure; none of the token block does.
- **Replace both typefaces.** Instrument Serif for headings, a neutral sans
  for everything else. Clash Display and Newsreader are removed, along with
  their four WOFF2 files and the two `<link rel=preload>` tags.
- **Build the nine components** in `DESIGN_SYSTEM.md` as Nunjucks macros with
  fixed slots, so a slot cannot be silently omitted at a call site.

### Remove

Everything in [Content to remove](#content-to-remove): 9 markdown files,
3 index pages, 2 layouts, 2 directory data files, 1 data file, 15 library
entries, 3 nav items, 2 footer links, the RSS plugin registration and
`/feed.xml`, the ticker, the SVG plate, and the volume/issue branding.

Net: 21 built routes down to 8, and one dependency
(`@11ty/eleventy-plugin-rss`) becomes unused. Removing it is optional —
leaving it installed costs nothing at runtime, and the brief's constraint is
on *adding* dependencies.

### Preserve

- Every figure in the `CONTENT.md` attribution table, with its attribution.
- The diamond study in full, including all three limitations.
- The About record, milestones, principles and toolkit.
- Every `[NEEDS CONTENT]` and `TKTK` marker for gaps that remain gaps. They
  are the mechanism that stops placeholder copy reaching production, and
  `CLAUDE.md` rule 3 requires them to stay obviously fake.
- The `site.draft` gate, the skip link, and the no-JS guarantee.
- The Eleventy config's collections and filters that still have consumers.

### Reuse

- **`@11ty/eleventy-img`** — already installed, never wired up. Satisfies the
  brief's "process them through Eleventy's image handling" with no new
  dependency.
- **The `figure` macro's placeholder behaviour** — renders a marked box when
  no source is supplied, so a missing photograph is visible rather than
  silent. That is exactly the `QuietEmptyState` the brief asks for; it needs
  restyling, not rewriting.
- **`reveal.js`** — its reduced-motion bail-out and 4-second failsafe are
  already correct. If any motion survives the redesign, this is the pattern.
- **The `catalog` dl pattern** on About — label/value rows already. It is
  `RecordMetadata` under another name.

### Restore

Recover the five Work entries from `c80a500:index.html` and rebuild them on
the fixed-slot `RecordMetadata` shape, which is what fixes the inconsistency
the brief identified. The proposed slot schema and how it resolves each
entry's missing values is in `DESIGN_SYSTEM.md` under `RecordMetadata`.

### Proposed route map

| Route | Status |
|---|---|
| `/` | Rebuilt — hero, positioning, work, selected project, contact |
| `/work/` *(or Work as a home-page section)* | New — the five restored entries |
| `/about/` | Rebuilt on the new components |
| `/projects/` | Kept, one entry |
| `/projects/diamond-price-drivers/` | Kept, content untouched |
| `/404.html` | Kept, links repointed |
| `/sitemap.xml`, `/robots.txt` | Kept |
| `/writing/`, `/notes/`, `/library/`, `/feed.xml`, 8 entry pages | Removed |

Whether Work is its own route or a home-page section is a decision worth
making explicitly: with five entries and no other long-form content, a
separate `/work/` page may leave the home page thin.

---

## Conflicts to resolve

Raised rather than settled, per the brief's authority rule. Each needs a
one-line answer before Step 2.

1. **`nadia2.jpg` is missing.** The brief specifies it as the About portrait;
   `pictures/` does not contain it and `CONTENT.md` Q-PHOTO records that no
   headshot is on file. The two sources agree that it does not exist.
   *Options:* supply the file; or use `IMG_3857`, the only frame where she
   faces the camera in presentable clothing, as the portrait; or leave the
   portrait slot out under a quiet empty state.
   *Recommendation:* `IMG_3857` as portrait — it is also the only image with
   enough resolution for a large treatment — and revisit when a headshot
   exists.

2. **`--ink-muted` fails AA.** `#817D75` is 3.63:1 on `--paper`, below the
   4.5:1 needed for 10–12px metadata. Proposed replacement `#67645E` at
   5.22:1, with the original value retained as a large-numeral-only token
   where 3:1 applies. Full measurements in `DESIGN_SYSTEM.md`.

3. **No token for text on `--dark`.** `--ink-muted` is 3.64:1 there and
   `--line` is banned as text. A `--ink-muted-inverse` is needed, or the dark
   ground carries no metadata. Proposed value and ratio in
   `DESIGN_SYSTEM.md`.

4. **Neither typeface is available.** Instrument Serif and a neutral sans
   both need to be obtained and self-hosted. This blocks the build, not the
   design. Naming the sans is also an open choice — a recommendation is in
   `DESIGN_SYSTEM.md`.

5. **Cutting Writing leaves the site's identity pointing at nothing.** The
   brand, masthead, tagline, favicon and feed are all built on "Field Notes,
   Vol. 01". Removing the journal is right — an empty section advertises
   absence — but the journal *is* the current identity. The site needs to
   become a portfolio under her own name. Confirm that is the intent.

6. **Carlson Lab.** On `/about/` but not on `CONTENT.md`'s verified list.
   Keep, or drop pending confirmation?

7. **`CONTENT.md`'s page table is stale.** It describes Home as carrying
   "Hero, About, Work (5 entries), Projects, Stack, Contact" — the
   pre-rebuild page. Worth updating once the redesign lands, so the authority
   document keeps matching the site.

8. **No `CNAME`, and `pictures/` is untracked.** Neither is a redesign
   question, but both will bite at deploy. Flagging now.
