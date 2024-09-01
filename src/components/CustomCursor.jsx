import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: "30px",
          height: "30px",
          border: "1px solid red",
          borderRadius: "50%",
        }}
        animate={{
          x: cursorPos.x - 16, // Adjusting to center the cursor mask
          y: cursorPos.y - 15,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 800,
        }}
      />
    </div>
  );
};

export default CustomCursor;
