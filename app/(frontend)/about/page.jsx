import React from "react";

export const metadata = {
  title: "About - The Basics Class",
  description:
    "TBC is an initiative by Sachin Sharma to personally teach students in the field of Software Engineering.",
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-6 min-h-[70vh]">
      <h1 className="text-3xl md:text-5xl mb-5 md:mb-10 font-normal md:font-bold text-center">
        About
      </h1>

      <section className="rounded-3xl md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 md:p-12 bg-slate-100">
            <h1 className="text-xl md:text-3xl md:mb-5 font-semibold mb-2">
              TBC
            </h1>
            <p className="my-3">
              The Basics Class or TBC is an initiative by Sachin Sharma to
              personally teach students in the field of Software Engineering.
            </p>
            <p className="my-3">
              Sachin strongly believes that programming skills should be taught
              in a live manner and by building real-world projects rather than
              just understanding the syntax and the concepts.
            </p>
            <p className="mb-5">
              All the courses and workshops are a series of live cohorts,
              focusing more on building projects and Open source contributions
              and you get to interact with the instructor whenever you get
              stuck.
            </p>
          </div>
          <div className="rounded-2xl p-6 md:p-12 bg-slate-100">
            <h1 className="text-xl md:text-3xl md:mb-5 font-semibold mb-2">
              About Sachin
            </h1>
            <p className="my-3">
              Sachin is currently working as an Intern for a Cloud-based startup
              company, where he focuses on works related to frontend
              development.
            </p>
            <p className="my-3">
              He&apos;s also pursuing his Bachelor&apos;s degree in Computer
              Engineering from SIST (Sikkim Institute of Science and
              Technology).
            </p>
            <p className="my-3">
              Previously, he also completed his Diploma in Computer Engineering
              with a distinction grade. Apart from studies and work, he actively
              builds and contributes to open-source projects on GitHub.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
