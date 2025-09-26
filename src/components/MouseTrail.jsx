import React, { useEffect } from "react";
import { gsap } from "gsap";

const MouseTrail = () => {
  useEffect(() => {
    const createSmoke = (x, y) => {
      const smoke = document.createElement("div");
      smoke.classList.add("smoke-dot");
      document.body.appendChild(smoke);

      gsap.set(smoke, {
        x: x - 25, // center on mouse
        y: y - 25,
        scale: 0.5 + Math.random() * 0.5,
        opacity: 0.5,
      });

      gsap.to(smoke, {
        x: x + (Math.random() - 0.5) * 50,
        y: y + (Math.random() - 0.5) * 50,
        scale: 1 + Math.random(),
        opacity: 0,
        filter: `blur(${10 + Math.random() * 10}px)`,
        duration: 3,
        ease: "power2.out",
        onComplete: () => smoke.remove(),
      });
    };

    const handleMouseMove = (e) => {
      createSmoke(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <style>{`
      .smoke-dot {
        position: fixed;
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;
        background: rgba(200,200,200,1);
          border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
      }
    `}</style>
  );
};

export default MouseTrail;
