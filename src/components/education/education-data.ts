export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  coursework?: string[];
}

// Degree titles are transcribed verbatim from Nandakumar's resume
// (resume-nandakumar-vuppalapati.pdf) — "Master of Computer and
// Information Sciences" and "Bachelor of Engineering". An earlier version
// of this file used "Master of Science, Computer Science" and "Bachelor
// of Technology" instead, sourced from the official USD Degree Works
// audit and inferred phrasing — those titles disagreed with what the
// resume itself says, which is exactly the inconsistency a recruiter
// read would catch. The resume is now the source of truth for degree
// title wording on this page.
// Institution, location and period are unchanged (both documents agree).
// Coursework below is still a curated subset of the Degree Works audit's
// real course list (the resume doesn't itemize coursework at all), chosen
// for relevance to AI/data engineering — nothing on this list is invented,
// and nothing off it was omitted to hide a weaker grade. GPA is
// deliberately not shown on the public site (Nandakumar's own call, same
// as leaving phone/city off Contact) — the audit still backs it, it's
// just not displayed here.
export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    degree: "Master of Computer and Information Sciences",
    institution: "University of South Dakota",
    location: "Vermillion, SD, USA",
    period: "2025",
    coursework: [
      "Distributed Systems",
      "Advanced Networks & Security",
      "Machine Learning Fundamentals",
      "Advanced Artificial Intelligence",
      "Applied Reinforcement Learning",
      "Information Storage & Retrieval",
      "Data Mining",
      "Pattern Recognition / Machine Learning",
    ],
  },
  {
    degree: "Bachelor of Engineering",
    institution: "Indian Institute of Information Technology (IIIT)",
    location: "India",
    period: "2023",
  },
];

export interface CertificationEntry {
  name: string;
  issuer: string;
  year: string;
}

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
  },
];
