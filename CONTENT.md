# CONTENT.md

What the site needs, what exists, what is blocked. Claude Code reads this
before writing any copy.

Status: ✅ ready · ⚠️ needs work · ⛔ blocked, do not fabricate

**Updated 12 Sep 2026 against her September resume.** One real completed
project now exists, which changes the launch position.

---

## Launch position — changed

Previously: no projects existed, so the site was a styled résumé and should
not launch.

Now: **one completed, inspectable, public-data project exists** — the Diamond
Price Drivers study. That is enough for a credible soft launch on the
`github.io` URL. Hold the custom domain until a second project lands, because
a portfolio with one item reads as a coursework page rather than a body of
work.

✅ **The $6M gate is cleared (13 Sep 2026).** The remaining gate on the custom
domain is a second project. The remaining gate on the *résumé link* is a
cleaned PDF — see below.

---

## Sample content — REMOVED ✅

**Closed 13 Sep 2026 by the editorial redesign.** The journal structure
(Writing, Notes, Library) and every placeholder entry in it are deleted:

| What | Count | Disposition |
|---|---|---|
| `src/writing/posts/` | 5 | Deleted, including the type specimen |
| `src/notes/entries/` | 3 | Deleted |
| `src/_data/library.js` | 15 | Deleted |
| `src/projects/entries/` shells | 2 | Deleted. The diamond study remains |
| `/writing/`, `/notes/`, `/library/`, `/feed.xml` | 4 routes | Removed from the build and from the navigation |

The reason: an empty section advertises absence, and a journal with no
entries is a louder claim of absence than no journal. **The site is now a
portfolio under her own name** — the "Field Notes" brand, the volume and
issue numbering, the digital-garden status vocabulary and the Atom feed are
all retired, and `@11ty/eleventy-plugin-rss` is uninstalled.

The four post briefs are **not lost** — they are recorded in
`CONTENT_AUDIT.md` under *Content to Remove*. A brief is still not permission
to write the post for her.

⛔ **The remaining placeholders are `[NEEDS CONTENT: …]` and `[VERIFY …]`
markers only.** They render as dashed blocks and are listed in the Open
questions below. There is no placeholder *copy* anywhere on the site.

---

## Pages

**Updated 13 Sep 2026 after the editorial redesign.** Seven build outputs,
five of them pages.

| Page | Status | Notes |
|---|---|---|
| Home `/` | ⚠️ | Hero, What I do, **Work (5 entries)**, Project, Now, Contact. Work lives here rather than at `/work/`: five entries and no long-form content made a separate route thin and put a click in front of the only thing worth reading |
| About `/about/` | ⚠️ | Bio (portrait + second photograph), The record, Selected milestones, How I work, Toolkit, Contact. One marker: the first-person paragraph |
| Project index `/projects/` | ✅ | One real entry. Not padded |
| Diamond Price Drivers `/projects/diamond-price-drivers/` | ⚠️ | One marker left: what she would do differently |
| 404 `/404.html` | ✅ | Built |
| `sitemap.xml`, `robots.txt` | ✅ | Built. `robots.txt` is `Disallow: /` while `site.draft` is true |
| Résumé PDF | ⚠️ | Available, but hold until the Q1–Q5 conflicts in `03-open-questions.md` resolve |
| Contact | ✅ | nadiasrana@gmail.com. Phone stays off the public page. Default: no |

**Deployment note:** there is deliberately **no `CNAME`**. `site.url` is the
`github.io` URL, and the custom domain is held until a second real project
lands — the launch position below, unchanged.

---

## Positioning — set 12 Sep 2026

She is positioned as **data modeling, reconciliation, data quality and
structured evaluation**. **Not pipeline engineering.** Her Archroma work log
shows no pipeline work and the Fraqt implementation was substantially
AI-assisted. Never write a claim she cannot defend cold in an interview.

The diamond study is **one project, not the highlight**. Five work entries
lead; the study sits under Projects.

---

## Work section figures — attribution ✅ RESOLVED

✅ **Q-ATTRIB — closed 12 Sep 2026. Do not re-open.**

| Figure | Label | Employer |
|---|---|---|
| ~1,080 | ambiguous records routed to human review | **Archroma** ✅ |
| 203 | field data dictionary | **Archroma** ✅ |
| 3 | source systems reconciled | **Archroma** ✅ |
| 31 | item defect log | **Archroma** ✅ |
| 40 | point release audit | **Archroma** ✅ |
| 1,194 | public federal source passages structured | **Fraqt** ✅ |

**Source of the resolution:** her Archroma work-log export. It shows entity
resolution across three previously unlinked systems, a geographic-corroboration
matching rule, and ambiguous records routed to human review rather than
resolved silently. The 1,194 passages are the Fraqt retrieval corpus.

**A previous session guessed this and got it wrong**, putting the ~1,080
routed records under Fraqt. The routing is Archroma's, and it is the strongest
single thing on the page: it is the judgement call, not the volume. Fraqt has
**one** figure and the entry shows one. Do not pad it.

Archroma has five figures. **Amended 13 Sep 2026:** the entry shows **one** in
the figure slot — the 1,080 routed records — and carries the three source
systems, the 203-field dictionary, the 31-item defect log and the 40-point
release audit in prose. One figure per entry is the fixed schema; see
*Work order* below.

### Tools attributable to Archroma ✅ — SAP, Power BI, Excel

✅ **Closed 12 Sep 2026. Do not drop these again.**

**SAP, Power BI and Excel are Archroma tools** and all three are tags on the
entry. **Source: Nadia's own public LinkedIn post about the Archroma
internship**, which names all three. She published it herself, so it is safe
to reuse.

These three are **the only tools attributable to Archroma.** Her work-log
export names none, so nothing else goes in the Archroma tags on the strength
of a guess.

Power BI and Excel are **additionally** used at the University of the Pacific
operations role. Both attributions are true; a previous session removed Power
BI from Archroma on the mistaken assumption that the Pacific attribution was
exclusive.

**PowerPoint is Stack-only.** It is a general competency rather than something
that characterises the Archroma work, so it does not go in the entry tags.

⚠️ **Q-FRAQT.** Fraqt job title and dates are not on file. The entry prints
"Pre-launch." and nothing else. Fraqt now **does** appear on the site, in
Work rather than Projects — this resolves the old open question.

**Northstar figures stay off.** $45K, 20 engagements and 12 clients wait for
Q1. The entry names the role and says on the page that the figures are held.
Do not add them without Q1.

---

## Work order — five entries, by recency

| # | Entry | Dates |
|---|---|---|
| 01 | Archroma | Summer 2026 |
| 02 | Fraqt | pre-launch ⚠️ |
| 03 | Summer Conference, University of the Pacific | May – Aug 2025 |
| 04 | Eberhardt Student Investment Fund | Jan – May 2025 |
| 05 | Northstar Insight Group | Jan 2023 – Dec 2024 |

⚠️ **Fraqt's slot at 02 is provisional.** It is ordered there because
"pre-launch" implies current, but Q-FRAQT means there are no dates to sort on.
If the dates land and it predates mid-2025, the order changes.

✅ **Locations — resolved 13 Sep 2026 by dropping the field.** Location is no
longer a row in the work-entry schema. Stockton, California stays in the
prose of entries 03 and 04, where it is a fact about the role rather than a
missing field. Two of five filled read as an oversight; printing "Not on
record" three times reads worse. If all five ever land, add the row back to
`RecordMetadata` Schema A in `DESIGN_SYSTEM.md` and it appears on all five at
once.

✅ **Figures — one per entry.** Archroma has five figures on record; showing
three there and one elsewhere is the ragged shape that made the old page read
as unfinished. Each entry now shows exactly one headline figure, and for
Archroma it is the 1,080 routed records, which this document names as the
strongest single item. Archroma's other four figures are in its prose.

### 03 — Summer Conference, University of the Pacific ✅

Operations analytics assistant. Stockton, CA. May – August 2025.

- Programme serving **3,000+ participants**
- Validated **SQL, Excel and SPSS** datasets behind the reporting
- Published reusable **Power BI** dashboards for recurring stakeholder
  reporting
- Tags: Data validation · SQL · Excel · SPSS · Power BI

**This role is the source that confirms SQL**, which had been an open question.

### 04 — Eberhardt Student Investment Fund ⚠️

Student investment analyst, University of the Pacific. Stockton, CA.
January – May 2025.

- Equity research on **S&P 500** companies for a student-managed portfolio
  **approaching $6M**
- Financial statements, earnings materials, valuation assumptions, downside
  risks
- Write-ups documented sources, thesis, catalysts, valuation logic and risk
  factors for a faculty-led investment committee
- Tags: Financial analysis · Valuation · Research documentation

✅ **$6M CONFIRMED PUBLIC — closed 13 Sep 2026. Do not re-open.** The fund
states its portfolio size publicly. The VERIFY marker is removed from the
entry and the figure stands on its own.

**This clears the launch gate.** It was the only unverified public number on
the site. The remaining launch condition is a second project, not this.

The Northstar figures are a separate matter and still wait for Q1.

---

## Stack — levels, not bars

Grouped by category, each item labelled **Daily / Comfortable / Exposure**.
The labels exist so the honest answer can be given instead of a skill bar.

- Analysis and modeling: Excel `Daily`, **SQL `Comfortable`**,
  **SPSS `Exposure`**, Regression `Comfortable`, Confidence intervals
  `Comfortable`, Web scraping `Comfortable`
- Data quality: Data validation `Daily`, Data dictionaries `Daily`,
  Reconciliation `Comfortable`
- Enterprise systems: **SAP `Exposure`**
- Reporting: Power BI `Daily`, Word `Daily`, PowerPoint `Comfortable`
- Programming: **Python `Exposure`**, **TypeScript `Exposure`**

⚠️ **SAP is set to `Exposure` as a floor, not a finding.** The evidence is her
public post naming it for one internship summer, with no detail on depth.
`Exposure` is the level that is true on any reading of that. If she used it
routinely, raise it — but raise it on her word, not on inference.

`PowerPoint Comfortable` is set from it being a general competency. It is not
named in the LinkedIn post, so it earns no Archroma attribution.

**Python is now permitted, at `Exposure` only.** This overrides the ⛔ entry
below, authorised 12 Sep 2026. The point of the level labels is that
`Exposure` is not a claim. Do not promote either language without new
evidence.

✅ **Q-SQL is half closed.** The Summer Conference role names **SQL**
outright, so SQL is real and is listed. `Comfortable` is a floor set from
validating SQL datasets in a paid role plus "query logic that other people
could reuse"; **SPSS `Exposure`** is a floor set from that one role.

⚠️ **Still open:** whether the Pacific operations "query logic" was also SQL,
or DAX and Power Query inside Power BI. That decides whether `Comfortable` is
right or an understatement. Marked on the page.

---

## Education dates ✅ RESOLVED — and one claim that dies with them

✅ **Closed 12 Sep 2026. Do not re-open.** University of the Pacific ran
**August 2022 – December 2025**. The "May 2025" on LinkedIn is wrong.

Two consequences, both of which have bitten earlier drafts:

1. **There is no Aug–Dec 2025 gap.** She was enrolled. Do not explain,
   apologise for, or fill a gap that does not exist.
2. ⛔ **The compression claim is dead.** "Two degrees in two years and nine
   months", "in under three years", or any variant is **wrong**: Aug 2022 to
   Dec 2025 is **3 years 4 months**. It is a normal-length dual degree and it
   does not need a superlative. Earlier drafts carried "awarded in two years
   and nine months" and a `2y 9m elapsed` figure. Both are gone. Do not
   reintroduce either.

The dual biology-plus-business degree is still the distinctive fact. The
distinctiveness is the **combination**, not the speed.

⚠️ Note: the rebuilt home page has **no education section at all** — Pacific
appears nowhere on the site, and Northeastern only inside the About
paragraph. That is a gap worth a decision, not an oversight to fix silently.

---

## Photographs ⚠️ Q-PHOTO — partly closed

**Updated 13 Sep 2026.** Five of her own photographs are now committed in
`pictures/` and three are on the site, cropped and colour-graded to one
consistent treatment by `tools/grade-images.mjs`:

| Plate | Source | Placement |
|---|---|---|
| `hero-canyon.jpg` | `IMG_3013.JPG` | Home hero, 3:2 |
| `portrait-hillside.jpg` | `IMG_3857.JPG` | About portrait, 4:5 |
| `lake-wall.jpg` | `IMG_4273.JPG` | About secondary, 3:2. Cropped to remove a second person |

`IMG_3898.JPG` and `IMG_4353.JPG` are deliberately unused: neither survives
its crop. See `DESIGN_SYSTEM.md` section 6.

✅ **Q-PHOTO CLOSED 13 Sep 2026.** The studio headshot arrived —
`pictures/nadia-headshot.jpg`, dark blazer, warm neutral backdrop. It is the
About portrait, and `IMG_3857` comes off: keeping both a studio portrait and
a full-figure portrait of the same person is a gallery, not a composition.

⚠️ **One caveat on the file.** It is a **400 × 400** export — a LinkedIn
profile crop, and the smallest source on the site. The figure is capped at its
native 400px so it is never upscaled, which means the About portrait is
deliberately small. That reads fine against large serif type, but **a
higher-resolution original would allow a larger portrait.** Worth asking for.

It is also the one image that does **not** get the standard grade. The grade
exists to reconcile four outdoor colour temperatures with the ivory palette; a
studio portrait on a warm neutral backdrop is already in it. Rendered side by
side, the full grade desaturates skin to the point of looking unwell and lifts
the blazer's blacks into a muddy grey. A gentler version keeps the family
resemblance without damaging the two things the photograph is of. See
`tools/grade-images.mjs`.

⛔ **`pictures/background.jpg` is not to be used.** A stock-looking coastline
with no relationship to her or the work, and a saturated cyan that fights the
palette. It stays in `pictures/`, unused. **No stock photography.**

---

## Project 1 — Diamond Price Drivers ✅

Spring 2026 · Excel, Word, regression, data validation, web scraping

**Corrected 12 Sep 2026.** The R² figures and the $1,700 finding recorded here
previously were both wrong. Anything quoting R² 0.40/0.29, or attaching the
$1,700 gap to Rapaport, is stale.

### Scope

- Natural pear-shaped diamonds, **0.90–0.99 ct**, color **D–K**, clarity
  **IF–SI2**
- Carat held near-constant on purpose, just below the 1.00 ct threshold where
  prices jump, so the comparison is between grades and not between sizes
- Collected **29 March 2026** by browser scraping, with the color and clarity
  filter applied at collection on each retailer's own listing filters

### Sample — 918 total, retailers nameable

| Retailer | Stones |
|---|---|
| Blue Nile | 159 |
| Brilliant Earth | 376 |
| James Allen | 147 |
| With Clarity | 236 |
| **Total** | **918** |

### Findings

✅ **Q-R2 — closed 12 Sep 2026. Do not re-open. There is no OLS violation.**

The single-variable regressions were run on **pivot-table grade averages with
the other variable held fixed**, not on the 918 raw rows. Different datasets
at different aggregation levels, so R² 0.909 on 7 points and R² 0.633 on 918
rows are not in conflict.

| Fit | Basis | n | Coding | Slope | R² |
|---|---|---|---|---|---|
| Clarity | grade averages, color held at **D** | 7 | IF–SI2 as 1–7 | −528.70 /grade | 0.9089 |
| Color | grade averages, clarity held at **VVS1** | 8 | D–K as 1–8 | −631.44 /grade | 0.8393 |
| Combined | **individual stones** | 918 | multivariate | no single slope | 0.633 |

**Source:** both single-variable regressions re-run against the source
workbook, returning −631.42 / 0.8393 and −528.86 / 0.9089. Matches to four
decimals.

The page shows R² at three decimals (0.909, 0.839, 0.633) for a consistent
column, and slopes at the supplied cent precision. The table carries `n` on
every row and splits into two labelled row groups, because read as a flat
list these numbers look like an error to a numerate reader.
- Retailer spread: **James Allen $1,550/ct**, **With Clarity $3,249/ct** — a
  gap of roughly **$1,700/ct**. This is between retailers
- Rapaport, **separate finding**: retail trades **5–35% below** the guide. Do
  not weld this to the $1,700 figure
- Market context: right-skewed, **skewness 1.06**, mean **$2,571/ct**, median
  **$2,227/ct**

### Limitations — all three on the page

1. **Aggregation inflates R².** The single-variable fits are on grade
   averages, the combined model on 918 individual stones. Averaging removes
   within-cell variance, so a fit against 8 smooth points is not comparable
   to a fit against 918 stones. The two answer different questions: how
   cleanly grade averages decline, versus how much of one diamond's price
   those grades explain. **This leads the section on the page.**
2. **Cut premium is confounded.** Excellent cut averages $3,358/ct against
   $2,332/ct for Very Good, a 44% premium, but higher-cut stones also carry
   better color and clarity, so the premium is not cleanly attributable to cut
3. **The confidence interval required constraint relaxation.** Insufficient
   D-color and VVS1 data points existed, so the 30-sample interval was built
   on H-SI2 instead, where 44 diamonds were available. 95% CI **$1,684–$1,837/ct**,
   point estimate **$1,760.15**

Limitations 1 and 3 each carry a weighted closing line on the page. Declining
to proceed as planned because the data would not support it, and refusing to
let a flattering R² stand unqualified, are the same instinct.

### Exclusion count — deliberately absent

The pre-filter record count is not recoverable from the source. The page states
the filter and says the count is not recoverable. **Do not estimate it.**

**Why this page matters more than the design.** It is the only place a reader
can inspect her reasoning. The limitations section is the whole point — it is
the same instinct as the rest of her work and it is what separates this from a
coursework write-up.

✅ **Q-R2 is closed.** See the Findings table above for the resolution and its
source. The page no longer carries a marker for it.

⚠️ **Still needed: what she would do differently.** Not in the source, not
inferable. Marker stays.

[VERIFY] The workbook and Word report are not published and the page does not
offer files. Retailer names and derived per-retailer figures **are** published,
authorised 12 Sep 2026.

---

## Verified and usable for About and Background

- M.S. Data Analytics and Engineering, Northeastern, Jan 2026 – May 2027
- B.S. Biological Sciences **and** B.S. Business Administration, University of
  the Pacific. ✅ **End date confirmed 12 Sep 2026: December 2025.** The
  LinkedIn "May 2025" is wrong. Print **August 2022 – December 2025**
- Dean's Honor List; President's Merit Scholarship
- Data Analytics Intern, Archroma, Commercial Excellence — **print as
  `Summer 2026`**
- Northstar Insight Group, co-founder, Jan 2023 – Dec 2024 ⚠️ Tier B, see below
- Eberhardt Student Investment Fund, student investment analyst, Spring 2025
  ⚠️ Tier B
- ✅ **From North Carolina** (confirmed 13 Sep 2026). On the About record.
  This is a different question from where she lives now, which is still open
- VP of Scholarships and Awards, Delta Sigma Pi
- ⚠️ **Carlson Lab research was CUT from the site 13 Sep 2026.** It appeared
  on `/about/` but is not on this verified list, and `CLAUDE.md` rule 4
  prohibits unpublished lab data. The phrasing was general and may well be
  fine — but it needs confirming rather than assuming. Restore it here first
  if it is cleared
- Languages: English native; Urdu, Arabic, Spanish limited working

---

## ⛔ Do not write around these

- **GPA 4.00.** Tier B, no transcript seen. Off the site until confirmed.
- ~~**Python.** Zero supporting work anywhere.~~ **Superseded 12 Sep 2026:**
  permitted at `Exposure` only, in the Stack section. Never above that.
- **Machine learning, ETL development.** Disproved by her own Archroma work log.
- **Any Archroma customer or market figure.** Specifically: site-to-customer
  match counts, group keys, ship-to links, row counts, which mills the
  division does not sell to and what that is worth, FY27 planning, and the
  licensed market dataset. Method metrics are fine; business metrics are not.
- **Fraqt implementation specifics.** No framework names, no index types, no
  dimensions, no test counts. Design decisions only.
- **Northstar figures** ($45K, 20 engagements, 12 clients) until Q1 and Q8
  resolve. The role can be named; the numbers wait.
- ~~Eberhardt $6M~~ ✅ **CLEARED 13 Sep 2026.** Confirmed publicly stated. On
  the site, unmarked.
- ⛔ **The résumé PDF as it currently stands.** See *Résumé* below. It carries
  five things on this list.

---

## Still needed before the custom domain

**A second project.** The strongest candidate remains a rubric-based document
quality audit: 8–12 public university student-services pages scored against a
seven-criterion rubric, producing a workbook, written rationales, and a
findings summary. It doubles as preparation for AI-evaluation assessment work.

An Excel data-quality validation system over a synthetic dataset is the
alternative and is faster to build.

---

## Résumé PDF ⛔ — text-based, but blocked on its own contents

**Added 13 Sep 2026.** The file is in the repo at
`src/assets/doc/nadia-sultan-rana-resume.pdf`.

✅ **Confirmed text-based, not a scan.** Nine embedded fonts, 102 text
operators, 15,860 extractable characters, zero image XObjects. Selectable,
searchable and ATS-parseable. Produced by LaTeX.

⛔ **The download link is NOT wired, and this is a conflict to resolve, not a
refusal.** Reading the extracted text against this document, the PDF carries
**five things CONTENT.md blocks or has corrected**. Linking it publishes all
of them to exactly the reader the block list exists to protect her from:

| In the PDF | CONTENT.md says |
|---|---|
| **GPA: 4.00**, twice | ⛔ "Tier B, no transcript seen. Off the site until confirmed" |
| **$45K revenue, 20 paid engagements, 12 clients**, plus 45% repeat, 80+ issues, 100+ materials | ⛔ "Northstar figures … until Q1 and Q8 resolve" |
| **R² = 0.40 vs 0.29 for color** | ⛔ "**Corrected 12 Sep 2026.** Anything quoting R² 0.40/0.29 is **stale**." The site publishes 0.909 / 0.839 / 0.633 |
| **"a $1,700/ct retailer gap against the Rapaport guide"** | ⛔ "Rapaport, **separate finding** … **Do not weld this to the $1,700 figure**" — the PDF welds them |
| **Phone (919) 888-9512** | ⚠️ "decide separately whether it goes on a public page. **Default: no**" |
| **PostgreSQL, R**, A/B testing | Not in the verified stack. Python is `Exposure` only |

The R² item is the serious one. The site's single strongest page publishes the
corrected figures next to a full explanation of *why* the naive comparison is
wrong. A résumé link one click away carrying the superseded numbers makes the
site contradict itself on its best evidence — and the contradiction is
precisely the error the page is about.

**How it is wired.** `site.resume.cleared` in `src/_data/site.js` is `false`.
While false, the PDF is not passed through to `_site` at all, so it is not
reachable at a URL, and the Contact blocks show a `[BLOCKED: …]` marker
instead of a link. **Supply a cleaned PDF and set `cleared: true`** — the
passthrough and the link both key off that one flag and need no other change.

### The résumé also answers three open questions

Flagged rather than applied, because this document records that a PDF export
has already been considered and not treated as verification:

- **Q-FRAQT** — "Founding Data Lead | Pre-launch Project", June 2026 – Aug. 2026
- **LinkedIn** — `linkedin.com/in/nadiasrana`
- **Location** — "Raleigh, NC | Open to remote contract work"

It also supplies locations previously not on file: Archroma **Charlotte, NC**;
Northstar **Remote, U.S.** With those, all five work entries would have a
location and the `Location` row could go back into `RecordMetadata` Schema A.

**None of this is on the site.** Confirm and these close in one pass.

---

## About paragraph — DRAFT ⚠️

**Supplied 13 Sep 2026, in her words. On the site, marked DRAFT, pending her
approval on wording.**

> Hey, I'm Nadia. I love matcha and cats — I have two tabby cats — and I'm
> always up for sightseeing. I'm originally from North Carolina but went to
> college in California and loved it there. Learning new things is a passion,
> along with trying new foods and watching sunsets. Right now I'm obsessing
> over everything to do with AI and data, but I still make decisions the same
> way: after deep analysis.

⛔ **Do not edit this into something more formal.** The plainness is the point,
and it is the only unmediated voice on the site — every other sentence is
assembled from the record. The last clause is also the only place the site
says what she is like to work with in her own words.

Confirm the wording before launch and remove the DRAFT marker.

---

## Open content questions

- ~~Does the site lead with analytics roles or contractor work?~~ **Resolved:**
  analytics. The hero claim is "I build the models and the checks that decide
  whether a number can be trusted."
- ~~Photograph or none?~~ **Resolved:** a headshot, in the hero. See Q-PHOTO.
- ~~Does Fraqt appear on the site at all?~~ **Resolved:** yes, in Work as entry
  02 / 03. See Q-FRAQT for what is still missing.

### Open, in priority order

**Updated 13 Sep 2026.** Six of the previous list are closed: $6M, the
headshot, where she is from, the About paragraph (drafted), the résumé's
format question, and the journal removal.

1. **A cleaned résumé PDF** — the link the audience came for, and the only
   item with a wired switch waiting for it. See *Résumé PDF* above.
2. **Q-FRAQT** — Fraqt title and dates. *The résumé answers this; confirm.*
3. **Q-SQL** — the SQL level, and whether the Pacific "query logic" was SQL or
   DAX and Power Query inside Power BI.
4. **LinkedIn URL.** *The résumé answers this; confirm.*
5. **Location wording** for the header and colophon. *The résumé says
   "Raleigh, NC | Open to remote contract work"; confirm.*
6. **What she would do differently** on the diamond study.
7. **Her approval on the About paragraph**, to drop the DRAFT marker.
8. **A higher-resolution headshot**, if one exists. The current file is 400px.
9. **A second project** — still the gate on the custom domain.
