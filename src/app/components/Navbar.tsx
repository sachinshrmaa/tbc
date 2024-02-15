import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="py-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold">
          TheBasicsClass
        </Link>

        <div>
          <Link href="/" className="mr-4">
            About
          </Link>
          <Link href="/" className="mr-4">
            Contact{" "}
          </Link>
          <Link
            href="#"
            className="bg-purple-600 px-6 py-2 rounded-md hover:bg-purple-400"
          >
            Join
          </Link>
        </div>
      </div>
    </nav>
  );
}
