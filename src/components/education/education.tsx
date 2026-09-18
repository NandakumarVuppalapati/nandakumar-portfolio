import { Reveal } from "@/components/ui/reveal";
import { SectionIndex } from "@/components/ui/section-index";
import { CERTIFICATIONS, EDUCATION_ENTRIES } from "./education-data";
import { EducationRow } from "./education-row";

// NOTE: numbered "05" — About(01) / Experience(02) / Engineering Mindset(03)
// / Selected Systems(04) / Education & Certifications(05) / Contact(06).
export function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-20 border-t border-border pt-14 pb-24 lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <SectionIndex
            number="05"
            label="EDUCATION & CERTIFICATIONS"
            className="mb-8 lg:mb-10"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <h2 className="max-w-2xl text-2xl leading-[1.15] font-light text-foreground sm:text-3xl lg:text-4xl">
              The formal side
              <br />
              of the same work.
            </h2>

            <p className="text-base leading-relaxed text-foreground-muted lg:pt-1 lg:text-lg">
              A master&rsquo;s built around the systems and AI coursework this site is actually
              about, on top of an undergraduate engineering foundation.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-t border-border lg:mt-16">
          {EDUCATION_ENTRIES.map((entry, index) => (
            <Reveal key={`${entry.institution}-${entry.degree}`} delayMs={index * 80}>
              <EducationRow entry={entry} />
            </Reveal>
          ))}
        </div>

        {CERTIFICATIONS.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:mt-12 lg:gap-8 lg:pt-12">
            {CERTIFICATIONS.map((cert, index) => (
              <Reveal key={cert.name} delayMs={index * 80}>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1.5 h-4 w-[3px] shrink-0 bg-accent-amber" />
                  <div>
                    <p className="font-mono text-xs tracking-[0.2em] text-foreground-muted uppercase">
                      Certification
                    </p>
                    <p className="mt-2 text-base font-medium text-foreground">{cert.name}</p>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
