import { Reveal } from "@/components/ui/reveal";
import { SectionIndex } from "@/components/ui/section-index";
import { PRINCIPLES } from "./engineering-mindset-data";
import { PrincipleRow } from "./principle-row";

export function EngineeringMindset() {
  return (
    <section
      id="engineering-mindset"
      className="relative border-t border-border pt-14 pb-24 lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[96px_1fr_1fr] lg:items-start lg:gap-10">
            <SectionIndex number="03" label="ENGINEERING MINDSET" />

            <h2 className="max-w-2xl text-2xl leading-[1.15] font-light text-foreground sm:text-3xl lg:text-4xl">
              Reliability begins long before
              <br />
              something fails.
            </h2>

            <p className="text-base leading-relaxed text-foreground-muted lg:pt-1 lg:text-lg">
              Reliable data systems aren&rsquo;t defined only by the happy path. The real
              test is what happens when data arrives late, contracts change, dependencies
              fail, or downstream consumers can no longer trust what they receive.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-t border-border lg:mt-16">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.title} delayMs={index * 80}>
              <PrincipleRow principle={principle} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
