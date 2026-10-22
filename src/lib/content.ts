import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Everything editable lives in ./content as Markdown files with YAML frontmatter.
const CONTENT_DIR = path.join(process.cwd(), "content");

export interface MarkdownFile<T> {
  slug: string; // file name without .md
  data: T; // frontmatter
  body: string; // Markdown below the frontmatter
  html: string; // body rendered to HTML
}

export function readMarkdown<T>(file: string): MarkdownFile<T> {
  const raw = readFileSync(path.join(CONTENT_DIR, file), "utf8");
  let parsed;
  try {
    // Empty options object skips gray-matter's cache, which can hand back stale data.
    parsed = matter(raw, {});
  } catch (err) {
    throw new Error(
      `content/${file}: invalid frontmatter. Values containing ": " or starting with a quote must be wrapped in quotes.\n${(err as Error).message}`
    );
  }
  const { data, content } = parsed;
  return {
    slug: path.basename(file, ".md"),
    data: data as T,
    body: content.trim(),
    html: marked.parse(content, { async: false }) as string,
  };
}

// Reads every .md file in a folder, sorted by file name. Files starting with
// "_" are skipped, so you can keep drafts or templates next to real entries.
export function readMarkdownDir<T>(dir: string): MarkdownFile<T>[] {
  return readdirSync(path.join(CONTENT_DIR, dir))
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .sort()
    .map((f) => readMarkdown<T>(path.join(dir, f)));
}
