import React from "react";
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
    <section className="py-20 px-6 bg-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Our Simple 6–Step Process
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          From initial consultation to final delivery, we ensure a smooth and
          collaborative experience
        </p>
      </div>

      {/* -------- Desktop View (with dashed arrows) -------- */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={manImage}
            alt="Man working illustration"
            className="w-[350px] sm:w-[400px] lg:w-[500px] h-auto mt-20 object-contain"
          />
        </div>

        {/* Right Side Steps */}
        <div className="relative">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-16">
                {/* Icon circle */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-md">
                  {step.icon}
                </div>

                {/* Step Text */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Dashed Arrow (only between steps) */}
                {index < steps.length - 1 && (
                  <img
                    src={dashArrow}
                    alt="Step connector"
                    className="absolute left-[12px] top-[52px] w-[20px] h-16 object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -------- Mobile View (zig-zag with solid line) -------- */}
      <div className="lg:hidden relative flex flex-col items-center">
        {/* Solid Blue Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-blue-600"></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex w-full mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Step content box */}
            <div className="w-1/2 px-4">
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Step Icon on Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-md z-10">
              {step.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
