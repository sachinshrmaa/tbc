"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CohortCard from "./CohortCard";

export default function CohortsContainer() {
  const [cohorts, setCohorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get("/api/cohorts");
        const loadedCohorts = res.data;
        setCohorts(loadedCohorts);
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center">Something went wrong.</p>;
  }

  return (
    <section className="my-2 md:my-10 py-3 md:py-10" id="trainings">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
        <div className="py-5 md:col-span-1">
          <h1 className="text-2xl md:text-5xl mb-4 font-normal md:font-medium">
            Get Started
          </h1>
          <p className="mb-2 text-md">
            You don’&apos;t learn, then start. You start, then learn
          </p>
        </div>
        <div className="md:col-span-2">
          {cohorts.map((cohort) => (
            <CohortCard
              name={cohort.name}
              slug={cohort.slug}
              price={cohort.price}
              description={cohort.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
