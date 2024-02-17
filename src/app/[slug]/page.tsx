import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DetailedPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 min-h-[500px] px-8">
      <Link href="/" className="text-purple-600 hover:text-purple-700">
        ← back to home
      </Link>
      <div className="grid md:grid-flow-col md:grid-cols-8 mt-4 gap-6">
        <div className="col-span-5">
          <h1 className="text-md md:text-2xl font-semibold mb-4">
            Introduction to Python and Data Analysis
          </h1>
          <p className="text-slate-400 text-sm md:text-md">
            Join our beginner-friendly Python masterclass! Learn Python from
            scratch and understand some of its important concepts, learn to use
            popular libraries like numpy, pandas, matplotlib, and seaborn. End
            it with implementing all the knowledge to perform.
          </p>
        </div>
        <div className="col-span-3">
          <Image
            src="/python-cohort.jpg"
            width="1000"
            height="700"
            alt="python cohort"
            className="rounded-lg"
          />
          <div className="mt-8">
            <Link
              href="https://forms.gle/YYfcSUABnvzVDRQV6"
              target="_blank"
              className="bg-purple-600 text-center py-1 md:py-2 rounded-md mr-1 hover:bg-purple-400 text-sm md:text-md block"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
