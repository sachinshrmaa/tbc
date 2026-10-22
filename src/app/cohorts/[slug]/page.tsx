import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusPill } from "../../components/CohortRow";
import Markdown from "../../components/Markdown";
import PageHeader from "../../components/PageHeader";
import RegisterForm from "../../components/RegisterForm";
import { cohorts, formatDate, formatPrice, getCohort } from "../../../../data/cohorts";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return cohorts.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cohort = getCohort(params.slug);
  return cohort ? { title: cohort.title, description: cohort.summary } : {};
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((x) => (
        <li key={x} className="flex gap-3">
          <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {x}
        </li>
      ))}
    </ul>
  );
}

export default function CohortPage({ params }: Props) {
  const cohort = getCohort(params.slug);
  if (!cohort) notFound();

  const facts = [
    ["Starts", formatDate(cohort.startDate)],
    ["Duration", cohort.duration],
    ["Schedule", cohort.schedule],
    ["Seats", `${cohort.seats} students`],
  ];

  return (
    <>
      <PageHeader
        title={cohort.title}
        eyebrow={
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/#cohorts" className="text-[15px] text-muted hover:text-ink">
              &larr; All cohorts
            </Link>
            <StatusPill status={cohort.status} />
          </div>
        }
      >
        <p>{cohort.summary}</p>
      </PageHeader>

      <div className="container grid gap-12 py-16 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <div className="min-w-0 space-y-16">
          <Markdown html={cohort.html} className="text-lg" />

          <section className="grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <h2 className="label mb-4">Who it&apos;s for</h2>
              <Checklist items={cohort.forWho} />
            </div>
            <div className="card p-6">
              <h2 className="label mb-4">What you need</h2>
              <Checklist items={cohort.prerequisites} />
            </div>
          </section>

          <section>
            <p className="label">Syllabus</p>
            <h2 className="section-title">Week by week.</h2>
            <ol className="relative mt-10 space-y-8 border-l border-rule pl-8">
              {cohort.weeks.map((w, i) => (
                <li key={w.title} className="relative">
                  <span className="absolute -left-[2.85rem] grid h-7 w-7 place-items-center rounded-full border border-rule bg-paper font-mono text-xs text-accent">
                    {i + 1}
                  </span>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">Week {i + 1}</p>
                  <h3 className="mt-1 text-lg font-semibold">{w.title}</h3>
                  <ul className="mt-2 space-y-1 text-muted">
                    {w.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <div className="card mt-10 border-accent/30 bg-accent/5 p-6">
              <p className="label text-accent">Final project</p>
              <p className="mt-2">{cohort.project}</p>
            </div>
          </section>

          <section id="register" className="scroll-mt-24">
            <div className="card p-6 sm:p-10">
              <p className="label">Register</p>
              <h2 className="section-title">Reserve your seat.</h2>
              {cohort.status === "closed" ? (
                <p className="mt-4 text-muted">
                  Registrations for this cohort are closed.{" "}
                  <Link href="mailto:mail.sachinshrmaa@gmail.com" className="link text-ink">
                    Email me
                  </Link>{" "}
                  to hear about the next one.
                </p>
              ) : (
                <>
                  <p className="mt-4 text-muted">
                    {cohort.status === "waitlist"
                      ? "This cohort is full. Join the waitlist and I'll email you if a seat opens up."
                      : `Fill this in, then pay ${formatPrice(cohort.price)} by UPI on the next screen. I'll email you the joining link once payment is confirmed.`}
                  </p>
                  <div className="mt-8">
                    <RegisterForm cohorts={[cohort]} defaultCohort={cohort.slug} />
                  </div>
                </>
              )}
            </div>
          </section>
        </div>

        <aside className="order-first lg:order-none">
          <div className="card p-6 lg:sticky lg:top-24">
            <p className="text-3xl font-semibold tracking-tight">{formatPrice(cohort.price)}</p>
            <p className="text-sm text-muted">One-time fee · pay by UPI after registering</p>
            <dl className="mt-6 space-y-3 border-t border-rule pt-6 text-[15px]">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            {cohort.status !== "closed" && (
              <Link href="#register" className="btn mt-6 w-full">
                {cohort.status === "waitlist" ? "Join the waitlist" : "Register now"}
              </Link>
            )}
            <p className="mt-4 text-center text-sm text-muted">
              Questions?{" "}
              <Link href="mailto:mail.sachinshrmaa@gmail.com" className="link">
                Email me
              </Link>
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
