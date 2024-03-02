import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function InstructorCard() {
  return (
    <div className="secondary-bg rounded-lg p-5 grid md:grid-flow-col grid-cols-8 gap-2 md:gap-5">
      <div className="col-span-8 md:col-span-2">
        <Image src="/sachin.jpg" alt="sachin sharma" height="500" width="400" className="border-2 border-purple-600 rounded-lg " />
      </div>
      <div className="col-span-8 md:col-span-6">
        <p className="text-slate-400 my-2 text-sm md:text-md">
          There are millions, if not billions of things to learn for any given
          skill, and nobody has figured out everything and that&apos;s how the
          world works. Everybody knows a thing or two and so do I and
          that&apos;s enough to get my work done. So why not pass down
          everything I know and find some along the way so that you can get your
          work done and figure out the rest by yourself?
        </p>
        <p className="text-slate-400 my-2 text-sm md:text-md">
          Hi, I'm Sachin👋, currently working as an Intern for a cloud-based
          startup company, where I work on things related to frontend
          development. I'm also pursuing my Bachelor's degree in Computer
          Engineering.
        </p>
      </div>
    </div>
  );
}
