import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import RegisterForm from "../components/RegisterForm";
import { cohorts, formatDate, formatPrice } from "../../../data/cohorts";

export const metadata: Metadata = { title: "Register" };

export default function RegisterPage({
  searchParams,
}: {
  searchParams: { cohort?: string };
}) {
  const available = cohorts.filter((c) => c.status !== "closed");

  return (
    <>
      <PageHeader eyebrow={<p className="label">Register</p>} title="Reserve your seat.">
        <p>
          Fill in the form, then pay by UPI on the next screen. I&apos;ll email
          you the joining link once payment is confirmed.
        </p>
      </PageHeader>

      <div className="container grid gap-10 py-16 lg:grid-cols-[1fr_22rem] lg:gap-16">
        {available.length === 0 ? (
          <p className="text-lg text-muted">
            There are no open cohorts right now.{" "}
            <Link href="mailto:mail.sachinshrmaa@gmail.com" className="link text-ink">
              Email me
            </Link>{" "}
            and I&apos;ll let you know when the next one opens.
          </p>
        ) : (
          <>
            <div className="card p-6 sm:p-10">
              <RegisterForm cohorts={available} defaultCohort={searchParams.cohort} />
            </div>
            <aside className="space-y-4">
              <p className="label">Open cohorts</p>
              {available.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cohorts/${c.slug}`}
                  className="card block p-5 transition-colors hover:border-ink/30"
                >
                  <p className="font-medium leading-snug">{c.title}</p>
                  <p className="mt-2 text-sm text-muted">
                    Starts {formatDate(c.startDate)} · {formatPrice(c.price)}
                  </p>
                </Link>
              ))}
            </aside>
          </>
        )}
      </div>
    </>
  );
}
