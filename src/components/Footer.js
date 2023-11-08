import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export default function Footer() {
  return (
    <div className="container items-center flex flex-col">
      <div className="text-primary font-poppins font-bold  mt-10 my-5 md:text-7xl text-3xl ">
        Contact Me
      </div>
      <div className="text-primary text-4xl md:text-4xl">
        <FontAwesomeIcon icon={faFacebook} className="mx-7 pb-5" />
        <FontAwesomeIcon icon={faInstagram} className="mx-7 pb-5" />
        <FontAwesomeIcon icon={faGithub} className="mx-7 pb-5" />
        <FontAwesomeIcon icon={faEnvelope} className="mx-7 pb-5" />
      </div>
      <div className="text-center md:text-xl text-sm font-poppins text-white  ">
        <p>
          Designed and made by
          <span className="font-bold"> Phuc Luu</span>
        </p>
        <p>@2023</p>
      </div>
    </div>
  );
}
