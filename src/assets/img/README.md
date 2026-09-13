# assets/img/

Graded, cropped plates. **Generated — do not edit by hand.**

Produced from the originals in `pictures/` by:

```
node tools/grade-images.mjs
```

The crop rectangles and the colour grade are design decisions and live in
that script. They are committed rather than regenerated at build time so a
diff can show them, and so the output does not depend on a transitive
dependency's version.

At build time these are resized and re-encoded to AVIF/WebP/JPEG at four
widths by the `image` shortcode in `.eleventy.js`. They are deliberately not
in the passthrough-copy set.

| Plate | Ratio | From | Placement |
|---|---|---|---|
| `hero-canyon.jpg` | 3:2 | `IMG_3013.JPG` | Home hero |
| `portrait-hillside.jpg` | 4:5 | `IMG_3857.JPG` | About portrait |
| `lake-wall.jpg` | 3:2 | `IMG_4273.JPG` | About secondary |

`IMG_3898.JPG` and `IMG_4353.JPG` are deliberately unused. Neither survives
its crop; see DESIGN_SYSTEM.md section 6.

**No stock photography, no generated imagery.**
