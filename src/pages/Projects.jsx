import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
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
  });

  return (
    <div className="lg:p-4 p-2 mb-[100vh]">
      <div className="pt-[35vh] lg:pt-[45vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-5xl md:text-6xl uppercase text-center lg:text-left">
          Projets
        </h2>
      </div>

      <div className="mt-10 lol flex flex-col gap-6">
        {projects.map((elem, idx) => (
          <div
            key={idx}
            className="hero w-full flex flex-col lg:flex-row lg:gap-4 gap-4 items-center"
          >
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
