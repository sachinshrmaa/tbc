import Link from "next/link";

const columns = [
  {
    title: "Learn",
    links: [
      { href: "/#cohorts", label: "Upcoming cohorts" },
      { href: "/register", label: "Register" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "TBC",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms" },
      { href: "/privacy", label: "Privacy" },
      { href: "/refund-policy", label: "Refunds" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { href: "https://github.com/sachinshrmaa", label: "GitHub" },
      { href: "https://twitter.com/sachinshrmaa", label: "Twitter" },
      { href: "https://linkedin.com/in/sachinshrmaa", label: "LinkedIn" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-surface">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <p className="font-semibold tracking-tight">The Basics Cohort</p>
          <p className="mt-2 max-w-xs text-[15px] text-muted">
            Small, live coding cohorts. You build, then learn.
          </p>
          <Link href="mailto:mail.sachinshrmaa@gmail.com" className="link mt-4 inline-block text-[15px]">
            mail.sachinshrmaa@gmail.com
          </Link>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="label">{col.title}</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-rule">
        <p className="container py-6 text-sm text-muted">
          &copy; 2022–{new Date().getFullYear()} The Basics Cohort. Made in India.
        </p>
      </div>
    </footer>
  );
}
