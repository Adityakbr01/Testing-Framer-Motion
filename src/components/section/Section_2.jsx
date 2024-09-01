import React, { useEffect, useRef, useState } from "react";
import { easeIn, easeInOut, motion, useInView } from "framer-motion";

function StaggeredText() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef); // Trigger animation only once when in view

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        easeIn,
      },
    },
  };

  // Individual letter animation
  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        easeInOut,
      },
    },
  };

  //

  const [hoveredElement, setHoveredElement] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Handle hover state
  const handleMouseEnter = (element) => {
    setIsHovering(true);
    setHoveredElement(element);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      onMouseEnter={() => handleMouseEnter("h1")}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-5 mt-3 uppercase bg-zinc-900"
      // style={{ height: "" }}
    >
      {/* Cursor Img with logical rendering */}
      <motion.img
        src={
          hoveredElement === "h1"
            ? "https://images.unsplash.com/photo-1534870439272-475575042b61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : "https://images.unsplash.com/photo-1506782986-72f9101a10f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="fixed  cursor-pointer object-cover bg-center top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: isHovering ? "100px" : "0px", // Expands on hover
          height: isHovering ? "100px" : "0px",
          // borderRadius: "2px",
        }}
        animate={{
          x: cursorPos.x - (isHovering ? 50 : 25), // Adjusting to center based on size
          y: cursorPos.y - (isHovering ? 50 : 25),
          scale: isHovering ? 1.4 : 0, // Enlarges on hover
          opacity: isHovering ? 1 : 0, // Fades slightly on hover
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 600,
        }}
      />

      <motion.h1
        ref={containerRef}
        className="font-bold text-white text-opacity-65 text-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ display: "flex", gap: "4px" }}
      >
        {"Web devloper ".split("").map((l, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            whileHover={{ y: -20 }}
            style={{ display: "inline-block" }}
          >
            {l === " " ? "\u00A0" : l} {/* Handle space between words */}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default StaggeredText;
