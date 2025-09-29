import React from "react";
import { motion } from "framer-motion";
import panaImage from "../assets/pana.png";
import star from "../assets/star.png";
import hat from "../assets/hat.png";
import clock from "../assets/clock.png";
import arrowImage from "../assets/arrow.png";
import bulbImage from "../assets/bulb.png";

// Variants for animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex min-h-screen relative px-12 pt-12 overflow-hidden">
        {/* Left side */}
        <div className="flex-[0.45] flex flex-col justify-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-6 leading-tight"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Your Complete
            <br />
            Document
            <br />
            Solution
          </motion.h1>

          <motion.p
            className="text-white text-lg mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Professional business proposals, pitch decks, and reports crafted by
            MBA-level experts to elevate your business success
          </motion.p>

          <motion.div
            className="flex gap-4 mb-12"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0A51B0] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </motion.button>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View Our Service
            </motion.a>
          </motion.div>

          <motion.hr
            className="border-white border-t-2 my-8"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Stats section */}
          <motion.div
            className="flex justify-between items-end max-w-2xl"
            initial="hidden"
            animate="visible"
          >
            {[
              "10 +|Project Completed",
              "98 %|Client Satisfaction",
              "24 hrs|Average Delivery",
            ].map((item, i) => {
              const [num, text] = item.split("|");
              return (
                <motion.div
                  key={i}
                  className="flex flex-col items-start"
                  variants={fadeUp}
                  custom={i + 4}
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {num}
                  </div>
                  <div className="text-white text-sm">{text}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right side */}
        <motion.div
          className="flex-[0.65] relative flex items-end justify-center min-h-[600px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Main character image */}
          <motion.img
            src={panaImage}
            alt=""
            className="w-[300px] max-w-full relative z-10 left-20"
            variants={float}
            animate="animate"
          />

          {/* Frame 1 */}
          <motion.div
            className="absolute top-15 -right-5 z-20"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <div className="relative inline-block">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-lg">
                <img src={star} alt="" className="w-5 h-5" />
                <span className="text-[#000000] font-medium">
                  Clean and credible
                </span>
              </div>
              <motion.img
                src={arrowImage}
                alt=""
                className="absolute -bottom-[90px] right-[120px] w-[70px] h-auto -rotate-12"
                animate={float.animate}
              />
            </div>
          </motion.div>

          {/* Frame 2 */}
          <motion.div
            className="absolute top-40 -left-5 z-20"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-lg">
                <img src={hat} alt="" className="w-5 h-5" />
                <span className="text-[#000000] font-medium">
                  Professional, MBA-level Expertise
                </span>
              </div>
              <motion.img
                src={arrowImage}
                alt=""
                className="w-[70px] h-auto rotate-[250deg]"
                animate={float.animate}
              />
            </div>
          </motion.div>

          {/* Frame 3 */}
          <motion.div
            className="absolute bottom-50 left-10 z-20"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
          >
            <div className="relative inline-block">
              <motion.img
                src={arrowImage}
                alt=""
                className="absolute -top-[80px] left-[120px] w-[70px] h-auto rotate-[220deg]"
                animate={float.animate}
              />
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-lg">
                <img src={clock} alt="" className="w-5 h-5" />
                <span className="text-[#000000] font-medium">
                  Fast and Reliable Delivery
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bulb image */}
          <motion.div
            className="absolute top-30 right-70 z-20"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={8}
          >
            <motion.img
              src={bulbImage}
              alt=""
              className="w-20 h-20"
              animate={float.animate}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <motion.div
        className="md:hidden min-h-screen px-4 py-6 pt-18 flex flex-col"
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div className="mb-6" variants={fadeUp} custom={1}>
          <h1 className="text-2xl text-center font-bold text-white leading-tight mb-4">
            Your Complete
            <br />
            Document Solution
          </h1>
          <p className="text-white text-center text-sm leading-relaxed mb-6">
            Professional business proposals, pitch decks, and reports crafted by
            MBA-level experts to elevate your business success
          </p>
        </motion.div>

        {/* Character + floating items */}
        <motion.div
          className="relative flex-1 flex items-center justify-center mb-6"
          variants={fadeUp}
          custom={2}
        >
          <motion.img
            src={panaImage}
            alt=""
            className="w-56 h-auto relative z-10"
            animate={float.animate}
          />

          {/* Floating Element 1 */}
          <motion.div
            className="absolute -top-6 right-2 z-20"
            variants={fadeUp}
            custom={3}
          >
            <div className="bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
              <img src={star} alt="" className="w-4 h-4" />
              <span className="text-gray-900 text-xs font-medium">
                Professional, MBA-level expertise
              </span>
            </div>
            <motion.img
              src={arrowImage}
              alt=""
              className="absolute -bottom-14 left-8 w-10 h-10 opacity-60 rotate-[60deg] scale-x-[-1]"
              animate={float.animate}
            />
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div
            className="absolute top-16 left-0 z-20"
            variants={fadeUp}
            custom={4}
          >
            <div className="bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
              <img src={hat} alt="" className="w-4 h-4" />
              <span className="text-gray-900 text-xs font-medium">
                Clean and credible
              </span>
            </div>
            <motion.img
              src={arrowImage}
              alt=""
              className="absolute -bottom-12 right-4 w-10 h-10 opacity-60 rotate-[330deg] scale-x-[-1]"
              animate={float.animate}
            />
          </motion.div>

          {/* Floating Element 3 */}
          <motion.div
            className="absolute bottom-8 left-4 z-20"
            variants={fadeUp}
            custom={5}
          >
            <motion.img
              src={arrowImage}
              alt=""
              className="absolute -top-15 right-18 w-10 h-10 opacity-60 rotate-[180deg]"
              animate={float.animate}
            />
            <div className="bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
              <img src={clock} alt="" className="w-4 h-4" />
              <span className="text-gray-900 text-xs font-medium">
                Fast and reliable delivery
              </span>
            </div>
          </motion.div>

          {/* Light Bulb */}
          <motion.div
            className="absolute top-5 left-72 z-10 scale-x-[-1]"
            variants={fadeUp}
            custom={6}
          >
            <motion.img
              src={bulbImage}
              alt=""
              className="w-10 h-10 opacity-80"
              animate={float.animate}
            />
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mb-6 space-y-3 px-2"
          variants={fadeUp}
          custom={7}
        >
          <motion.button
            className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-medium text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
          <motion.button
            className="w-full border-2 border-white text-white py-3 px-6 rounded-lg font-medium text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Services
          </motion.button>
        </motion.div>

        {/* Line + Stats */}
        <motion.hr
          className="border-white border-t mb-6 mx-2"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="grid grid-cols-3 gap-4 text-center px-2"
          initial="hidden"
          animate="visible"
        >
          {[
            "10+|Project Completed",
            "98%|Client Satisfaction",
            "24 hrs|Average Delivery",
          ].map((item, i) => {
            const [num, text] = item.split("|");
            return (
              <motion.div key={i} variants={fadeUp} custom={i + 8}>
                <div className="text-xl font-bold text-white">{num}</div>
                <div className="text-white text-xs">{text}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
