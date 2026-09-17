export interface ExperienceEntry {
  dateRange: string;
  role: string;
  organization: string;
  context: string;
  technologies?: string[];
}

// TODO_VERIFY_EXPERIENCE
// No employer, title, date, or scope history has been verified against
// CLAUDE.md or any other confirmed project source. CLAUDE.md §19 explicitly
// prohibits fabricating employers, dates, metrics, responsibilities, or
// achievements, and none are given there beyond future-intent guidance.
// Do not add entries below until real, confirmed details are supplied —
// the section renders its framework (index/statement/intro) with this
// array empty rather than showing placeholder companies.
export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [];
