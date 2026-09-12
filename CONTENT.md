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

---

## Pages

| Page | Status | Notes |
|---|---|---|
| Home | ✅ | Built. The one-line claim is carried by the study, not by a tagline |
| Projects index | — | Deferred until project 2. With one item, the Work section on the home page is the index; an index page listing one entry advertises the thinness |
| Diamond Price Drivers project page | ⚠️ | Built at `work/diamond-price-drivers.html`. Two markers left, one of them a blocker — see Q-R2 below |
| About | ✅ | Writable now from verified background |
| Résumé PDF | ⚠️ | Available, but hold until the Q1–Q5 conflicts in `03-open-questions.md` resolve |
| Contact | ✅ | nadiasrana@gmail.com. Phone is on the resume — decide separately whether it goes on a public page. Default: no |

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

- Single-variable R²: **clarity 0.91**, **color 0.84**
- Slopes: clarity **−$529/ct per grade**, color **−$631/ct per grade**. Color
  has the steeper step; clarity explains more of the variation
- Combined multivariate model: **63.3%**
- Retailer spread: **James Allen $1,550/ct**, **With Clarity $3,249/ct** — a
  gap of roughly **$1,700/ct**. This is between retailers
- Rapaport, **separate finding**: retail trades **5–35% below** the guide. Do
  not weld this to the $1,700 figure
- Market context: right-skewed, **skewness 1.06**, mean **$2,571/ct**, median
  **$2,227/ct**

### Limitations — both on the page

1. **Cut premium is confounded.** Excellent cut averages $3,358/ct against
   $2,332/ct for Very Good, a 44% premium, but higher-cut stones also carry
   better color and clarity, so the premium is not cleanly attributable to cut
2. **The confidence interval required constraint relaxation.** Insufficient
   D-color and VVS1 data points existed, so the 30-sample interval was built
   on H-SI2 instead, where 44 diamonds were available. 95% CI **$1,684–$1,837/ct**,
   point estimate **$1,760.15**

The second limitation carries the weight on the page. Declining to proceed as
planned because the data would not support it is the same instinct as the rest
of the site.

### Exclusion count — deliberately absent

The pre-filter record count is not recoverable from the source. The page states
the filter and says the count is not recoverable. **Do not estimate it.**

**Why this page matters more than the design.** It is the only place a reader
can inspect her reasoning. The limitations section is the whole point — it is
the same instinct as the rest of her work and it is what separates this from a
coursework write-up.

⛔ **Q-R2 — blocker, page cannot go public.** What was each R² computed on?
As recorded the three cannot describe the same regression: adding a second
variable cannot take R² from 0.91 down to 0.633. The likely answer is that the
single-variable figures are regressions on grade averages while the combined
figure is on all 918 rows — but that is a guess and it is not going on the page
as one. A dashed marker sits in the findings section until this is answered.

⚠️ **Still needed: what she would do differently.** Not in the source, not
inferable. Marker stays.

[VERIFY] The workbook and Word report are not published and the page does not
offer files. Retailer names and derived per-retailer figures **are** published,
authorised 12 Sep 2026.

---

## Verified and usable for About and Background

- M.S. Data Analytics and Engineering, Northeastern, Jan 2026 – May 2027
- B.S. Biological Sciences **and** B.S. Business Administration, University of
  the Pacific. ⚠️ End date disputed: May 2025 on LinkedIn, Dec 2025 on the
  resume. Use "2022–2025" until resolved
- Dean's Honor List; President's Merit Scholarship
- Data Analytics Intern, Archroma, Commercial Excellence — **print as
  `Summer 2026`**
- Northstar Insight Group, co-founder, Jan 2023 – Dec 2024 ⚠️ Tier B, see below
- Eberhardt Student Investment Fund, student investment analyst, Spring 2025
  ⚠️ Tier B
- VP of Scholarships and Awards, Delta Sigma Pi
- Languages: English native; Urdu, Arabic, Spanish limited working

---

## ⛔ Do not write around these

- **GPA 4.00.** Tier B, no transcript seen. Off the site until confirmed.
- **Python.** Zero supporting work anywhere. Not in any skills list here.
- **Machine learning, ETL development.** Disproved by her own Archroma work log.
- **Any Archroma customer or market figure.** Specifically: site-to-customer
  match counts, group keys, ship-to links, row counts, which mills the
  division does not sell to and what that is worth, FY27 planning, and the
  licensed market dataset. Method metrics are fine; business metrics are not.
- **Fraqt implementation specifics.** No framework names, no index types, no
  dimensions, no test counts. Design decisions only.
- **Northstar and Eberhardt figures** ($45K, 20 engagements, 12 clients, $6M)
  until Q1 and Q8 resolve. The roles can be named; the numbers wait.

---

## Still needed before the custom domain

**A second project.** The strongest candidate remains a rubric-based document
quality audit: 8–12 public university student-services pages scored against a
seven-criterion rubric, producing a workbook, written rationales, and a
findings summary. It doubles as preparation for AI-evaluation assessment work.

An Excel data-quality validation system over a synthetic dataset is the
alternative and is faster to build.

---

## Open content questions

- Does the site lead with analytics roles or contractor work? The hierarchy
  and the one-line claim both change. Current assumption: analytics.
- Photograph or none? The design is stronger without one.
- Does Fraqt appear on the site at all, and if so under Projects? It is
  pre-launch and unregistered — same reasoning as the resume.
