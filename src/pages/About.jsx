import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";
import img7 from "../Images/img7.jpg";
import img8 from "../Images/img8.jpg";
import img9 from "../Images/img9.jpg";
import img10 from "../Images/img10.jpg";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    // ✅ Sirf desktop / tablet par scroll trigger chalega
    if (!isMobile) {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: "top 25%",
          end: "top -100%",
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: "transform",
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (elem) => {
            let imageIndex;
            if (elem.progress < 1) {
              imageIndex = Math.floor(elem.progress * imageArray.length);
            } else {
              imageIndex = imageArray.length - 1;
            }
            imageRef.current.src = imageArray[imageIndex];
          },
        },
      });
    }
  });

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "GSAP",
    "Three.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "Firebase",
    "TailwindCSS",
    "TypeScript",
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Entrance animation for skill cards
    gsap.fromTo(
      ".skill-card",
      { y: 50, opacity: 0 },
      {
        y: 500,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          grid: "auto",
          from: "start",
          amount: 1.5,
        },
        scrollTrigger: {
          trigger: "#page2",
          start: "top 80%",
        },
      }
    );

    if (!isMobile) {
      // Floating effect
      gsap.to(".skill-card", {
        y: "-=10",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          grid: "auto",
          from: "start",
          amount: 1.5,
        },
      });

      // Hover effects
      gsap.utils.toArray(".skill-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.15,
            rotateY: 10,
            boxShadow: "0 10px 30px rgba(0,255,255,0.4)",
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(59,130,246,0.2))",
            duration: 0.4,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            rotateY: 0,
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            background: "rgba(31,41,55,0.6)",
            duration: 0.5,
            ease: "power2.inOut",
          });
        });
      });
    }
  }, []);

  return (
    <div className="parent relative">
      {/* Page 1 */}
      <div id="page1" className="py-1 relative">
        {/* ✅ Desktop/Tablet ke liye scroll-change image */}
        <div
          ref={imageDivRef}
          className="hidden md:block absolute overflow-hidden 
                     lg:h-[20vw] lg:w-[15vw] lg:top-80 lg:left-[30vw] 
                     h-[35vw] w-[60vw] top-32 left-[20vw] 
                     rounded-xl lg:rounded-3xl"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src={img1}
            alt="Scroll Image"
          />
        </div>

        {/* ✅ Mobile ke liye sirf ek static pinned image (img2) */}
        <div
          className="block md:hidden absolute overflow-hidden
                     h-[35vw] w-[60vw] top-32 left-[20vw]
                     rounded-xl"
        >
          <img
            className="h-full w-full object-cover"
            src={img2}
            alt="Mobile Static Image"
          />
        </div>

        <div className="relative font-[font2] px-4">
          <div className="lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[14vw] lg:text-[14vw] text-center uppercase leading-[14vw] lg:leading-[13vw]">
              Technology <br />& Skills
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-7xl text-lg lg:leading-tight leading-snug">
              Our knowledge fuels our creativity. We stay humble and say no to
              messy code, even yours. A stack is alive. It has structure, logic,
              and a story. If we forget that, we can build quick results in the
              short term, but we kill it in the long run. That’s why we commit
              to combining HTML, CSS, JavaScript, React, Next.js, Node.js,
              Express, MongoDB, SQL, Firebase, Three.js, GSAP, GitHub, and
              Postman, to build powerful applications.
            </p>
          </div>
        </div>
      </div>

      {/* Page 2 - Skills Section */}
      <div
        id="page2"
        className="h-screen flex items-center justify-center overflow-hidden top-0"
        style={{
          background: `radial-gradient(circle at top left, #0ff, #06b, #000),
                       linear-gradient(135deg, #1e293b, #0f172a)`,
        }}
      >
        {/* Floating background glow */}
        <div className="absolute w-[400vw] h-[40vw] bg-cyan-400/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-[30vw] h-[30vw] bg-blue-400/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 z-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card backdrop-blur-md bg-gray-800/60 text-white font-bold text-sm md:text-lg lg:text-2xl flex items-center justify-center rounded-2xl shadow-lg cursor-pointer border border-gray-700"
              style={{ minHeight: "100px", minWidth: "120px" }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agence;
