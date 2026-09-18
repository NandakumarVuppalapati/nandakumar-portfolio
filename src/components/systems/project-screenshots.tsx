import Image from "next/image";
import type { ProjectScreenshot } from "./systems-data";

// Real screenshots pulled directly from the project's own repo — not
// AI-generated art, not a mockup. Only rendered when a project actually
// has them (see the `screenshots` field in systems-data.ts).
export function ProjectScreenshots({ screenshots }: { screenshots: ProjectScreenshot[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {screenshots.map((shot) => (
        <figure key={shot.src} className="overflow-hidden rounded-xl border border-border">
          <div className="relative aspect-[16/9.6] bg-background-elevated">
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-foreground-muted">
            {shot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
