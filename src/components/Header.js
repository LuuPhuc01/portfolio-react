import React from "react";

export default function Header() {
  return (
    <div className=" bg-blue-1000 min-h-min rounded-lg mx-5 mb-5">
      <div className="flex items-center justify-center ">
        <button className="md:text-2xl mx-auto my-3 px-3 py-2 font-sans:Roboto font-bold text- text-zinc-50">
          About
        </button>
        <button className="md:text-2xl mx-auto my-3 px-3 py-2 font-sans:Roboto font-bold text- text-zinc-50">
          Experiences
        </button>
        <button className="md:text-2xl mx-auto my-3 px-3 py-2 font-sans:Roboto font-bold text- text-zinc-50">
          Projects
        </button>
        <button className="md:text-2xl mx-auto my-3 px-3 py-2 font-sans:Roboto font-bold text- text-zinc-50">
          Contact
        </button>
      </div>
    </div>
  );
}
