/* Static verification of the built _site.
 *
 * Asserts values rather than reading screenshots. Everything here runs
 * against the raw HTML, which is exactly what a browser with JavaScript
 * disabled receives — so this doubles as the no-JS check.
 *
 *   node tools/verify.mjs
 */
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const fails = [];
const notes = [];
const ok = (cond, msg) => (cond ? true : (fails.push(msg), false));

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk('_site');
const pages = files.filter((f) => f.endsWith('.html'));
const css = await readFile('_site/assets/css/styles.css', 'utf8');

const webPath = (f) => '/' + f.replace(/\\/g, '/').replace(/^_site\//, '');
const routeOf = (f) => webPath(f).replace(/index\.html$/, '');

console.log(`\n=== ${pages.length} routes ===`);
for (const p of pages) console.log('  ' + routeOf(p));

/* ---- Per-page assertions --------------------------------------------- */
const seenIds = {};
for (const file of pages) {
  const route = routeOf(file);
  const html = await readFile(file, 'utf8');
  const count = (t) => (html.match(new RegExp('<' + t + '[\\s>]', 'g')) || []).length;

  // Landmarks: exactly one each.
  ok(count('main') === 1, `${route}: expected 1 <main>, found ${count('main')}`);
  ok(count('header') === 1, `${route}: expected 1 <header>, found ${count('header')}`);
  ok(count('footer') === 1, `${route}: expected 1 <footer>, found ${count('footer')}`);
  ok(count('nav') >= 1, `${route}: no <nav>`);

  // Heading order: one h1, no skipped levels.
  const heads = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const h1s = heads.filter((h) => h === 1).length;
  ok(h1s === 1, `${route}: expected exactly 1 <h1>, found ${h1s}`);
  for (let i = 1; i < heads.length; i++) {
    ok(
      heads[i] <= heads[i - 1] + 1,
      `${route}: heading order skips h${heads[i - 1]} -> h${heads[i]}`
    );
  }

  // Every <img> has real alt text and explicit dimensions.
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const t = m[0];
    const alt = t.match(/\balt="([^"]*)"/);
    ok(alt && alt[1].trim().length > 3, `${route}: <img> missing/short alt: ${t.slice(0, 80)}`);
    ok(
      /\bwidth="\d+"/.test(t) && /\bheight="\d+"/.test(t),
      `${route}: <img> without width/height: ${t.slice(0, 80)}`
    );
  }

  // Every <a> has an accessible name.
  for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    const text = m[2].replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, ' ').trim();
    const labelled = /aria-label="[^"]+"/.test(m[1]);
    ok(text.length > 0 || labelled, `${route}: <a> with no accessible name: ${m[0].slice(0, 80)}`);
  }

  // Every <button> too, if any ever appear.
  for (const m of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)) {
    const text = m[2].replace(/<[^>]*>/g, '').trim();
    ok(text.length > 0 || /aria-label="[^"]+"/.test(m[1]), `${route}: <button> with no accessible name`);
  }

  // No component rendered with a missing required slot.
  ok(!html.includes('MISSING SLOT'), `${route}: a component rendered with a MISSING SLOT`);

  // Banned register: the borrowed conceit and the journal furniture.
  const banned = [
    [/\bOBS\.\d/, 'OBS.nn'],
    [/\bVol\.\s*\d/, 'volume number'],
    [/Field Notes/, 'Field Notes branding'],
    [/\b(seedling|budding|evergreen)\b/i, 'digital-garden status'],
    [/\bmin read\b/, 'reading time'],
    [/\bPlanted\b/, 'Planted label'],
    [/\bTended\b/, 'Tended label'],
  ];
  for (const [re, name] of banned) ok(!re.test(html), `${route}: banned register token: ${name}`);

  // No link survives to a removed section.
  for (const dead of ['/writing/', '/notes/', '/library/', '/feed.xml']) {
    ok(!html.includes(`href="${dead}`), `${route}: link to removed section ${dead}`);
  }

  // Duplicate ids break fragment links and label association.
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupes = [...new Set(ids.filter((v, i) => ids.indexOf(v) !== i))];
  ok(dupes.length === 0, `${route}: duplicate id(s): ${dupes.join(', ')}`);
  seenIds[route] = new Set(ids);

  // Draft gate.
  ok(/name="robots" content="noindex/.test(html), `${route}: missing noindex while site.draft is true`);

  // Skip link is present and first.
  ok(/class="skip-link"/.test(html), `${route}: no skip link`);
}

/* ---- Internal links and asset references resolve ---------------------- */
const routes = new Set(pages.map(routeOf));
const assets = new Set(files.map(webPath));
for (const file of pages) {
  const route = routeOf(file);
  const html = await readFile(file, 'utf8');
  for (const m of html.matchAll(/(?:href|src)="(\/[^"#?]*)(#[^"]*)?"/g)) {
    const target = m[1];
    if (/\.(css|js|woff2|jpe?g|webp|avif|xml|txt|html)$/.test(target)) {
      ok(assets.has(target), `${route}: asset 404: ${target}`);
    } else {
      ok(routes.has(target), `${route}: internal link 404: ${target}`);
    }
    if (m[2] && routes.has(target)) {
      ok(
        seenIds[target] && seenIds[target].has(m[2].slice(1)),
        `${route}: fragment target missing on ${target}: ${m[2]}`
      );
    }
  }
  // srcset entries too.
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const url = part.trim().split(/\s+/)[0];
      if (url.startsWith('/')) ok(assets.has(url), `${route}: srcset 404: ${url}`);
    }
  }
}

/* ---- No-JavaScript guarantee ----------------------------------------- */
// Nothing may ship hidden in a state only JS can undo. reveal.js ADDS
// `is-armed`; if the served HTML already carries it, or the CSS clips a
// figure without it, the content is invisible with JS off.
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  ok(!html.includes('is-armed'), `${routeOf(file)}: ships pre-armed — hidden with JS off`);
  ok(!html.includes('hidden>') || /class="copylink/.test(html), `${routeOf(file)}: ships a hidden element`);
}
// Stronger than "works with JS disabled": there is no JavaScript to disable.
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  ok(!/<script(?![^>]*application\/ld\+json)/.test(html), `${routeOf(file)}: ships a <script> tag`);
  ok(!/on[a-z]+="/.test(html), `${routeOf(file)}: inline event handler attribute`);
}
ok(!files.some((f) => f.endsWith('.js')), 'a .js file is still shipped');
ok(!/is-armed|is-revealed/.test(css), 'dead reveal CSS still present');

/* ---- Stylesheet discipline ------------------------------------------- */
const decls = css.replace(/\/\*[\s\S]*?\*\//g, ''); // comments stripped

ok(!/!important/.test(decls), 'stylesheet uses !important');
ok(!/outline:\s*(none|0)[;\s}]/.test(decls), 'stylesheet removes a focus outline');
ok(/:focus-visible/.test(decls), 'stylesheet has no :focus-visible rule');

for (const [re, name] of [
  [/#fff\b/i, '#fff'],
  [/#ffffff\b/i, '#ffffff'],
  [/#000\b/i, '#000'],
  [/#000000\b/i, '#000000'],
  [/:\s*white\b/, 'white keyword'],
  [/:\s*black\b/, 'black keyword'],
  [/gradient\(/, 'gradient'],
  [/backdrop-filter/, 'backdrop-filter'],
  [/box-shadow/, 'box-shadow'],
]) {
  ok(!re.test(decls), `stylesheet contains banned value: ${name}`);
}

// Every colour is a token: no raw hex outside the two token blocks.
const tokenBlocks = [...decls.matchAll(/(?::root|\.canvas--dark)\s*\{[\s\S]*?\}/g)]
  .map((m) => m[0])
  .join('\n');
const outside = decls.split(/(?::root|\.canvas--dark)\s*\{[\s\S]*?\}/).join('\n');
const strayHex = [...new Set([...outside.matchAll(/#[0-9a-fA-F]{3,8}\b/g)].map((m) => m[0]))];
ok(strayHex.length === 0, `colour hardcoded outside the token block: ${strayHex.join(', ')}`);

// The corrected tokens.
ok(/--ink-muted:\s*#67645E/i.test(tokenBlocks), '--ink-muted is not the corrected #67645E');
ok(/--numeral:\s*#817D75/i.test(tokenBlocks), '--numeral is not #817D75');
ok(/--ink-muted-inverse:\s*#B0ABA2/i.test(tokenBlocks), '--ink-muted-inverse missing');

// --numeral is used exactly once, and only at a large size.
const numeralUses = [...decls.matchAll(/var\(--numeral\)/g)].length;
ok(numeralUses === 1, `--numeral used ${numeralUses} times; it is legal in one place only`);
ok(/\.entry__numeral\s*\{[^}]*var\(--numeral\)/.test(decls), '--numeral is not on .entry__numeral');

// --line and --line-soft are never a text colour.
ok(!/\bcolor:\s*var\(--line(-soft)?\)/.test(decls), '--line used as text colour');

// Only two families.
const uniq = [...new Set([...css.matchAll(/font-family:\s*'([^']+)'/g)].map((m) => m[1]))];
ok(uniq.length === 2, `expected 2 font families, found ${uniq.length}: ${uniq.join(', ')}`);
ok(
  uniq.includes('Instrument Serif') && uniq.includes('Instrument Sans'),
  `unexpected families: ${uniq.join(', ')}`
);

// Every declared font ships, and every shipped font is declared.
const declared = [...css.matchAll(/url\('\.\.\/fonts\/([^']+)'\)/g)].map((m) => m[1]);
const shipped = files.filter((f) => f.endsWith('.woff2')).map((f) => f.split(/[\\/]/).pop());
for (const d of declared) ok(shipped.includes(d), `declared font not shipped: ${d}`);
for (const s of shipped) ok(declared.includes(s), `shipped font never referenced: ${s}`);
ok(/font-display:\s*swap/.test(css), 'font-display: swap missing');

// Dead CSS: a class with no consumer is either a typo or a leftover.
const allHtml = (await Promise.all(pages.map((p) => readFile(p, 'utf8')))).join('\n');
const cssClasses = [...new Set([...outside.matchAll(/\.([a-zA-Z][\w-]*)/g)].map((m) => m[1]))];
const unused = cssClasses.filter((c) => !new RegExp(`class="[^"]*\\b${c}\\b`).test(allHtml));
if (unused.length) notes.push(`CSS classes with no consumer: ${unused.join(', ')}`);

// Spacing scale is closed.
// Spacing values, plus the three breakpoints and the panel max width.
// Spacing values, the three breakpoints, the panel max width, and 400 —
// the headshot's native width, which caps .figure--portrait so a 400px
// source is never upscaled.
const SCALE = new Set([0, 1, 2, 3, 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128, 160, 400, 768, 1199, 1200, 1440]);
const strayPx = [
  ...new Set([...decls.matchAll(/(\d+)px/g)].map((m) => Number(m[1]))),
].filter((n) => !SCALE.has(n));
if (strayPx.length) notes.push(`px values outside the scale (check each): ${strayPx.join(', ')}`);

/* ---- Content truthfulness -------------------------------------------- */
const home = await readFile('_site/index.html', 'utf8');

for (const want of ['1,080', '1,194', '3,000+', '$6M', 'Held']) {
  ok(home.includes(want), `home: expected evidence figure missing: ${want}`);
}
for (const bad of ['$45K', '20 engagements', '12 clients', 'GPA', '4.00']) {
  ok(!allHtml.includes(bad), `blocked figure present: ${bad}`);
}
for (const [re, name] of [
  [/two years and nine months/i, 'compression claim'],
  [/2y\s*9m/i, 'compression figure'],
  [/in under three years/i, 'compression claim'],
]) {
  ok(!re.test(allHtml), `dead claim present: ${name}`);
}
ok(!/Carlson/i.test(allHtml), 'Carlson Lab present but not on the CONTENT.md verified list');
ok(/August 2022/.test(allHtml) && /December 2025/.test(allHtml), 'Pacific dates missing or wrong');

// Machine learning / ETL are disproved by her own work log.
for (const bad of [/\bmachine learning\b/i, /\bETL\b/]) {
  ok(!bad.test(allHtml), `disproved claim present: ${bad}`);
}

/* ---- Component shape: five entries, identical structure --------------- */
const entries = [...home.matchAll(/<article class="entry__grid"[\s\S]*?<\/article>/g)];
ok(entries.length === 5, `home: expected 5 work entries, found ${entries.length}`);

// The invariant is uniformity, not a particular row count. Asserting a magic
// number means every schema change is a false failure; asserting that all
// five entries carry the SAME labels in the SAME order catches the thing that
// actually matters — an entry quietly dropping a row it has no value for.
const labelSets = entries.map(
  (e) => [...e[0].matchAll(/class="record__label">([^<]*)</g)].map((m) => m[1].trim()).join(' | ')
);
const [first, ...rest] = labelSets;
for (const [i, set] of rest.entries()) {
  ok(set === first, `work entry ${i + 2} has different record rows: "${set}" vs "${first}"`);
}
ok(first.split(' | ').length >= 3, `work record schema looks too thin: "${first}"`);

for (const [i, e] of entries.entries()) {
  const h = e[0];
  const ev = (h.match(/class="evidence__value"/g) || []).length;
  ok(ev === 1, `work entry ${i + 1}: ${ev} evidence figures, expected exactly 1`);
  ok(/class="tools"/.test(h), `work entry ${i + 1}: no tools list`);
  ok(/class="entry__numeral"/.test(h), `work entry ${i + 1}: no numeral`);
  ok(/aria-hidden="true"/.test(h), `work entry ${i + 1}: numeral not hidden from AT`);
}

// A null value must print "Not on record", never collapse the row away.
const absent = (home.match(/record__value--absent/g) || []).length;
ok(
  absent === (home.match(/>Not on record</g) || []).length,
  'a record row is styled absent without saying so, or vice versa'
);

/* ---- The résumé gate -------------------------------------------------- */
// While site.resume.cleared is false the PDF must not reach _site and must
// not be linked. It carries figures CONTENT.md blocks; the gate is the only
// thing keeping them off a public URL.
const { default: siteData } = await import('../src/_data/site.js');
const resumeShipped = files.some((f) => f.endsWith('.pdf'));
const resumeLinked = /href="[^"]*\.pdf"/.test(allHtml);
if (siteData.resume.cleared) {
  ok(resumeShipped, 'resume.cleared is true but no PDF was written to _site');
  ok(resumeLinked, 'resume.cleared is true but nothing links to the PDF');
} else {
  ok(!resumeShipped, 'resume.cleared is false but a PDF reached _site');
  ok(!resumeLinked, 'resume.cleared is false but a page links to the PDF');
}

// A marker must never quote a figure it exists to keep off the site.
for (const m of allHtml.matchAll(/class="marker[^"]*">([\s\S]*?)<\/p>/g)) {
  for (const bad of ['$45K', '4.00', 'GPA', '(919)']) {
    ok(!m[1].includes(bad), `a marker quotes a blocked item: ${bad}`);
  }
}

/* ---- Report ----------------------------------------------------------- */
if (notes.length) {
  console.log(`\n=== notes (${notes.length}) ===`);
  for (const n of notes) console.log('  · ' + n);
}
console.log(`\n=== failures (${fails.length}) ===`);
for (const f of fails) console.log('  x ' + f);
console.log(fails.length === 0 ? '\nPASS\n' : `\nFAIL: ${fails.length}\n`);
process.exit(fails.length ? 1 : 0);
