// import React, { useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Scrollbar from "smooth-scrollbar";

// function App() {
//   const scrollRef = useRef(null);
//   const TragetRef = useRef(null);

//   useEffect(() => {
//     const scrollbar = Scrollbar.init(scrollRef.current);
//     return () => {
//       if (scrollbar) scrollbar.destroy(); // Cleanup on component unmount
//     };
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: TragetRef,
//   });
//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-98%"]);

//   const cards = [
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     // add other card objects here...
//   ];

//   return (
//     <div
//       ref={scrollRef}
//       className="flex flex-col bg-[#131313] text-white text-opacity-70 items-center justify-center w-full"
//       id="my-scrollbar"
//     >
//       <div className="h-[30vh] flex items-center justify-center w-full">
//         <h1>Scroll Down</h1>
//       </div>

//       <section
//         ref={TragetRef}
//         className="relative w-full h-[300vh] bg-neutral-900"
//       >
//         <div className="sticky top-0 flex items-center w-full h-full overflow-hidden bg-purple-500">
//           <motion.div
//             style={{
//               x,
//             }}
//             className="flex gap-4 px-4"
//           >
//             {cards.map((card, index) => (
//               <img key={index} className="h-[20em] rounded-md" src={card.img} />
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <div className="h-[30vh] flex items-center justify-center w-full">
//         <h1>Scroll Up</h1>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    const update = (time) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => {
      lenis.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div ref={scrollRef}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
