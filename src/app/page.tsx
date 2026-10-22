import Link from "next/link";
import Accordion from "./components/Accordion";
import CohortRow, { StatusPill } from "./components/CohortRow";
import InstructorCard from "./components/InstructorCard";
import SectionHeading from "./components/SectionHeading";
import TestimonialCard from "./components/TestimonialCard";
import WorkingCard from "./components/WorkingCard";
import { cohorts, formatDate, formatPrice } from "../../data/cohorts";
import { faq } from "../../data/faq";
import { testimonials } from "../../data/testimonial";
import { workings } from "../../data/working";

const highlights = [
  ["100% live", "Every class is taught in real time"],
  ["Small groups", "Room to ask every question"],
  ["Recorded", "Missed one? Watch it later"],
  ["Project-first", "Finish with work you can show"],
];

export default function Home() {
  const next = cohorts.find((c) => c.status !== "closed");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule">
        <div aria-hidden className="grid-bg absolute inset-0" />
        <div className="container relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="pill">Live coding cohorts · India</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
              You don&apos;t learn, then build.
              <br />
              <span className="text-accent">You build, then learn.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              TheBasicsClass runs small, live coding cohorts for students across
              India. No pre-recorded courses, no certificates — just a teacher, a
              group of peers, and real projects.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#cohorts" className="btn">
                See upcoming cohorts &rarr;
              </Link>
              <Link href="#how-it-works" className="btn-ghost">
                How it works
              </Link>
            </div>
          </div>

          {next && (
            <aside className="card p-6 shadow-[0_24px_60px_-30px_rgb(0_0_0/0.25)] sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="label">Next cohort</p>
                <StatusPill status={next.status} />
              </div>
              <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight">
                {next.title}
              </h2>
              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-rule bg-rule text-sm">
                {[
                  ["Starts", formatDate(next.startDate)],
                  ["Duration", next.duration],
                  ["Seats", `${next.seats} only`],
                  ["Fee", formatPrice(next.price)],
                ].map(([k, v]) => (
                  <div key={k} className="bg-surface p-3">
                    <dt className="text-muted">{k}</dt>
                    <dd className="mt-0.5 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link href={`/cohorts/${next.slug}#register`} className="btn mt-6 w-full">
                Reserve your seat
              </Link>
            </aside>
          )}
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-rule bg-surface">
        <dl className="container grid grid-cols-2 gap-px py-0 lg:grid-cols-4">
          {highlights.map(([k, v]) => (
            <div key={k} className="py-8 pr-4">
              <dt className="font-semibold">{k}</dt>
              <dd className="mt-1 text-sm text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Cohorts */}
      <section id="cohorts" className="section scroll-mt-16">
        <div className="container">
          <SectionHeading
            eyebrow="Upcoming cohorts"
            title="Pick a cohort, start building."
            intro="Each cohort runs for a few weeks, live, with a small group. Seats are limited so everyone gets attention."
          />
          <div className="mt-12 space-y-6">
            {cohorts.map((c) => (
              <CohortRow key={c.slug} cohort={c} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section scroll-mt-16 border-y border-rule bg-surface/60">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="Three steps. No fluff." center />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {workings.map((w, i) => (
              <WorkingCard key={w.title} title={w.title} desc={w.desc} stepNumber={i + 1} />
            ))}
          </ol>
        </div>
      </section>

      {/* Teacher */}
      <section className="section">
        <div className="container">
          <InstructorCard />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeading eyebrow="From past students" title="What students say." center />
          <div className="mt-12 gap-6 md:columns-2">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section scroll-mt-16 border-t border-rule">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="FAQ" title="Questions, answered." />
            <p className="mt-4 text-muted">
              Something else?{" "}
              <Link href="mailto:mail.sachinshrmaa@gmail.com" className="link text-ink">
                Email me
              </Link>
              .
            </p>
          </div>
          <div className="border-t border-rule">
            {faq.map((f) => (
              <Accordion key={f.id} name={f.question} content={f.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {next && (
        <section className="container pb-24">
          <div className="relative overflow-hidden rounded-2xl bg-ink px-6 py-14 text-paper sm:px-12 sm:py-16">
            <div className="relative max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-wider opacity-60">
                Starts {formatDate(next.startDate)}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to start building?
              </h2>
              <p className="mt-4 text-lg opacity-70">
                {next.seats} seats in the next cohort. Register, pay by UPI, and
                I&apos;ll email you the joining link.
              </p>
              <Link
                href={`/cohorts/${next.slug}#register`}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-paper px-5 py-3 text-[15px] font-medium text-ink transition hover:opacity-90"
              >
                Reserve your seat &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
