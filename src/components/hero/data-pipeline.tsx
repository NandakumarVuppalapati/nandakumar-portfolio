import type { CSSProperties } from "react";

interface FlowPath {
  id: string;
  d: string;
  color: string;
  opacity: number;
  packets?: { duration: number; delay: number }[];
  branch?: { duration: number; delay: number };
}

interface FlowNode {
  cx: number;
  cy: number;
  color: string;
  delay: number;
}

interface FlowLabel {
  x: number;
  y: number;
  text: string;
}

// INGEST -> PROCESS -> VALIDATE -> ENRICH -> INTELLIGENCE, told as a handful
// of restrained, undulating flowing curves (signal trajectories, not a line
// chart) rather than a literal architecture diagram. Pure CSS/SVG, no client
// JS. Absolutely positioned within the hero at a fixed viewport-relative
// footprint (see hero.tsx) so it never encroaches on the photo's face zone.
const PATHS: FlowPath[] = [
  {
    id: "ingest-a",
    d: "M-20 200C90 230 170 160 270 185C370 210 450 140 550 158C640 174 720 120 810 100",
    color: "var(--color-accent-cyan)",
    opacity: 0.16,
    packets: [
      { duration: 11, delay: 0 },
      { duration: 16.5, delay: 5 },
    ],
  },
  {
    id: "ingest-b",
    d: "M-15 140C70 120 150 175 240 150C340 122 420 170 520 140C610 114 700 150 800 110",
    color: "var(--color-accent-blue)",
    opacity: 0.14,
    packets: [
      { duration: 13.5, delay: 2.4 },
      { duration: 19, delay: 8 },
    ],
  },
  {
    id: "process-mid",
    d: "M-10 230C100 245 200 200 300 220C400 240 480 190 570 175C650 162 730 130 820 105",
    color: "var(--color-accent-cyan)",
    opacity: 0.18,
    packets: [
      { duration: 10, delay: 1.2 },
      { duration: 14.5, delay: 6.5 },
    ],
  },
  {
    id: "validate-branch",
    d: "M270 185C300 215 310 245 295 260",
    color: "var(--color-accent-violet)",
    opacity: 0,
    branch: { duration: 9, delay: 3 },
  },
  {
    id: "intelligence-arrival",
    d: "M780 105C800 95 815 85 830 72",
    color: "var(--color-accent-amber)",
    opacity: 0.19,
    packets: [{ duration: 12, delay: 4 }],
  },
];

const NODES: FlowNode[] = [
  { cx: -20, cy: 200, color: "var(--color-accent-cyan)", delay: 0 },
  { cx: -15, cy: 140, color: "var(--color-accent-blue)", delay: 1.5 },
  { cx: -10, cy: 230, color: "var(--color-accent-cyan)", delay: 3 },
  { cx: 270, cy: 185, color: "var(--color-accent-violet)", delay: 2 },
  { cx: 830, cy: 72, color: "var(--color-accent-amber)", delay: 0.7 },
];

const LABELS: FlowLabel[] = [
  { x: 6, y: 222, text: "INGEST" },
  { x: 250, y: 112, text: "PROCESS" },
  { x: 320, y: 250, text: "VALIDATE" },
  { x: 555, y: 168, text: "ENRICH" },
  { x: 748, y: 55, text: "INTELLIGENCE" },
];

export function DataPipeline() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[6%] left-0 z-[5] hidden h-[27vh] w-[58vw] lg:block"
    >
      <svg
        viewBox="0 0 900 260"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        {PATHS.map((path) => (
          <path
            key={path.id}
            d={path.d}
            fill="none"
            stroke={path.color}
            strokeWidth={1.2}
            strokeLinecap="round"
            className={path.branch ? "pipeline-branch-fade" : "pipeline-path"}
            style={
              {
                "--base-opacity": path.opacity,
                animationDuration: path.branch
                  ? `${path.branch.duration}s`
                  : path.packets
                    ? `${path.packets[0].duration}s`
                    : undefined,
                animationDelay: path.branch
                  ? `${path.branch.delay}s`
                  : path.packets
                    ? `${path.packets[0].delay}s`
                    : undefined,
                animationName: path.packets ? "pipeline-path-glow" : undefined,
                opacity: !path.branch && !path.packets ? path.opacity : undefined,
              } as CSSProperties
            }
          />
        ))}

        {PATHS.flatMap((path) =>
          (path.packets ?? []).map((packet, index) => (
            <circle
              key={`${path.id}-packet-${index}`}
              r={2}
              fill={path.color}
              className="pipeline-packet"
              style={
                {
                  offsetPath: `path('${path.d}')`,
                  animationDuration: `${packet.duration}s`,
                  animationDelay: `${packet.delay}s`,
                } as CSSProperties
              }
            />
          )),
        )}

        {NODES.map((node) => (
          <circle
            key={`${node.cx}-${node.cy}`}
            cx={node.cx}
            cy={node.cy}
            r={2}
            fill={node.color}
            className="pipeline-node"
            style={{ animationDelay: `${node.delay}s` }}
          />
        ))}

        {LABELS.map((label) => (
          <text key={label.text} x={label.x} y={label.y} className="pipeline-label font-mono">
            {label.text}
          </text>
        ))}
      </svg>
    </div>
  );
}
