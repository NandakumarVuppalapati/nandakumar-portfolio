export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  coursework?: string[];
}

// Sourced from two primary documents, not inferred: the official USD
// Degree Works audit (degree title, GPA, catalog year, full course list
// with grades and terms) and Nandakumar's resume (bachelor's degree title
// and institution — the audit only covers USD). Coursework below is a
// curated subset of the audit's real course list, chosen for relevance to
// AI/data engineering (distributed systems, ML, networks & security,
// information retrieval) — nothing on this list is invented, and nothing
// off it was omitted to hide a weaker grade. GPA is deliberately not shown
// on the public site (Nandakumar's own call, same as leaving phone/city off
// Contact) — the audit still backs it, it's just not displayed here.
export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    degree: "Master of Science, Computer Science",
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
