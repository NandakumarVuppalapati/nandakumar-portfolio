import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SYSTEMS, getSystemBySlug } from "@/components/systems/systems-data";
import { PipelineDiagram } from "@/components/systems/pipeline-diagram";
import { TechStackGrid } from "@/components/systems/tech-stack-grid";

export function generateStaticParams() {
  return SYSTEMS.map((system) => ({ slug: system.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const system = getSystemBySlug(slug);

  if (!system) {
    return {};
  }

  return {
    title: `${system.title} — Nandakumar Vuppalapati`,
    description: system.summary,
  };
}

export default async function SystemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const system = getSystemBySlug(slug);

  if (!system) {
    notFound();
  }

  const sections = [
    { heading: "The problem", body: system.problem },
    { heading: "What I built", body: system.whatIBuilt },
    { heading: "Architecture", body: system.architecture },
    { heading: "What can fail", body: system.whatCanFail },
    { heading: "What I tried to break", body: system.whatITriedToBreak },
  ];

  const postmortemRows = [
    { term: "Symptom", desc: system.postmortem.symptom },
    { term: "Root cause", desc: system.postmortem.rootCause },
    { term: "Fix", desc: system.postmortem.fix },
    { term: "What changed", desc: system.postmortem.whatChanged },
  ];

  return (
    <article className="relative pt-28 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-[1000px] px-6 sm:px-8 lg:px-12">
        <Link
          href="/#systems"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-foreground-muted transition-colors duration-150 hover:text-foreground"
        >
          <span aria-hidden="true">←</span> SELECTED SYSTEMS
        </Link>

        <span className="mt-8 inline-flex rounded-full bg-accent-cyan px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.14em] text-background uppercase">
          {system.badge}
        </span>

        <h1 className="mt-4 max-w-3xl text-3xl leading-[1.1] font-light text-foreground sm:text-4xl lg:text-5xl">
          {system.title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-muted lg:text-lg">
          {system.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {system.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.04em] text-foreground-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={system.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors duration-150 hover:bg-accent-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
        >
          View on GitHub
          <span
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>

        {/* The AI-generated artwork stays on the homepage card only — here,
            in the place it used to sit, is the real architecture instead:
            an interactive, click-to-expand diagram built from the same
            verified pipeline this project's README and code describe. */}
        <div className="mt-12 lg:mt-14">
          <PipelineDiagram lanes={system.pipeline} />
        </div>

        <div className="mt-14 flex flex-col gap-10 border-t border-border pt-12 lg:mt-16 lg:gap-12 lg:pt-14">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent-cyan uppercase">
                {section.heading}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground-muted lg:text-lg">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-12 lg:mt-16 lg:pt-14">
          <h2 className="font-mono text-xs tracking-[0.2em] text-accent-amber uppercase">
            Incident log
          </h2>

          <div className="mt-6 rounded-2xl border border-border bg-background-elevated p-6 lg:p-8">
            <p className="font-mono text-xs tracking-[0.1em] text-foreground-muted">
              {system.postmortem.incident}
              {system.postmortem.date ? ` · ${system.postmortem.date}` : ""}
            </p>

            <dl className="mt-6 flex flex-col gap-6">
              {postmortemRows.map((row) => (
                <div key={row.term}>
                  <dt className="font-mono text-[0.68rem] tracking-[0.14em] text-accent-amber uppercase">
                    {row.term}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground-muted lg:text-base">
                    {row.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Its own named, visually distinct section — not a leftover tag
            list under a "Tech stack" label. Each tile shows the technology's
            real, verified logo (see tech-icons-data.ts) at neutral tone,
            switching to its official brand color on hover/focus; anything
            without a verified mark still renders as a plain tile rather than
            a guessed logo. */}
        <div className="mt-14 border-t border-border pt-12 lg:mt-16 lg:pt-14">
          <h2 className="font-mono text-xs tracking-[0.2em] text-foreground-muted uppercase">
            Technology Stack
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted">
            Every tool this system actually runs on, end to end.
          </p>
          <div className="mt-6">
            <TechStackGrid techStack={system.techStack} />
          </div>
        </div>
      </div>
    </article>
  );
}
