import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const buttons = ["Projects", "About", "Contact"];

  return (
    <div className="font-[font2] flex flex-row items-center justify-center gap-4 lg:gap-6 relative flex-wrap">
      {/* Intro Text */}
      <p
        className="absolute lg:w-[20vw] w-72 lg:right-24 right-2 bottom-28 lg:bottom-72 
                   font-robotoslab text-gray-300 italic tracking-wide
                   lg:text-lg text-sm lg:leading-relaxed leading-snug"
      >
        I'm a <span className="text-[#D3FD50] font-semibold">Full Stack</span>{" "}
        and
        <span className="text-[#D3FD50] font-semibold">
          {" "}
          Android developer
        </span>{" "}
        who builds every project to grow innovation. Tomorrow, in 5 months and
        in 5 years. He looks for the spark that creates impact to generate
        value. To keep things honest, he stays transparent, says what must be
        said, and does what must be done.
      </p>

      {/* Buttons */}
      {buttons.map((text, index) => (
        <div
          key={index}
          className={`group relative overflow-hidden lg:border-3 border-2 border-white rounded-full h-12 lg:h-30 flex items-center 
                      px-4 lg:px-16 uppercase tracking-widest
                      transition-all duration-500 ease-in-out
                      transform
                      ${
                        loaded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }
                      hover:-translate-y-1 cursor-pointer`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          {/* Sliding background */}
          <span
            className="absolute top-0 left-0 w-full h-0 bg-[#D3FD50] z-0 transition-all duration-500 ease-in-out group-hover:h-full"
            style={{ pointerEvents: "none" }}
          ></span>

          <Link
            className="relative z-10 text-base lg:text-5xl font-bold font-poppins italic transition-colors duration-500 ease-in-out group-hover:text-black"
            to={`/${text.toLowerCase()}`}
          >
            {text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeBottomText;
