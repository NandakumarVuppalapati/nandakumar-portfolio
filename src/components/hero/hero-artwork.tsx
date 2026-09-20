import Image from "next/image";

// public/portrait/herofinal.jpg (7524x3344, same 9:4 composition as the
// original herofinal.png, just supplied at 2x its resolution) — back to
// this style of photo as the hero image after briefly switching to the
// real, uncomposited nandakumar-original.jpeg. That swap traded this
// photo's AI-composited office backdrop for something plainer but
// unretouched; it also introduced a real problem the plainer photo didn't
// have here: its source is only 1600x1587, so filling a wide or Retina
// desktop viewport edge-to-edge forced the browser to upscale it ~1.8x,
// which read as visibly blurry/soft on a 2x display. This 7524-wide
// version doesn't have that problem at any desktop viewport this site
// targets, even at 2x DPR on a 1920-wide window. Confirmed with
// Nandakumar directly: sharpness over strict photographic authenticity is
// the trade-off he wants here.
//
// Saved as .jpg (quality 95), not .png like the original — the source
// PNG was 29.6MB, over this project's 20MB file-transfer limit. A
// visually-lossless JPEG at this quality is ~2.5MB; next/image
// re-compresses to WebP for actual delivery either way; see next.config.ts
//
// Served through next/image's optimizer at quality 100 (next.config.ts
// allowlists it) rather than `unoptimized`, so each breakpoint gets a
// properly-sized WebP file instead of the same multi-MB source regardless
// of viewport. Quality was originally 95, on the assumption that a 95/100
// WebP encode would be indistinguishable from the source — comparing the
// live site against the original file side by side said otherwise: at 95,
// WebP's encoder visibly smooths fine skin texture (pores, stubble, natural
// photo grain) on a face-sized crop of a warm, low-light shot like this
// one, reading as synthetic/over-retouched rather than like the real photo
// it is. 100 is the difference between "very good" and "as close to the
// source as a lossy format gets."
const ARTWORK_SRC = "/portrait/herofinal.jpg";
const ARTWORK_ALT =
  "Nandakumar Vuppalapati, Senior Data Engineer, at his desk in a dark office at night.";

// The photograph's native aspect ratio is exactly 9:4 (3762/1672). The
// desktop Hero is sized to fill the viewport exactly (see the `min-h-dvh`
// wrapper in hero.tsx) rather than being driven by the photo's own aspect
// ratio, so this component fills that wrapper edge-to-edge (`absolute
// inset-0`) and lets `object-cover` do the cropping — centered, so the
// desk/laptop composition stays in frame on ordinary window shapes.
export function HeroArtwork() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={ARTWORK_SRC}
        alt={ARTWORK_ALT}
        fill
        priority
        quality={100}
        sizes="(max-width: 767px) 1px, 100vw"
        className="object-cover"
      />
    </div>
  );
}

// Mobile does not reuse the desktop band — it gets its own intentional crop
// (rather than a squeezed desktop composition), weighted toward the right
// of the frame where the subject sits, per the approved mobile hierarchy:
// name/role/statement -> portrait -> CTAs. The crop trims background wall
// space, not the subject; his head, hands, laptop, and desk stay in frame.
export function HeroArtworkMobile() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <Image
        src={ARTWORK_SRC}
        alt={ARTWORK_ALT}
        fill
        priority
        quality={100}
        sizes="(min-width: 768px) 1px, 100vw"
        className="object-cover object-[78%_center]"
      />
    </div>
  );
}

// Full-bleed mobile hero background — replaces HeroArtworkMobile's separate
// "stacked block" treatment (name/role/statement, then a boxed-in photo,
// then CTAs), which read as a picture pasted in between two chunks of text
// rather than one composed hero. Desktop already runs the photo full-bleed
// with text sitting directly on top of it, in the photo's own dark left
// negative space; a tall phone crop has no equivalent open space, so a
// gradient scrim stands in for it here, heaviest where the text block sits
// at the bottom. Same "text lives on the photo" idea as desktop, adapted for
// a portrait frame instead of a wide one.
//
// The source photo is a wide 9:4 desk shot (herofinal.png, 3762x1672) — in a
// tall portrait box, object-cover's "cover" scale is always driven by
// height, not width, so the ENTIRE vertical extent of the photo is always
// visible (there is no vertical overflow left for object-position's Y value
// to crop). That put the subject's face at a fixed ~27-58% band of frame
// height regardless of viewport height. On a shorter phone viewport (e.g. a
// fresh Safari load with the address bar still expanded, effectively
// ~600-700px tall) the text block below is tall enough, relative to that
// shorter frame, that its top edge landed in the middle of that band —
// across the eyes/nose/mouth — which is the "name is overlapping the face"
// bug. Wrapping the photo in a shorter box than the frame (a div taller
// than 100% of the container, anchored to the bottom so the excess is
// clipped off the top) forces genuine vertical cropping, trimming a slice
// of empty wall space off the top so the face sits a little higher.
//
// First attempt at this used a much bigger crop (h-[132%], ~24% trimmed)
// to guarantee zero overlap at any height — but that close a crop lost the
// desk/room context around him and read as a tight, artificial headshot
// ("looks like AI") rather than the candid at-his-desk photo it actually
// is. h-[109%] (~8% trimmed) is a much gentler nudge — mostly just tightens
// the headroom above his hair — and is paired with shortHeroContentProps
// in hero.tsx (its short-viewport gap/padding tightening), so clearance
// comes from both sides instead of leaning entirely on the crop.
export function HeroArtworkMobileFull() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[109%]">
        <Image
          src={ARTWORK_SRC}
          alt={ARTWORK_ALT}
          fill
          priority
          quality={100}
          sizes="(min-width: 768px) 1px, 100vw"
          className="object-cover object-[68%_100%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/5"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent"
      />
    </div>
  );
}
