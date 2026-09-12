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
| Home | ⚠️ | Rebuilt 12 Sep 2026 on the warm-minimal system. Hero, About, Work, Projects, Stack, Contact. Five markers — headshot, résumé, SQL, LinkedIn, location. Work attribution is resolved |
| Projects index | — | Deferred until project 2. With one item, the Work section on the home page is the index; an index page listing one entry advertises the thinness |
| Diamond Price Drivers project page | ⚠️ | Built at `work/diamond-price-drivers.html`. One marker left, no blockers. Q-R2 closed 12 Sep 2026 |
| About | ✅ | Writable now from verified background |
| Résumé PDF | ⚠️ | Available, but hold until the Q1–Q5 conflicts in `03-open-questions.md` resolve |
| Contact | ✅ | nadiasrana@gmail.com. Phone is on the resume — decide separately whether it goes on a public page. Default: no |

---

## Positioning — set 12 Sep 2026

She is positioned as **data modeling, reconciliation, data quality and
structured evaluation**. **Not pipeline engineering.** Her Archroma work log
shows no pipeline work and the Fraqt implementation was substantially
AI-assisted. Never write a claim she cannot defend cold in an interview.

The diamond study is **one project, not the highlight**. Archroma, Fraqt and
Northstar lead the Work section; the study sits under Projects.

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

Archroma has five figures; the entry shows three in the figure row (3 systems,
1,080 routed, 203 fields) and carries the defect log and release audit in
prose.

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

**Northstar figures stay off.** $45K, 20 engagements, 12 clients, $6M all wait
for Q1. The entry names the role and says on the page that the figures are
held. Do not add them without Q1.

---

## Stack — levels, not bars

Grouped by category, each item labelled **Daily / Comfortable / Exposure**.
The labels exist so the honest answer can be given instead of a skill bar.

- Analysis and modeling: Excel `Daily`, Regression `Comfortable`, Confidence
  intervals `Comfortable`, Web scraping `Comfortable`
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

⚠️ **Q-SQL.** "Query logic that other people could reuse" could be SQL, DAX or
Power Query. The distinction matters to every analytics job description, so it
is marked on the page rather than guessed. Which is it, and at what level?

---

## Headshot

⚠️ **Q-PHOTO.** The hero reserves a portrait slot at `assets/img/`. Nothing is
there. This supersedes the old "photograph or none?" question: the rebuilt
design has a place for one. A marked placeholder holds the space. **No stock
photograph.**

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
- ~~**Python.** Zero supporting work anywhere.~~ **Superseded 12 Sep 2026:**
  permitted at `Exposure` only, in the Stack section. Never above that.
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

- ~~Does the site lead with analytics roles or contractor work?~~ **Resolved:**
  analytics. The hero claim is "I build the models and the checks that decide
  whether a number can be trusted."
- ~~Photograph or none?~~ **Resolved:** a headshot, in the hero. See Q-PHOTO.
- ~~Does Fraqt appear on the site at all?~~ **Resolved:** yes, in Work as entry
  02 / 03. See Q-FRAQT for what is still missing.

### Open, in priority order

1. **Résumé PDF** — the link the audience came for. Held on Q1–Q5.
2. **Q-FRAQT** — Fraqt title and dates.
3. **Q-SQL** — SQL, DAX or Power Query, and at what level.
4. **Q-PHOTO** — the headshot file.
5. **LinkedIn URL** and **location wording**.
6. **What she would do differently** on the diamond study.
