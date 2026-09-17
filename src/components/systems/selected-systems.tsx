import { Reveal } from "@/components/ui/reveal";
import { SectionIndex } from "@/components/ui/section-index";
import { SYSTEMS } from "./systems-data";
import { SystemCard } from "./system-card";

export function SelectedSystems() {
  return (
    <section
      id="systems"
      className="relative scroll-mt-20 border-t border-border pt-14 pb-24 lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[96px_1fr_1fr] lg:items-start lg:gap-10">
            <SectionIndex number="04" label="SELECTED SYSTEMS" />

            <h2 className="max-w-2xl text-2xl leading-[1.15] font-light text-foreground sm:text-3xl lg:text-4xl">
              Systems built to fail
              <br />
              predictably, not silently.
            </h2>

            <p className="text-base leading-relaxed text-foreground-muted lg:pt-1 lg:text-lg">
              Three self-hosted systems, each pushed until something actually broke, then
              fixed for real. Open one for the full architecture, what failed, and the exact
              repo behind it.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {SYSTEMS.map((system, index) => (
            <Reveal key={system.slug} delayMs={index * 90}>
              <SystemCard system={system} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
