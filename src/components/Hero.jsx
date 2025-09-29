import React from "react";
import panaImage from "../assets/pana.png";
import star from "../assets/star.png";
import hat from "../assets/hat.png";
import clock from "../assets/clock.png";
import arrowImage from "../assets/arrow.png";
import bulbImage from "../assets/bulb.png";

const Hero = () => {
  return (
    <>
      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:flex min-h-screen relative px-12 pt-12">
        {/* Left side */}
        <div className="flex-[0.45] flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Your Complete
            <br />
            Document
            <br />
            Solution
          </h1>
          <p className="text-white text-lg mb-8">
            Professional business proposals, pitch decks, and reports crafted by
            MBA-level experts to elevate your business success
          </p>
          <div className="flex gap-4 mb-12">
            <button className="bg-white text-[#0A51B0] px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Get Started Today
            </button>
            <a
              href="#services"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View Our Service
            </a>
          </div>

          <hr className="border-white border-t-2 my-8" />

          {/* Stats section */}
          <div className="flex justify-between items-end max-w-2xl">
            <div className="flex flex-col items-start">
              <div className="text-2xl font-bold text-white mb-1">10 +</div>
              <div className="text-white text-sm">Project Completed</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-2xl font-bold text-white mb-1">98 %</div>
              <div className="text-white text-sm">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-2xl font-bold text-white mb-1">24 hrs</div>
              <div className="text-white text-sm">Average Delivery</div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-[0.65] relative flex items-end justify-center min-h-[600px]">
          {/* Main character image */}
          <img
            src={panaImage}
            alt=""
            className="w-[300px] max-w-full relative z-10 left-20"
          />

          {/* Frame 1 */}
          <div className="absolute top-15 -right-5 z-20">
            <div className="relative inline-block ">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-lg">
                <img src={star} alt="" className="w-5 h-5" />
                <span className="text-[#000000] font-medium">
                  Clean and credible
                </span>
              </div>

              {/* Arrow */}
              <img
                src={arrowImage}
                alt=""
                className="absolute -bottom-[90px] right-[120px] w-[70px] h-auto -rotate-12"
              />
            </div>
          </div>

          {/* Frame 2 */}
          <div className="absolute top-40 -left-5 z-20">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-lg">
                {/* Icon */}
                <img src={hat} alt="" className="w-5 h-5" />
                {/* Text */}
                <span className="text-[#000000] font-medium">
                  Professional, MBA-level Expertise
                </span>
              </div>
              {/* Arrow */}
              <img
                src={arrowImage}
                alt=""
                className="w-[70px] h-auto rotate-[250deg]"
              />
            </div>
          </div>

          {/* Frame 3 */}
          <div className="absolute bottom-50 left-10 z-20">
            <div className="relative inline-block">
              {/* Arrow on top */}
              <img
                src={arrowImage}
                alt=""
                className="absolute -top-[80px] left-[120px] w-[70px] h-auto rotate-[220deg]"
              />
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-lg">
                {/* Icon */}
                <img src={clock} alt="" className="w-5 h-5" />
                {/* Text */}
                <span className="text-[#000000] font-medium">
                  Fast and Reliable Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Bulb image - top center */}
          <div className="absolute top-30 right-70 z-20">
            <img src={bulbImage} alt="" className="w-20 h-20" />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Visible only on mobile */}
      <div className="md:hidden min-h-screen px-4 py-6 pt-18 flex flex-col">
        {/* Top Section: Title and Description */}
        <div className="mb-6">
          <h1 className="text-2xl text-center font-bold text-white leading-tight mb-4">
            Your Complete
            <br />
            Document Solution
          </h1>
          <p className="text-white text-center text-sm leading-relaxed mb-6">
            Professional business proposals, pitch decks, and reports crafted by
            MBA-level experts to elevate your business success
          </p>
        </div>

        {/* Main Visual Section - Character with floating elements */}
        <div className="relative flex-1 flex items-center justify-center mb-6">
          {/* Character Image */}
          <div className="relative z-10">
            <img src={panaImage} alt="" className="w-56 h-auto" />
          </div>

          {/* Floating Element 1 */}
          <div className="absolute -top-6 right-2 z-20">
            <div className="bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
              <img src={star} alt="" className="w-4 h-4" />
              <span className="text-gray-900 text-xs font-medium">
                Professional, MBA-level expertise
              </span>
            </div>
            <div className="absolute -bottom-14 left-8">
              <img
                src={arrowImage}
                alt=""
                className="w-12 h-12 opacity-60 rotate-[60deg] scale-x-[-1]"
              />
            </div>
          </div>

          {/* Floating Element 2 */}
          <div className="absolute top-16 left-0 z-20">
            <div className="bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
              <img src={hat} alt="" className="w-4 h-4" />
              <span className="text-gray-900 text-xs font-medium">
                Clean and credible
              </span>
            </div>
            <div className="absolute -bottom-12 right-4 rotate-[300deg] scale-x-[-1]">
              <img
                src={arrowImage}
                alt=""
                className="w-10 h-10 opacity-60 rotate-[320deg]"
              />
            </div>
          </div>

          {/* Floating Element 3 */}
          <div className="absolute bottom-8 left-4 z-20">
            <div className="absolute -top-15 right-18 rotate-[60deg]">
              <img
                src={arrowImage}
                alt=""
                className="w-10 h-10 opacity-60 rotate-[100deg]"
              />
            </div>
            <div className="bg-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
              <img src={clock} alt="" className="w-4 h-4" />
              <span className="text-gray-900 text-xs font-medium">
                Fast and reliable delivery
              </span>
            </div>
          </div>

          {/* Light Bulb */}
          <div className="absolute top-5 left-72 z-10 scale-x-[-1]">
            <img src={bulbImage} alt="" className="w-10 h-10 opacity-80" />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mb-6 space-y-3 px-2">
          <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-medium text-sm">
            Get Started Today
          </button>
          <button className="w-full border-2 border-white text-white py-3 px-6 rounded-lg font-medium text-sm">
            View Our Services
          </button>
        </div>

        {/* Horizontal Line */}
        <hr className="border-white border-t mb-6 mx-2" />

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 text-center px-2">
          <div>
            <div className="text-xl font-bold text-white">10+</div>
            <div className="text-white text-xs">Project Completed</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">98%</div>
            <div className="text-white text-xs">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">24 hrs</div>
            <div className="text-white text-xs">Average Delivery</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
