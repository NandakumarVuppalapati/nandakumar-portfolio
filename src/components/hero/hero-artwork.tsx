import Image from "next/image";

// public/portrait/hero-master-4k.png (12288x8192, ~57MB) is the LOCKED
// preservation master. This is a fidelity-first pass: served completely
// unprocessed — `unoptimized` bypasses Next's optimization route entirely
// (the browser receives this exact file, not a resized/recompressed
// derivative or a WebP/AVIF conversion), and no `fill`/object-fit/object-
// position is used, so the image renders at its own natural 3:2 composition
// (height auto) rather than being cropped to fill a container. Displayed at
// 72% width (left-aligned, zero cropping — locked scale, do not adjust
// further) so the subject reads distant/environmental; the page's own dark
// background shows through the remaining space on the right as intentional
// negative space.
const ARTWORK_SRC = "/portrait/hero-master-4k.png";
const ARTWORK_ALT =
  "Nandakumar Vuppalapati, AI Data Engineer, at his desk in a dark office at night.";

export function HeroArtwork() {
  return (
    <Image
      src={ARTWORK_SRC}
      alt={ARTWORK_ALT}
      width={12288}
      height={8192}
      priority
      unoptimized
      className="block h-auto w-[72%]"
    />
  );
}
