interface WorkingProps {
  title: string;
  desc: string;
  stepNumber: number;
}

export default function WorkingCard({ title, desc, stepNumber }: WorkingProps) {
  return (
    <li className="card p-6 sm:p-7">
      <span className="grid h-10 w-10 place-items-center rounded-lg border border-rule bg-paper font-mono text-sm text-accent">
        {String(stepNumber).padStart(2, "0")}
      </span>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-muted">{desc}</p>
    </li>
  );
}
