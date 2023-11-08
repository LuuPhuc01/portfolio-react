import React from "react";
import img_project1 from "../images/img-project1.jpg";
export default function Projects() {
  return (
    <div>
      <div className="container font-poppins flex flex-col">
        <div className="text-primary  text-center font-bold  mt-10 my-5 md:text-7xl text-3xl ">
          Projects
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-10  p-10 mb-10 text-centers ">
          <div className="rounded-lg bg-slate-200 mx-10 mb-10">
            <div className="">
              <img src={img_project1} alt="" className="rounded-t-lg " />
            </div>
            <div className="p-3">
              <div className="text-gray-800 font-semibold pl-2 pt-2 md:text-4xl text-3xl my-3">
                Maggic Mirror
              </div>
              <div className=" flex flex-wrap py-3">
                <div className=" border rounded-md bg-primary p-2 ml-2">
                  Javascript
                </div>
                <div className=" border rounded-md bg-primary p-2 ml-2">
                  NodeJs
                </div>
                <div className=" border rounded-md bg-primary p-2 ml-2">
                  C++
                </div>
              </div>
              <div className="p-2 md:text-xl">
                Build and develop modules calendar, news, weather, face
                recognition
              </div>
              <div className="p-2 md:text-xl">
                Programming on Raspberry Pi 3B+
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-slate-200 mx-10 mb-10">
            <div className="">
              <img src={img_project1} alt="" className="rounded-t-lg " />
            </div>
            <div className="p-3">
              <div className="text-gray-800 font-semibold pl-2 pt-2 md:text-4xl text-3xl my-3">
                Maggic Mirror
              </div>
              <div className=" flex flex-wrap py-3">
                <div className=" border rounded-md bg-primary p-2 ml-2">
                  Javascript
                </div>
                <div className=" border rounded-md bg-primary p-2 ml-2">
                  NodeJs
                </div>
                <div className=" border rounded-md bg-primary p-2 ml-2">
                  C++
                </div>
              </div>
              <div className="p-2 md:text-xl">
                Build and develop modules calendar, news, weather, face
                recognition
              </div>
              <div className="p-2 md:text-xl">
                Programming on Raspberry Pi 3B+
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-slate-200 mx-10 mb-10">
            <div className="">
              <img src={img_project1} alt="" className="rounded-t-lg " />
            </div>
            <div className="p-3">
              <div className="text-gray-800 font-semibold pl-2 pt-2 md:text-4xl text-3xl my-3">
                Maggic Mirror
              </div>
              <div className=" flex flex-wrap py-3">
                <div className=" border rounded-md bg-primary p-2 ml-2">
                  Javascript
                </div>
                <div className=" border rounded-md bg-primary p-2 ml-2">
                  NodeJs
                </div>
                <div className=" border rounded-md bg-primary p-2 ml-2">
                  C++
                </div>
              </div>
              <div className="p-2 md:text-xl">
                Build and develop modules calendar, news, weather, face
                recognition
              </div>
              <div className="p-2 md:text-xl">
                Programming on Raspberry Pi 3B+
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
