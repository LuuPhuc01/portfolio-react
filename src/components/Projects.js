import React from "react";
import img_project1 from "../images/img-project1.jpg";
export default function Projects() {
  return (
    <div>
      <div className="flex flex-col items-center border-b-2 font-poppins">
        <div className="my-5  mt-10 text-center  text-3xl font-bold text-primary md:text-7xl ">
          Projects
        </div>
        <div className="text-centers p-10 md:grid md:w-screen md:grid-cols-2 md:gap-10 lg:px-40 ">
          <div className="mx-10 mb-10 rounded-2xl bg-slate-200">
            <div className="">
              <img src={img_project1} alt="" className="rounded-t-2xl " />
            </div>
            <div className="p-2">
              <div className="my-1 pl-2 text-2xl font-semibold text-gray-800 md:py-2 md:text-5xl">
                Maggic Mirror
              </div>
              <div className=" flex flex-wrap text-[10px] md:py-2 md:text-xl">
                <div className=" ml-2 rounded-md border bg-primary p-2">
                  Javascript
                </div>
                <div className=" ml-2 rounded-md border bg-primary p-2">
                  NodeJs
                </div>
                <div className=" ml-2 rounded-md border bg-primary p-2">
                  C++
                </div>
              </div>
              <div className="m-2 text-start md:pb-2">
                <div className="mb-2 text-sm md:text-2xl">
                  - Build and develop modules calendar, news, weather, face
                  recognition
                </div>
                <div className="text-sm md:text-2xl">
                  - Programming on Raspberry Pi 3B+
                </div>
              </div>
            </div>
          </div>
          <div className="mx-10 mb-10 rounded-2xl bg-slate-200">
            <div className="">
              <img src={img_project1} alt="" className="rounded-t-2xl " />
            </div>
            <div className="p-2">
              <div className="my-1 pl-2 text-2xl font-semibold text-gray-800 md:py-2 md:text-5xl">
                Maggic Mirror
              </div>
              <div className=" flex flex-wrap text-[10px] md:py-2 md:text-xl">
                <div className=" ml-2 rounded-md border bg-primary p-2">
                  Javascript
                </div>
                <div className=" ml-2 rounded-md border bg-primary p-2">
                  NodeJs
                </div>
                <div className=" ml-2 rounded-md border bg-primary p-2">
                  C++
                </div>
              </div>
              <div className="m-2 text-start md:pb-2">
                <div className="mb-2 text-sm md:text-2xl">
                  - Build and develop modules calendar, news, weather, face
                  recognition
                </div>
                <div className="text-sm md:text-2xl">
                  - Programming on Raspberry Pi 3B+
                </div>
              </div>
            </div>
          </div>
          <div className="mx-10 mb-10 rounded-2xl bg-slate-200">
            <div className="">
              <img src={img_project1} alt="" className="rounded-t-2xl " />
            </div>
            <div className="p-2">
              <div className="my-1 pl-2 text-2xl font-semibold text-gray-800 md:py-2 md:text-5xl">
                Maggic Mirror
              </div>
              <div className=" flex flex-wrap text-[10px] md:py-2 md:text-xl">
                <div className=" ml-2 rounded-md border bg-primary p-2">
                  Javascript
                </div>
                <div className=" ml-2 rounded-md border bg-primary p-2">
                  NodeJs
                </div>
                <div className=" ml-2 rounded-md border bg-primary p-2">
                  C++
                </div>
              </div>
              <div className="m-2 text-start md:pb-2">
                <div className="mb-2 text-sm md:text-2xl">
                  - Build and develop modules calendar, news, weather, face
                  recognition
                </div>
                <div className="text-sm md:text-2xl">
                  - Programming on Raspberry Pi 3B+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
