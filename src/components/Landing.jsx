import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import CustomCursor from "./CustomCursor";

function Landing() {
  return (
    <div className="relative w-full h-screen pt-32 overflow-x-hidden">
      <img
        className="absolute bottom-0 md:h-[40rem] w-[28rem] max-w-none md:w-auto left-1/2 -translate-x-1/2 z-[3]"
        src="./freepik-export-20240831074735s3vj.png"
        alt=""
      />
      <div className="flex  absolute z-[2] text-white text-opacity-60">
        <motion.div
          className="flex flex-shrink-0 whitespace-nowrap"
          initial={{ x: 0 }} // Start from right edge
          animate={{ x: "-100%" }} // Move to left edge
          transition={{
            duration: 6, // Adjust duration for speed
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <h3 className="text-[10rem] mt-20 uppercase tracking-tight">
            Crafting Innovative Solutions Through Code
          </h3>
        </motion.div>{" "}
        <motion.div
          className="flex flex-shrink-0 whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 6, // Adjust duration for speed
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <h3 className="text-[10rem] mt-20 uppercase tracking-tight">
            Crafting Innovative Solutions Through Code
          </h3>
        </motion.div>
      </div>
      {/* <CustomCursor /> */}
    </div>
  );
}

export default Landing;
