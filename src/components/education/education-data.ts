export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  coursework?: string[];
}

// Degree titles are transcribed from Nandakumar's resume, which has gone
// through a few wordings over the course of this site's edits: "Master of
// Science, Computer Science" (original, sourced from the USD Degree Works
// audit) -> "Master of Computer and Information Sciences" (an earlier
// resume revision) -> "Masters in computer and information science" (his
// final resume, 0926, just casually cased) — the same degree throughout,
// written here in title case for the public site. The bachelor's title
// went "Bachelor of Technology" (original) -> "Bachelor of Engineering"
// (an earlier resume revision) -> back to "Bachelor of Technology" in the
// final 0926 resume, which also matches how IIITs conventionally name the
// degree — that's the version kept here.
// Institution, location and period are unchanged throughout. Coursework
// below is still a curated subset of the Degree Works audit's real course
// list (no resume version itemizes coursework), chosen for relevance to
// AI/data engineering — nothing on this list is invented, and nothing off
// it was omitted to hide a weaker grade. GPA is deliberately not shown on
// the public site (Nandakumar's own call, same as leaving phone/city off
// Contact) — the audit still backs it, it's just not displayed here.
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
    degree: "Bachelor of Technology",
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
