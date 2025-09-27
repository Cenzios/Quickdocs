import React, { useState } from "react";
import { GraduationCap, Sparkles, Target, Clock } from "lucide-react";
import Group from "../assets/Group.png";
import BlueArrow from "../assets/BlueArrow.png";

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
      {/* Full-width container */}
      <div className="w-full px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-bold text-black mb-4">
            Why Choose QuickDocs?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise, customization, and efficiency to deliver
            exceptional results.
          </p>
        </div>

        {/* Mobile Layout - Carousel */}
        <div className="lg:hidden">
          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <img
              src={Group}
              alt="QuickDocs Team"
              className="w-64 h-48 object-contain"
            />
          </div>

          {/* Current Card */}
          <div className="px-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  {React.createElement(features[currentSlide].icon, {
                    className: "w-6 h-6 text-white",
                  })}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {features[currentSlide].title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {features[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Dot Indicators */}
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

        {/* Desktop Layout - Your Original Code */}
        <div className="hidden lg:block relative h-[600px] w-full">
          {/* Central Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <img
                src={Group}
                alt="QuickDocs Team"
                className="w-70 h-65 object-cover"
              />

              {/* Curved Blue Arrows */}
              <img
                src={BlueArrow}
                alt="Arrow Top Left"
                className="w-20 h-15 absolute top-10 -left-40 opacity-70 rotate-165 scale-y-[-1]"
              />
              <img
                src={BlueArrow}
                alt="Arrow Top Right"
                className="w-20 h-15 absolute top-10 -right-40 opacity-70 rotate-15"
              />
              <img
                src={BlueArrow}
                alt="Arrow Bottom Left"
                className="w-20 h-15 absolute bottom-5 -left-40 opacity-70 rotate-195 scale-y-[1]"
              />
              <img
                src={BlueArrow}
                alt="Arrow Bottom Right"
                className="w-20 h-15 absolute bottom-5 -right-40 opacity-70 scale-x-[-1] rotate-165"
              />
            </div>
          </div>

          {/* Top Left Feature */}
          <div className="absolute -top-6 left-1/4 transform -translate-x-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-96 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                MBA-Level Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team brings advanced business knowledge and strategic
                thinking to every document.
              </p>
            </div>
          </div>

          {/* Top Right Feature */}
          <div className="absolute -top-6 right-1/4 transform translate-x-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-96 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
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
          </div>

          {/* Bottom Left Feature */}
          <div className="absolute -bottom-6 left-1/4 transform -translate-x-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-96 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tailored Documents
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every document is customized to your specific industry,
                audience, and objectives.
              </p>
            </div>
          </div>

          {/* Bottom Right Feature */}
          <div className="absolute -bottom-6 right-1/4 transform translate-x-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-96 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
