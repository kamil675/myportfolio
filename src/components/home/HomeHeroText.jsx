import React, { useState, useEffect } from "react";
import Video from "./Video";

const HomeHeroText = () => {
  const texts = ["Full Stack", "MERN Stack"];
  const developerColors = ["text-purple-500", "text-pink-500"]; // colors for each text
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setFlipping(false);
      }, 400);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-72 lg:mt-10 pt-5 text-center perspective-1000">
      {/* Animated Hero Text */}
      <div
        className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-2xl font-poppins animate-gradientMotion"
        style={{
          display: "inline-block",
          transformStyle: "preserve-3d",
          transition: "transform 0.5s ease-in-out",
          transform: flipping ? "rotateX(90deg)" : "rotateX(0deg)",
        }}
      >
        {texts[currentTextIndex]}
      </div>

      {/* Second line with dynamic color */}
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[12vw] font-bold tracking-wide font-robotoslab animate-float">
        deve
        <div
          className={`rounded-full overflow-hidden transition-colors duration-500 
    h-[7vw] w-[16vw] mt-[2vw]  /* margin scales with screen width */
    sm:h-[12vw] sm:w-[24vw] sm:mt-[4vw]  /* slightly bigger on small screens */
    lg:h-[7vw] lg:w-[16vw] lg:mt-[0.5vw] 
    ${developerColors[currentTextIndex]}`}
        >
          <Video />
        </div>
        loper
      </div>
    </div>
  );
};

export default HomeHeroText;
