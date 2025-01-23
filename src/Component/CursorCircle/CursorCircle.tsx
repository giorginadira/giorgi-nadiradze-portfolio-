import { useState, useEffect } from "react";

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y , 
        left: position.x , 
        width: "80px",
        height: "80px",
        backgroundColor: "rgba(161, 28, 4, 0.2)", 
        borderRadius: "50%",
        pointerEvents: "none", 
        zIndex: 9999, 
        transform: "translate(-50%, -50%)", 
      }}
    ></div>
  );
};

export default CursorCircle;
