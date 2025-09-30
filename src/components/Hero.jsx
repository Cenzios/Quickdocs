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
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:flex min-h-screen relative px-6 lg:px-12 xl:px-16 pt-12 overflow-hidden">
        {/* Left side */}
        <div className="flex-[0.45] flex flex-col justify-center pr-4 lg:pr-8">
          <motion.h1
            className="text-[36px] lg:text-[45px] xl:text-[50px] 2xl:text-[56px] font-bold text-white mb-6 leading-tight"
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
            className="text-white text-[14px] lg:text-[15px] xl:text-[16px] mb-8 max-w-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Professional business proposals, pitch decks, and reports crafted by
            MBA-level experts to elevate your business success
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 lg:gap-4 mb-12"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <motion.a
              href="#contact-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0A51B0] px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg text-[14px] lg:text-[16px] hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg text-[14px] lg:text-[16px] hover:bg-white/10 transition-colors"
            >
              View Our Services
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
            className="flex justify-between items-end max-w-2xl gap-4"
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
                  <div className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white mb-1">
                    {num}
                  </div>
                  <div className="text-white text-[13px] lg:text-[14px] xl:text-[15px]">
                    {text}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Right side */}
        <motion.div
          className="flex-[0.55] relative flex items-center justify-center min-h-[500px] lg:min-h-[600px] xl:min-h-[650px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Main character image - Responsive sizing */}
          <motion.img
            src={panaImage}
            className="w-[240px] md:w-[260px] lg:w-[300px] xl:w-[330px] 2xl:w-[280px] max-w-full relative z-10 top-10"
            variants={float}
            animate="animate"
          />

          {/* Frame 1 - Clean and credible */}
          <motion.div
            className="absolute top-4 md:top-8 lg:top-12 xl:top-15 right-0 md:right-2 lg:right-8 xl:-right-5 z-20"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <div className="relative inline-block">
              <div className="inline-flex items-center gap-1.5 lg:gap-2 px-3 md:px-4 lg:px-5 xl:px-6 py-1.5 md:py-2 lg:py-2.5 xl:py-3 bg-white rounded-xl lg:rounded-2xl shadow-lg">
                <img
                  src={star}
                  alt=""
                  className="w-3.5 md:w-4 lg:w-5 h-3.5 md:h-4 lg:h-5"
                />
                <span className="text-[#000000] text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] font-medium whitespace-nowrap">
                  Clean and credible
                </span>
              </div>
              <motion.img
                src={arrowImage}
                alt=""
                className="absolute -bottom-[50px] md:-bottom-[60px] lg:-bottom-[80px] xl:-bottom-[90px] right-[70px] md:right-[80px] lg:right-[100px] xl:right-[120px] w-[45px] md:w-[50px] lg:w-[65px] xl:w-[70px] h-auto -rotate-12"
                animate={float.animate}
              />
            </div>
          </motion.div>

          {/* Frame 2 - Professional MBA-level */}
          <motion.div
            className="absolute top-28 md:top-32 lg:top-36 xl:top-40 left-0 md:left-2 lg:left-4 xl:-left-5 z-20"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="inline-flex items-center gap-1.5 lg:gap-2 px-3 md:px-4 lg:px-5 xl:px-6 py-1.5 md:py-2 lg:py-2.5 xl:py-3 bg-white rounded-xl lg:rounded-2xl shadow-lg">
                <img
                  src={hat}
                  alt=""
                  className="w-3.5 md:w-4 lg:w-5 h-3.5 md:h-4 lg:h-5"
                />
                <span className="text-[#000000] text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] font-medium whitespace-nowrap">
                  Professional, MBA-level Expertise
                </span>
              </div>
              <motion.img
                src={arrowImage}
                alt=""
                className="w-[45px] md:w-[50px] lg:w-[65px] xl:w-[70px] h-auto rotate-[250deg]"
                animate={float.animate}
              />
            </div>
          </motion.div>

          {/* Frame 3 - Fast and Reliable */}
          <motion.div
            className="absolute bottom-32 md:bottom-36 lg:bottom-44 xl:bottom-50 left-2 md:left-4 lg:left-6 xl:left-10 z-20"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
          >
            <div className="relative inline-block">
              <motion.img
                src={arrowImage}
                alt=""
                className="absolute -top-[45px] md:-top-[55px] lg:-top-[70px] xl:-top-[80px] left-[70px] md:left-[80px] lg:left-[100px] xl:left-[120px] w-[45px] md:w-[50px] lg:w-[65px] xl:w-[70px] h-auto rotate-[220deg]"
                animate={float.animate}
              />
              <div className="inline-flex items-center gap-1.5 lg:gap-2 px-3 md:px-4 lg:px-5 xl:px-6 py-1.5 md:py-2 lg:py-2.5 xl:py-3 bg-white rounded-xl lg:rounded-2xl shadow-lg">
                <img
                  src={clock}
                  alt=""
                  className="w-3.5 md:w-4 lg:w-5 h-3.5 md:h-4 lg:h-5"
                />
                <span className="text-[#000000] text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] font-medium whitespace-nowrap">
                  Fast and Reliable Delivery
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bulb image */}
          <motion.div
            className="absolute top-16 md:top-20 lg:top-24 xl:top-30 right-32 md:right-40 lg:right-56 xl:right-70 z-20"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={8}
          >
            <motion.img
              src={bulbImage}
              alt=""
              className="w-[45px] md:w-[50px] lg:w-[60px] xl:w-[74px] h-auto"
              animate={float.animate}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Layout - No changes */}
      <motion.div
        className="md:hidden min-h-screen px-4 py-6 pt-18 flex flex-col"
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div className="mb-6" variants={fadeUp} custom={1}>
          <h1 className="text-[20px] text-center font-bold text-white leading-tight mb-4">
            Your Complete
            <br />
            Document Solution
          </h1>
          <p className="text-white text-center text-[10px] leading-relaxed mb-6">
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
          <motion.a
            href="#contact-us"
            className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-medium text-sm text-center inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.a>

          <motion.a
            href="#services"
            className="w-full border-2 border-white text-white py-3 px-6 rounded-lg font-medium text-sm text-center block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Services
          </motion.a>
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
