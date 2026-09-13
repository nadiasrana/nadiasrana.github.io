/* Strip EXIF and XMP from the source photographs, losslessly.
 *
 *   node tools/strip-exif.mjs
 *
 * This removes the APP1 segments from each JPEG rather than re-encoding, so
 * the compressed image data is byte-identical afterwards and nothing is lost
 * to a second round of quantisation.
 *
 * Why: the originals carried GPS coordinates (IMG_3898 at Yosemite,
 * IMG_4353 at Pacifica, both to five decimal places), a camera serial number
 * shared across IMG_3013 and IMG_3857, and XMP packets. None of that belongs
 * in a public repository.
 *
 * Orientation lives in EXIF, so any image relying on an orientation flag must
 * be baked upright BEFORE its EXIF is removed. IMG_3857 is the only such file
 * (flag 8). The script checks and refuses rather than silently rotating a
 * photograph sideways.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import sharp from 'sharp';

const DIR = 'pictures';

function stripAPP1(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) throw new Error('not a JPEG');
  const out = [buf.subarray(0, 2)];
  let i = 2;
  let removed = 0;
  while (i < buf.length) {
    if (buf[i] !== 0xff) { out.push(buf.subarray(i)); break; }
    const marker = buf[i + 1];
    // Start of scan: the rest is entropy-coded data, copy verbatim.
    if (marker === 0xda) { out.push(buf.subarray(i)); break; }
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd9)) { out.push(buf.subarray(i, i + 2)); i += 2; continue; }
    const len = buf.readUInt16BE(i + 2);
    const seg = buf.subarray(i, i + 2 + len);
    const tag = seg.subarray(4, 9).toString('latin1');
    const isExif = marker === 0xe1 && (tag.startsWith('Exif') || tag.startsWith('http'));
    const isXmp = marker === 0xe1;
    if (isExif || isXmp) removed++;
    else out.push(seg);
    i += 2 + len;
  }
  return { buf: Buffer.concat(out), removed };
}

const files = (await readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f));
for (const f of files) {
  const path = `${DIR}/${f}`;
  const before = await readFile(path);
  const meta = await sharp(before).metadata();

  if (meta.orientation && meta.orientation !== 1) {
    console.log(`  ${f.padEnd(22)} SKIPPED — EXIF orientation ${meta.orientation}; bake it upright first`);
    continue;
  }

  const { buf, removed } = stripAPP1(before);
  const after = await sharp(buf).metadata();
  if (after.width !== meta.width || after.height !== meta.height) {
    console.log(`  ${f.padEnd(22)} SKIPPED — dimensions changed, refusing`);
    continue;
  }
  await writeFile(path, buf);
  console.log(
    `  ${f.padEnd(22)} ${removed} APP1 segment(s) removed  ` +
      `${before.length} -> ${buf.length} bytes  (${after.width}x${after.height})`
  );
}
