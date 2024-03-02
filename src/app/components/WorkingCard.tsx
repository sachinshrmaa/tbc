import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  desc: string;
  icon: string;
}

export default function WorkingCard({ title, desc, icon }: Props) {
  return (
    <div className="secondary-bg rounded-lg p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">{title}</h1>
        <Image
          src={icon}
          width={40}
          height={40}
          alt={title}
          className="rotate-90 md:rotate-0"
        />
      </div>

      <p className="text-slate-400 text-sm md:text-md">{desc}</p>
    </div>
  );
}
