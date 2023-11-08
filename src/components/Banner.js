import React from "react";
import avatar from "../images/avatar.jpg";
export default function Banner() {
  return (
    <div className="h-auto">
      <div className="flex items-center justify-center relative mx-10">
        <div className="w-auto items-center text-center mx-5 mt-40">
          <div className="md:text-5xl  my-4 text-3xl font-poppins font-semibold text-white ">
            Xin Chao,
          </div>
          <div className="md:text-7xl  my-4 text-5xl font-poppins font-semibold text-primary ">
            I'm Phuc Luu
          </div>
          <div className="md:text-3xl  my-4 text-2xl font-poppins font-semibold text-white ">
            Software Engineer
          </div>
          <button className="font-poppins font-semibold bg-primary border-l-blue-800 rounded-lg p-3 mb-10">
            My resume
          </button>
        </div>
        <img
          src={avatar}
          className="p-5 absolute md:right-40 top-10 right-10 md:w-1/5 w-1/3 rounded-full "
          alt="avatar"
        />
      </div>
    </div>
  );
}
