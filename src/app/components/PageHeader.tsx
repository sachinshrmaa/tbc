import { ReactNode } from "react";

interface Props {
  eyebrow?: ReactNode;
  title: string;
  children?: ReactNode;
}

export default function PageHeader({ eyebrow, title, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-rule">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div className="container relative py-16 sm:py-20">
        {eyebrow}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {children && <div className="mt-5 max-w-2xl text-lg text-muted">{children}</div>}
      </div>
    </section>
  );
}
