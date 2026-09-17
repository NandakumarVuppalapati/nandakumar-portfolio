import type { CSSProperties } from "react";
import type { Principle } from "./engineering-mindset-data";

// The technical trace (e.g. OBSERVE -> IDENTIFY -> ISOLATE) activates once
// when the row scrolls into view: each stage briefly lifts to the
// principle's accent color, in sequence, via the `.trace-segment` /
// `trace-activate` keyframe in globals.css, which is driven purely by the
// ancestor `.reveal-visible` class the existing Reveal component already
// toggles — no extra JS. The resting and final states are both fully
// legible (foreground-muted at normal weight), so nothing is ever hidden
// waiting on the animation, and prefers-reduced-motion (handled globally)
// snaps straight to that same final state.
export function PrincipleRow({ principle }: { principle: Principle }) {
  const traceStyle = {
    "--trace-accent": principle.colorVar,
  } as unknown as CSSProperties;

  return (
    <div className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-[140px_1.3fr_1fr] lg:items-start lg:gap-10 lg:py-16">
      <p
        aria-hidden="true"
        className="font-mono text-5xl leading-none font-light text-foreground-muted/30 sm:text-6xl lg:text-7xl"
      >
        {principle.number}
      </p>

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

      <div className="lg:pt-1">
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
  );
}
