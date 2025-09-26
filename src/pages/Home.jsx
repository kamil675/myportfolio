import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  const text = "Hii Kamil";

  return (
    <div className="text-white">
      {/* Video background */}
      <div className="h-screen w-screen fixed">
        <Video />
      </div>

      {/* Mobile-only animated text */}
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 text-3xl font-bold sm:hidden flex gap-1">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block animate-wave"
            style={{
              animationDelay: `${index * 0.1}s`,
              color: "#ff69b4",
              fontFamily: "'Pacifico', cursive",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>

      {/* TailwindCSS animation */}
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-wave {
          animation: wave 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
