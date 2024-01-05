import Image from "next/image";
import Link from "next/link";
import React from "react";
import CohortsContainer from "../../components/CohortsContainer";
import TestimonialContainer from "../../components/TestimonialContainer";

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
      <TestimonialContainer />
    </main>
  );
}
