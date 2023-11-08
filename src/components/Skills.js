import React from "react";

const skills = [
  {
    company: "DEK Technologies",
    experience: "",
  },
  {
    company: "",
    experience: "",
  },
];

export default function Skills() {
  return (
    <div className="container flex flex-col">
      <div className="text-primary font-poppins text-center font-bold  mt-10 my-5 md:text-7xl text-3xl ">
        Experiences
      </div>
      <div className="flex flex-row md:text-xl text-sm font-poppins text-white mt-5 ">
        <div className="w-1/3 md:text-3xl text-xl mx-5 mt-2 font-bold">
          DEK Technologies
        </div>
        <div className="w-2/3 flex-col mt-2 text-justify mb-20">
          <div className="md:text-3xl text-2xl font-semibold">
            Software Engineer Intern
          </div>
          <div className="text-sm mt-3">Mar 2023 - Aug 2023</div>
          <div className="text-xl mt-3">
            - Worked as software engineer for 3 month in SBG internship project
          </div>
          <div className="text-xl mt-3">
            - Contributed to enhancement of 2 features in Kazoo using Erlang
            programming language
          </div>
          <div className="text-xl mt-3">- Software Engineer Intern</div>
        </div>
      </div>
    </div>
  );
}
