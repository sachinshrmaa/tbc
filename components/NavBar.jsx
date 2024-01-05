"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-200 text-slate-900 m-2 md:m-6 rounded-2xl">
      <div className="max-w-7xl mx-auto px-5 py-2 md:py-3">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-albert text-lg md:text-2xl font-bold"
            >
              The Basics Class
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link className="px-2 py-2 text-sm font-medium" href="/about">
                About
              </Link>
              <Link className="px-2 py-2 text-sm font-medium" href="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-900  hover:bg-slate-300"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <Link
              href="/about"
              className=" hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:bg-slate-700 block px-3 py-2 rounded-md text-base font-medium mb-4"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
