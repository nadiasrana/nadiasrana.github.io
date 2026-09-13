/* One body size.
 *
 * Every block of running prose takes --t-body. No exceptions for captions
 * that are really paragraphs, list items that are really sentences, or
 * notes. Headings, uppercase labels, the display figures and tabular data
 * are separate roles with their own steps; everything a visitor reads as
 * prose is one size.
 *
 * Asserted against the built stylesheet, because the rule is about what the
 * CSS declares. Imported by tools/verify.mjs.
 */

// Selectors whose content is prose. Add to this list when a prose block is
// added; do not remove an entry to make the build pass.
export const BODY_ROLE = [
  '.figure__caption',
  '.record',
  '.record__value',
  '.e-index__summary',
  '.timeline__what',
  '.toolkit__note',
  '.sitefoot__line',
  '.sitefoot__list',
  '.bio__lede',
  '.stack-group li',
];

// Sizes legal for a non-body role. A prose selector picking one up is the
// drift this catches.
const NON_BODY = [
  '--t-small', '--t-meta', '--t-meta-sm',
  '--t-h2', '--t-h3', '--t-h4', '--t-display', '--t-numeral',
];

// --t-deck is the standfirst under a title: larger than body, one per
// section, deliberately distinct. A role, not drift.
const DECK_OK = new Set(['.bio__lede']);

/* Split the stylesheet into { selectors[], body } pairs.
 *
 * A regex over the whole file is not good enough: an earlier version matched
 * `.record__value` against
 *
 *     table, .record__value, .evidence__value { font-variant-numeric: ... }
 *
 * found no font-size there, and skipped the selector entirely — so a prose
 * block set to --t-small passed. Parsing rules and comparing whole selector
 * tokens fixes that, and checks EVERY rule for the selector rather than the
 * first one found.
 */
function rules(css) {
  const out = [];
  // Innermost blocks only: bodies that contain no further braces. This also
  // picks up rules nested inside @media.
  for (const m of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    // Inside a media query the captured "selector" carries the @media
    // preamble; keep only what follows the last brace.
    const selText = m[1].split('{').pop();
    const selectors = selText.split(',').map((s) => s.trim().replace(/\s+/g, ' ')).filter(Boolean);
    out.push({ selectors, body: m[2] });
  }
  return out;
}

export function checkBodySize(decls, ok, notes) {
  const parsed = rules(decls);

  for (const sel of BODY_ROLE) {
    const matching = parsed.filter((r) => r.selectors.includes(sel));
    if (!matching.length) {
      notes.push(`body-size rule: no CSS found for ${sel} — selector renamed?`);
      continue;
    }

    let sawFontSize = false;
    for (const rule of matching) {
      const fs = rule.body.match(/font-size:\s*([^;]+)/);
      if (!fs) continue; // this rule sets something else; fine
      sawFontSize = true;
      const value = fs[1].trim();

      if (DECK_OK.has(sel) && value.includes('--t-deck')) continue;

      ok(
        value.includes('--t-body'),
        `body-size rule: ${sel} is prose but declares font-size: ${value} — must be var(--t-body)`
      );
      for (const bad of NON_BODY) {
        ok(!value.includes(bad), `body-size rule: ${sel} uses ${bad}, which is not a prose size`);
      }
    }
    // No font-size anywhere means it inherits from body, which is correct.
    void sawFontSize;
  }
  return BODY_ROLE.length;
}
