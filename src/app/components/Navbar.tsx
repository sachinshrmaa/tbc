"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-bold hover:text-purple-600">
              TheBasicsClass
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                className="px-1 py-2 text-sm font-medium hover:text-purple-600"
                href="/about"
              >
                About
              </Link>
              <Link
                className="px-2 py-2 text-sm font-medium hover:text-purple-600"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="bg-purple-600 px-6 py-2 rounded-md mr-4 hover:bg-purple-400"
                href="#get-started"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400  hover:bg-slate-700 transition duration-150 ease-in-out"
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
          <div className="px-2 pb-3 sm:px-3">
            <Link
              href="/about"
              className=" hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium mb-4"
            >
              Contact
            </Link>
            <Link
              className="bg-purple-600 px-6 py-2 rounded-md mr-4 hover:bg-purple-400 ml-3"
              href="#"
            >
              Enroll
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
