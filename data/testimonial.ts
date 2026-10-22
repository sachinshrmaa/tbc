import { readMarkdownDir } from "../src/lib/content";

export interface Testimonial {
  name: string;
  userMeta: string;
  feedback: string;
}

// One Markdown file per testimonial in content/testimonials/, shown in file-name order.
export const testimonials: Testimonial[] = readMarkdownDir<{ name: string; meta?: string }>(
  "testimonials"
).map(({ data, body }) => ({
  name: data.name,
  userMeta: data.meta ?? "",
  feedback: body,
}));
