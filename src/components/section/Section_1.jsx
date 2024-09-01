import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import useDimension from "../useDimension";

function Section_1() {
  const Container = useRef(null);
  const container2 = useRef(null);
  const [hoveredElement, setHoveredElement] = useState(null);
  const { height, width } = useDimension(); // Get window height and width

  // Scroll tracking for parallax effect
  const { scrollYProgress } = useScroll({
    target: Container,
    offset: ["start end", "end start"],
  });

  //

  const isInView = useInView(container2);

  // Apply different transform speeds for the parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  ///
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
    <div ref={Container} className="relative w-full overflow-hidden">
      <div
        className="relative w-full mb-4 overflow-x-hidden text-white bg-zinc-900 text-opacity-70 spacer"
        style={{}}
      >
        <h3
          onMouseEnter={() => handleMouseEnter("h1")}
          onMouseLeave={handleMouseLeave}
          className="text-[4rem] text-center uppercase tracking-tight"
        >
          Frontend Developer Frontend Developer
        </h3>
        {/* Cursor Img with logical rendering */}
        <motion.img
          src={
            hoveredElement === "h1"
              ? "https://images.unsplash.com/photo-1724838818103-a3ff16624686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
              : hoveredElement === "image1"
              ? "https://images.unsplash.com/photo-1724685324992-ec866fb31aa0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : hoveredElement === "image2"
              ? "https://images.unsplash.com/photo-1724685325012-c421f5c53bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              : hoveredElement === "image3"
              ? "https://images.unsplash.com/photo-1724727012329-97f4a57b836a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : hoveredElement === "image4"
              ? "https://images.unsplash.com/photo-1711834231901-61c11a20ea51?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : hoveredElement === "button"
              ? "https://images.unsplash.com/photo-1537458032407-423de0f84ee6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : "https://images.unsplash.com/photo-1506782986-72f9101a10f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="fixed cursor-pointer bg-blend-difference object-cover bg-center top-0 left-0 z-[9999] pointer-events-none"
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
      </div>
      {/* Adjust spacer based on height */}
      <div
        style={{ height: height, width: width }}
        className="flex items-center justify-center w-full gap-10 p-4 overflow-hidden image-container"
      >
        <motion.div
          style={{ y: y1 }}
          className="w-[25%] gap-2 rounded-md flex items-center justify-center  flex-col"
        >
          <img
            className="object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1724745603549-4eb259669e44?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            onMouseEnter={() => handleMouseEnter("image2")}
            onMouseLeave={handleMouseLeave}
            className="object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1724745607710-8ed4e0e71e38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="w-[25%] gap-3 rounded-md flex  flex-col"
        >
          <img
            onMouseEnter={() => handleMouseEnter("image1")}
            onMouseLeave={handleMouseLeave}
            className="object-cover rounded-md"
            src="https://images.unsplash.com/photo-1724745571245-a2c7c5c81dec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="object-cover rounded-md"
            src="https://images.unsplash.com/photo-1724674117588-088d2781cb81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className="w-[25%] gap-3 rounded-md flex  flex-col"
        >
          <img
            className="object-cover rounded-md"
            src="https://images.unsplash.com/photo-1724862941235-0d880da26f6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            onMouseEnter={() => handleMouseEnter("image3")}
            onMouseLeave={handleMouseLeave}
            className="object-cover rounded-md"
            src="https://plus.unsplash.com/premium_photo-1697778136245-d0d67de916ef?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </motion.div>

        <motion.div
          style={{ y: y4 }}
          className="w-[25%] gap-3 rounded-md flex  flex-col"
        >
          <img
            onMouseEnter={() => handleMouseEnter("image4")}
            onMouseLeave={handleMouseLeave}
            className="object-cover rounded-md"
            src="https://images.unsplash.com/photo-1724767928970-85c8743cf01d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="object-cover rounded-md"
            src="https://images.unsplash.com/photo-1724727012329-97f4a57b836a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Section_1;
