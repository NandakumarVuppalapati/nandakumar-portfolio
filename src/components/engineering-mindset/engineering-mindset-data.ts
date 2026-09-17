export interface Principle {
  number: string;
  title: string;
  statementLines: string[];
  supportingIdea: string;
  trace: string[];
  colorVar: string;
}

export const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Make Failure Visible",
    statementLines: [
      "What you can see, you can understand.",
      "What you can understand, you can recover.",
    ],
    supportingIdea:
      "Failures should surface with enough context to understand what broke, where it broke, and what downstream systems may be affected.",
    trace: ["OBSERVE", "IDENTIFY", "ISOLATE"],
    colorVar: "var(--color-accent-cyan)",
  },
  {
    number: "02",
    title: "Design For Recovery",
    statementLines: [
      "Resilience isn't avoiding every failure.",
      "It's knowing how the system returns to a trusted state.",
    ],
    supportingIdea:
      "Reliable systems need deliberate recovery paths — checkpoints, idempotency, replayability, and clear ownership of failed data.",
    trace: ["CHECKPOINT", "REPLAY", "RECOVER"],
    colorVar: "var(--color-accent-blue)",
  },
  {
    number: "03",
    title: "Earn Trust Before Scale",
    statementLines: [
      "Throughput matters only when the data moving through the system can be trusted.",
    ],
    supportingIdea:
      "Quality, contracts, lineage and observability should be designed into the system before throughput becomes the primary optimization target.",
    trace: ["CONTRACT", "VALIDATE", "SERVE"],
    colorVar: "var(--color-accent-violet)",
  },
];
