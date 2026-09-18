import type { JSX, SVGProps } from "react";

function MailMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M5 8.5l9 7 9-7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9.5 12v7M9.5 9.3v.01M13.5 19v-4.2c0-1.5 1-2.6 2.5-2.6s2.5 1.1 2.5 2.6V19"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 4.2c-5.5 0-9.9 4.4-9.9 9.9 0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-1.9 1-2.6-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.6 0 3.8-2.3 4.6-4.6 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.5 0-5.5-4.4-9.9-9.9-9.9Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResumeMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 3.5h8.5L21 8v15.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M16.5 3.5V8H21" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path
        d="M10 14h8M10 17.5h8M10 21h5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  colorVar: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

// Email and LinkedIn are transcribed from Nandakumar's resume
// (Nandakumar_Vuppalapati_Data_Engineer_Refined_Hybrid.docx); GitHub is the
// account already used as the source-of-truth link on every Selected
// Systems repo. Phone/city are deliberately left off the public site per
// Nandakumar's own choice — email + LinkedIn only. Resume is the same docx,
// converted to PDF and served as a static file — same content, not a
// separate summary of it.
export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "email",
    label: "EMAIL",
    value: "nandakumarvuppalapati@gmail.com",
    href: "mailto:nandakumarvuppalapati@gmail.com",
    colorVar: "var(--color-accent-cyan)",
    Icon: MailMark,
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "linkedin.com/in/v-nandakumar",
    href: "https://linkedin.com/in/v-nandakumar",
    colorVar: "var(--color-accent-blue)",
    Icon: LinkedInMark,
  },
  {
    id: "github",
    label: "GITHUB",
    value: "github.com/NandakumarVuppalapati",
    href: "https://github.com/NandakumarVuppalapati",
    colorVar: "var(--color-accent-violet)",
    Icon: GitHubMark,
  },
  {
    id: "resume",
    label: "RESUME",
    value: "Download PDF",
    href: "/resume-nandakumar-vuppalapati.pdf",
    colorVar: "var(--color-accent-amber)",
    Icon: ResumeMark,
  },
];
