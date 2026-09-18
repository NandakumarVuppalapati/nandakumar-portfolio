import type { EducationEntry } from "./education-data";

export function EducationRow({ entry }: { entry: EducationEntry }) {
  return (
    <div className="grid grid-cols-1 gap-3 py-8 lg:grid-cols-[140px_1.1fr_1fr] lg:items-start lg:gap-10">
      <p className="font-mono text-xs tracking-[0.14em] text-foreground-muted">{entry.period}</p>

      <div className="flex items-start gap-3">
        <span aria-hidden="true" className="mt-1.5 h-4 w-[3px] shrink-0 bg-accent-violet" />
        <div>
          <p className="text-lg font-medium text-foreground sm:text-xl">{entry.degree}</p>
          <p className="mt-1 text-sm text-foreground-muted">{entry.institution}</p>
          <p className="mt-1 font-mono text-xs tracking-[0.06em] text-foreground-muted/70">
            {entry.location}
            {entry.gpa ? ` · ${entry.gpa}` : ""}
          </p>
        </div>
      </div>

      <div>
        {entry.coursework && entry.coursework.length > 0 && (
          <>
            <p className="font-mono text-[0.68rem] tracking-[0.14em] text-foreground-muted/70 uppercase">
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
          </>
        )}
      </div>
    </div>
  );
}
