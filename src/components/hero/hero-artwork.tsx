import Image from "next/image";

// public/portrait/hero-master-4k.png (12288x8192, ~57MB) is the LOCKED
// preservation master, served completely unprocessed — `unoptimized`
// bypasses Next's optimization route entirely (the browser receives this
// exact file, no derivative, no WebP/AVIF conversion).
//
// Full width, zero horizontal crop: the wrapper's aspect-ratio (5/3, i.e.
// 0.6) is shorter-relative-to-width than the source's natural 3:2 (0.667),
// which keeps object-cover in the "width-constrained" regime — the image
// always renders at exactly 100% width with NO side cropping and NO change
// to subject scale (that scale is the mathematical floor for "fills full
// width" — a crop cannot shrink the subject further without either leaving
// empty space or cropping the source into a new derivative, both
// disallowed). The only thing the aspect-ratio trims is ~10% of height off
// the TOP of the frame (empty wall space above his head) via object-bottom,
// for a tighter hero band — head/hair, shoulders, laptop, and desk all stay
// fully in frame with margin.
const ARTWORK_SRC = "/portrait/hero-master-4k.png";
const ARTWORK_ALT =
  "Nandakumar Vuppalapati, AI Data Engineer, at his desk in a dark office at night.";

export function HeroArtwork() {
  return (
    <div className="relative aspect-[5/3] w-full overflow-hidden">
      <Image
        src={ARTWORK_SRC}
        alt={ARTWORK_ALT}
        fill
        priority
        unoptimized
        className="object-cover object-bottom"
      />
    </div>
  );
}
