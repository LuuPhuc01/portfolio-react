import React from "react";
import { Link } from "react-scroll";
export default function Header(props) {
  return (
    <div className="mb-5 rounded-lg bg-blue-1000">
      <div className="flex items-center justify-center ">
        <Link
          activeClass="active"
          to={props.sections.about}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
          className="text- mx-auto my-3 cursor-pointer px-3 py-2 font-bold text-zinc-50 md:text-2xl"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to={props.sections.skills}
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="text- mx-auto my-3 cursor-pointer px-3 py-2 font-bold text-zinc-50 md:text-2xl"
        >
          Experiences
        </Link>
        <Link
          activeClass="active"
          to={props.sections.projects}
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className="text- mx-auto my-3 cursor-pointer px-3 py-2 font-bold text-zinc-50 md:text-2xl"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to={props.sections.footer}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="text- mx-auto my-3 cursor-pointer px-3 py-2 font-bold text-zinc-50 md:text-2xl"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
