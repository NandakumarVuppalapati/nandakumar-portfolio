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
// The photograph's native aspect ratio is exactly 9:4 (3762/1672). At lg+
// the artwork wrapper below is aspect-[2/1] — very slightly taller than the
// native 9:4 to give the desktop hero more vertical presence — which trims
// only ~11% of width, split evenly off both edges (object-position stays at
// its default center, so the approved composition isn't shifted). That
// crop is purely horizontal: it never touches the top or bottom of the
// frame, so the subject and the full desk/laptop composition stay in view.
// Below lg the wrapper is a shorter aspect-[3/2] so the tablet hero band
// stays a comfortable height for the overlaid text; same horizontal-only
// cropping logic applies there, just a larger share.
//
// max-h-[90vh] is a safety ceiling, not a normal-case constraint: on
// standard desktop/laptop window shapes the aspect-ratio height never gets
// close to 90% of the viewport, so it never engages. It only kicks in on
// very wide + short windows (e.g. an ultrawide monitor), where it stops the
// image from growing taller than the viewport and pushing the CTAs below
// the fold — trading a bit more of the same symmetric horizontal crop for
// guaranteed visibility, still centered, still never touching the subject.
const ARTWORK_SRC = "/portrait/herofinal.png";
const ARTWORK_ALT =
  "Nandakumar Vuppalapati, AI Data Engineer, at his desk in a dark office at night.";

export function HeroArtwork() {
  return (
    <div className="relative aspect-[3/2] max-h-[90vh] w-full overflow-hidden lg:aspect-[2/1]">
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
