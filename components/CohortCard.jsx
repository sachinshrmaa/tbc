import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CohortCard({
  name,
  price,
  slug,
  description,
  thumbnail,
}) {
  const trimDes = (content) => {
    const res = `${content.slice(0, 270)}...`;
    return res;
  };


  return (
    <div className="border rounded-2xl bg-slate-100 mb-6">
      <Image
        src={thumbnail}
        height="400"
        width="1500"
        alt={name}
        className="rounded-t-2xl w-full"
      />
      <div className="p-4 md:p-8">
        <div className="flex gap-4 mb-2 md:mb-4">
          <small className="bg-yellow-300 px-6 py-1 rounded-xl text-sm capitalize">
            enroll open
          </small>
          <small className="bg-yellow-300 px-6 py-1 rounded-xl text-sm capitalize">
            limited seats
          </small>
        </div>
        <h1 className="font-bold text-xl md:text-3xl mb-3 md:mb-5">{name}</h1>

        <div
          className="mb-6"
          dangerouslySetInnerHTML={{ __html: trimDes(description) }}
        />

        <div className="flex justify-between">
          <div className="flex">
            <Link
              href={slug}
              className="py-2 md:py-3 text-blue-700 hover:text-blue-800"
            >
              Learn more
            </Link>
          </div>

          <p className="text-lg">
            Price: <b>₹ {price}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
