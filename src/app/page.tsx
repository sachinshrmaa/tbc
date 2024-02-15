import Link from "next/link";
import React from "react";
import WorkingCard from "./components/WorkingCard";

export const workings = [
  {
    title: "Pick a Class.",
    desc: "this is a text",
    icon: "./arrow-right.svg",
  },
  {
    title: "Learn.",
    desc: "this is a text",
    icon: "./arrow-right.svg",
  },
  {
    title: "Build.",
    desc: "this is a text",
    icon: "./target.svg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="min-h-[300px] text-center py-14">
        <h1 className="text-5xl font-bold max-w-[700px] mx-auto mb-4">
          You don&apos;t learn, then build.
          <span className="text-purple-600">You build, then learn.</span>
        </h1>
        <p className="max-w-[650px] mx-auto text-slate-400">
          Our cohorts bring together students from across India to learn and
          grow. Students benefit from peer and mentor support, collaboration,
          and idea sharing.
        </p>
        <div className="mt-8 mb-6">
          <Link
            href="#"
            className="bg-purple-600 px-6 py-2 rounded-md mr-4 hover:bg-purple-400"
          >
            Join
          </Link>
          <Link
            href="#"
            className="bg-slate-600 px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Explore
          </Link>
        </div>

        <p className="text-sm ">
          <span className="text-slate-400">✔️ Live cohort </span>
          <span className="text-slate-400">✔️ Project building </span>
          <span className="text-slate-400">✔️ Resources and Tools</span>
        </p>
      </section>

      <section className="py-5 max-w-6xl mx-auto mt-10 mb-[150px]">
        <div className="text-center mb-8">
          <h1 className="text-3xl">
            How does it <span className="text-purple-600">work?</span>
          </h1>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="grid grid-flow-col gap-10">
          {workings.map((e) => (
            <WorkingCard title={e.title} desc={e.desc} icon={e.icon} />
          ))}
        </div>
      </section>

      <section className="py-5 max-w-6xl mx-auto my-10">
        <div className="grid grid-flow-col gap-10">
          <div className="col-span-1">
            <h1 className="text-3xl">
              Getting <span className="text-purple-600">started?</span>
            </h1>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="col-span-4">
            <div className="secondary-bg  rounded-lg p-6">
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-xl font-semibold">
                  Lorem ipsum dolor sit.
                </h1>
                <h1 className="text-xl font-semibold">₹ 499.0</h1>
              </div>
              <p className="text-slate-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi debitis odio porro nisi veniam! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Laborum saepe minima deleniti
                recusandae harum unde.
              </p>

              <div className="mt-6 mb-1">
                <Link
                  href="#"
                  className="bg-purple-600 px-6 py-2 rounded-md mr-1 hover:bg-purple-400"
                >
                  Join
                </Link>
                <Link
                  href="#"
                  className="text-slate-400 px-6 py-2 rounded-md hover:text-blue-700"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
