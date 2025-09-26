import React, { useState, useEffect } from "react";
import Video from "./Video";

const HomeHeroText = () => {
  const texts = ["Full Stack", "MERN Stack"];
  const developerColors = ["text-purple-500", "text-pink-500"];
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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen Background Video */}
      <video
        src="/video.mp4" // ✅ public folder me jo file hai uska direct path
        autoPlay
        loop
        muted
        playsInline // ✅ iOS Safari ke liye zaroori
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center bg-black/40">
        {/* Animated Hero Text */}
        <div
          className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-2xl font-poppins animate-gradientMotion"
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
        <div className="lg:text-[9.5vw] text-[12vw] flex items-start justify-center uppercase lg:leading-[8vw] leading-[12vw] font-bold tracking-wide font-robotoslab animate-float mt-4">
          deve
          <div
            className={`rounded-full overflow-hidden transition-colors duration-500 
              h-[7vw] w-[16vw] mt-[2vw] sm:h-[12vw] sm:w-[24vw] sm:mt-[4vw] lg:h-[7vw] lg:w-[16vw] lg:mt-[1vw] 
              ${developerColors[currentTextIndex]}`}
          >
            <Video />
          </div>
          loper
        </div>
      </div>
    </div>
  );
};

export default HomeHeroText;
