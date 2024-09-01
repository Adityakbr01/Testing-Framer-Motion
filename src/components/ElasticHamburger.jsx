import React from "react";
import { motion } from "framer-motion";

function ElasticHamburger() {
  // Variants for the draggable menu
  const dragVariants = {
    initial: { x: 0 },
    drag: { x: 0 }, // Position remains unchanged when dragged
    dragEnd: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="relative h-3 mt-6">
      <motion.div
        className="absolute left-0 w-full h-[3px] bg-yellow-100 rounded-full cursor-pointer top-10"
        drag="y"
        dragConstraints={{ top: -10, bottom: 10 }} // Constraints for dragging
        variants={dragVariants}
        initial="initial"
        animate="drag"
        whileDrag="drag"
        dragTransition={{ bounceStiffness: 900, bounceDamping: 5 }}
      ></motion.div>
    </div>
  );
}

export default ElasticHamburger;
