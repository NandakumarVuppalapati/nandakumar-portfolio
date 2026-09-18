import type { CSSProperties } from "react";
import type { Principle } from "./engineering-mindset-data";

// Single top-to-bottom flow instead of a 3-column [number | title | idea]
// grid — the old layout left a wide dead gap between the title block and
// the supporting-idea column whenever the idea text was short. The big
// faded numeral now sits as a fixed-width visual flourish on the left,
// with the title, statement, supporting idea and trace all flowing
// underneath it in one column, so there's no split-with-a-gap look at any
// viewport width.
//
// The technical trace (e.g. OBSERVE -> IDENTIFY -> ISOLATE) still activates
// once when the row scrolls into view: each stage briefly lifts to the
// principle's accent color, in sequence, via the `.trace-segment` /
// `trace-activate` keyframe in globals.css, driven purely by the ancestor
// `.reveal-visible` class the existing Reveal component already toggles —
// no extra JS. The resting and final states are both fully legible
// (foreground-muted at normal weight), so nothing is ever hidden waiting on
// the animation, and prefers-reduced-motion (handled globally) snaps
// straight to that same final state.
export function PrincipleRow({ principle }: { principle: Principle }) {
  const traceStyle = {
    "--trace-accent": principle.colorVar,
  } as unknown as CSSProperties;

  return (
    <div className="flex items-start gap-5 py-10 lg:gap-8 lg:py-16">
      <p
        aria-hidden="true"
        className="w-[1ch] shrink-0 font-mono text-5xl leading-none font-light text-foreground-muted/30 sm:text-6xl lg:w-[2ch] lg:text-7xl"
      >
        {principle.number}
      </p>

      <div className="min-w-0 flex-1">
        <div className="flex items-stretch gap-4">
          <span
            aria-hidden="true"
            className="w-[3px] shrink-0"
            style={{ backgroundColor: principle.colorVar }}
          />
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-[0.1em] text-foreground uppercase sm:text-base">
              {principle.title}
            </p>
            <p className="text-2xl leading-snug font-light text-foreground sm:text-3xl lg:text-[2rem]">
              {principle.statementLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < principle.statementLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="mt-5 max-w-2xl lg:pl-[19px]">
          <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
            {principle.supportingIdea}
          </p>
          <p
            className="mt-4 font-mono text-xs tracking-[0.18em] text-foreground-muted/70"
            style={traceStyle}
          >
            {principle.trace.map((stage, index) => (
              <span key={stage}>
                <span className="trace-segment" style={{ animationDelay: `${index * 200}ms` }}>
                  {stage}
                </span>
                {index < principle.trace.length - 1 && (
                  <span aria-hidden="true" className="mx-2 text-foreground-muted/40">
                    →
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
