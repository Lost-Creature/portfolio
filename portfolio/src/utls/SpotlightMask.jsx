// SpotlightMask.jsx
import { useEffect, useState } from "react";

const SpotlightMask = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePos = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePos);
    return () => window.removeEventListener("mousemove", updatePos);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 mix-blend-difference">
      <div
        className="absolute w-72 h-72 rounded-full"
        style={{
          left: pos.x - 144, // center spotlight (half of 288px)
          top: pos.y - 144,
          boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.8)",
          borderRadius: "9999px",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      />
    </div>
  );
};

export default SpotlightMask;
