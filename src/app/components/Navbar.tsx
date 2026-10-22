import Link from "next/link";

const links = [
  { href: "/#cohorts", label: "Cohorts" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono text-[11px] font-bold text-paper">
            TBC
          </span>
          <span className="hidden sm:inline">TheBasicsClass</span>
        </Link>
        <nav className="flex items-center gap-1 text-[15px]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:bg-ink/5 hover:text-ink md:block"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/register" className="btn ml-2 px-4 py-2">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
