import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-200 text-slate-900 m-2 md:m-6 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <div className="grid grid-cols-3">
          <div className="col-span-3 md:col-span-2">
            <h2 className="font-albert text-lg md:text-2xl font-bold mb-1">
              The Basics Class
            </h2>
          </div>
          <div className="mt-6 col-span-3 md:mt-0 md:col-span-1 justify-self-start md:justify-self-end">
            <Link href="/terms" className="text-slate-900">
              Terms
            </Link>
            <span className="mx-3">•</span>
            <Link href="/privacy" className="text-slate-900">
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center py-4 px-6 border-t border-t-slate-100">
        <small className="text-slate-900">
          &copy;2022 - present The Basics Class <span className="mx-2">•</span>{" "}
          Made with ❤ by{" "}
          <Link href="https://work.sachinsblog.in" className="text-slate-900">
            Sachin
          </Link>
        </small>
      </div>
    </footer>
  );
}
