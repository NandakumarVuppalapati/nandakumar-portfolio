import type { ExperienceEntry } from "./experience-data";

// A timeline, not a resume row: a connecting line + dot on the left ties
// each entry to the next instead of the old [bar] Title —— Date pattern,
// which (once the column-grid bug was fixed) read as a literal exported
// resume list — bold title, right-aligned date, paragraph, comma-separated
// tags, repeated identically. The dot/line here is the same idea Selected
// Systems and Engineering Mindset already use elsewhere on the page (a
// numbered or marked sequence), so this section reads as part of the same
// designed site instead of a pasted-in CV section.
export function ExperienceRow({
  entry,
  isLast,
}: {
  entry: ExperienceEntry;
  isLast?: boolean;
}) {
  return (
    <div className={`relative pl-7 lg:pl-9 ${isLast ? "pb-0" : "pb-10 lg:pb-12"}`}>
      <span
        aria-hidden="true"
        className="absolute top-[7px] left-[3px] h-[7px] w-[7px] rounded-full bg-accent-cyan lg:left-[4px]"
      />
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute top-4 bottom-0 left-[6.5px] w-px bg-border lg:left-[7.5px]"
        />
      )}

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="text-lg font-medium text-foreground sm:text-xl">{entry.role}</p>
        <span className="font-mono text-[0.65rem] tracking-[0.12em] text-foreground-muted/70 uppercase">
          {entry.dateRange}
        </span>
      </div>
      <p className="mt-1 text-sm text-foreground-muted">{entry.organization}</p>

      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground-muted">
        {entry.context}
      </p>
      {entry.technologies && entry.technologies.length > 0 && (
        <p className="mt-3 font-mono text-xs tracking-[0.08em] text-foreground-muted/70">
          {entry.technologies.join(" · ")}
        </p>
      )}
    </div>
  );
}
