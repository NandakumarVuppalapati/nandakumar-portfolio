"use client";

import type { CSSProperties } from "react";
import { getTechIcon } from "./tech-icons-data";

// Renders each techStack entry as a tile. When the technology has a
// verified official mark (see tech-icons-data.ts), it shows that logo,
// neutral-toned at rest and switching to the real brand color on
// hover/focus. Anything without a verified mark still renders — as a
// plain text tile, matching the rest of the site's tag-chip language —
// rather than guessing at a logo that might not be accurate.
export function TechStackGrid({ techStack }: { techStack: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {techStack.map((tech) => {
        const icon = getTechIcon(tech);
        return (
          <div
            key={tech}
            tabIndex={icon ? 0 : undefined}
            className="group flex items-center gap-3 rounded-lg border border-border px-3.5 py-3 transition-colors duration-150 hover:border-foreground-muted/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
          >
            {icon && (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-foreground-muted transition-colors duration-150"
                style={
                  icon.hex
                    ? ({ "--tech-hex": `#${icon.hex}` } as CSSProperties)
                    : undefined
                }
              >
                <path
                  d={icon.path}
                  fill="currentColor"
                  className={icon.hex ? "group-hover:fill-[var(--tech-hex)]" : "group-hover:text-foreground"}
                />
              </svg>
            )}
            <span className="truncate font-mono text-xs tracking-[0.04em] text-foreground-muted transition-colors duration-150 group-hover:text-foreground">
              {icon ? icon.title : tech}
            </span>
          </div>
        );
      })}
    </div>
  );
}
