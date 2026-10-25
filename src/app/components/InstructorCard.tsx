import Image from "next/image";
import Link from "next/link";
import { about } from "../../../data/about";

export default function InstructorCard() {
  const { teacher } = about;

  return (
    <div className="card grid items-center gap-8 p-6 sm:p-8 md:grid-cols-[16rem_1fr] md:gap-12">
      <Image
        src="/sachin.jpeg"
        alt="Sachin Sharma"
        width={480}
        height={640}
        sizes="(min-width: 768px) 16rem, 100vw"
        className="aspect-[4/5] w-full max-w-[16rem] rounded-lg object-cover"
      />
      <div>
        <p className="label">Your instructor</p>
        <h2 className="section-title">{teacher.greeting}</h2>
        <p className="mt-5 text-lg">{teacher.lead}</p>
        <p className="mt-4 text-muted">{teacher.blurb}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {teacher.tags.map((t) => (
            <span key={t} className="rounded-md bg-ink/5 px-2.5 py-1 text-sm text-muted">
              {t}
            </span>
          ))}
        </div>
        <Link href="/about" className="link mt-6 inline-block text-[15px]">
          More about me and TBC &rarr;
        </Link>
      </div>
    </div>
  );
}
