"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialContainer() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get("/api/testimonials");
        setTestimonials(res.data);
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

        {testimonials.map((t) => (
          <TestimonialCard
            name={t.name}
            feedback={t.feedback}
            highlight={t.highlight}
            organization={t.organization}
          />
        ))}
      </div>
    </section>
  );
}
