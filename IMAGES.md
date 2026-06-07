# Image slots — drop your Figma exports here

All images live in `public/img/`. Replace each placeholder `.svg` with your exported
file (keep the **same base name**, any common extension works — update the `src` in the
template if you change the extension, e.g. `hero-camera.svg` → `hero-camera.jpg`).

| Slot file (public/img/) | Used in | Suggested export size |
|---|---|---|
| `logo.svg` (in public/) | Header & footer | vector / 240×80 |
| `hero-camera.svg` | Home hero, right side | 1280×1040 (jpg/webp) |
| `about-studio-1.svg` | Home "Who We Are" – large | 840×520 |
| `about-studio-2.svg` | Home "Who We Are" – small | 600×400 |
| `about-studio-3.svg` | Home "Who We Are" – small | 600×400 |
| `client-boat / -samsung / -flipkart / -philips / -puma / -zomato .svg` | "Trusted by" strip | 280×88 (transparent) |
| `portfolio-1 … portfolio-9` | (optional) Portfolio posters | 960×540 |

## How to export from Figma
1. Select the layer/frame in Figma.
2. In the right panel → **Export** → choose PNG/JPG/SVG → **Export**.
   (Or right-click → *Copy/Paste as → Copy as PNG*.)
3. Save into `public/img/` with the matching name above.

## Notes
- The Portfolio page uses **YouTube thumbnails automatically** from the video IDs in
  `src/app/shared/data/content.ts` — you usually don't need portfolio image files.
  Replace the placeholder YouTube IDs there with your real ones.
- For best performance export as **.webp** or compressed **.jpg**; the hero loads eagerly,
  everything else lazy-loads on scroll.
