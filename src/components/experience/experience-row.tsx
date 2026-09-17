import type { ExperienceEntry } from "./experience-data";

export function ExperienceRow({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="grid grid-cols-1 gap-3 py-8 lg:grid-cols-[140px_1.1fr_1fr] lg:items-start lg:gap-10">
      <p className="font-mono text-xs tracking-[0.14em] text-foreground-muted">
        {entry.dateRange}
      </p>

      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-1.5 h-4 w-[3px] shrink-0 bg-accent-cyan"
        />
        <div>
          <p className="text-lg font-medium text-foreground sm:text-xl">{entry.role}</p>
          <p className="mt-1 text-sm text-foreground-muted">{entry.organization}</p>
        </div>
      </div>

      <div>
        <p className="text-sm leading-relaxed text-foreground-muted">{entry.context}</p>
        {entry.technologies && entry.technologies.length > 0 && (
          <p className="mt-3 font-mono text-xs tracking-[0.08em] text-foreground-muted/70">
            {entry.technologies.join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
}
