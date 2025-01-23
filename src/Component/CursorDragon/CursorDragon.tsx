import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorDragon = () => {
  const dragonRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const moveDragon = (e: MouseEvent) => {
      gsap.to(dragonRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveDragon);
    return () => window.removeEventListener("mousemove", moveDragon);
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-800">
      <h1 className="text-center text-4xl font-bold text-red-500 pt-20">
        Welcome to the Dragon Cursor Page
      </h1>
      <svg
        ref={dragonRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100px",
          height: "100px",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
        }}
        viewBox="0 0 1024 1024"
      >
        <path
          d="M960 448l-160-64-96-160c-12.8-19.2-44.8-12.8-44.8 12.8v83.2l-160-64-64-160c-6.4-25.6-44.8-25.6-51.2 0l-64 160-160 64v-83.2c0-25.6-32-32-44.8-12.8l-96 160-160 64c-12.8 6.4-12.8 32 0 38.4l160 64 96 160c12.8 19.2 44.8 12.8 44.8-12.8v-83.2l160 64 64 160c6.4 25.6 44.8 25.6 51.2 0l64-160 160-64v83.2c0 25.6 32 32 44.8 12.8l96-160 160-64c12.8-6.4 12.8-32 0-38.4z"
          fill="#FF0000" 
        />
      </svg>
    </div>
  );
};

export default CursorDragon;
