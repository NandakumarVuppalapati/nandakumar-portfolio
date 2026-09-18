import { Reveal } from "@/components/ui/reveal";
import { SectionIndex } from "@/components/ui/section-index";
import { EXPERIENCE_ENTRIES } from "./experience-data";
import { ExperienceRow } from "./experience-row";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 border-t border-border pt-14 pb-24 lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <SectionIndex number="02" label="EXPERIENCE" className="mb-8 lg:mb-10" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <h2 className="text-2xl leading-[1.15] font-light text-foreground sm:text-3xl lg:text-4xl">
              Building systems,
              <br />
              not just pipelines.
            </h2>

            <p className="text-base leading-relaxed text-foreground-muted lg:pt-1 lg:text-lg">
              A selection of roles and engagements where I&rsquo;ve worked on data
              platforms, integration and AI-enabled solutions across different domains.
            </p>
          </div>
        </Reveal>

        {EXPERIENCE_ENTRIES.length > 0 && (
          <div className="mt-14 border-t border-border pt-12 lg:mt-16 lg:pt-14">
            {EXPERIENCE_ENTRIES.map((entry, index) => (
              <Reveal key={`${entry.organization}-${entry.dateRange}`} delayMs={index * 80}>
                <ExperienceRow entry={entry} isLast={index === EXPERIENCE_ENTRIES.length - 1} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
