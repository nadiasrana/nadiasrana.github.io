# DESIGN.md

Art direction for nadiasrana.com. Read this in full before writing any CSS.

---

## The position

**A warm, quiet room with one dark object in it.** The page is built from
cream, sand and walnut, and the only near-black on it is her name. Everything
else is arranged so that the name is the thing the eye lands on and returns
to.

That position fits her specifically because her work is the same shape:
reconciliation, data dictionaries, validation rules and structured
evaluation are all quiet, warm-neutral work, and the value of it is that one
number at the end can be trusted. The room argument and the work argument are
the same argument.

If this sentence would fit any other analyst's portfolio, it is not a
position. It would not: most analyst portfolios are cold, and their loudest
element is a chart.

## Reference class

**Warm minimal interiors.** Cream walls, walnut, linen, jute, one near-black
object anchoring the room.

Not research-journal. Not SaaS. Not developer portfolio. No terminal windows,
no monospace as a primary face, no code-editor chrome, no contribution graph.
She is a data analyst, not a software engineer.

Structural flow follows `amrmahmoud.com`: generous vertical sections, large
display type, horizontal figure rails, stepped work entries.

---

## Palette

Eight roles. No hex value appears outside the `:root` block.

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#F2EDE4` | Warm off-white. The walls |
| `--ink` | `#1A120B` | Near-black anchor. The name, headings. **15.9:1** on bg |
| `--secondary` | `#3E2C1E` | All body prose. **11.4:1** on bg |
| `--muted` | `#6E5947` | Labels, captions, meta. **5.7:1** on bg |
| `--rule` | `#DDD3C3` | Hairlines only. **Never text** |
| `--sand` | `#D3C9B9` | Section fills only. **Never text** |
| `--walnut` | `#5C4430` | Non-text use only |
| `--accent` | `#1E4B49` | Teal. Links and focus ring only. **8.4:1** on bg |

**The near-black is load-bearing.** Every reference image anchors its warm
neutrals with one dark object. Here that object is the name at display size.
Never soften it to brown. The range between `--ink` and `--bg` is the only
thing stopping this from reading as flat beige.

**Use the whole range.** Name in ink, body in secondary, labels in muted, one
section filled with sand. Not everything at mid-brown. A page set entirely in
`--secondary` is the failure mode this palette invites.

### Contrast on the sand section — checked, and one exception

Measured, not assumed:

| On `--sand` | Ratio | Verdict |
|---|---|---|
| `--ink` | 11.3:1 | ✅ |
| `--secondary` | 8.1:1 | ✅ |
| `--accent` | 5.9:1 | ✅ |
| `--muted` | **4.03:1** | ❌ **fails 4.5:1** |

So tinted sections need no adjustment *for ink* — but `--muted` is not safe on
sand. Inside the sand section, label text steps up to `--secondary`. This is
the only place a role is remapped, and it is remapped because a number said
so.

Do not lighten the accent: `#27615D` fails on sand. Do not use `#977F65` for
text anywhere; it is 3.25:1.

---

## Type

Self-hosted variable fonts in `assets/fonts/`. Both confirmed variable:
Clash Display `wght 200–700`, Bespoke Serif `wght 300–800`.

- **Clash Display 700** — the name only. The largest thing on the page.
  Tracking `-0.03em`, line-height `0.98`.
- **Clash Display 600** — section headings, work entry titles, rail figures.
- **Bespoke Serif 400** — all body. **Not 300**; light strokes break up at
  body size.
- **Bespoke Serif 300** — only at 22px and above, for a lead paragraph.

```css
@font-face {
  font-family: 'Clash Display';
  src: url('../fonts/ClashDisplay-Variable.woff2') format('woff2-variations');
  font-weight: 200 700;
  font-display: swap;
}
```

Same pattern for Bespoke Serif at `font-weight: 300 800`.

### The scale — ratio 1.25 on a 16px root

Every size on both pages comes from this table. No arbitrary values.

| Token | Mobile | Desktop ≥720px | Face / weight | Used for |
|---|---|---|---|---|
| `--t-micro` | 12.8px | 12.8px | Bespoke 400 | Eyebrow, stack level labels, tags |
| `--t-small` | 16px | 16px | Bespoke 400 | Meta, captions, rail labels, nav |
| `--t-body` | 20px | 20px | Bespoke 400 | All body prose |
| `--t-lead` | 25px | 31.25px | Bespoke **300** | Hero claim, section lead |
| `--t-h3` | 25px | 31.25px | Clash 600 | Work entry titles |
| `--t-h2` | 31.25px | 39.06px | Clash 600 | Section headings |
| `--t-figure` | 39.06px | 48.83px | Clash 600 | Rail and entry figures |
| `--t-display` | 48.83px | 76.29px | Clash **700** | The name. Nothing else |

Line-heights: `0.98` display, `1.05` h2/h3, `1.2` figures, `1.55` body,
`1.35` lead, `1.4` small.

**Body measure 62–68 characters.** `--measure: 65ch`.

**The lead has its own measure: `40ch`.** `ch` scales with font-size, so
`--measure` applied at `--t-lead` produces a line ~1015px wide, longer in
absolute terms than the body underneath it. A lead that runs wider than its
own body text is backwards. At `40ch` the lead occupies 767px against the
body's 798px. Any rule set at a larger step must have its measure checked in
**pixels, not in `ch`**.

Bespoke 300 is forbidden below 22px, so `--t-lead` at 25px is the smallest
place it may appear. Everything smaller is 400.

---

## Spacing

Geometric, ratio ~1.5 from a 4px base, rounded to a 4px grid.

| Token | px |
|---|---|
| `--s1` | 4 |
| `--s2` | 8 |
| `--s3` | 12 |
| `--s4` | 20 |
| `--s5` | 32 |
| `--s6` | 48 |
| `--s7` | 72 |
| `--s8` | 112 |
| `--s9` | 168 |

**Three values do most of the page**, and that is what makes the rhythm
visible at a squint:

- `--s4` (20px) inside a component — heading to its paragraph, label to its
  figure
- `--s6` (48px) between blocks within a section — entry to entry, paragraph
  group to rail
- `--s8` / `--s9` (112 / 168px) between sections

The other six exist for tags, rules and optical nudges. If a fourth value
starts doing structural work, the rhythm is gone.

---

## Layout

Shell: `max-width: 72rem`, padding-inline `--s5` mobile, `--s7` desktop.
Nothing is centred by default.

### 375px

```
┌───────────────────────────────┐
│ Nadia Sultan Rana      W A C  │  masthead
├───────────────────────────────┤
│ DATA ANALYST                  │  eyebrow, muted, micro
│                               │
│ Nadia                         │  Clash 700 / 48.83
│ Sultan                        │  ink
│ Rana                          │
│                               │
│ I build the models and the    │  claim, Bespoke 300 / 25
│ checks that decide whether…   │  secondary
│                               │
│ email    resume               │  accent
│                               │
│ ┌───────────┐                 │
│ │ headshot  │                 │  placeholder until supplied
│ └───────────┘                 │
├═══════════════════════════════┤
│▓ About                       ▓│  ← SAND FILL
│▓                             ▓│
│▓ one-line claim (lead)       ▓│
│▓ short paragraph             ▓│
│▓                             ▓│
│▓  1,080      1,194           ▓│  rail, 2×2 on mobile
│▓  routed     passages        ▓│  figure Clash 600 / 39
│▓                             ▓│  label Bespoke 400 / 16
│▓  203        3               ▓│  label uses --secondary
│▓  fields     systems         ▓│     (muted fails on sand)
├═══════════════════════════════┤
│ Work                          │
│                               │
│ 01 / 03                       │  counter, muted, micro
│ Archroma                      │  Clash 600 / 25
│ meta line                     │
│ narrative paragraph           │
│ 203 fields   3 systems        │  entry figures, inline
│ [tag] [tag] [tag]             │
│                               │
│ 02 / 03  Fraqt                │
│ 03 / 03  Northstar            │
├───────────────────────────────┤
│ Projects                      │
│ Diamond price drivers →page   │
├───────────────────────────────┤
│ Stack                         │
│ Analysis                      │
│   Excel          DAILY        │
│   Power BI       DAILY        │
│ Programming                   │
│   Python         EXPOSURE     │
├───────────────────────────────┤
│ Contact                       │
└───────────────────────────────┘
```

### 1440px

```
┌──────────────────────────────────────────────────────────────┐
│ Nadia Sultan Rana                      Work About Contact    │
├──────────────────────────────────────────────────────────────┤
│ DATA ANALYST                                                 │
│                                            ┌──────────────┐  │
│ Nadia Sultan                               │              │  │
│ Rana                                       │   headshot   │  │
│                                            │              │  │
│ I build the models and the checks that     └──────────────┘  │
│ decide whether a number can be trusted.                      │
│                                                              │
│ email    resume                                              │
├══════════════════════════════════════════════════════════════┤
│▓ About                                                      ▓│  SAND
│▓ claim (lead, 31.25)                                        ▓│
│▓ paragraph at 65ch                                          ▓│
│▓                                                            ▓│
│▓  1,080        1,194         203          3                 ▓│  4-across rail
│▓  routed to    federal       field data   systems           ▓│
│▓  human review passages      dictionary   reconciled        ▓│
├══════════════════════════════════════════════════════════════┤
│ Work                                                         │
│                                                              │
│ 01 / 03   Archroma                                           │
│           narrative · figures · tags                         │
│                                                              │
│    02 / 03   Fraqt                        ← stepped indent   │
│              narrative · figures · tags                      │
│                                                              │
│       03 / 03   Northstar Insight Group   ← stepped further  │
│                 narrative · tags (no figures, Q1 open)       │
├──────────────────────────────────────────────────────────────┤
│ Projects   ·   Stack   ·   Contact                           │
└──────────────────────────────────────────────────────────────┘
```

The stepped indent on Work is the deliberate asymmetry. It is 0 / `--s5` /
`--s8`, applied only at desktop, and it never pushes the body past its
measure.

---

## The one memorable element

**The name, in Clash Display 700, in near-black, at 76px, as the only dark
mass on a warm page.**

It is the dark object in the room. Everything else — the sand panel, the
walnut rules, the teal that appears once per section — stays quiet so that
the anchor reads as an anchor. If a reader remembers one thing about this
page at a glance, it is that one word-block sitting in the cream.

Defence: the alternative anchors were a chart (wrong reference class, and it
would make the diamond study the subject of the site) and the headshot
(makes it a personal page rather than a work page, and it is not yet
supplied). The name is the only element that is both hers and structural.

---

## Craft standards

- **Mobile-first.** Design and check 375 before 1440.
- **Hierarchy through weight, measure, colour and position — not size alone.**
  If two levels differ only in font-size, the hierarchy is weak.
- **Deliberate asymmetry.** Nothing centred by default.
- **One accent, once per section.** A colour used twenty times is a theme.
  The teal's only jobs are links and the focus ring.
- **Whitespace is structural.** The three-value spacing rhythm is the
  structure; generous margins are not the same thing.
- **Optical alignment.** Large type gets negative tracking, small type gets
  positive. Figures align on their digits, not their boxes.

## Quality floor

- Semantic HTML, headings in order, real landmarks.
- Visible focus ring: **2px solid `--accent`, 3px offset**. Never
  `outline: none`.
- Body text 4.5:1 minimum, measured. See the sand table above.
- `prefers-reduced-motion` respected.
- **Works fully with JavaScript disabled.** There is no JavaScript.
- Self-hosted fonts, `font-display: swap`, preloaded, no layout shift.

## The kill list

**Colour and surface**
- Cream with terracotta or warm-clay accent (this palette's nearest cliché —
  the accent here is teal precisely to avoid it)
- Gradient washes, glassmorphism, frosted panels, blurred blobs
- The same soft grey shadow under everything
- Any shadow at all

**Structure**
- Content chopped into identical rounded cards
- One border-radius on everything
- A full-bleed hero with a big centred headline and two buttons
- Icon grids of technology logos
- Skill bars or percentage proficiency ratings — the Daily / Comfortable /
  Exposure labels exist to solve this honestly

**Typography**
- Accenting one word of a headline in a different colour
- Meta strings joined with middle dots
- "WORD — fragment" constructions with a spaced em dash
- A "→" appended to link and button text
- Inter, or any face chosen because it is the safe default

**Motion**
- Fade-and-slide-up on scroll, hover transform on cards, counters that count
  up, typing animations, particle backgrounds
- **No motion beyond a link underline transition.**

**Content**
- Stock photography or generic illustration
- "Let's build something amazing together"

## Copy

Plain verbs, sentence case, no filler. Say what she did and what it produced.
Specificity is the whole game.

No "passionate", "results-driven", "dynamic", "leveraged", "spearheaded",
"innovative", "cutting-edge".

**Position her as data modeling, reconciliation, data quality and structured
evaluation.** Not pipeline engineering. Her Archroma work log shows no
pipeline work, and the Fraqt implementation was substantially AI-assisted.
Never write a claim she cannot defend cold in an interview.

See `CONTENT.md` for what is verified, what is blocked, and which figures may
appear.
