import Link from "next/link";
import React from "react";
import WorkingCard from "./components/WorkingCard";
import Image from "next/image";
import TestimonialCard from "./components/TestimonialCard";
import Accordion from "./components/Accordion";
import { workings } from "../../data/working";
import { testimonials } from "../../data/testimonial";
import { faq } from "../../data/faq";

export default function Home() {
  return (
    <main>
      <section className="min-h-[300px] text-center py-14 px-8 md:max-w-[700px] md:mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          You don&apos;t learn, then build.
          <span className="text-purple-600">You build, then learn.</span>
        </h1>
        <p className="text-sm text-slate-400">
          Our cohorts bring together students from across India to learn and
          grow. Students benefit from peer and mentor support, collaboration,
          and idea sharing.
        </p>
        <div className="mt-8 mb-6">
          <Link
            href="#get-started"
            className="bg-purple-600 px-6 py-2 rounded-md mr-4 hover:bg-purple-400"
          >
            Get Started
          </Link>
          <Link
            href="#get-started"
            className="bg-slate-600 px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Explore
          </Link>
        </div>
        <p className="text-sm">
          <span className="text-slate-400">✔️ Live cohort </span>
          <span className="text-slate-400">✔️ Project building </span>
          <span className="text-slate-400">✔️ Resources and Tools</span>
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl mb-0 md:mb-1">
            How does it <span className="text-purple-600">work?</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-md">
            It&apos;s pretty simple.
          </p>
        </div>
        <div className="grid grid-flow-row md:grid-flow-col gap-6 md:gap-10">
          {workings.map((e, i) => (
            <WorkingCard key={i} title={e.title} desc={e.desc} icon={e.icon} />
          ))}
        </div>
      </section>

      <section
        id="get-started"
        className="py-5 max-w-6xl mx-auto my-4 md:my-10 px-8"
      >
        <div className="grid md:grid-cols-6 md:grid-flow-col gap-6 md:gap-10">
          <div className="col-span-24 md:col-span-2">
            <h1 className="text-2xl md:text-3xl mb-0 md:mb-1">
              Getting <span className="text-purple-600">started?</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-md">
              Pick the course that interests you.
            </p>
          </div>
          <div className="col-span-24 md:col-span-4">
            <div className="secondary-bg rounded-xl">
              <Image
                src="/python-cohort.jpg"
                height={500}
                width={1000}
                alt="cohort"
                className="max-h-[400px] object-cover rounded-t-xl"
              />
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <h1 className="text-md md:text-xl font-semibold">
                    Introduction to Python and Data Analysis
                  </h1>
                  <h1 className="text-md md:text-xl font-semibold hidden md:block">
                    ₹ 499.0
                  </h1>
                </div>
                <p className="text-slate-400 text-sm md:text-md">
                  Join our beginner-friendly Python masterclass! Learn Python
                  from scratch and understand some of its important concepts,
                  learn to use popular libraries like numpy, pandas, matplotlib,
                  and seaborn. End it with implementing all the knowledge to
                  perform.
                </p>

                <div className="mt-6 mb-1">
                  <Link
                    href="https://forms.gle/YYfcSUABnvzVDRQV6"
                    target="_blank"
                    className="bg-purple-600 px-6 py-1 md:py-2 rounded-md mr-1 hover:bg-purple-400 text-sm md:text-md"
                  >
                    Join
                  </Link>
                  <Link
                    href="/python-cohort"
                    className="text-slate-400 px-6 py-2 rounded-md hover:text-purple-700 text-sm md:text-md"
                  >
                    Learn more
                  </Link>
                  <span className="text-md md:text-xl font-semibold md:hidden">
                    ₹ 499.0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto my-10 px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl mb-0 md:mb-1">
            Wall of <span className="text-purple-600">love.</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-md">
            What our previos students have to say.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {testimonials.map((feedback, index) => (
            <TestimonialCard
              key={index}
              name={feedback.name}
              userMeta={feedback.userMeta}
              feedback={feedback.feedback}
            />
          ))}
        </div>
      </section>

      <section className="py-16 max-w-2xl mx-auto mb-4 md:my-10 px-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl mb-0 md:mb-1">
            Frequently Asked <span className="text-purple-600">Questions.</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-md">
            Here are a few answers to common questions.
          </p>
        </div>
        <div className="mb-4">
          {faq.map((faq) => (
            <Accordion key={faq.id} name={faq.question} content={faq.answer} />
          ))}
        </div>
        <p className="text-slate-400 text-center text-sm">
          Still confused? Feel free to{" "}
          <Link
            href="mailto:mail.sachinshrmaa@gmail.com"
            className="text-purple-600 hover:text-purple-700"
          >
            reach out to us
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
