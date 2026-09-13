# CLAUDE.md

Instructions for Claude Code working in this repository.

## What this is

The personal portfolio site for **Nadia Sultan Rana**, a data analytics
professional. M.S. Data Analytics Engineering candidate at Northeastern,
currently or recently a Data Analytics Intern at Archroma.

Deployed to GitHub Pages at the custom domain **nadiasrana.com**.

Audience: hiring managers and recruiters for data analytics, analytics
engineering, business intelligence, and business analysis roles, plus
AI-evaluation contractor work. Most will spend under ninety seconds here.
Many arrive from a LinkedIn link on a phone.

The site's one job: make a reader believe she can do analytical work, using
evidence they can inspect.

## Stack — do not change without being asked

**Amended 12 Sep 2026, with approval.** The site is now built with Eleventy
as a dev-only dependency and deployed to GitHub Pages via GitHub Actions.

The reason for the original rule was durability: *"should still build and
deploy untouched in three years."* That reason is preserved, not discarded.
Eleventy emits plain static HTML and CSS — the same output the hand-authored
version produced — and ships **no client framework and no runtime
dependency**. The exception was made because the site went from 3 pages to
21, and a shared masthead across 21 hand-edited files is the failure mode the
original rule did not anticipate.

What still holds:

- **No CSS framework.** No Tailwind, no Bootstrap. `styles.css` is
  hand-written and copied through unprocessed.
- **No client-side framework.** No React, no Vue, no islands.
- **One JavaScript file**, 80 lines, for an image reveal and copy buttons.
  Everything works with it disabled.
- **Dev dependencies only.** Nothing ships to the browser from `node_modules`.

- Plain HTML, CSS, and vanilla JS at the output layer.
- No CSS framework. No Tailwind, no Bootstrap.
- Self-host fonts in `assets/fonts/` or use a single well-chosen web font.
  Do not load four families.
- Everything must work if JavaScript fails.

Reason: GitHub Pages serves this directly, and it should still build and
deploy untouched in three years.

## Truthfulness rules — these are not negotiable

This site makes factual claims about a real person to real employers.

1. **Never invent.** No employers, titles, dates, tools, projects, clients,
   metrics, outcomes, or results that were not supplied. Plausible filler is
   invention.
2. **Never write a number she did not supply.** Not "improved efficiency by
   30%", not "3,000+ records" unless it is in the source material. Write the
   sentence without the number.
3. **Placeholder content must be obviously fake.** Use `TKTK` or
   `[NEEDS CONTENT: …]`. Never lorem ipsum, and never plausible-sounding
   filler copy that could survive to production by accident.
4. **Nothing confidential.** No Archroma internal data, no University of the
   Pacific student or applicant records, no Delta Sigma Pi applicant
   materials, no unpublished lab data. If a project used private data, it is
   described in general terms or not at all.
5. If you are unsure whether something is true, leave a
   `[NEEDS CONTENT: question]` marker and say so. Do not guess.

See `CONTENT.md` for what is verified and what is still missing.

## Design direction

**See `DESIGN.md`. Read it in full before writing any CSS.**

It defines the reference class, a mandatory plan-then-build process, craft
standards, an accessibility floor, and a kill list of current design clichés.
Do not skip the plan step. Do not begin coding until the plan is approved.

## Working style

- Small commits with real messages. This repo is public; the history is part
  of the impression.
- Audit before changing. When asked to improve something, read it and say
  what is weak before editing.
- One change at a time so it can be checked in the browser.
- Take screenshots and critique your own output before declaring it done.

## What to borrow from shadcn (without using it)

The stack is plain HTML and CSS. shadcn itself is **not** used — it requires
React, Tailwind, and a build step, and its visual defaults are on the
`DESIGN.md` kill list. But four of its ideas are good and should be copied:

**1. Semantic CSS custom properties, declared once.** Every colour, radius,
and spacing value is a named token in `:root`. Nothing hardcodes a hex value
outside that block. Name them by role, not by appearance — `--text-muted`,
not `--grey-400` — so the palette can change without a find-and-replace.

**2. One radius token.** `--radius`, used everywhere a corner is rounded.
But apply it with judgment: not every element needs a rounded corner, and
uniform radius on everything is one of the tells.

**3. Visible, designed focus states.** Never `outline: none`. Use a ring that
is clearly visible on every background in the palette, with an offset so it
reads as separate from the element. Test by tabbing through the whole page
with the mouse untouched.

**4. Components own their styles.** Each component's CSS lives in one place
and does not reach outside itself. No global selectors fighting each other,
no `!important`.

## Accessibility: native first

Use the native element before reaching for ARIA.

- Navigation: a `<nav>` with a real list of `<a>` elements.
- Mobile menu toggle: `<details>`/`<summary>`, or a `<button>` with
  `aria-expanded`. Not a div with a click handler.
- Any modal: the native `<dialog>` element, which handles focus trapping and
  Escape for free.
- Forms: real `<label>` elements associated with real inputs. Never
  placeholder-as-label.

Native elements are keyboard accessible and screen-reader correct by default.
Most accessibility bugs come from replacing them with divs.

## Visual checking

Playwright MCP is available. Use it. After any visual change, screenshot at
375px and 1440px and review your own output before calling the change done.
Do not ask the user to check something you can check yourself.

## Deployment

- GitHub Pages, `main` branch.
- `CNAME` file in the root containing `nadiasrana.com`.
- Apex domain, so DNS needs A records pointing at GitHub's Pages IPs plus a
  `www` CNAME. Confirm the current IPs from GitHub's documentation at the
  time of setup rather than hardcoding remembered values.
- Enforce HTTPS in the repository's Pages settings once the domain verifies.
