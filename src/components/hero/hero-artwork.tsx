import Image from "next/image";

// public/portrait/herofinal.png (3762x1672) is the APPROVED, FINAL
// production portrait. Served through next/image's optimizer at quality 95
// (next.config.ts allowlists it specifically for this photo, to stay ahead
// of visible compression softness) rather than `unoptimized`, so each
// breakpoint gets a properly-sized, format-negotiated (WebP/AVIF) file
// instead of the same ~6.9MB source PNG regardless of viewport. The two
// components below are complementary: whichever one is CSS-hidden at the
// current breakpoint (see hero.tsx) declares `sizes` as an effectively-zero
// width there, so the browser fetches only a trivial placeholder for it
// instead of a full responsive image it will never display.
//
// The photograph's native aspect ratio is exactly 9:4 (3762/1672). The
// desktop Hero is now sized to fill the viewport exactly (see the
// `min-h-dvh` wrapper in hero.tsx) rather than being driven by the photo's
// own aspect ratio, so this component fills that wrapper edge-to-edge
// (`absolute inset-0`) and lets `object-cover` do the cropping — centered,
// so the desk/laptop composition stays in frame on ordinary window shapes.
// On a very wide + short window this crops a bit more off the top/bottom
// than before; that's the deliberate trade-off for the Hero always filling
// the first screen, which is now the higher priority.
const ARTWORK_SRC = "/portrait/herofinal.png";
const ARTWORK_ALT =
  "Nandakumar Vuppalapati, AI Data Engineer, at his desk in a dark office at night.";

export function HeroArtwork() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={ARTWORK_SRC}
        alt={ARTWORK_ALT}
        fill
        priority
        quality={95}
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
        quality={95}
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
export function HeroArtworkMobileFull() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={ARTWORK_SRC}
        alt={ARTWORK_ALT}
        fill
        priority
        quality={95}
        sizes="(min-width: 768px) 1px, 100vw"
        className="object-cover object-[68%_22%]"
      />
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
