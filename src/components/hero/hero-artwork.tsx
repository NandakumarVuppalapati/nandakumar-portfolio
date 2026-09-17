import Image from "next/image";

// public/portrait/herofinal.png (3762x1672) is the APPROVED, FINAL
// production portrait — served completely unprocessed via `unoptimized` so
// the browser receives this exact file: no resizing, no re-encoding, no
// WebP/AVIF conversion, no quality loss.
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
const ARTWORK_SRC = "/portrait/herofinal.png";
const ARTWORK_ALT =
  "Nandakumar Vuppalapati, AI Data Engineer, at his desk in a dark office at night.";

export function HeroArtwork() {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden lg:aspect-[2/1]">
      <Image
        src={ARTWORK_SRC}
        alt={ARTWORK_ALT}
        fill
        priority
        unoptimized
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
        unoptimized
        className="object-cover object-[78%_center]"
      />
    </div>
  );
}
