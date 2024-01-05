import Image from "next/image";
import Link from "next/link";
import React from "react";
import CohortsContainer from "../../components/CohortsContainer";

export default function page() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <section className="max-w-[80%] md:max-w-[60%] min-h-[350px] mx-auto text-center py-10">
        <small className="bg-yellow-300 rounded-lg px-6 py-1">Cohort 2.0</small>

        <h1 className="text-6xl mb-4 font-semibold md:font-bold mt-4">
          Learn.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-48">
            Build.
          </span>{" "}
          Repeat.
        </h1>

        
        <p className="mb-6">
          Our cohorts bring together students from across India to learn and
          grow. Students benefit from peer and mentor support, collaboration,
          and idea sharing.
        </p>
        <Link href="#trainings" className="text-2xl font-bold hover:text-4xl">
          ↓
        </Link>
      </section>

      <CohortsContainer />

      <section className="bg-slate-100 p-6 md:p-10 rounded-3xl my-10 md:my-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          <div className="py-5 md:col-span-2">
            <h1 className="text-2xl md:text-5xl mb-2 md:mb-4 font-normal md:font-medium">
              Wall of Love...
            </h1>
            <p className="mb-2 text-md">
              What other people has to say about the basics class..
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl drop-shadow-sm ">
            <div className="align-end">
              <h1 className="text-md lg:text-xl font-normal font-poppins text-slate-900 capitalize">
                text
              </h1>
              <p className="text-sm lg:text-md my-4 text-slate-600">comment</p>
              <p className="text-sm lg:text-md text-slate-900">
                John Doe —
                <span className="mx-2 text-sm text-slate-800">MIT</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl drop-shadow-sm ">
            <div className="align-end">
              <h1 className="text-md lg:text-xl font-normal font-poppins text-slate-900 capitalize">
                text
              </h1>
              <p className="text-sm lg:text-md my-4 text-slate-600">comment</p>
              <p className="text-sm lg:text-md text-slate-900">
                John Doe —
                <span className="mx-2 text-sm text-slate-800">MIT</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl drop-shadow-sm ">
            <div className="align-end">
              <h1 className="text-md lg:text-xl font-normal font-poppins text-slate-900 capitalize">
                text
              </h1>
              <p className="text-sm lg:text-md my-4 text-slate-600">comment</p>
              <p className="text-sm lg:text-md text-slate-900">
                John Doe —
                <span className="mx-2 text-sm text-slate-800">MIT</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl drop-shadow-sm ">
            <div className="align-end">
              <h1 className="text-md lg:text-xl font-normal font-poppins text-slate-900 capitalize">
                text
              </h1>
              <p className="text-sm lg:text-md my-4 text-slate-600">comment</p>
              <p className="text-sm lg:text-md text-slate-900">
                John Doe —
                <span className="mx-2 text-sm text-slate-800">MIT</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
