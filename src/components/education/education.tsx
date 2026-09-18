import { Reveal } from "@/components/ui/reveal";
import { SectionIndex } from "@/components/ui/section-index";
import { CERTIFICATIONS, EDUCATION_ENTRIES } from "./education-data";
import { EducationCard } from "./education-card";

// NOTE: numbered "06" — About(01) / Experience(02) / Engineering Mindset(03)
// / Selected Systems(04) / Technology(05) / Education & Certifications(06)
// / Contact(07).
//
// Cards, not more resume rows: the entry with real transcript coursework
// (the master's) gets a full-width featured card; the bachelor's and the
// certification — both short, no long tag list — sit side by side as
// compact cards below. Same rounded-2xl card language Selected Systems
// already uses, so this section reads as part of the site's design system
// instead of a third copy of the Experience list.
export function Education() {
  const featuredEntries = EDUCATION_ENTRIES.filter(
    (entry) => entry.coursework && entry.coursework.length > 0,
  );
  const compactEntries = EDUCATION_ENTRIES.filter(
    (entry) => !(entry.coursework && entry.coursework.length > 0),
  );

  return (
    <section
      id="education"
      className="relative scroll-mt-20 border-t border-border pt-14 pb-24 lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <SectionIndex
            number="06"
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

        <div className="mt-14 flex flex-col gap-6 lg:mt-16">
          {featuredEntries.map((entry, index) => (
            <Reveal key={`${entry.institution}-${entry.degree}`} delayMs={index * 80}>
              <EducationCard entry={entry} featured />
            </Reveal>
          ))}

          {(compactEntries.length > 0 || CERTIFICATIONS.length > 0) && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {compactEntries.map((entry, index) => (
                <Reveal
                  key={`${entry.institution}-${entry.degree}`}
                  delayMs={(featuredEntries.length + index) * 80}
                >
                  <EducationCard entry={entry} />
                </Reveal>
              ))}

              {CERTIFICATIONS.map((cert, index) => (
                <Reveal
                  key={cert.name}
                  delayMs={(featuredEntries.length + compactEntries.length + index) * 80}
                >
                  <div className="rounded-2xl border border-border bg-background-elevated p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[0.65rem] tracking-[0.18em] text-accent-amber uppercase">
                          Certification
                        </p>
                        <p className="mt-2 text-lg font-medium text-foreground">{cert.name}</p>
                        <p className="mt-1.5 text-sm text-foreground-muted">{cert.issuer}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-[0.65rem] tracking-[0.1em] text-foreground-muted">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
