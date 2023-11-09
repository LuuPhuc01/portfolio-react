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
        <a
          href="https://www.facebook.com/PhucLuu70"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="icon-cnt" />
        </a>
        <a
          href="https://www.instagram.com/_luuphuc_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon-cnt" />
        </a>
        <a
          href="https://github.com/LuuPhuc01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon-cnt" />
        </a>
        <a
          href="mailto:phucluu7271@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon-cnt" />
        </a>
      </div>
      <div className="text-center font-poppins text-sm text-white md:text-xl  ">
        <p>
          Designed and made by
          <span className="font-bold text-primary md:text-2xl"> Phuc Luu</span>
        </p>
        <p>@2023</p>
      </div>
    </div>
  );
}
