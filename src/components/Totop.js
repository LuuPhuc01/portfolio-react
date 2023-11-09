import React, { useEffect, useState } from "react";
import { GrLinkTop } from "react-icons/gr";
export default function Totop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {show && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-10 right-10 w-max cursor-pointer rounded-full bg-primary p-3 text-black md:p-6"
        >
          <GrLinkTop />
        </button>
      )}
    </div>
  );
}
