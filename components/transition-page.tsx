"use client";

import { motion, AnimatePresence } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        {/* Capa Principal Oscura */}
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#030014]"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Capa Secundaria de Gradiente Premium */}
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </AnimatePresence>
  );
};

export default TransitionPage;