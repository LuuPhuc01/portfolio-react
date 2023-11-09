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
    <div className="flex flex-col items-center">
      <div className="my-5 mt-10 font-poppins  text-3xl font-bold text-primary md:text-7xl ">
        Contact Me
      </div>
      <div className="text-4xl text-primary md:my-10">
        <FontAwesomeIcon icon={faFacebook} className="icon-cnt" />
        <FontAwesomeIcon icon={faInstagram} className="icon-cnt" />
        <FontAwesomeIcon icon={faGithub} className="icon-cnt" />
        <FontAwesomeIcon icon={faEnvelope} className="icon-cnt" />
      </div>
      <div className="text-center font-poppins text-sm text-white md:text-xl  ">
        <p>
          Designed and made by
          <span className="md:text-2xl font-bold text-primary"> Phuc Luu</span>
        </p>
        <p>@2023</p>
      </div>
    </div>
  );
}
