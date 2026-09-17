import Image from "next/image";
import Link from "next/link";
import type { SystemEntry } from "./systems-data";

export function SystemCard({ system }: { system: SystemEntry }) {
  return (
    <Link
      href={`/systems/${system.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated transition-colors duration-150 hover:border-accent-cyan/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-background">
        {/* Top-right, not top-left: all three generated images already bake
            their own title text into the top-left corner, so a top-left
            badge here collides with it. */}
        <span className="absolute top-3.5 right-3.5 z-10 rounded-full bg-accent-cyan px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.14em] text-background uppercase shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
          {system.badge}
        </span>
        <Image
          src={system.image}
          alt={system.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-lg leading-snug font-medium text-foreground">{system.title}</h3>
        <p className="text-sm leading-relaxed text-foreground-muted">{system.summary}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {system.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.04em] text-foreground-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-2 pt-1 text-sm font-medium text-accent-cyan">
          View project
          <span
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
