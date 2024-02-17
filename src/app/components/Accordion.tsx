"use client";
import { useState } from "react";

interface Props {
  name: string;
  content: string;
}

export default function Accordion({ name, content }: Props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="secondary-bg rounded-xl p-4 my-4">
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
        className="flex justify-between"
      >
        <span>{name}</span>
        <span>+</span>
      </button>
      <div
        className="py-2 px-1 rounded-md text-slate-400 text-sm"
        style={{ display: isShowing ? "block" : "none" }}
      >
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}
