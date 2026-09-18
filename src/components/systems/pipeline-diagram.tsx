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

      <div className="flex flex-wrap items-center gap-y-3">
        {lane.nodes.map((node, i) => {
          const isActive = activeIndex === i;
          return (
            <div key={node.label} className="flex items-center">
              <button
                type="button"
                onClick={() => setActiveIndex(isActive ? null : i)}
                aria-expanded={isActive}
                aria-controls={`pipeline-detail-${laneIndex}`}
                className={`rounded-lg border px-3.5 py-2.5 text-left font-mono text-[0.72rem] tracking-[0.03em] whitespace-nowrap transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan sm:text-xs ${
                  isActive
                    ? "border-accent-cyan bg-accent-cyan/10 text-foreground"
                    : "border-border text-foreground-muted hover:border-foreground-muted/60 hover:text-foreground"
                }`}
              >
                {node.label}
              </button>
              {i < lane.nodes.length - 1 && (
                <span aria-hidden="true" className="px-2 text-foreground-muted/50">
                  →
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
