interface AccordionProps {
  name: string;
  content: string;
}

// Native <details> — accessible and needs no client JavaScript.
export default function Accordion({ name, content }: AccordionProps) {
  return (
    <details className="group border-b border-rule py-5">
      <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
        {name}
        <span aria-hidden className="font-mono text-muted transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 pr-8 text-muted">{content}</p>
    </details>
  );
}
