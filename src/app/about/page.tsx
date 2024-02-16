import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-10 min-h-[500px] px-8">
      <h1 className="text-3xl mb-6 text-center">
        About <span className="text-purple-600">TBC.</span>
      </h1>
      <p className="text-slate-400">
        The Basics Class or TBC is an initiative by Sachin Sharma to personally
        teach students in the field of Software Engineering. Sachin strongly
        believes that programming skills should be taught in a live manner and
        by building real-world projects rather than just understanding the
        syntax and the concepts. All the courses and workshops are a series of
        live cohorts, focusing more on building projects and Open source
        contributions and you get to interact with the instructor whenever you
        get stuck.
      </p>
      <h1 className="text-3xl my-6">
        About <span className="text-purple-600">Sachin.</span>
      </h1>
      <p className="text-slate-400">
        Sachin is currently working as an Intern for a cloud-based startup
        company, where he focuses on works related to frontend development. He's
        also pursuing his Bachelor's degree in Computer Engineering from SIST
        (Sikkim Institute of Science and Technology). Previously, he also
        completed his Diploma in Computer Engineering with a distinction grade.
        Apart from studies and work, he actively builds and contributes to
        open-source projects on GitHub.
      </p>
    </div>
  );
}
