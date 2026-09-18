import type { EducationEntry } from "./education-data";

// A card, not another resume row — this reuses the same rounded-2xl
// bordered-card language Selected Systems already established elsewhere
// on the page, instead of stacking a third identical [bar] Title —— Date
// list under Experience and Education. The degree with real transcript
// coursework (the master's) gets the fuller, featured treatment; the
// bachelor's — degree and institution only, no transcript on file — gets
// the compact size.
export function EducationCard({
  entry,
  featured,
}: {
  entry: EducationEntry;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background-elevated ${
        featured ? "p-6 lg:p-8" : "p-6"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
        <div>
          <p
            className={`font-medium text-foreground ${
              featured ? "text-xl sm:text-2xl" : "text-lg"
            }`}
          >
            {entry.degree}
          </p>
          <p className="mt-1.5 text-sm text-foreground-muted">{entry.institution}</p>
          <p className="mt-1 font-mono text-xs tracking-[0.06em] text-foreground-muted/70">
            {entry.location}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-[0.65rem] tracking-[0.1em] text-foreground-muted">
          {entry.period}
          {entry.gpa ? ` · ${entry.gpa}` : ""}
        </span>
      </div>

      {entry.coursework && entry.coursework.length > 0 && (
        <div className="mt-6 border-t border-border pt-5">
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-foreground-muted/70 uppercase">
            Relevant coursework
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {entry.coursework.map((course) => (
              <span
                key={course}
                className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.04em] text-foreground-muted"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
