import { Reveal } from "@/components/ui/reveal";
import { SectionIndex } from "@/components/ui/section-index";
import { CONTACT_LINKS } from "./contact-links";

// NOTE: numbered "07" — About(01) / Experience(02) / Engineering Mindset(03)
// / Selected Systems(04) / Technology(05) / Education & Certifications(06)
// / Contact(07).
export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 border-t border-border pt-14 pb-24 lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <Reveal>
          <SectionIndex number="07" label="CONTACT" className="mb-8 lg:mb-10" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
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

        <div className="mt-14 grid grid-cols-2 gap-10 border-t border-border pt-10 lg:mt-16 lg:grid-cols-4 lg:gap-12 lg:pt-12">
          {CONTACT_LINKS.map((link, index) => (
            <Reveal key={link.id} delayMs={index * 90}>
              <a
                href={link.href}
                target={link.id === "email" || link.id === "resume" ? undefined : "_blank"}
                rel={link.id === "email" || link.id === "resume" ? undefined : "noreferrer noopener"}
                download={link.id === "resume" ? "Nandakumar-Vuppalapati-Resume.pdf" : undefined}
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
