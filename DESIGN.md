# DESIGN.md

Art direction for nadiasrana.com. Read this in full before writing any CSS.

---

## The bar

This site is competing against two things: portfolios that are visibly
templated, and portfolios that are visibly AI-generated. Both are now the
norm, which means the baseline reader assumption is that a portfolio site is
noise. The site has to earn attention in the first three seconds by looking
like a person made a decision.

"Clean and modern" is not a direction. It is the absence of one.

## Reference class — get this right or everything downstream is wrong

She is a **data analyst**, not a software engineer. Do not reach for
developer-portfolio conventions: no terminal windows, no monospace as the
primary face, no `> whoami` hero, no green-on-black, no fake command prompt,
no code-editor chrome, no GitHub contribution graph as decoration.

The correct neighbours are research studios, editorial data journalism, and
scientific publishing. Places where the visual argument is *this person
thinks carefully and shows their reasoning*. Think of the visual discipline
of a well-set journal or a considered data-journalism feature, not of a
SaaS landing page.

Her actual background is unusual and should inform the look: biology and
business, wet-lab research and operations analytics, evaluation rubrics and
dashboards. Precision, measurement, criteria, evidence. There is real
material there for a visual identity. Use it.

## Mandatory process — do not skip

**Pass 1: propose, do not build.** Produce a design plan and stop. It must
contain:

1. **A stated position.** One sentence: what this site is arguing visually
   and why it fits her specifically. If that sentence would fit any other
   analyst's portfolio, it is not a position.
2. **Palette.** 4–6 named hex values with the role of each. Say what informed
   the choice. "It looks professional" is not a reason.
3. **Type.** One or two families, named, with their roles and why they were
   chosen over the obvious candidates. Include the full scale with sizes,
   weights, and line-heights. Body measure under 80 characters.
4. **Layout.** ASCII wireframes for desktop and for 375px mobile. State the
   grid, the alignment logic, and the spacing scale.
5. **The one memorable element.** Name it explicitly and defend it. Everything
   else stays quiet in service of it.

**Pass 2: self-review the plan before coding.** Ask honestly: if I had been
given a generic prompt for "analyst portfolio", would I have produced roughly
this? If yes, revise the part that is generic and state what changed and why.

**Pass 3: build.** Only after the plan is approved.

**Pass 4: critique.** Screenshot desktop and mobile. Review your own output
against this brief. Name three things that are weak and fix them. Then apply
Chanel's rule — remove one thing.

## Craft standards

These are what actually separate high-end from competent:

- **Optical alignment over mathematical.** Punctuation hangs. Large type gets
  negative tracking; small type gets positive. Cap-height alignment, not
  bounding-box alignment.
- **A real type scale.** Pick a ratio and hold it. Every size on the page
  comes from the scale. No arbitrary 17px.
- **A real spacing scale.** Same principle. Vertical rhythm should be
  visible if you squint.
- **Hierarchy through more than size.** Weight, measure, colour, position,
  and space. If the only differentiator between two levels is font-size, the
  hierarchy is weak.
- **Type carries the personality.** If the page would look identical in
  Inter, the typography is not doing design work.
- **Deliberate asymmetry beats centred everything.** Centred layouts are the
  default because they require no decisions.
- **Whitespace is structural, not leftover.** Generous margins are not the
  same as considered space.
- **One accent, used rarely.** An accent colour used five times is an accent.
  Used twenty times it is a theme, and it stops meaning anything.

## Quality floor, built in from the start

Not a polish step at the end:

- Mobile-first. Design and check 375px before desktop.
- Visible, well-designed keyboard focus states. Not the browser default, and
  not `outline: none`.
- Real contrast ratios, checked. Body text at 4.5:1 minimum.
- `prefers-reduced-motion` respected.
- Semantic HTML. Headings in order. Landmarks. Alt text that says something.
- Fully functional with JavaScript disabled.
- Self-hosted fonts with `font-display: swap`. No layout shift.
- Fast. This is a static site; there is no excuse for it not to be.

## The kill list

These are the current tells. Every one of them is legitimate in some brief
and wrong here, because they appear regardless of subject:

**Colour and surface**
- Cream background near #F4F1EA with terracotta or warm-clay accent
- Near-black background with one acid green or vermilion accent
- Tinted near-black (#0B0B0B, #111) standing in for black
- Gradient washes as decoration
- Glassmorphism, frosted panels, blurred blobs
- The same soft grey shadow `rgba(0,0,0,.1)` under everything

**Structure**
- Content chopped into identical rounded cards
- One border-radius applied to everything regardless of hierarchy
- 01 / 02 / 03 numbered markers on content that is not a sequence
- A full-bleed hero with a big centred headline and two buttons
- Hairline-rule broadsheet pastiche

**Typography**
- Tracked-out ALL-CAPS eyebrow labels above headings
- Accenting one word of a headline in a different colour or italic
- Meta strings joined with middle dots
- "WORD — fragment" constructions with a spaced em dash
- Monospace for small data labels
- A "→" appended to link and button text
- Inter, or any face chosen because it is the safe default

**Motion**
- Fade-and-slide-up on every section as it scrolls into view
- Hover transform on every card
- Typing animations, counters that count up, particle backgrounds

**Content**
- Stock photography or generic illustration
- Icon grids of technology logos
- Skill bars or percentage ratings of proficiency
- A "Let's build something amazing together" closer

## Copy

Plain verbs, sentence case, no filler. Say what she did and what it produced.
Describe, do not sell. Specificity is the whole game: "reviewed 142 financial
aid pages against a seven-point rubric" beats "detail-oriented analyst" by an
enormous margin, and it is the kind of sentence that cannot be generated
without real work behind it.

No "passionate", "results-driven", "dynamic", "leveraged", "spearheaded",
"innovative", "cutting-edge".
