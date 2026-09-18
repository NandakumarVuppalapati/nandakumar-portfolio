import { Reveal } from "@/components/ui/reveal";
import { SectionIndex } from "@/components/ui/section-index";
import { TechStackGrid } from "@/components/systems/tech-stack-grid";
import { TECH_CATEGORIES } from "./technology-data";

// NOTE: numbered "05" — About(01) / Experience(02) / Engineering Mindset(03)
// / Selected Systems(04) / Technology(05) / Education & Certifications(06)
// / Contact(07).
export function Technology() {
  return (
    <section
      id="technology"
      className="relative scroll-mt-20 border-t border-border pt-14 pb-24 lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <SectionIndex number="05" label="TECHNOLOGY" className="mb-8 lg:mb-10" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <h2 className="max-w-2xl text-2xl leading-[1.15] font-light text-foreground sm:text-3xl lg:text-4xl">
              Tools in context,
              <br />
              not just a list.
            </h2>

            <p className="text-base leading-relaxed text-foreground-muted lg:pt-1 lg:text-lg">
              Everything below is real and already running in one of the three systems above,
              grouped by the role it plays rather than left as one flat list.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10 border-t border-border pt-10 lg:mt-16 lg:gap-14 lg:pt-12">
          {TECH_CATEGORIES.map((category, index) => (
            <Reveal key={category.label} delayMs={index * 60}>
              <p className="font-mono text-xs tracking-[0.18em] text-foreground-muted uppercase">
                {category.label}
              </p>
              <div className="mt-4">
                <TechStackGrid techStack={category.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
