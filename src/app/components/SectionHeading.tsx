interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, intro, center }: Props) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="label">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  );
}
