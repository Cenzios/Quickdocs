import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="w-full overflow-y-hidden"
    >
      {children}
    </motion.div>
  );
};

// Slide transition
export const SlideTransition = ({ children, direction = "right" }) => {
  const variants = {
    enter: {
      x: direction === "right" ? 1000 : -1000,
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: direction === "right" ? -1000 : 1000,
      opacity: 0
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
      className="w-full overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
};

// Scale transition
export const ScaleTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="w-full overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
