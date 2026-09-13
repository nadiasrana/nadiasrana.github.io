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

// Crop rectangles are on the ORIENTATION-CORRECTED frame, so .rotate() has to
// run before .extract(). IMG_3857 is stored landscape with EXIF orientation 8
// and renders on its side without it.
const PLATES = [
  {
    name: 'hero-canyon',
    from: 'pictures/IMG_3013.JPG',
    crop: { left: 0, top: 950, width: 1536, height: 1024 }, // 3:2
  },
  {
    name: 'portrait-hillside',
    from: 'pictures/IMG_3857.JPG',
    crop: { left: 180, top: 2047, width: 2320, height: 2900 }, // 4:5
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

// IMG_3898 and IMG_4353 are deliberately absent. Neither survives its crop:
// 3898 is a tangle of bare branches at 1330px wide, and 4353's sunset ramp is
// the furthest thing in the set from the palette. A slot left empty beats an
// image forced into it. See DESIGN_SYSTEM.md.

mkdirSync(OUT, { recursive: true });

for (const plate of PLATES) {
  const to = `${OUT}/${plate.name}.jpg`;
  const info = await grade(sharp(plate.from).rotate().extract(plate.crop))
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(to);
  const ratio = (info.width / info.height).toFixed(3);
  console.log(
    `${plate.name.padEnd(20)} ${String(info.width).padStart(4)}x${String(info.height).padEnd(4)}` +
      ` ratio ${ratio}  ${(info.size / 1024).toFixed(0)}KB  <- ${plate.from}`
  );
}
