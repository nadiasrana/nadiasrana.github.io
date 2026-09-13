import Image from '@11ty/eleventy-img';
import anchor from 'markdown-it-anchor';
import footnote from 'markdown-it-footnote';
import path from 'node:path';
import site from './src/_data/site.js';

export default function (eleventyConfig) {
  // Assets are copied, not processed. The stylesheet is hand-written and
  // stays that way; there is no CSS build.
  eleventyConfig.addPassthroughCopy({ 'src/assets/css': 'assets/css' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/fonts': 'assets/fonts' });
  // The résumé ships only once site.resume.cleared is true. Until then the
  // file lives in the repo but never reaches _site, so the figures CONTENT.md
  // blocks are not reachable at a URL. See src/_data/site.js.
  if (site.resume.cleared) {
    eleventyConfig.addPassthroughCopy({ 'src/assets/doc': 'assets/doc' });
  }
  eleventyConfig.addWatchTarget('src/assets/css/');
  // src/assets/img holds the graded source plates. They are resized and
  // re-encoded by the `image` shortcode below rather than copied, so they
  // are deliberately NOT in the passthrough set.
  eleventyConfig.ignores.add('src/assets/**/*.md');

  // Heading anchors, so deep links work on the one long page that has them.
  eleventyConfig.amendLibrary('md', (md) =>
    md.set({ typographer: true }).use(footnote).use(anchor, {
      permalink: anchor.permalink.headerLink({ safariReaderFix: true }),
      level: [2, 3],
    })
  );

  // --- Images --------------------------------------------------------------
  // @11ty/eleventy-img was already a dependency and was never wired up.
  // Using it here satisfies responsive images with no new dependency.
  //
  // Every source is a phone export: four of the five originals are 1330-1536px
  // wide. `widths` must not promise sizes the source cannot supply, so the
  // list stops at 1280 and eleventy-img declines to upscale beyond the
  // original regardless.
  const WIDTHS = [400, 640, 900, 1280];

  // MediaFigure. Slots: src, alt, caption — all three required, and a missing
  // one fails the build rather than rendering a shorter figure.
  //
  // `meta` was a fourth slot until 13 Sep 2026. Once the supplied captions
  // carried the locations it had nothing true left to hold and was printing
  // the bare word "Photograph". A slot with no real content is filler, so it
  // was removed rather than filled.
  //
  // This is a shortcode rather than a Nunjucks macro because image generation
  // is async: `{% set x %}{% image %}{% endset %}` captures synchronously and
  // silently produces an empty string. The first build of this redesign
  // shipped a hero figure with no image inside it for exactly that reason.
  eleventyConfig.addAsyncShortcode(
    'mediaFigure',
    async function (src, alt, caption, sizes = '100vw', loading = 'lazy', wide = true, extraClass = '') {
      for (const [name, value] of Object.entries({ src, alt, caption })) {
        if (!value || !String(value).trim()) {
          throw new Error(`MediaFigure: missing required slot "${name}" for ${src}`);
        }
      }
      if (String(alt).trim() === String(caption).trim()) {
        // alt and caption do different jobs and are never the same string.
        throw new Error(`MediaFigure: alt duplicates caption for ${src}`);
      }

      const file = path.join('src/assets/img', src);
      const metadata = await Image(file, {
        widths: WIDTHS,
        formats: ['avif', 'webp', 'jpeg'],
        outputDir: '_site/assets/img/',
        urlPath: '/assets/img/',
        filenameFormat: (id, s, width, format) =>
          `${path.basename(s, path.extname(s))}-${width}.${format}`,
      });

      const img = Image.generateHTML(metadata, {
        alt,
        sizes,
        loading,
        decoding: 'async',
      });

      return [
        `<figure class="figure${wide ? ' figure--wide' : ''}${extraClass ? ' ' + extraClass : ''}">`,
        `<div class="figure__media">${img}</div>`,
        `<figcaption class="figure__caption">${caption}</figcaption>`,
        '</figure>',
      ].join('');
    }
  );

  // --- Collections ---------------------------------------------------------
  const live = (item) => !item.data.draft;
  eleventyConfig.addCollection('projects', (c) =>
    c.getFilteredByGlob('src/projects/entries/*.md').filter(live).reverse()
  );

  // --- Filters -------------------------------------------------------------
  const DF = { year: 'numeric', month: 'long', day: 'numeric' };
  eleventyConfig.addFilter('readable', (d) =>
    new Intl.DateTimeFormat('en-US', { ...DF, timeZone: 'UTC' }).format(d)
  );
  eleventyConfig.addFilter('iso', (d) => new Date(d).toISOString());
  eleventyConfig.addFilter('limit', (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter('pad', (n) => String(n).padStart(2, '0'));
  eleventyConfig.addFilter('where', (arr, key, val) =>
    arr.filter((i) => i.data[key] === val)
  );

  return {
    dir: { input: 'src', output: '_site', includes: '_includes', data: '_data' },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
}
