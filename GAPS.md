# GAPS.md

Every incomplete thing on the site, inventoried at commit `fddbac4`.
**Nothing was changed to produce this document.**

Sorted by: blocks launch first, then by who can answer, so everything Nadia
owns is in one block.

---

## Status, 13 Sep 2026 — three items closed since this was written

Recorded here rather than deleted, so this file does not drift the way
`CONTENT.md` did.

| Item | Status |
|---|---|
| **Y1** Fraqt missing from the About timeline | ✅ **Closed.** Added as a Summer 2026 row, before Archroma, carrying the same "pre-launch: unregistered, and with no users" label the work entry uses. All five work entries now appear on both pages |
| **Y2** Four stale passages in `CONTENT.md` | ✅ **Closed.** All four reconciled. The false education note is quoted in a blockquote for the record rather than deleted. **This class of error is now machine-checked** — see the new *Site contract* section in `CONTENT.md`, parsed and asserted by `tools/verify.mjs` on every run |
| **Y3** Dangling `03-open-questions.md` reference | ✅ **Closed.** That file lives in a separate workspace and is unreachable from this repo. The résumé hold is now explicitly defined by the six-item list in `CONTENT.md` and depends on no external file |
| **§3** LinkedIn URL unverified by me | ✅ **Confirmed valid** from her profile export. No action |

Everything else in this document stands as written. The four dashed blocks are
deliberately untouched — they are honest gaps waiting on Nadia, and closing
them with anything would be invention.

**Scope of the scan.** All of `src/`, `tools/`, `.eleventy.js` and the built
`_site/` were searched for `[NEEDS CONTENT]`, `TKTK`, `TODO`, `FIXME`, `XXX`,
`Lorem`, `DRAFT`, `VERIFY`, `BLOCKED`; the marker and empty-state classes;
every content-gating flag; every `<img>` alt; every `<a href>` including
fragments and asset paths; every section's real-text volume; every figure in
the markup traced back to `CONTENT.md`; and `CONTENT.md`'s verified list
checked in the reverse direction against the built pages.

---

## Summary

| | Count |
|---|---|
| Gaps blocking launch | **6** |
| Gaps not blocking launch | 8 |
| Answerable by **Nadia only** | 5 |
| Answerable by **you** | 4 |
| Answerable by **me**, from files already here | 5 |

**Clean, with evidence:**

- **0** untraced figures. All 64 distinct numbers in the page bodies trace to
  `CONTENT.md`. (One apparent miss, `$2,227,`, is a trailing comma on a
  traced figure.)
- **0** dead links, dead fragments, dead routes, or `href="#"`.
- **0** images with empty, generic, or filename alt text — 3 of 3 descriptive.
- **0** `TKTK`, `TODO`, `FIXME`, `XXX`, `Lorem`, or lorem ipsum anywhere.
- **0** `.needs-content`, `.missing-slot`, `.empty-state`, or
  `.record__value--absent` rendered — no component is missing a slot and no
  record row is empty.
- **0** HTML comments shipped to the browser. No debug output.
- **0** items from `CONTENT.md`'s verified list missing from the site
  (53 checked — see §3, which is where the last audit found the Work entries
  had been silently dropped).

---

## Blocks launch

Six items. The first four are dashed `[…]` blocks a visitor can read right
now; `CLAUDE.md` rule 3 is that placeholder content must never reach
production, so each one is a hard gate on flipping `site.draft`.

---

### L1 · What she would do differently

| | |
|---|---|
| **Where** | [diamond-price-drivers.md:173](src/projects/entries/diamond-price-drivers.md#L173) → `/projects/diamond-price-drivers/`, final section "What I would do differently" |
| **Renders now** | `[NEEDS CONTENT: her answer. Not in the source and not inferable from the findings. The obvious guesses (widen the carat band, collect enough D/VVS1 to build the interval as planned, separate cut from color and clarity) are guesses.]` |
| **Needs** | *With hindsight, what would you change about how you ran the diamond study?* Two or three sentences. The section has a heading and nothing under it. |
| **Who** | **Nadia only.** Not in the source workbook and not inferable — the plausible guesses are listed in the marker precisely so nobody writes them in. |
| **Blocks launch** | **Yes** |

This is the last marker on the strongest page on the site, and the only thing
between that page and finished.

---

### L2 · Her sign-off on the About paragraph

| | |
|---|---|
| **Where** | [about.njk:37](src/about.njk#L37) is the paragraph, [about.njk:45](src/about.njk#L45) is the marker → `/about/`, opening biography block |
| **Renders now** | The paragraph itself renders in full and reads correctly. Directly beneath it: `[DRAFT: her words, supplied 13 Sep 2026, pending her approval on wording. Do not edit it into something more formal — the plainness is the point, and it is the only unmediated voice on the site. Confirm before launch.]` |
| **Needs** | *Is this wording final, word for word?* Yes → the marker is deleted and nothing else changes. |
| **Who** | **Nadia only.** |
| **Blocks launch** | **Yes** — the marker does. The paragraph does not. |

---

### L3 · A cleaned résumé PDF

| | |
|---|---|
| **Where** | Marker at [index.njk:159](src/index.njk#L159) → `/` Contact, and [about.njk:186](src/about.njk#L186) → `/about/` Contact. Gate at [site.js:33](src/_data/site.js#L33) (`cleared: false`), enforced at [.eleventy.js:15](.eleventy.js#L15). File at `src/assets/doc/nadia-sultan-rana-resume.pdf` |
| **Renders now** | `[BLOCKED: the résumé PDF is in the repo and confirmed text-based, but the link is not wired and the file is not published. …]` — on **two** pages. No PDF is written to `_site` and no page links to one; both verified. |
| **Needs** | *A résumé with these six removed or corrected:* GPA 4.00 (×2); the Northstar figures ($45K, 20 engagements, 12 clients, 45%, 80+, 100+); **R² 0.40 / 0.29**, which reconcile to none of the three reproduced bases; the $1,700 gap welded to Rapaport; the phone number; PostgreSQL and R. |
| **Who** | **Nadia only** to produce it. **You** to set `cleared: true` once it lands — one boolean, and the passthrough and both links come up together. |
| **Blocks launch** | **Yes.** `CONTENT.md` calls this "the link the audience came for". |

The R² item is the decisive one: the study page exists to explain why a naive
comparison of those fits misleads, and a résumé one click away carrying
figures that match no computation would undo it.

---

### L4 · The draft banner, `noindex`, and `Disallow: /`

| | |
|---|---|
| **Where** | Banner [base.njk:53](src/_includes/layouts/base.njk#L53); `noindex` [base.njk:16](src/_includes/layouts/base.njk#L16); `robots.txt` from `src/robots.njk`; all three driven by `draft: true` at [site.js:10](src/_data/site.js#L10). Style at [styles.css:664](src/assets/css/styles.css#L664) |
| **Renders now** | On **all five pages**, above the masthead: `Draft. Not launched, not indexed. Dashed blocks mark content that is still missing or still to be verified.` Plus `<meta name="robots" content="noindex, nofollow">` on all five, and `Disallow: /` in `robots.txt`. |
| **Needs** | *Set `draft: false`.* This is the launch switch, not a defect — one flag drives all three. The banner block in `base.njk` and `.draft-banner` in the stylesheet should be deleted at the same time; both carry `REMOVE AT LAUNCH` comments. |
| **Who** | **You.** |
| **Blocks launch** | **Yes — it is the launch.** Flip it only after L1–L3 are closed, or the dashed blocks go public with it. |

---

### L5 · `site.url` still points at `github.io`

| | |
|---|---|
| **Where** | [site.js:12](src/_data/site.js#L12). Affects `<link rel="canonical">`, all `og:` URLs, and `sitemap.xml` on every page |
| **Renders now** | `<link rel="canonical" href="https://nadiasrana.github.io/">` and matching `og:url` |
| **Needs** | Nothing yet — this is **correct** for the soft launch. It becomes a gap the moment the custom domain is taken up, at which point `site.url` changes *and* a `CNAME` file must be added to `src/` so it lands in `_site/`. There is deliberately no `CNAME` today. |
| **Who** | **You**, when the domain is taken up. |
| **Blocks launch** | **Yes, for the custom domain only.** Not for the `github.io` soft launch. |

---

### L6 · A second project

| | |
|---|---|
| **Where** | Not a file — the gate is stated in `CONTENT.md` under *Launch position*. Visible at `/projects/`, which is a one-row index |
| **Renders now** | `/projects/` renders one entry, correctly and unpadded. Nothing is broken; there is simply one. |
| **Needs** | A second completed, inspectable project. `CONTENT.md`'s standing candidate is the rubric-based document quality audit; the Excel validation workbook is the faster alternative. |
| **Who** | **Nadia only.** |
| **Blocks launch** | **Custom domain only.** `CONTENT.md`: a portfolio with one item "reads as a coursework page rather than a body of work." The `github.io` soft launch is explicitly cleared with one. |

---

## Does not block launch

### Answerable by Nadia

#### N1 · A higher-resolution headshot

| | |
|---|---|
| **Where** | `pictures/nadia-headshot.jpg` → `src/assets/img/portrait-headshot.jpg` → `/about/`, portrait |
| **Renders now** | The correct photograph, rendering at 379 CSS px at 1440 and 327 px at 375. Never upscaled — `.figure--portrait` caps it at its native width, and that cap is asserted on every build. |
| **Needs** | *Does a larger original of this headshot exist?* The file is **400 × 400**, a LinkedIn profile crop and the smallest source on the site. It is sharp at 1× and soft on a high-DPR screen, and the cap is why the About portrait is deliberately small. |
| **Who** | **Nadia only.** |
| **Blocks launch** | No |

---

### Answerable by you

#### Y1 · Fraqt is missing from the About timeline

| | |
|---|---|
| **Where** | [about.njk:68–99](src/about.njk#L68) → `/about/`, "Selected milestones" |
| **Renders now** | Six rows: 2022–2025 Pacific · 2023–2024 Northstar · Spring 2025 Eberhardt · Summer 2025 Summer Conference · Spring 2026 diamond study · Summer 2026 Archroma. **Fraqt is the only one of the five work entries with no row.** |
| **Needs** | *Should Fraqt appear in Selected milestones?* It has confirmed dates (June – August 2026) and is entry 02 on the home page, so the facts to write the row already exist. The counter-argument: it is concurrent with Archroma and pre-launch, so it may be deliberately quieter on a milestones list. |
| **Who** | **You** to decide; **me** to write it. |
| **Blocks launch** | No — but this is the same shape of failure as the Work entries vanishing: real content present on one page and absent from another, with nothing flagging it. |

#### Y2 · `CONTENT.md` has four stale passages

| | |
|---|---|
| **Where** | [CONTENT.md:72](CONTENT.md#L72), [:178](CONTENT.md#L178), [:183](CONTENT.md#L183), [:316](CONTENT.md#L316) |
| **Renders now** | Nothing — `CONTENT.md` is not published. But it is the binding authority, and each of these now contradicts the site: <br>• **:72** "Résumé PDF — hold until the Q1–Q5 conflicts" — superseded by the six-item block list. <br>• **:178** work-order table still shows Fraqt's dates as `pre-launch ⚠️`; they are June – August 2026. <br>• **:183** "Fraqt's slot at 02 is provisional … there are no dates to sort on" — there are now, and they confirm the slot. <br>• **:316** "Pacific appears nowhere on the site" — **false**; it is on `/about/` in The record and the milestones, and on `/` in work entry 03. |
| **Needs** | Sign-off to correct all four. No facts change. |
| **Who** | **Me**, on your say-so. |
| **Blocks launch** | No |

#### Y3 · `CONTENT.md` cites a file that does not exist

| | |
|---|---|
| **Where** | [CONTENT.md:72](CONTENT.md#L72) |
| **Renders now** | Nothing published. The line refers Q1–Q5 to `` `03-open-questions.md` ``. **That file is not in this repository**, and neither is any `01-` or `02-` companion. |
| **Needs** | *Does `03-open-questions.md` exist somewhere outside the repo, or is the reference dead?* If Q1–Q5 are recorded nowhere, the résumé hold has no written definition beyond the six-item list already in `CONTENT.md`. |
| **Who** | **You.** |
| **Blocks launch** | No |

#### Y4 · Archroma and Fraqt read as concurrent

| | |
|---|---|
| **Where** | `/` → Work, entries 01 and 02 |
| **Renders now** | Archroma `Summer 2026`; Fraqt `June – August 2026`. Both true and both traceable, but a reader may notice two roles covering the same months with nothing saying so. |
| **Needs** | *Leave it, or say somewhere that they overlapped?* No claim is wrong; the question is whether the silence invites one. |
| **Who** | **You.** |
| **Blocks launch** | No |

---

### Answerable by me, from files already here

#### M1 · Two component macros are dead code

| | |
|---|---|
| **Where** | [components.njk:114–120](src/_includes/macros/components.njk#L114) — `NumberedOpen`, `NumberedClose` |
| **Renders now** | Nothing. **0 call sites.** `index.njk` writes `<ol class="numbered">` directly. |
| **Needs** | Delete both, or route the Work list through them. The rest of the file is live: `EditorialHeading` ×7, `RecordMetadata` ×5, `Marker` ×4, `EditorialIndex` ×2, `QuietEmptyState` ×2. |
| **Who** | **Me.** |
| **Blocks launch** | No |

#### M2 · Three CSS classes have no consumer

| | |
|---|---|
| **Where** | `styles.css` — `.empty-state`, `.missing-slot`, plus the `woff2` false positive from `format('woff2')` |
| **Renders now** | Nothing. Reported as a note by `tools/verify.mjs` on every run. |
| **Needs** | A decision, not a fix. Both are **deliberate safety nets**: `.missing-slot` styles the loud `[MISSING SLOT]` a component emits when a required slot is absent, and `.empty-state` styles `QuietEmptyState`, which is wired as the `else` branch on both project indexes. Having no consumer today is the system working. Keep. |
| **Who** | **Me** — recommend keeping and documenting. |
| **Blocks launch** | No |

#### M3 · `featured: true` is inert

| | |
|---|---|
| **Where** | [diamond-price-drivers.md:6](src/projects/entries/diamond-price-drivers.md#L6) |
| **Renders now** | Nothing. It was how the home page picked one project ahead of two unstarted shells. Those shells are gone and the collection has one member. |
| **Needs** | Harmless; delete when a second project lands and the selection rule is decided. |
| **Who** | **Me.** |
| **Blocks launch** | No |

---

## The three extra checks

### 1 · Visible to a reader that shouldn't be

Only the draft apparatus, and all of it is intentional and flag-driven:

| Item | Where | Gated by |
|---|---|---|
| Draft banner, all 5 pages | `base.njk:53` | `site.draft` |
| `noindex, nofollow`, all 5 pages | `base.njk:16` | `site.draft` |
| `Disallow: /` | `robots.njk` | `site.draft` |
| 4 dashed marker blocks | L1–L3 above | content, not flags |

**Nothing unintended ships.** No HTML comments reach the browser (0 across all
five pages — the `.njk` `{# … #}` and `/* … */` comment forms are stripped by
the template engine and are not in the output). No debug output. No
commented-out markup that still renders. No `console` anything — the site
ships no JavaScript at all.

### 2 · Verified in CONTENT.md, absent from the site

**None.** 53 verified items checked in the reverse direction — every degree,
date, honour, employer, figure, retailer count and toolkit entry — and all 53
appear. This is the check that caught the five Work entries being silently
dropped through two rebuilds; it is now an explicit pass rather than a thing
somebody has to remember.

The one deliberate omission is recorded: **Carlson Lab** was cut because it
appeared on `/about/` but is not on `CONTENT.md`'s verified list, and
`CLAUDE.md` rule 4 prohibits unpublished lab data. Restore it to `CONTENT.md`
first if it is cleared.

Two items are present but thinner than `CONTENT.md` might imply, both by
decision rather than omission: **Fraqt** has no milestones row (Y1), and the
home **Now** section carries two rows rather than four — *Building* and
*Reading* were placeholder rows and were removed, because `CONTENT.md`'s own
note is that a stale Now module is worse than none.

### 3 · Contradictions

**Site against `CONTENT.md`: none.** Every figure traces; every date matches;
no blocked figure appears anywhere, including inside marker text.

**Site against itself: none found.** Checked explicitly:

- The study **deck** against the findings table — the deck was corrected twice
  in the last two passes and now states nothing the table does not show.
- **Prose against table** on the study — "color has the steeper step" is now
  stated per basis, and the claim that 0.633 was "lowest of the three" is
  gone, both because publishing the raw rows made them false.
- **About timeline against home Work entries** — all five dated roles agree.
  The only mismatch is absence, not contradiction: Fraqt (Y1).
- **Home Now against About record** — "Northeastern 2026–2027" against
  "January 2026 – May 2027". Consistent.
- **Contact across `/`, `/about/` and the colophon** — same address, same
  LinkedIn, same location string, all from `site.js`. No drift.

**`CONTENT.md` against itself: four stale passages (Y2).** Worth stating
plainly, because the authority document drifting is how the Work entries were
lost: the site is currently *ahead* of `CONTENT.md` in four places, and
`CONTENT.md` is the document a future session will trust.

**One external claim I cannot verify:** `https://www.linkedin.com/in/nadiasrana`
is on three pages. It was confirmed from her profile export, and I have not
fetched it. If it 404s, three pages carry a dead outbound link.

---

## One message to Nadia

Everything in this document she owns, and nothing else:

1. **The diamond study** — with hindsight, what would you change about how you
   ran it? Two or three sentences. It is the last gap on the best page.
2. **Your About paragraph** — is the wording final, word for word? *(The text
   is in `CONTENT.md` under "About paragraph — DRAFT".)*
3. **Your résumé** — a version with these removed or fixed: GPA, the Northstar
   revenue and client figures, the phone number, PostgreSQL and R, the
   Rapaport phrasing, and above all the **R² 0.40 / 0.29**, which do not match
   the workbook on any basis.
4. **The headshot** — is there a bigger original than the 400 × 400?
5. **A second project** — the rubric audit or the validation workbook,
   whichever is faster to finish.
