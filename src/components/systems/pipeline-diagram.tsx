"use client";

import { useState } from "react";
import type { PipelineLane, PipelineNode } from "./systems-data";

function Lane({ lane, laneIndex }: { lane: PipelineLane; laneIndex: number }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active: PipelineNode | null = activeIndex !== null ? lane.nodes[activeIndex] : null;

  return (
    <div className="flex flex-col gap-4">
      {lane.label && (
        <p className="font-mono text-[0.68rem] tracking-[0.18em] text-foreground-muted uppercase">
          {lane.label}
        </p>
      )}

      {/* Below sm: a vertical stack with a "↓" connector — a lane with
          several nodes used to wrap as a horizontal flex-wrap row of
          [button, →] pairs, and whichever button happened to land last on a
          wrapped line kept its trailing arrow, so arrows ended up dangling
          mid-air, not visually connected to anything. Stacking top-to-bottom
          below sm: (where a lane's nodes never fit on one line anyway) reads
          as an actual flow instead of a jumbled, off-grid mess of chips. */}
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 sm:gap-y-3">
        {lane.nodes.map((node, i) => {
          const isActive = activeIndex === i;
          return (
            <div key={node.label} className="flex flex-col items-stretch sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setActiveIndex(isActive ? null : i)}
                aria-expanded={isActive}
                aria-controls={`pipeline-detail-${laneIndex}`}
                className={`w-full rounded-lg border px-3.5 py-2.5 text-left font-mono text-[0.72rem] tracking-[0.03em] whitespace-normal transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan sm:w-auto sm:text-xs sm:whitespace-nowrap ${
                  isActive
                    ? "border-accent-cyan bg-accent-cyan/10 text-foreground"
                    : "border-border text-foreground-muted hover:border-foreground-muted/60 hover:text-foreground"
                }`}
              >
                {node.label}
              </button>
              {i < lane.nodes.length - 1 && (
                <span
                  aria-hidden="true"
                  className="self-center py-1 text-foreground-muted/50 sm:px-2 sm:py-0"
                >
                  <span className="sm:hidden">↓</span>
                  <span className="hidden sm:inline">→</span>
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div
        id={`pipeline-detail-${laneIndex}`}
        className={`grid transition-[grid-template-rows] duration-200 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          {active && (
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="font-mono text-[0.66rem] tracking-[0.12em] text-accent-cyan uppercase">
                {active.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {active.detail}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Data-driven, click-to-expand architecture diagram — replaces a static
// image on the project detail page with something that reflects each
// system's real pipeline (see the `pipeline` field in systems-data.ts,
// fetched and cross-checked directly against the mermaid diagram each
// repo's own docs/architecture.md or README actually renders — not a
// paraphrase of it). Each node is a real <button>, so it's keyboard-
// navigable and screen-reader
// friendly, not just decorative.
export function PipelineDiagram({ lanes }: { lanes: PipelineLane[] }) {
  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-border bg-background-elevated p-6 lg:p-8">
      <p className="font-mono text-[0.62rem] tracking-[0.14em] text-foreground-muted/70 uppercase">
        Tap a stage for detail
      </p>
      {lanes.map((lane, i) => (
        <Lane key={lane.label ?? lane.nodes[0].label} lane={lane} laneIndex={i} />
      ))}
    </div>
  );
}
