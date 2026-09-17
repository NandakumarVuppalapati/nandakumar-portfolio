import { Reveal } from "@/components/ui/reveal";
import { SectionIndex } from "@/components/ui/section-index";
import { CONTACT_LINKS } from "./contact-links";

// NOTE: numbered "04" because it's currently the fourth built section
// (About / Experience / Engineering Mindset / Contact). Selected Systems
// and Stack/How I Build still need to land between Engineering Mindset and
// this section — when they do, bump this to "06" in the same change.
export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 border-t border-border pt-14 pb-24 lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[96px_1fr_1fr] lg:items-start lg:gap-10">
            <SectionIndex number="04" label="CONTACT" />

            <h2 className="max-w-2xl text-2xl leading-[1.15] font-light text-foreground sm:text-3xl lg:text-4xl">
              Open to roles where
              <br />
              reliability is the point.
            </h2>

            <p className="text-base leading-relaxed text-foreground-muted lg:pt-1 lg:text-lg">
              I&rsquo;m looking for AI/data engineering roles where building systems that
              fail predictably and recover cleanly is treated as the job, not an
              afterthought. Reach out directly — every link below goes somewhere real.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-3 lg:mt-16 lg:gap-16 lg:pt-12">
          {CONTACT_LINKS.map((link, index) => (
            <Reveal key={link.id} delayMs={index * 90}>
              <a
                href={link.href}
                target={link.id === "email" ? undefined : "_blank"}
                rel={link.id === "email" ? undefined : "noreferrer noopener"}
                className="group flex flex-col gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
              >
                <link.Icon
                  className="h-6 w-6 transition-transform duration-150 group-hover:translate-x-0.5"
                  style={{ color: link.colorVar }}
                />
                <p className="font-mono text-xs tracking-[0.2em] text-foreground">
                  {link.label}
                </p>
                <p className="max-w-xs text-sm leading-relaxed text-foreground-muted transition-colors duration-150 group-hover:text-foreground">
                  {link.value}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
