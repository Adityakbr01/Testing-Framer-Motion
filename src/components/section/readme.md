    <motion.h1
        className="text-center z-[3] text-sky-400 blur-xl"
        style={{
          x: x,
          fontSize: "12vh",
          margin: "0 auto",
          position: "sticky",
          top: "10%", // Adjusted for position
          transform: "translateY(-50%)", // Keeps the h1 vertically centered
        }}
      >
        Web Developer
      </motion.h1>


      <motion.h1
        className="text-center z-[4] text-zinc-300"
        style={{
          x: x,
          fontSize: "12vh",
          margin: "0 auto",
          position: "relative",
          top: "-35%",
        }}
      >
        Web Developer
      </motion.h1>

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Section_2() {
const containerRef = useRef(null);
const isInView = useInView(containerRef); // Trigger animation only once when in view

// Parent container to handle stagger effect
const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.08, // Delay between each span animation
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
stiffness: 800,
damping: 40,
},
},
};

  <!-- return (
    <div
      className="flex items-center justify-center overflow-hidden bg-zinc-900"
      style={{ height: "20vh" }}
    >
      <motion.h1
        ref={containerRef}
        className="text-6xl font-bold text-white uppercase"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate when in view
        style={{ display: "flex", gap: "4px" }} // Ensure letters are spaced out
      >
        {"Web Developer".split("").map((l, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{ display: "inline-block" }}
          >
            {l === " " ? "\u00A0" : l} {/* Handle space between words */}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default Section_2; -->
