import React from "react";

export default function Skills() {
  return (
    <div className="flex flex-col border-b-2 py-10">
      <div className="my-5 mt-10 text-center font-poppins text-3xl font-bold text-primary md:text-7xl ">
        Experiences
      </div>
      <div className="mt-5 flex flex-col items-center justify-center pb-2 font-poppins text-sm text-white md:flex-row md:items-start md:text-xl ">
        <div className="m-5 w-max border-b-4 border-primary pb-2 text-center text-xl font-bold md:w-1/3 md:text-4xl">
          DEK Technologies
        </div>
        <div className="mb-5 flex-col text-start md:mx-7 ">
          <div className="text-2xl font-semibold md:text-5xl">
            Software Engineer Intern
          </div>
          <div className="mt-3 text-sm md:mt-7 md:text-2xl">
            Mar 2023 - Aug 2023
          </div>
          <div className="mt-3 text-xl md:mt-7 md:text-3xl">
            - Worked as software engineer for 3 month in SBG internship project
          </div>
          <div className="mt-3 text-xl md:mt-7 md:text-3xl">
            - Contributed to enhancement of 2 features in Kazoo using Erlang
            programming language
          </div>
          <div className="mt-3 text-xl md:mt-7 md:text-3xl">
            - Software Engineer Intern
          </div>
        </div>
      </div>
    </div>
  );
}
