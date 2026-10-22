import { notFound, permanentRedirect } from "next/navigation";
import { cohorts } from "../../../data/cohorts";

// Legacy URLs from the old site, e.g. /python-cohort.
const legacy: Record<string, string> = {
  "python-cohort": "python-data-analysis",
};

export default function LegacyCohortRedirect({ params }: { params: { slug: string } }) {
  const slug = legacy[params.slug] ?? params.slug;
  if (!cohorts.some((c) => c.slug === slug)) notFound();
  permanentRedirect(`/cohorts/${slug}`);
}
