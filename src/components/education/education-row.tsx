import type { EducationEntry } from "./education-data";

// Same single top-to-bottom flow as ExperienceRow — see that file's
// comment. Degree + institution on top, period right-aligned on the same
// line, coursework tags flowing underneath at the same indent.
export function EducationRow({ entry }: { entry: EducationEntry }) {
  return (
    <div className="flex flex-col gap-4 py-8 lg:py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-1.5 h-4 w-[3px] shrink-0 bg-accent-violet" />
          <div>
            <p className="text-lg font-medium text-foreground sm:text-xl">{entry.degree}</p>
            <p className="mt-1 text-sm text-foreground-muted">{entry.institution}</p>
          </div>
        </div>

        <p className="font-mono text-xs whitespace-nowrap tracking-[0.14em] text-foreground-muted">
          {entry.period}
          {entry.gpa ? ` · ${entry.gpa}` : ""}
        </p>
      </div>

      <div className="max-w-3xl lg:pl-[19px]">
        <p className="font-mono text-xs tracking-[0.06em] text-foreground-muted/70">
          {entry.location}
        </p>

        {entry.coursework && entry.coursework.length > 0 && (
          <>
            <p className="mt-4 font-mono text-[0.68rem] tracking-[0.14em] text-foreground-muted/70 uppercase">
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
