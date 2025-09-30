import React from "react";
import { motion } from "framer-motion";
import manImage from "../assets/man.png";
import dashArrow from "../assets/dasharrow.png";
import {
  Lightbulb,
  FileText,
  PenTool,
  CheckCircle,
  Presentation,
  RefreshCcw,
} from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    title: "STEP 01: Brainstorm Meeting",
    description:
      "We discuss your requirements, objectives, and vision for the document.",
  },
  {
    icon: <FileText className="w-5 h-5 text-white" />,
    title: "STEP 02: Sample Project",
    description:
      "We create a sample section to align with your expectations and style.",
  },
  {
    icon: <PenTool className="w-5 h-5 text-white" />,
    title: "STEP 03: Project Work",
    description: "We develop the complete documents with attention to details.",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-white" />,
    title: "STEP 04: Revision & Demos",
    description:
      "We incorporate your feedback and refine the document to perfection.",
  },
  {
    icon: <Presentation className="w-5 h-5 text-white" />,
    title: "STEP 05: Final Demos",
    description: "We present the completed documents for your final approval.",
  },
  {
    icon: <RefreshCcw className="w-5 h-5 text-white" />,
    title: "STEP 06: Final Documents",
    description:
      "You receive the polished, professional documents ready for use.",
  },
];

const Process = () => {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[18px] sm:text-3xl font-bold text-gray-900 mb-3">
          Our Simple 6–Step Process
        </h2>
        <p className="text-gray-600 text-[14px] sm:text-base">
          From initial consultation to final delivery, we ensure a smooth and
          collaborative experience
        </p>
      </motion.div>

      {/* -------- Desktop View -------- */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Side Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={manImage}
              alt="Man working illustration"
              className="w-[500px] h-auto mt-20 object-contain"
            />
          </motion.div>

          {/* Right Side Steps */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            viewport={{ once: true }}
          >
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative pl-16"
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* Icon circle */}
                  <motion.div
                    className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#004AAD] shadow-md"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.3,
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step Text */}
                  <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[16px] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Dashed Arrow (animated float) */}
                  {index < steps.length - 1 && (
                    <motion.img
                      src={dashArrow}
                      alt="Step connector"
                      className="absolute left-[12px] top-[52px] w-[20px] h-16 object-contain"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* -------- Mobile View -------- */}
      <div className="block lg:hidden">
        <motion.div
          className="relative flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          viewport={{ once: true }}
        >
          {/* Solid Blue Vertical Line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-[#004AAD]"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex w-full mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Step content box */}
              <div className="w-1/2 px-4">
                <motion.div
                  className="bg-white rounded-lg p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3 className="text-[14px] font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[12px] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Step Icon on Line */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 -top-2 flex items-center justify-center w-10 h-10 rounded-full bg-[#004AAD] shadow-md z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.3,
                }}
              >
                {step.icon}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
