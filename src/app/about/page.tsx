import type { Metadata } from "next";
import Link from "next/link";
import InstructorCard from "../components/InstructorCard";
import Markdown from "../components/Markdown";
import PageHeader from "../components/PageHeader";
import { about } from "../../../data/about";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHeader eyebrow={<p className="label">About</p>} title={about.headline}>
        <p>{about.intro}</p>
      </PageHeader>

      <section className="section">
        <div className="container">
          <ul className="grid gap-6 md:grid-cols-3">
            {about.beliefs.map((b) => (
              <li key={b.title} className="card p-6">
                <h2 className="text-lg font-semibold">{b.title}</h2>
                <p className="mt-2 text-muted">{b.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <InstructorCard />
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-lg">
            <Markdown html={about.html} />
            <p className="pt-8">
              <Link href="/#cohorts" className="btn">
                See upcoming cohorts &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
