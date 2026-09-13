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

✅ **LAUNCHED 13 Sep 2026 on `nadiasrana.github.io`.** `site.draft` is
`false`; the banner, `noindex` and `Disallow: /` are gone and the sitemap is
served. Every placeholder marker was closed first — there are none on the
site.

Two gates remain, both unchanged: the **custom domain** waits on a second
project, and the **résumé link** waits on a cleaned PDF
(`site.resume.cleared`).

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
| Résumé PDF | ⛔ | In the repo, confirmed text-based, **not published**. Held on the six-item list under *Résumé PDF* below, which is the complete definition of the hold |
| Contact | ✅ | nadiasrana@gmail.com. Phone stays off the public page. Default: no |

**Deployment note:** there is deliberately **no `CNAME`**. `site.url` is the
`github.io` URL, and the custom domain is held until a second real project
lands — the launch position below, unchanged.

---

## Title — "data analytics engineer" ✅ DECIDED 13 Sep 2026

**Chosen deliberately by Ayan on 13 Sep 2026. This overrides the earlier
positioning note below. It is a decision, not drift — do not revert it.**

The site uses **"data analytics engineer"** as her title. It appears in the
hero eyebrow, in every page `<title>`, in the JSON-LD `jobTitle`, and in the
meta description on every route. All of them derive from
`site.author.role` + `site.author.standing` in `src/_data/site.js`, so there
is one string to change and nothing to drift.

Before this, the home `<title>` said "Data analyst" while the hero eyebrow
said "Data analytics · M.S. candidate, Northeastern" — two independent
literals saying different things on the same page. That is what one source of
truth fixes.

### ⚠️ The tension this creates, recorded so it is not rediscovered

"Engineer" is a stronger claim than the evidence on the rest of the site
supports, and two existing decisions deliberately pull the other way:

1. **Her Archroma work log names no pipeline engineering.** *Positioning*
   below says so explicitly, and that is why the entry describes entity
   resolution, a matching rule, a data dictionary, a defect log and a release
   audit — not pipeline work.
2. **Fraqt's title remains "Data and systems design"**, not the résumé's
   "Founding Data Lead", because the project is pre-launch and unregistered
   and the implementation was substantially AI-assisted. See *Q-FRAQT*.

**Both of those decisions stand.** They are not superseded by this one.

The distinction to hold: **the hero title is a positioning choice; the entry
titles are evidence-bound.** A positioning line describes how she presents
herself. An entry title is a claim about a specific job that has to survive
an interview about that job.

⛔ **If a future session finds these in conflict, the entry titles win.** Do
not rewrite Archroma or Fraqt to match the hero, and do not add pipeline or
engineering claims to any work entry on the strength of the site title.

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

✅ **Q-FRAQT CLOSED 13 Sep 2026. Do not re-open.**

| Field | Value |
|---|---|
| Title | **Data and systems design** |
| Dates | **June – August 2026**, confirmed independently of the résumé |
| Location | ⚠️ **still none on file** — see *Work order* below |

⛔ **"Founding Data Lead" was reviewed and REJECTED. Do not re-adopt it.**

It is the title on her résumé, so it will keep resurfacing. The reason it is
off the site: Fraqt is **pre-launch, unregistered, has no users, and its
implementation was substantially AI-assisted.** "Founding Data Lead" implies a
company, a team and a shipped product, and none of the three exists. It is
precisely the kind of title that cannot be defended cold in an interview,
which is the standard set in *Positioning* above.

"Data and systems design" describes what she actually did and survives the
question "tell me about that role."

The entry now says on the page that the project is pre-launch, unregistered
and has no users. That disclosure is deliberate — it is what makes the 1,194
figure safe to show.

**Northstar figures stay off.** $45K, 20 engagements and 12 clients wait for
Q1. The entry names the role and says on the page that the figures are held.
Do not add them without Q1.

---

## Work order — five entries, by recency

| # | Entry | Dates |
|---|---|---|
| 01 | Archroma | May – Sept 2026 ✅ |
| 02 | Fraqt | June – Aug 2026 ✅ |
| 03 | Summer Conference, University of the Pacific | May – Aug 2025 |
| 04 | Eberhardt Student Investment Fund | Jan – May 2025 |
| 05 | Northstar Insight Group | Jan 2023 – Dec 2024 |

✅ **Fraqt's slot at 02 is confirmed, 13 Sep 2026.** It was provisional while
Q-FRAQT meant there were no dates to sort on. June – August 2026 sorts it
exactly where it already sat: concurrent with Archroma, which runs later into
the summer and so leads. The order is settled.

✅ **Locations — the row is BACK, 13 Sep 2026.** Superseding the earlier
decision to drop the field. `Location` is a row in `RecordMetadata` Schema A
again and prints on all five entries.

| # | Entry | Location | Source |
|---|---|---|---|
| 01 | Archroma | **Charlotte, NC** | her work-log export |
| 02 | Fraqt | **Remote** | confirmed 13 Sep 2026 |
| 03 | Summer Conference | Stockton, CA | resume |
| 04 | Eberhardt | Stockton, CA | resume |
| 05 | Northstar | **Remote, U.S.** | confirmed 13 Sep 2026 |

✅ **Fraqt closed 13 Sep 2026: Remote.** All five entries now carry a
location and none prints "Not on record".

Worth recording *why* this is not invention, because the earlier draft of this
section argued the opposite. "Remote" states the **working arrangement**, and
a working arrangement is a fact about the role. For a pre-launch project with
no premises it is the only locational fact there is — the alternative is not a
more accurate answer, it is no answer. That is different from writing
"Charlotte, NC" on a guess, which would assert a place that may not exist.

`RecordMetadata`'s null handling — printing "Not on record" rather than
dropping the row — is still the right behaviour and is still asserted in
`tools/verify.mjs`. It simply has no consumer at the moment.

Stockton, California came out of the prose of entries 03 and 04 when the row
went back in, so it is stated once rather than twice.

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

✅ **Toolkit extended 13 Sep 2026 to match the résumé.** Levels default to
`Exposure` where this document holds no supporting work.

| Added | Level | Evidence |
|---|---|---|
| Entity resolution | `Comfortable` | Q-ATTRIB: entity resolution across three unlinked systems at Archroma. Already a tool tag on entry 01 |
| Defect logging | `Comfortable` | The 31-item defect log, Archroma, verified |
| Exception handling | `Comfortable` | ⚠️ The *term* is not in this document, but the practice is: the ~1,080 ambiguous records routed to human review rather than resolved silently. That is exception handling, and it is the strongest single item on the site |
| Structured evaluation | `Comfortable` | Named in *Positioning* as one of the four things she is positioned as |
| Rubric adherence | `Comfortable` | Delta Sigma Pi: scoring applications against fixed criteria and writing the reasoning. Verified service |
| Research and synthesis | `Comfortable` | Eberhardt equity research; "Research documentation" is already a tool tag on entry 04 |
| PostgreSQL | `Exposure` | ⚠️ Résumé only. No supporting work here |
| R | `Exposure` | ⚠️ Résumé only. No supporting work here |
| KPI reporting | `Exposure` | ⚠️ **Thin.** Asserted as Archroma work, but the Archroma record holds entity resolution, the dictionary, the defect log and the release audit — no KPI reporting. The nearest evidence is the reusable Power BI stakeholder reporting at Summer Conference |
| Document analysis and review | `Exposure` | ⚠️ Résumé only |
| Source verification | `Exposure` | ⚠️ The term is not here. The nearest evidence is Fraqt: deciding what has to travel with a passage for a citation to hold |
| Written feedback | `Exposure` | ⚠️ The term is not here. The nearest evidence is Delta Sigma Pi: writing the reasoning behind each decision |

⛔ **A/B testing is on the résumé and is NOT on the site.** No supporting work
exists anywhere in this document, and none was found. Left off deliberately.
Do not add it without evidence.

⛔ **TypeScript removed from the site, 13 Sep 2026.** It was listed here at
`Exposure` and appeared in the Toolkit, but it is **not on her résumé**. She
left it off her own curated document, so the site now agrees with her.
Removing a claim is always the safe direction. Python stays at `Exposure`.

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

✅ **Q-SQL CLOSED 13 Sep 2026. Confirmed by Nadia: SQL is `Comfortable`.**

That was already the level on the page, set as a floor from validating SQL
datasets in a paid role. It is now the level on her own confirmation rather
than on inference, and **the marker is off the Toolkit section.** The question
of whether the Pacific "query logic" was SQL or DAX and Power Query no longer
gates anything — the level is settled either way.

**SPSS `Exposure`** remains a floor set from that one role.

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

✅ **Corrected 13 Sep 2026. The previous note here was false** and is recorded
rather than quietly deleted, because a drifting authority document is how the
five Work entries were lost for two rebuilds.

It read, and this is quoted for the record rather than deleted:

> the rebuilt home page has no education section at all — Pacific appears
> nowhere on the site, and Northeastern only inside the About paragraph.

Both halves are wrong against the current build:

| Claim | Actual |
|---|---|
| "Pacific appears nowhere on the site" | On `/about/` in **The record** and twice in **Selected milestones**, and on `/` in **work entry 03** |
| "Northeastern only inside the About paragraph" | On `/about/` in **The record**, on `/` in the **hero kicker** and in **Now** |

⚠️ **What survives of the original point:** there is still no dedicated
*education section*. The degrees are carried by `The record` on `/about/`
rather than by a block of their own, and the home page states the master's
without the bachelor's. That remains a decision worth making deliberately —
but it is a question about emphasis, not about absence.

**This class of error is now machine-checked.** See *Site contract* below.

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
| **Clarity alone** | **individual stones**, price per carat | 918 | same as combined | **−421.20 /grade** | **0.335** |
| **Color alone** | **individual stones**, price per carat | 918 | same as combined | **−312.70 /grade** | **0.332** |
| Combined | **individual stones** | 918 | multivariate | no single slope | 0.633 |

✅ **The two raw single-variable rows are now PUBLISHED, 13 Sep 2026.** They
are on the page as a third row group, "Fitted on individual stones, one grade
at a time", sitting between the averaged fits and the combined model. They are
the controlled comparison — same question, same data, one grade at a time,
with aggregation as the only thing that changes — and Limitation 1 now points
at them. This closes the open decision about publishing them.

**Source:** both single-variable regressions re-run against the source
workbook, returning −631.42 / 0.8393 and −528.86 / 0.9089. Matches to four
decimals.

### ✅ Full cross-check, 13 Sep 2026 — every basis reproduced

All three bases were reproduced from the source workbook. **The published
figures are correct.**

| Basis | Clarity | Color | Combined |
|---|---|---|---|
| Pivot averages — the report's method | **0.9089** (n=7) | **0.8393** (n=8) | — |
| Raw 918 rows, price per carat | 0.3348 | 0.3318 | **0.6329** |
| Raw 918 rows, absolute price | 0.3242 | 0.3340 | 0.6249 |

⚠️ **The finding is narrower than it looks, and this is the important note.**

On raw rows the two grades are **near-identical — 0.335 against 0.332.** So
*"clarity is the stronger driver" holds only on grade-averaged data.* On
individual stones it does not hold at all; the two are a dead heat. The gap is
**0.070 on averages and 0.003 on stones.**

⚠️ **Correction to the note written earlier on 13 Sep 2026.** That note said
aggregation "reorders the two variables". That is too strong for the figures
the site publishes, and the distinction matters on a page about exactly this:

- **R², price per carat (published).** The *ranking* survives — clarity 0.335
  is still nominally above color 0.332 — but the margin does not. Call it a
  dead heat, not a reversal.
- **R², absolute price (not published).** Here it genuinely does reverse:
  clarity 0.3242 against color 0.3340.
- **Slopes (published).** These *do* reverse. On averages color's step is the
  steeper one (−$631.44 against −$528.70); on individual stones it is
  clarity's (−$421.20 against −$312.70).

So the accurate statement is: **aggregation inflates R², collapses the gap
between the two grades, and reverses their slopes.** "Reorders the variables"
is only true of a basis the site does not show, and should not be used as
shorthand for what it does show.

✅ **Prose audited 13 Sep 2026 — one overstatement found and corrected.** The
page deck read *"Clarity moves the price of a pear-shaped diamond more than
color does."* That was wrong on every basis: color's step is the steeper one
(−$631.44 against −$528.70), the raw rows are a dead heat, and the only sense
in which clarity leads is tightness of fit on the aggregated data the page
itself says inflates R². The deck asserted, as the headline claim, the exact
thing the Limitations section exists to warn against.

It now reads: *"Clarity's grade averages fall more cleanly than color's, but
color's steps are worth more."* Both halves are readable straight off the
findings table. **Every other comparative sentence on the site was checked and
none overstates** — the body already said "grade averages fall more cleanly",
"color has the steeper step", and "those are two different measurements, and
neither is the third one."

✅ **Second prose audit, 13 Sep 2026 — publishing the raw rows invalidated
two more sentences, both corrected.**

Adding data to a table is not a safe edit: it changes what the prose around it
is allowed to say. Two sentences that had been accurate became false:

1. *"Color has the steeper step."* True of the averaged fit, and **reversed**
   on individual stones. Now stated per basis, with both pairs of slopes.
2. *"That last one is the 63.3%, and it is the lowest of the three."* With
   0.335 and 0.332 in the table, 0.633 is no longer the lowest of anything.
   Removed.

The **deck changed a second time**. It had read *"clarity's grade averages
fall more cleanly than color's, but color's steps are worth more"* — accurate
when the table held one basis, overstating once it held two, because the slope
half reverses. It now reads:

> Which grade moves the price more depends on the basis you ask it on — on 918
> individual stones, clarity and color are a dead heat. Together the two still
> leave more than a third of the price unexplained.

Every clause is readable off the table, and the page's headline claim is now
the page's actual finding rather than one basis presented as the answer.

### ⛔ The résumé's R² figures match no basis

Recorded 13 Sep 2026. The résumé states **R² = 0.40 for clarity versus 0.29
for color.** Checked against all three reproduced bases above: **0.40 and 0.29
correspond to nothing.** Not the pivot averages (0.909 / 0.839), not raw price
per carat (0.335 / 0.332), not raw absolute price (0.324 / 0.334).

They are not a different-but-defensible basis. They are wrong. This is the
decisive item on the résumé block list below — the site's strongest page
exists to explain why a naive comparison of these fits misleads, and a résumé
one click away carrying figures that reconcile to no computation at all would
undo it.

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

### Repository ✅ CONFIRMED 13 Sep 2026

**`github.com/nadiasrana/diamond-price-drivers`** — public, live, linked from
the study page as a `Repository` row in the record table.

Verified before linking: the repository exists, is public, returns 200, and
has real contents — a README carrying the question, the method table and the
findings; `analysis/summary-tables.xlsx`; and `data/README.md`.

`data/README.md` is the note on why the raw listing records are not published,
and it is better reasoning than anything currently on the site: visible is not
the same as licensed to redistribute, all four retailers' terms restrict
automated collection and redistribution of listing data, and aggregate
statistics derived from it are not a redistribution. It also gives a full
independent-reproduction spec — filters, per-retailer counts, field list,
grade coding, and the Rapaport edition (16 January 2026, Vol. 49 No. 3).

⚠️ **PROVENANCE GAP — the repository discloses something the site does not.**

The repository README opens with:

> **This began as a university coursework assignment (Spring 2026).** The
> dataset and brief were shared across the class, so the underlying numbers
> are not unique to me. The analysis here is my own, and has been revised
> since the original submission.

The site says **none of this**. Checked: the words *coursework*, *assignment*,
*class*, *shared*, *university* and *course* appear zero times on
`/projects/diamond-price-drivers/`.

This is now one click away from the page, which makes the omission
discoverable. Nothing on the site is false — it never claims the dataset is
uniquely hers — but the omission reads differently once a reader can see that
**she disclosed it herself and the site did not.** Note also that this
document's own line "what separates this from a coursework write-up" is
positioning against the very origin the repository states.

**Recommendation, not applied:** carry her own disclosure on the page, in her
words, near the top of *The data*. One sentence, already written by her, and
volunteering it is stronger than having it found. Suggested placement and
wording to confirm:

> This began as a university coursework assignment in Spring 2026. The dataset
> and brief were shared across the class, so the underlying numbers are not
> unique to me; the analysis is my own and has been revised since the original
> submission.

⛔ Not added without approval — it changes how the study reads, and it is her
sentence to authorise.

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
inferable. Marker stays. **This is now the only marker on the page**, and with
the raw single-variable rows published it is also the only thing between this
page and being finished.

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
- Data Analytics Intern, Archroma, Commercial Excellence — ✅ **print as
  `May – September 2026`** (updated 13 Sep 2026 to match her résumé;
  supersedes the earlier `Summer 2026` instruction)
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

## Site contract — machine-checked

**Added 13 Sep 2026.** This table is **parsed by `tools/verify.mjs` and
asserted against the built site on every run.** A row that stops being true
fails the build.

It exists because this document drifted out of step with the site four times,
and one of those — the education note quoted under *Education dates* — was
flatly false while `CONTENT.md` remained the authority a rebuild would trust. That is the
mechanism by which the five Work entries were deleted and went unnoticed for
two rebuilds. Prose claims about what is on the site cannot be checked; this
table can.

**Semantics.** `present` is checked against page body text **with marker
blocks stripped**, so a string that survives only inside a `[NEEDS CONTENT]`
placeholder does not count as published. `absent` is checked against **all**
rendered text including markers, because a marker that quotes a blocked
figure publishes it.

**Maintaining it.** Add a row whenever this document starts depending on
something being on the site, or off it. Do not delete a row to make the build
pass — a failing row means the site and this document disagree, and one of
them is wrong.

### Must be present

| String | Why it matters |
|---|---|
| `University of the Pacific` | The dual degree. Was claimed absent here and is not |
| `Northeastern` | Current degree |
| `August 2022` | Pacific start — the confirmed date, not LinkedIn's |
| `December 2025` | Pacific end — kills the compression claim |
| `Honor List` | Verified honour |
| `Merit Scholarship` | Verified honour |
| `Delta Sigma Pi` | Verified service, and the origin of the rubric instinct |
| `North Carolina` | Where she is from |
| `Raleigh, NC` | Where she is based |
| `Data analytics engineer` | The title, decided 13 Sep 2026 — see *Title* |
| `M.S. candidate, Northeastern` | The standing, paired with the title in the eyebrow and every page title |
| `github.com/nadiasrana` | Confirmed 13 Sep 2026 |
| `github.com/nadiasrana/diamond-price-drivers` | The study repository, verified live before linking |
| `linkedin.com/in/nadiasrana` | Confirmed from her profile export |
| `Archroma` | Work entry 01 |
| `Fraqt` | Work entry 02 |
| `Summer Conference` | Work entry 03 |
| `Eberhardt` | Work entry 04 |
| `Northstar` | Work entry 05 |
| `Charlotte, NC` | Archroma location |
| `Stockton, CA` | Pacific locations |
| `Remote, U.S.` | Northstar location |
| `1,080` | Archroma's headline figure, the strongest item on the page |
| `1,194` | Fraqt's only figure |
| `203` | The data dictionary |
| `31-item` | Defect log, carried in prose |
| `40-point` | Release audit, carried in prose |
| `3,000` | Summer Conference participants |
| `$6M` | Eberhardt, cleared 13 Sep 2026 |
| `918` | The diamond study sample |
| `0.909` | Clarity on grade averages |
| `0.839` | Color on grade averages |
| `0.335` | Clarity on individual stones |
| `0.332` | Color on individual stones |
| `0.633` | The combined model |
| `$1,760.15` | The rebuilt confidence interval's point estimate |
| `Entity resolution` | Toolkit, Data quality |
| `Structured evaluation` | Toolkit, and one of the four things she is positioned as |
| `Rubric adherence` | Toolkit, evidenced by Delta Sigma Pi |
| `Remote, contract, and full-time roles.` | The availability line in Now |

### Must be absent

| String | Why it is blocked |
|---|---|
| `GPA` | Tier B, no transcript seen |
| `4.00` | The GPA figure itself |
| `$45K` | Northstar revenue, held on Q1 |
| `20 engagements` | Northstar, held on Q1 |
| `12 clients` | Northstar, held on Q1 |
| `Carlson` | Not on the verified list; `CLAUDE.md` rule 4 |
| `machine learning` | Disproved by her own work log |
| `two years and nine months` | The dead compression claim |
| `919` | Her phone number stays off a public page |
| `Founding Data Lead` | Reviewed and rejected — see *Q-FRAQT* |
| `0.40 versus 0.29` | The résumé's R², which matches no reproduced basis |
| `A/B testing` | On the résumé, no supporting work anywhere. Deliberately off the site |
| `TypeScript` | Removed 13 Sep 2026 so the site agrees with her résumé |

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

**Updated 13 Sep 2026: a revised PDF landed mid-session and is now the stored
copy.** Three of the six are fixed — including both analytical errors, which
were the decisive ones. Four remain, so `site.resume.cleared` stays `false`.

| Item | Status in the revised PDF |
|---|---|
| **R² 0.40 / 0.29** | ✅ **Fixed.** Now reads "clarity and color together explain 63.3% of price variation, and the apparent gap between them collapses on individual stones (R² = 0.335 versus 0.332) once grade averaging is removed" — matching the site exactly, and framed better than the site's own deck |
| **$1,700 welded to Rapaport** | ✅ **Fixed.** Now "a $1,700/ct spread between the cheapest and most expensive retailer". Rapaport is no longer attached to it |
| **"Founding Data Lead"** | ✅ **Fixed.** Now "Data and systems design", matching the site |
| **GPA 4.00** ×2 | ⛔ still present |
| **Northstar figures** — $45K, 20 engagements, 12 clients, 45%, 80+, 100+ | ⛔ still present |
| **Phone (919) 888-9512** | ⛔ still present |
| **PostgreSQL, R** | ⛔ still present |

The original six-item table, for the record:

| In the PDF | CONTENT.md says |
|---|---|
| **GPA: 4.00**, twice | ⛔ "Tier B, no transcript seen. Off the site until confirmed" |
| **$45K revenue, 20 paid engagements, 12 clients**, plus 45% repeat, 80+ issues, 100+ materials | ⛔ "Northstar figures … until Q1 and Q8 resolve" |
| **R² = 0.40 vs 0.29 for color** | ⛔ **Cross-checked 13 Sep 2026 against all three reproduced bases: these match none of them.** Not stale — wrong. See *Full cross-check* above |
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

### ✅ Closed 13 Sep 2026 — confirmed independently, not from the PDF

These were flagged as things the résumé happened to answer. They have since
been confirmed from other sources and are on the site. **The PDF is not the
authority for any of them**, which matters: it stays unpublished, and these
stand on their own.

| Item | Value | Source |
|---|---|---|
| Fraqt dates | June – August 2026 | confirmed independently |
| LinkedIn | `linkedin.com/in/nadiasrana` | her profile export |
| Her location | Raleigh, NC. Open to remote contract work. | confirmed |
| GitHub | `github.com/nadiasrana` | ✅ confirmed 13 Sep 2026, on the site |
| Archroma location | Charlotte, NC | her work-log export |
| Northstar location | Remote, U.S. | confirmed |

⛔ **The one thing NOT taken from the résumé is the Fraqt title.** It says
"Founding Data Lead"; the site says "Data and systems design". See *Q-FRAQT*
above for why, and do not re-adopt it.

⚠️ **Fraqt's location was not supplied** and is the one gap the reinstated
`Location` row exposes. The entry prints "Not on record".

**`site.resume.cleared` stays `false`.** The six-item block list is unchanged
and the R² conflict is decisive.

---

## About paragraph ✅ APPROVED

**Supplied 13 Sep 2026 in her words, revised and approved by her the same
day. The DRAFT marker is off the site.** This is the published text:

> Hey, I'm Nadia. I have two tabby cats, a serious matcha habit, and a running
> list of places I still want to see. I grew up in North Carolina and went to
> college in California, which I loved. This summer I've been interning at
> Archroma. I like learning things I don't know yet — new foods, new tools,
> and lately anything to do with AI and data. I still make up my mind the same
> way I always have, which is slowly, and after I've actually looked at it.

⛔ **Do not edit this into something more formal.** The plainness is the point,
and it is the only unmediated voice on the site — every other sentence is
assembled from the record. The last clause is also the only place the site
says how she works, in her own words.

---

## Diamond study — "What I would do differently" ✅ CLOSED

**Supplied 13 Sep 2026. The last marker on the site is gone.** Four points,
published in her order: plan the sample per cell before collecting; balance
the cut distribution deliberately; collect across more than one day; and
record that these are listing prices, not transaction prices.

The fourth is the one a reader will not have thought of, and it is the kind of
limitation that is usually left unstated.

---

## Photographs — captions ✅

**Supplied 13 Sep 2026.** Locations, confirmed:

| File | Location | On the site |
|---|---|---|
| `IMG_3857.JPG` | Mount Tamalpais, California | **Home hero** |
| `IMG_4273.JPG` | Lake Tahoe, California | **About, secondary** |
| `nadia-headshot.jpg` | studio | **About, portrait** |
| `IMG_3013.JPG` | San Diego, California | unused — was the hero until 13 Sep 2026 |
| `IMG_3898.JPG` | Yosemite, California | unused — does not survive its crop |
| `IMG_4353.JPG` | Pacifica Beach, California | unused — does not survive its crop |
| `background.jpg` | — | ⛔ never use |

⚠️ **`IMG_3013` (San Diego) is now unused.** It was displaced when Mount
Tamalpais became the lead image. It is still graded, still cropped 3:2, and
still good; it simply has no slot. Worth a decision rather than a silent loss.

---

## Open content questions

- ~~Does the site lead with analytics roles or contractor work?~~ **Resolved:**
  analytics. The hero claim is "I build the models and the checks that decide
  whether a number can be trusted."
- ~~Photograph or none?~~ **Resolved:** a headshot, in the hero. See Q-PHOTO.
- ~~Does Fraqt appear on the site at all?~~ **Resolved:** yes, in Work as entry
  02 / 03. See Q-FRAQT for what is still missing.

### Open, in priority order

**Updated 13 Sep 2026.** Two more closed this pass: Fraqt's location, and the
decision on publishing the raw single-variable R².

1. **A cleaned résumé PDF** — the link the audience came for. Everything else
   is wired; `site.resume.cleared` is the only switch. See *Résumé PDF*.
2. **What she would do differently** on the diamond study. Not in the source
   and not inferable. The last marker on the site's strongest page.
3. **Her approval on the About paragraph**, to drop the DRAFT marker.
4. **A higher-resolution headshot**, if one exists. The current file is 400px,
   which caps the About portrait at a deliberately small size.
5. **A second project** — still the only gate on the custom domain.
