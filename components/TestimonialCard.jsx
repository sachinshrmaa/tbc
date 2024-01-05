import React from "react";

export default function TestimonialCard({
  name,
  feedback,
  highlight,
  organization,
}) {
  return (
    <div className="bg-white p-4 rounded-xl drop-shadow-sm ">
      <div className="align-end">
        <h1 className="text-md lg:text-xl font-normal font-poppins text-slate-900 capitalize">
          {highlight}
        </h1>
        <p className="text-sm lg:text-md my-4 text-slate-600">{feedback}</p>
        <p className="text-sm lg:text-md text-slate-900">
          {name} —
          <span className="mx-2 text-sm text-slate-800">{organization}</span>
        </p>
      </div>
    </div>
  );
}
