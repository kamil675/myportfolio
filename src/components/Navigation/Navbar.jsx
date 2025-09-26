import React, { useContext, useRef } from "react";
import { NavbarColorContext, NavbarContext } from "../../context/NavContext";

const Navbar = () => {
  const navGreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const [navColor] = useContext(NavbarColorContext);

  return (
    <div className="z-4 flex fixed top-0 w-full items-start justify-between">
      {/* Left side logo/image */}
      <div className="lg:p-5 p-2">
        <div className="lg:w-36 w-24">
          <img
            src="/kamillogo.jpeg"
            alt="kamil logo"
            className="rounded-full object-cover flip-animation 
                       w-24 h-24 lg:w-36 lg:h-36"
            style={{ border: `2px solid ${navColor}` }}
          />
        </div>
      </div>

      {/* Right side hamburger */}
      <div
        onClick={() => setNavOpen(true)}
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
        }}
        className="lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48"
      >
        <div
          ref={navGreenRef}
          className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"
        ></div>
        <div className="relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5">
          <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
          <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
