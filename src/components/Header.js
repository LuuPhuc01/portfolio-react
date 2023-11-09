import React from "react";

export default function Header() {
  return (
    <div className="mb-5 rounded-lg bg-blue-1000">
      <div className="flex items-center justify-center ">
        <button className="text- mx-auto my-3 px-3 py-2 font-bold text-zinc-50 md:text-2xl">
          About
        </button>
        <button className="text- mx-auto my-3 px-3 py-2 font-bold text-zinc-50 md:text-2xl">
          Experiences
        </button>
        <button className="text- mx-auto my-3 px-3 py-2 font-bold text-zinc-50 md:text-2xl">
          Projects
        </button>
        <button className="text- mx-auto my-3 px-3 py-2 font-bold text-zinc-50 md:text-2xl">
          Contact
        </button>
      </div>
    </div>
  );
}
