import Image from "next/image";

// public/portrait/nandakumar-original.jpeg (1600x1587, near-square) is the
// REAL photo this Hero is built from — a plain portrait against a bare dark
// wall, no staged desk/laptop/bookshelf scene. It replaces herofinal.png,
// which was a different, AI-composited image (same face, a generated
// office backdrop and props built around it) that read as synthetic under
// close inspection — exactly the kind of thing worth not having on a page
// aimed at the audience most likely to notice. This file trades that
// generated backdrop's visual variety for something plainer but genuinely
// his: a dark gradient over the wall stands in for a "scene," the same way
// the gradient-over-photo treatment already works elsewhere on this page.
//
// Served through next/image's optimizer at quality 100 (next.config.ts
// allowlists it) rather than `unoptimized`, so each breakpoint gets a
// properly-sized WebP file instead of the same ~120KB source JPEG
// regardless of viewport — small enough here that this matters less than
// it did for the old 6.9MB master, but the pattern stays consistent.
const ARTWORK_SRC = "/portrait/nandakumar-original.jpeg";
// Title bumped to "Senior Data Engineer" alongside the rest of the site —
// see experience-data.ts's header comment for the resume this traces to.
const ARTWORK_ALT = "Nandakumar Vuppalapati, Senior Data Engineer.";

// Desktop: a roughly-square source in a wide viewport means object-cover's
// scale is driven by width, not height (the opposite of the mobile case
// below) — there IS real vertical overflow here, so object-position's Y
// value actually does something, unlike it did on the old wide photo in a
// portrait mobile box. Biased toward the top of the frame (his head sits in
// the top ~45% of the source) so cropping trims shirt/torso from the
// bottom, not hair from the top. The gradient runs left-to-right rather
// than the old photo's built-in negative space — this source has none, it's
// a plain wall on both sides of him — so the gradient manufactures the same
// "text sits in the dark part of the photo" effect the desktop layout
// depends on.
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
        className="object-cover object-[50%_22%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/10"
      />
    </div>
  );
}

// Mobile does not reuse the desktop band — it gets its own intentional crop
// (rather than a squeezed desktop composition), weighted toward the right
// of the frame where the subject sits, per the approved mobile hierarchy:
// name/role/statement -> portrait -> CTAs. The crop trims background wall
// space, not the subject; his head, hands, laptop, and desk stay in frame.
//
// NOTE: written for the old herofinal.png composition (subject weighted
// right, desk visible). Unused since HeroArtworkMobileFull replaced it —
// kept only per the earlier note that it might be wanted again — so it
// hasn't been re-tuned for nandakumar-original.jpeg. Re-check the crop
// before reviving it.
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

// Full-bleed mobile hero background — the photo runs edge-to-edge behind
// the whole screen with the identity block sitting directly on top of it,
// anchored toward the bottom over a gradient scrim. Same "text lives on the
// photo" idea as desktop, adapted for a portrait frame.
//
// This source is close enough to square that, unlike the old wide desk
// photo, object-cover's height-driven scale here naturally keeps him
// framed like a portrait rather than needing the oversized-wrapper crop
// trick the old photo needed to avoid the text landing across his face —
// he already occupies roughly the top 40-45% of the frame at full height,
// leaving the lower half (shirt/torso, already the darkest part under the
// scrim) as clearance for the text block. Re-verify that clearance at a
// short viewport (~667px) before shipping any further change here, the
// same way the old crop was verified — see hero.tsx's short-height
// tightening, which still applies regardless of which photo is behind it.
export function HeroArtworkMobileFull() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={ARTWORK_SRC}
        alt={ARTWORK_ALT}
        fill
        priority
        quality={100}
        sizes="(min-width: 768px) 1px, 100vw"
        className="object-cover object-[50%_top]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent"
      />
    </div>
  );
}
