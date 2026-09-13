import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import { feedPlugin } from '@11ty/eleventy-plugin-rss';
import anchor from 'markdown-it-anchor';
import footnote from 'markdown-it-footnote';

export default function (eleventyConfig) {
  // Assets are copied, not processed. The stylesheet is hand-written and
  // stays that way; there is no CSS build.
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addWatchTarget('src/assets/css/');
  // Markdown inside assets is documentation, not a page.
  eleventyConfig.ignores.add('src/assets/**/*.md');

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPlugin(feedPlugin, {
    type: 'atom',
    outputPath: '/feed.xml',
    collection: { name: 'writing', limit: 20 },
    metadata: {
      language: 'en',
      title: 'Field Notes — Nadia Sultan Rana',
      subtitle: 'Notes on data, evidence, and the systems that carry them.',
      base: 'https://nadiasrana.com/',
      author: { name: 'Nadia Sultan Rana' },
    },
  });

  // Heading anchors, so the table of contents and deep links both work.
  eleventyConfig.amendLibrary('md', (md) =>
    md.set({ typographer: true }).use(footnote).use(anchor, {
      permalink: anchor.permalink.headerLink({ safariReaderFix: true }),
      level: [2, 3],
    })
  );

  // --- Collections ---------------------------------------------------------
  const live = (item) => !item.data.draft;
  eleventyConfig.addCollection('writing', (c) =>
    c.getFilteredByGlob('src/writing/posts/*.md').filter(live).reverse()
  );
  eleventyConfig.addCollection('notes', (c) =>
    c.getFilteredByGlob('src/notes/entries/*.md').filter(live).reverse()
  );
  eleventyConfig.addCollection('projects', (c) =>
    c.getFilteredByGlob('src/projects/entries/*').filter(live).reverse()
  );

  // --- Filters -------------------------------------------------------------
  const DF = { year: 'numeric', month: 'long', day: 'numeric' };
  eleventyConfig.addFilter('readable', (d) =>
    new Intl.DateTimeFormat('en-US', { ...DF, timeZone: 'UTC' }).format(d)
  );
  eleventyConfig.addFilter('iso', (d) => new Date(d).toISOString());
  eleventyConfig.addFilter('year', (d) => new Date(d).getUTCFullYear());

  // Reading time from the rendered text. No dependency needed.
  eleventyConfig.addFilter('readingTime', (content) => {
    const words = String(content).replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 220));
  });

  eleventyConfig.addFilter('limit', (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter('pad', (n) => String(n).padStart(2, '0'));

  // Table of contents, built from the rendered HTML rather than the source,
  // so it always matches the ids markdown-it-anchor actually emitted.
  eleventyConfig.addFilter('toc', (html) => {
    const out = [];
    const re = /<h([23])[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g;
    let m;
    while ((m = re.exec(String(html)))) {
      const text = m[3].replace(/<[^>]*>/g, '').trim();
      if (text) out.push({ level: Number(m[1]), id: m[2], text });
    }
    if (out.length < 2) return '';
    return (
      '<ol class="toc__list">' +
      out
        .map(
          (h) =>
            `<li class="toc__item toc__item--h${h.level}"><a href="#${h.id}">${h.text}</a></li>`
        )
        .join('') +
      '</ol>'
    );
  });
  eleventyConfig.addFilter('where', (arr, key, val) =>
    arr.filter((i) => i.data[key] === val)
  );

  // Group a collection by year, newest first. Used by the writing archive.
  eleventyConfig.addFilter('byYear', (items) => {
    const map = new Map();
    for (const i of items) {
      const y = new Date(i.data.date).getUTCFullYear();
      if (!map.has(y)) map.set(y, []);
      map.get(y).push(i);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  });

  // Every distinct tag across a collection.
  eleventyConfig.addFilter('allTags', (items) => {
    const s = new Set();
    for (const i of items) for (const t of i.data.tags || []) s.add(t);
    return [...s].sort();
  });

  return {
    dir: { input: 'src', output: '_site', includes: '_includes', data: '_data' },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
}
