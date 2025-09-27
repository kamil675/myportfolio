import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];

  const titleRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Project cards scroll animation
    gsap.from(".hero", {
      height: "100px",
      stagger: { amount: 0.4 },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });

    // Wave + Color animation on heading letters
    const letters = titleRef.current.querySelectorAll("span");

    gsap.to(letters, {
      y: -20,
      duration: 0.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1, // infinite wave
      stagger: 0.15, // wave delay
    });

    gsap.to(letters, {
      color: gsap.utils.wrap([
        "#ff4d4d",
        "#4dff4d",
        "#4d4dff",
        "#ffb84d",
        "#ff4da6",
        "#00e6e6",
      ]),
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.2,
        repeat: -1,
      },
    });
  });

  return (
    <div className="lg:p-8 md:p-6 p-4 mb-[100vh]">
      {/* Heading */}
      <div className="pt-[20vh] md:pt-[30vh] lg:pt-[40vh] text-center">
        <h2
          ref={titleRef}
          className="font-[font2] text-4xl sm:text-5xl md:text-6xl lg:text-[9.5vw] uppercase leading-tight flex justify-center gap-2"
        >
          {"Projets".split("").map((char, idx) => (
            <span key={idx} className="inline-block">
              {char}
            </span>
          ))}
        </h2>
      </div>

      {/* Projects list */}
      <div className="mt-10 lol flex flex-col gap-8">
        {projects.map((elem, idx) => (
          <div
            key={idx}
            className="hero w-full flex flex-col md:flex-row md:gap-6 gap-4 items-center"
          >
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
