import type { JSX, SVGProps } from "react";

function ReliabilityMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
      <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9.5 14.3l2.8 2.8 6.2-6.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VelocityMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 14h13.5M14.5 8l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IntelligenceMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 5v3.2M14 19.8V23M5 14h3.2M19.8 14H23"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="4.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

interface Anchor {
  id: string;
  label: string;
  description: string;
  colorVar: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const ANCHORS: Anchor[] = [
  {
    id: "reliability",
    label: "RELIABILITY",
    description:
      "Systems that fail visibly, recover predictably, and protect downstream consumers.",
    colorVar: "var(--color-accent-cyan)",
    Icon: ReliabilityMark,
  },
  {
    id: "velocity",
    label: "VELOCITY",
    description: "Pipelines designed to move data from event to decision with minimal friction.",
    colorVar: "var(--color-accent-violet)",
    Icon: VelocityMark,
  },
  {
    id: "intelligence",
    label: "INTELLIGENCE",
    description:
      "Data foundations built so analytics, ML and AI products can trust what they consume.",
    colorVar: "var(--color-accent-blue)",
    Icon: IntelligenceMark,
  },
];
