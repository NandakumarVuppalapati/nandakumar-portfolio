import { HeroArtwork, HeroArtworkMobileFull } from "./hero-artwork";

const CTA_PRIMARY_HREF = "#systems";
const CTA_SECONDARY_HREF = "#contact";

export function Hero() {
  // Hidden below a 700px-tall viewport (mobile only — see the md:hidden
  // wrapper below; a short desktop window is rare and unaffected in
  // practice). It's the least essential line in the identity block, so on a
  // short phone viewport (a fresh Safari load with the address bar still
  // expanded is commonly under 700px tall) dropping it buys back vertical
  // room, keeping the text block clear of the photo above it without
  // needing a much tighter, more artificial-looking crop on the photo
  // itself to compensate.
  const eyebrow = (
    <p className="flex items-start gap-2.5 font-mono text-[0.7rem] tracking-[0.28em] text-foreground-muted sm:text-xs [@media(max-height:700px)]:hidden">
      <span
        aria-hidden="true"
        className="hero-pulse-dot mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan"
      />
      {/* Single text-flow span (one flex item) so this wraps like normal
          text at narrow widths, instead of several loose text/element
          children fighting a nowrap flex row. Each arrow is glued to its
          preceding word via whitespace-nowrap so it can never end up
          orphaned alone at the start of a wrapped line. */}
      <span>
        DATA{" "}
        <span className="whitespace-nowrap">
          <span aria-hidden="true">→</span> SYSTEMS
        </span>{" "}
        <span className="whitespace-nowrap">
          <span aria-hidden="true">→</span> INTELLIGENCE
        </span>
      </span>
    </p>
  );

  const name = (
    // Fluid clamp() on the base (sub-640px) size instead of a fixed 2.5rem:
    // "NANDAKUMAR" in bold uppercase at a flat 2.5rem overflowed/clipped
    // past the right edge on narrow phones (~320-360px, e.g. iPhone SE) —
    // that clipped, run-off-the-edge look is what read as "stretched".
    // clamp() scales the size down with the viewport instead of hitting a
    // hard breakpoint cliff, so it stays inside the padding at any width
    // below sm: while still reaching the original 2.5rem on wider phones.
    <h1 className="text-[clamp(1.75rem,10vw,2.5rem)] leading-[0.98] tracking-tight text-foreground uppercase sm:text-5xl md:text-[2.05rem] md:leading-[0.95] lg:text-[2.73rem] xl:text-[3.41rem]">
      <span className="block font-bold">Nandakumar</span>
      <span className="block font-light">Vuppalapati</span>
    </h1>
  );

  const role = (
    // -mt-2 pulls this tighter to the name above it than the column's
    // normal item-to-item rhythm — they read as one identity unit (name +
    // title), while role -> statement -> eyebrow -> CTAs keep the full gap.
    <p className="-mt-2 font-mono text-xs tracking-[0.24em] text-accent-blue sm:text-sm">
      AI DATA ENGINEER
    </p>
  );

  const statement = (
    <p className="max-w-md text-lg leading-relaxed text-foreground-muted sm:text-xl">
      I build data systems that power analytics &amp; AI.
    </p>
  );

  const ctas = (
    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6">
      <a
        href={CTA_PRIMARY_HREF}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
      >
        View My Work
        <span
          aria-hidden="true"
          className="transition-transform duration-150 group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
      <a
        href={CTA_SECONDARY_HREF}
        // py-3 -my-3 grows the tap target to ~44px tall without adding any
        // visible size: the negative margin cancels the padding's effect on
        // surrounding layout, so it reads identically to the plain
        // underlined link it was before, just easier to hit on a phone.
        className="inline-flex items-center justify-center py-3 -my-3 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors duration-150 hover:decoration-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
      >
        Get In Touch
      </a>
    </div>
  );

  return (
    <section id="home" aria-label="Introduction" className="relative isolate scroll-mt-20">
      {/* Tablet + desktop: cinematic overlay, text sits in the photo's
          existing left negative space, subject stays on the right.
          min-h-dvh (not min-h-screen) makes this fill exactly one screen
          even on mobile browsers whose UI chrome shrinks the viewport, so
          the next section never peeks in above the fold on first load. */}
      <div className="relative hidden min-h-dvh md:block">
        <HeroArtwork />

        <div className="absolute inset-0 z-10 flex items-center overflow-hidden">
          <div className="mx-auto w-full max-w-[1600px] px-8 py-10 lg:px-12 lg:py-12 xl:px-16">
            <div className="flex flex-col gap-5 md:max-w-sm lg:max-w-xl lg:gap-7">
              {name}
              {role}
              {statement}
              {eyebrow}
              {ctas}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: the same "text lives on the photo" composition as desktop,
          not a separate stacked block — the portrait runs full-bleed behind
          the whole screen (min-h-dvh, same reasoning as the desktop wrapper:
          fills exactly one screen even where mobile browser chrome shrinks
          the viewport) with the identity block sitting directly on top of
          it, anchored toward the bottom over the gradient scrim. */}
      <div className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden md:hidden">
        <HeroArtworkMobileFull />

        <div className="relative z-10 flex flex-col gap-4 px-6 pt-16 pb-10 sm:px-8 [@media(max-height:700px)]:gap-2 [@media(max-height:700px)]:pb-6">
          {name}
          {role}
          {statement}
          {eyebrow}
          {ctas}
        </div>
      </div>
    </section>
  );
}
