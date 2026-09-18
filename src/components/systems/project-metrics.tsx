import type { ProjectMetric } from "./systems-data";

// A scannable stat row right under the title — a reviewer skims for a few
// seconds before deciding to read the full case study, and prose alone
// doesn't surface the hard numbers fast enough. Every value here is copied
// verbatim from the postmortem/architecture copy elsewhere on the page,
// never a new figure computed just for this row.
export function ProjectMetrics({ metrics }: { metrics: ProjectMetric[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6 sm:grid-cols-4 lg:mt-10">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <p className="font-mono text-xl text-accent-cyan sm:text-2xl">{metric.value}</p>
          <p className="mt-1.5 text-xs leading-snug text-foreground-muted">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
