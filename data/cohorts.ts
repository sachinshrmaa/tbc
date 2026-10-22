import { readMarkdownDir } from "../src/lib/content";

export interface Week {
  title: string;
  topics: string[];
}

export interface Cohort {
  slug: string;
  title: string;
  summary: string;
  html: string; // description, rendered from the Markdown body
  status: "open" | "waitlist" | "closed";
  startDate: string; // ISO date, e.g. "2026-11-16"
  duration: string;
  schedule: string;
  price: number; // INR
  seats: number;
  forWho: string[];
  prerequisites: string[];
  weeks: Week[];
  project: string;
}

interface CohortFrontmatter extends Omit<
  Cohort,
  "slug" | "html" | "startDate"
> {
  startDate: string | Date; // YAML turns 2026-11-16 into a Date
}

// One Markdown file per cohort in content/cohorts/. The file name is the slug.
export const cohorts: Cohort[] = readMarkdownDir<CohortFrontmatter>("cohorts")
  .map(({ slug, data, html }) => {
    const missing = (
      ["title", "summary", "status", "startDate", "price", "seats"] as const
    ).filter((k) => data[k] === undefined || data[k] === null);
    if (missing.length) {
      throw new Error(
        `content/cohorts/${slug}.md is missing: ${missing.join(", ")}`,
      );
    }
    return {
      ...data,
      slug,
      html,
      startDate:
        data.startDate instanceof Date
          ? data.startDate.toISOString().slice(0, 10)
          : String(data.startDate),
      forWho: data.forWho ?? [],
      prerequisites: data.prerequisites ?? [],
      weeks: (data.weeks ?? []).map((w) => ({ ...w, topics: w.topics ?? [] })),
    };
  })
  .sort((a, b) => a.startDate.localeCompare(b.startDate));

export function getCohort(slug: string): Cohort | undefined {
  return cohorts.find((c) => c.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatPrice(inr: number): string {
  return inr === 0 ? "Free" : `₹${inr.toLocaleString("en-IN")}`;
}
