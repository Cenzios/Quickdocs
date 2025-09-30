import React, { useState } from "react";
import { GraduationCap, Sparkles, Target, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Group from "../assets/Group.png";
import BlueArrow from "../assets/BlueArrow.png";

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: (direction) => ({
    opacity: 1,
    scale: 1,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  }),
};

const ChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: GraduationCap,
      title: "MBA-Level Expertise",
      description:
        "Our team brings advanced business knowledge and strategic thinking to every document.",
    },
    {
      icon: Sparkles,
      title: "Clarity & Impact",
      description:
        "Clear communication that drives results and achieves your goals.",
    },
    {
      icon: Target,
      title: "Tailored Documents",
      description:
        "Every document is customized to your specific industry, audience, and objectives.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising on quality or attention to details.",
    },
  ];

  return (
    <section
      id="choose-us"
      className="min-h-screen py-20 px-10 bg-blue-50 w-full"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-20 max-w-[1400px] mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-[18px] md:text-3xl font-bold text-gray-900 mb-4">
          Why Choose QuickDocs?
        </h2>
        <p className="text-[14px] md:text-base text-gray-600 max-w-2xl mx-auto">
          We combine expertise, customization, and efficiency to deliver
          exceptional results.
        </p>
      </motion.div>

      {/* -------- Mobile View -------- */}
      <div className="block lg:hidden">
        <div className="flex justify-center mb-8">
          <motion.img
            src={Group}
            alt="QuickDocs Team"
            className="w-64 h-48 object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <div className="px-0 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#004AAD] p-3 rounded-xl">
                  {React.createElement(features[currentSlide].icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
              </div>
              <h3 className="text-[14px] font-semibold text-black mb-3">
                {features[currentSlide].title}
              </h3>
              <p className="text-gray-600 text-[12px] leading-relaxed">
                {features[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* -------- Desktop View -------- */}
      <div className="hidden lg:block relative h-[600px] w-full">
        {/* Floating Group Image */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative">
            <motion.img
              src={Group}
              alt=""
              className="w-70 h-65 object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Animated Arrows */}
            <motion.img
              src={BlueArrow}
              alt="Arrow Top Left"
              className="w-20 h-15 absolute top-10 -left-40 opacity-70 rotate-[165deg] scale-y-[-1]"
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={BlueArrow}
              alt="Arrow Top Right"
              className="w-20 h-15 absolute top-10 -right-40 opacity-70 rotate-[15deg]"
              animate={{ x: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={BlueArrow}
              alt="Arrow Bottom Left"
              className="w-20 h-15 absolute bottom-5 -left-40 opacity-70 rotate-[195deg]"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={BlueArrow}
              alt="Arrow Bottom Right"
              className="w-20 h-15 absolute bottom-5 -right-40 opacity-70 scale-x-[-1] rotate-[165deg]"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Feature Cards with directional animations */}
        <motion.div
          className="absolute -top-6 left-1/4 transform -translate-x-1/2"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          custom="top"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-[#004AAD] p-4 rounded-2xl shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
              MBA-Level Expertise
            </h3>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              Our team brings advanced business knowledge and strategic thinking
              to every document.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -top-6 right-1/4 transform translate-x-1/2"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          custom="right"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-[#004AAD] p-4 rounded-2xl shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Clarity & Impact
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Clear communication that drives results and achieves your goals.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-6 left-1/4 transform -translate-x-1/2"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          custom="bottom"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-[#004AAD] p-4 rounded-2xl shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tailored Documents
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every document is customized to your specific industry, audience,
              and objectives.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-6 right-1/4 transform translate-x-1/2"
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          custom="left"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-[#004AAD] p-4 rounded-2xl shadow-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Quick turnaround times without compromising on quality or
              attention to details.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;
