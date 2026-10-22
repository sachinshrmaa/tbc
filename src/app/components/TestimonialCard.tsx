interface TestimonialProps {
  name: string;
  userMeta: string;
  feedback: string;
}

export default function TestimonialCard({ name, userMeta, feedback }: TestimonialProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <figure className="card mb-6 break-inside-avoid p-6 sm:p-7">
      <blockquote className="text-[16px] leading-relaxed">&ldquo;{feedback}&rdquo;</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-rule pt-5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
          {initials}
        </span>
        <span className="text-sm leading-snug">
          <span className="block font-medium">{name}</span>
          <span className="text-muted">{userMeta}</span>
        </span>
      </figcaption>
    </figure>
  );
}
