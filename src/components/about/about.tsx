import { Reveal } from "@/components/ui/reveal";
import { SectionIndex } from "@/components/ui/section-index";
import { ANCHORS } from "./about-anchors";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-t border-border pt-24 pb-14 lg:pt-32 lg:pb-16"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <SectionIndex number="01" label="ABOUT" className="mb-8 lg:mb-10" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* Matched to the text-2xl/3xl/4xl scale every other section's
                h2 uses (Experience, Engineering Mindset, Selected Systems,
                Contact) — this used to run noticeably larger, the one
                inconsistent heading size on the page. */}
            <h2 className="max-w-2xl text-2xl leading-[1.15] font-light text-foreground sm:text-3xl lg:text-4xl">
              I design the data layer
              <br />
              between raw events
              <br />
              and intelligent products.
            </h2>

            <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground-muted lg:pt-2 lg:text-lg">
              <p>
                I&rsquo;m an AI Data Engineer focused on building reliable data systems,
                real-time pipelines and analytics-ready platforms that support modern
                analytics and AI products.
              </p>
              <p>
                I enjoy solving complex data problems across ingestion, transformation,
                quality, orchestration and observability — turning raw information into
                systems people can trust.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-3 lg:mt-14 lg:gap-16 lg:pt-12">
          {ANCHORS.map((anchor, index) => (
            <Reveal key={anchor.id} delayMs={index * 90}>
              <div className="flex flex-col gap-3">
                <anchor.Icon className="h-6 w-6" style={{ color: anchor.colorVar }} />
                <p className="font-mono text-xs tracking-[0.2em] text-foreground">
                  {anchor.label}
                </p>
                <p className="max-w-xs text-sm leading-relaxed text-foreground-muted">
                  {anchor.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
