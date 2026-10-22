import { readMarkdown } from "../src/lib/content";

interface About {
  headline: string;
  intro: string;
  beliefs: { title: string; text: string }[];
  teacher: {
    greeting: string;
    lead: string;
    blurb: string;
    tags: string[];
  };
}

const file = readMarkdown<About>("about.md");

export const about = { ...file.data, html: file.html };
