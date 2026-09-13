/* One-off image preparation. Run by hand, not on every build:
 *
 *   node tools/grade-images.mjs
 *
 * Crops and grades the source photographs in pictures/ into
 * src/assets/img/. The crop rectangles and the grade are design decisions
 * and belong in the repository where a diff can show them, which is why the
 * output is committed rather than regenerated at build time.
 *
 * `sharp` is already present under @11ty/eleventy-img. Nothing new is
 * installed, and nothing here runs in CI.
 *
 * See DESIGN_SYSTEM.md section 6 for the reasoning and the measured crops.
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'src/assets/img';

// One grade, applied identically to every image. Five photographs across four
// colour temperatures cannot sit on an ivory palette ungraded; they read as a
// camera roll. Reduced saturation, warmed, blacks lifted slightly.
const grade = (pipeline) =>
  pipeline
    .modulate({ saturation: 0.6, brightness: 1.03 })
    .linear(0.92, 14)
    .recomb([
      [1.04, 0, 0],
      [0, 1.0, 0],
      [0, 0, 0.93],
    ]);

// The studio headshot gets a gentler version of the same move, and this is a
// deliberate exception rather than an inconsistency.
//
// The grade above exists to reconcile four outdoor colour temperatures with
// an ivory palette. A studio portrait on a warm neutral backdrop is already
// in that palette. Rendered side by side, the full grade desaturates skin to
// the point of looking unwell and lifts the blazer's blacks into a muddy
// grey. This keeps the family resemblance -- saturation eased, a slight warm
// shift, blacks lifted a little -- without damaging the two things the
// photograph is actually of.
const gradePortrait = (pipeline) =>
  pipeline
    .modulate({ saturation: 0.88, brightness: 1.02 })
    .linear(0.96, 6)
    .recomb([
      [1.015, 0, 0],
      [0, 1.0, 0],
      [0, 0, 0.975],
    ]);

// Crop rectangles are on the ORIENTATION-CORRECTED frame, so .rotate() has to
// run before .extract(). IMG_3857 is stored landscape with EXIF orientation 8
// and renders on its side without it.
const PLATES = [
  {
    // Hero. Mount Tamalpais. 2912x5184 after EXIF orientation, so this is the
    // only source with the pixels for a full-width lead image.
    name: 'hero-tamalpais',
    from: 'pictures/IMG_3857.JPG',
    crop: { left: 0, top: 1500, width: 2912, height: 1941 }, // 3:2
  },
  {
    name: 'portrait-headshot',
    from: 'pictures/nadia-headshot.jpg',
    // No crop: the source is 400x400 and every pixel of it is needed.
    // It is a 400px square export, which is the smallest usable file on the
    // site -- see the note below.
    crop: null,
    grade: gradePortrait,
  },
  {
    name: 'lake-wall',
    from: 'pictures/IMG_4273.JPG',
    // Cropping the left edge alone is not enough: the second person's arm
    // covers roughly the left 16%, but their knee reaches about 33% at the
    // bottom of the frame. This band clears both.
    crop: { left: 308, top: 614, width: 1228, height: 819 }, // 3:2
  },
];

// Deliberately absent, all four:
//
//   IMG_3898  a tangle of bare branches at 1330px wide; no crop rescues it.
//   IMG_4353  the sunset ramp is the furthest thing in the set from the
//             palette, and cropping the sky out removes the photograph.
//   IMG_3857  was the stand-in for the missing headshot. The headshot now
//             exists, and keeping both a studio portrait and a full-figure
//             portrait of the same person is a gallery, not a composition.
//   background.jpg  a stock-looking coastline with no relationship to her or
//             to the work, and a saturated cyan that fights the ivory. It
//             stays in pictures/, unused.
//
// A slot left empty beats an image forced into it. See DESIGN_SYSTEM.md.

mkdirSync(OUT, { recursive: true });

for (const plate of PLATES) {
  const to = `${OUT}/${plate.name}.jpg`;
  // .rotate() must precede .extract(): IMG_3857 is stored landscape with an
  // EXIF rotation flag, and a crop applied to the unrotated frame lands in
  // the wrong place.
  let pipeline = sharp(plate.from).rotate();
  if (plate.crop) pipeline = pipeline.extract(plate.crop);
  const info = await (plate.grade || grade)(pipeline)
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(to);
  const ratio = (info.width / info.height).toFixed(3);
  console.log(
    `${plate.name.padEnd(20)} ${String(info.width).padStart(4)}x${String(info.height).padEnd(4)}` +
      ` ratio ${ratio}  ${(info.size / 1024).toFixed(0)}KB  <- ${plate.from}`
  );
}
