import type { ExperienceEntry } from "./experience-data";

// Single top-to-bottom flow instead of a 3-column grid — the old
// [date | role | description] layout left a wide dead gap in the middle
// whenever the description was short, and the date column was narrow
// enough that long ranges ("DEC 2025 – PRESENT") wrapped unevenly between
// rows. Here the date sits inline with the role (right-aligned, one line,
// non-wrapping), and the description/tags flow underneath at the same
// indent as the role text.
export function ExperienceRow({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="flex flex-col gap-4 py-8 lg:py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-1.5 h-4 w-[3px] shrink-0 bg-accent-cyan" />
          <div>
            <p className="text-lg font-medium text-foreground sm:text-xl">{entry.role}</p>
            <p className="mt-1 text-sm text-foreground-muted">{entry.organization}</p>
          </div>
        </div>

        <p className="font-mono text-xs whitespace-nowrap tracking-[0.14em] text-foreground-muted">
          {entry.dateRange}
        </p>
      </div>

      <div className="max-w-3xl lg:pl-[19px]">
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
