import React from "react";
import avatar from "../images/avatar.jpg";
export default function Banner() {
  return (
    <div className="h-auto border-b-2">
      <div className="relative mx-10 flex items-center justify-center md:my-10">
        <div className="mx-5 mt-40 w-auto items-center text-center">
          <div className="my-4 font-poppins  text-2xl font-semibold text-white md:mt-14 md:text-5xl ">
            Xin Chao,
          </div>
          <div className="my-4  font-poppins text-4xl font-semibold text-primary md:text-7xl ">
            <span className="text-white">I'm</span> Phuc Luu
          </div>
          <div className="my-4  font-poppins text-xl font-semibold text-white md:text-3xl ">
            Software Engineer
          </div>
          <button className="mb-10 rounded-lg border-l-blue-800 bg-primary p-3 font-poppins font-semibold">
            My resume
          </button>
        </div>
        <img
          src={avatar}
          className="right-50 absolute top-0 w-1/2 rounded-full p-1 md:right-44 md:top-10 md:w-1/5 "
          alt="avatar"
        />
      </div>
    </div>
  );
}
