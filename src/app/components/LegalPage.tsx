import type { Metadata } from "next";
import Markdown from "./Markdown";
import PageHeader from "./PageHeader";
import { readMarkdown } from "@/lib/content";
import { formatDate } from "../../../data/cohorts";

interface Legal {
  title: string;
  updated: string | Date; // YAML turns 2026-10-25 into a Date
}

// Legal pages live in content/legal/<name>.md.
function readLegal(name: string) {
  const { data, html } = readMarkdown<Legal>(`legal/${name}.md`);
  const updated =
    data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated);
  return { title: data.title, updated, html };
}

export function legalMetadata(name: string): Metadata {
  return { title: readLegal(name).title };
}

export default function LegalPage({ name }: { name: string }) {
  const { title, updated, html } = readLegal(name);

  return (
    <>
      <PageHeader eyebrow={<p className="label">Legal</p>} title={title}>
        <p>Last updated {formatDate(updated)}</p>
      </PageHeader>
      <section className="section">
        <div className="container">
          <Markdown html={html} className="mx-auto max-w-2xl text-lg" />
        </div>
      </section>
    </>
  );
}
