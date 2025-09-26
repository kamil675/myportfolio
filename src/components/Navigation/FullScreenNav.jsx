import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";
import { Link, useNavigate } from "react-router-dom";
import img2 from "../../Images/img5.jpg";
import img3 from "../../Images/img3.jpg";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const navigate = useNavigate();

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", { display: "block" });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: { amount: -0.3 },
    });
    tl.to(".link", { opacity: 1, rotateX: 0, stagger: { amount: 0.3 } });
    tl.to(".navlink", { opacity: 1 });
  }

  function gsapAnimationReverse(callback) {
    const tl = gsap.timeline({
      onComplete: () => {
        setNavOpen(false); // Animation ke end me close karenge
        if (callback) callback();
      },
    });
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.05 },
      duration: 0.3,
    });
    tl.to(".stairing", { height: 0, stagger: { amount: 0.05 }, duration: 0.3 });
    tl.to(".navlink", { opacity: 0, duration: 0.2 });
    tl.to(".fullscreennav", { display: "none", duration: 0 });
  }

  useGSAP(
    function () {
      if (navOpen) gsapAnimation();
      else gsapAnimationReverse();
    },
    [navOpen]
  );

  const handleLinkClick = (link) => {
    gsapAnimationReverse(() => {
      navigate(link); // Animation ke baad navigate
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="stairing h-full w-1/5 bg-black"></div>
          ))}
        </div>
      </div>

      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
          <div className="lg:w-36 w-24">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>

          <div
            onClick={() => gsapAnimationReverse()}
            className="lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer"
          >
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
          </div>
        </div>

        {[
          { title: "Projets", links: ["/projects", "/projects"] },
          { title: "About", links: ["/About", "/About"] },
          { title: "Contact", links: ["/Contact", "/Contact"] },
          { title: "Home", links: ["/", "/"] },
        ].map((section, idx) => (
          <div
            key={idx}
            className="link origin-top relative border-t-1 border-white"
          >
            <h1 className="font-[font2] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              {section.title}
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                {section.links.map((link, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => handleLinkClick(link)}
                  >
                    <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase hover:text-gray-600 transition">
                      Welcome to My Portfolio
                    </h2>
                    <img
                      className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                      src={i % 2 === 0 ? img2 : img3} // import kiya hua variable
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullScreenNav;
