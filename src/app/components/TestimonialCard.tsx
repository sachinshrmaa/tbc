import React from "react";

interface Props{
  name: string,
  feedback: string,
  userMeta: string
}

export default function TestimonialCard({name, feedback, userMeta}: Props) {
  return (
    <div className="secondary-bg rounded-lg p-5">
      <p className="text-lg font-semibold my-0">{name}</p>
      <small className="text-slate-400 mt-0">{userMeta}</small>
      <p className="text-slate-400 mt-2">
        {feedback}
      </p>
    </div>
  );
}
