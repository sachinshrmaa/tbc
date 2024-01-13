"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DetailedCohort({ params }) {
  const [cohort, setCohort] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const slug = params.slug;

  const fetchCohort = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/cohorts/${slug}`);
      setCohort(res.data);
      setLoading(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCohort();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center">Something went wrong.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-6 min-h-[70vh]">
      <Link href="/" className="text-blue-700 hover:text-blue-800">
        ← back to home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
        <div className="col-span-3 md:col-span-2">
          <Image
            src={cohort.thumbnail}
            height="400"
            width="1500"
            alt={cohort.name}
            className="rounded-3xl w-full"
          />
        </div>
        <div className="rounded-3xl p-8 bg-slate-100 col-span-3 md:col-span-1 flex flex-col justify-between">
          <div>
            <p className="text-lg mb-4">
              <b>Price: </b>
              <b>₹ {cohort.price}</b>
            </p>

            <p className="text-lg mb-4">
              <b> Duration: </b>1 month (4 weeks)
            </p>

            <p className="text-lg mb-4">
              <b> Starts From: </b>Jan 2024 - Feb 2024
            </p>
          </div>

          <Link
            href="https://forms.gle/Ey46LUXokeZtoJdf6"
            target="_blank"
            className="bg-blue-700 hover:bg-blue-800 text-white py-2 md:py-3 rounded-md block text-center"
          >
            Enroll
          </Link>
        </div>
        <div className="rounded-3xl p-10 bg-slate-100 col-span-3">
          <h1 className="font-bold text-xl md:text-3xl mb-3 md:mb-5">
            {cohort.name}
          </h1>

          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: cohort.description }}
          />
        </div>
      </div>

      {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 rounded-3xl">
        <div>
          <Image
              src={cohort.instructorImg}
              height="400"
              width="1500"
              alt="Winter training for Civil"
              className="rounded-3xl w-full"
            />
        </div>
        <div className="bg-slate-100 p-10 rounded-3xl md:col-span-2">
          <h1 className="font-bold text-xl md:text-3xl mb-3 md:mb-5">
            Meet the Instructor
          </h1>
          <div
              dangerouslySetInnerHTML={{ __html: cohort.instructorDetails }}
            />
        </div>
      </section> */}
    </div>
  );
}
