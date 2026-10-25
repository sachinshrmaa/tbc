import Link from "next/link";
import { Cohort, formatDate, formatPrice } from "../../../data/cohorts";

export const statusText: Record<Cohort["status"], string> = {
  open: "Registrations open",
  waitlist: "Waitlist",
  closed: "Closed",
};

export function StatusPill({ status }: { status: Cohort["status"] }) {
  return (
    <span className="pill">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "open" ? "bg-accent" : status === "waitlist" ? "bg-sky-500" : "bg-muted"
        }`}
      />
      {statusText[status]}
    </span>
  );
}

export default function CohortRow({ cohort }: { cohort: Cohort }) {
  const facts = [
    ["Starts", formatDate(cohort.startDate)],
    ["Duration", cohort.duration],
    ["Schedule", cohort.schedule],
    ["Fee", formatPrice(cohort.price)],
  ];

  return (
    <article className="card grid overflow-hidden md:grid-cols-[1.4fr_1fr]">
      <div className="p-6 sm:p-8">
        <StatusPill status={cohort.status} />
        <h3 className="mt-5 text-2xl font-semibold tracking-tight">
          <Link href={`/cohorts/${cohort.slug}`} className="hover:text-accent">
            {cohort.title}
          </Link>
        </h3>
        <p className="mt-3 text-muted">{cohort.summary}</p>
      </div>
      <div className="flex flex-col justify-between gap-6 border-t border-rule bg-paper/60 p-6 sm:p-8 md:border-l md:border-t-0">
        <dl className="grid grid-cols-[5.5rem_1fr] gap-y-2 text-[15px]">
          {facts.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-muted">{k}</dt>
              <dd className="font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap gap-3">
          {cohort.status !== "closed" && (
            <Link href={`/cohorts/${cohort.slug}#register`} className="btn flex-1">
              Register &rarr;
            </Link>
          )}
          <Link href={`/cohorts/${cohort.slug}`} className="btn-ghost flex-1">
            Syllabus
          </Link>
        </div>
      </div>
    </article>
  );
}
