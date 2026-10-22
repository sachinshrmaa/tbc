import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = { title: "Contact" };

const channels = [
  { label: "Email", value: "mail.sachinshrmaa@gmail.com", href: "mailto:mail.sachinshrmaa@gmail.com" },
  { label: "LinkedIn", value: "in/sachinshrmaa", href: "https://linkedin.com/in/sachinshrmaa" },
  { label: "Twitter", value: "@sachinshrmaa", href: "https://twitter.com/sachinshrmaa" },
];

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow={<p className="label">Contact</p>} title="Get in touch.">
        <p>
          Questions about a cohort, payments, or anything else — I reply within
          a day.
        </p>
      </PageHeader>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              className="card group p-6 transition-colors hover:border-ink/30"
            >
              <p className="label">{c.label}</p>
              <p className="mt-3 break-all font-medium group-hover:text-accent">{c.value}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
