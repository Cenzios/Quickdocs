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
    title: "STEP 02: Brainstorm Meeting",
    description:
      "We create a sample section to align with your expectations and style.",
  },
  {
    icon: <PenTool className="w-5 h-5 text-white" />,
    title: "STEP 03: Brainstorm Meeting",
    description:
      "Our team develops the complete documents with attention to details.",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-white" />,
    title: "STEP 04: Brainstorm Meeting",
    description:
      "You receive the polished, professional documents ready for use.",
  },
  {
    icon: <Presentation className="w-5 h-5 text-white" />,
    title: "STEP 05: Brainstorm Meeting",
    description: "We present the completed documents for your final approval.",
  },
  {
    icon: <RefreshCcw className="w-5 h-5 text-white" />,
    title: "STEP 06: Brainstorm Meeting",
    description:
      "We incorporate your feedback and refine the document to perfection.",
  },
];

const Process = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Our Simple 6–Step Process
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          From initial consultation to final delivery, we ensure a smooth and
          collaborative experience
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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

                {/* Dash Arrow (only between steps, not after last) */}
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
    </section>
  );
};

export default Process;
