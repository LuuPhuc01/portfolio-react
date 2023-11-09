import React from "react";

export default function About() {
  return (
    <div className="border-b-2">
      <div className="my-5  mt-10 text-center  text-3xl font-bold text-primary md:text-7xl ">
        About Me
      </div>
      <div className="my-10 text-justify text-xl font-medium text-white md:mx-72 md:my-20 md:text-3xl">
        <div className="txt-about">
          - I’m an international student from Vietnam who started programming
          back in 2020 and turned it into a hobby
        </div>
        <div className="txt-about">
          - My experience is mostly about full-stack development but I also
          explore other fields like Data Science & Machine Learning
        </div>
        <div className="txt-about">
          - Besides from programming, I also do mobile/web design, listen to
          music, go to the gym, and create content for my Youtube channel
        </div>
      </div>
    </div>
  );
}
