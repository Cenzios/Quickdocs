import React from "react";
import panaImage from "../assets/pana.png";
import star from "../assets/star.png";
import hat from "../assets/hat.png";
import clock from "../assets/clock.png";
import arrowImage from "../assets/arrow.png";
import bulbImage from "../assets/bulb.png";

const Hero = () => {
  return (
    <div className="min-h-screen flex relative px-12 py-12">
      {/* Left side */}
      <div className="flex-[0.45] flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Your Complete
          <br />
          Document
          <br />
          Solution
        </h1>
        <p className="text-blue-100 text-lg mb-8">
          Professional business proposals, pitch decks, and reports crafted by
          MBA-level experts to elevate your business success
        </p>
        <div className="flex gap-4 mb-12">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Get Started Today
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
            View Our Service
          </button>
        </div>

        <hr className="border-blue-200 border-t-2 my-8" />

        {/* Stats section */}
        <div className="flex justify-between items-end max-w-2xl">
          <div className="flex flex-col items-start">
            <div className="text-3xl font-bold text-white mb-1">10 +</div>
            <div className="text-blue-200 text-sm">Project Completed</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-3xl font-bold text-white mb-1">98 %</div>
            <div className="text-blue-200 text-sm">Client Satisfaction</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-3xl font-bold text-white mb-1">24 hrs</div>
            <div className="text-blue-200 text-sm">Average Delivery</div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-[0.65] relative flex items-end justify-center min-h-[600px]">
        {/* Main character image */}
        <img
          src={panaImage}
          alt=""
          className="w-[330px] max-w-full relative z-10 left-20"
        />

        {/* Frame 1 */}
        <div className="absolute -top-12 -right-10 z-20">
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
        <div className="absolute top-20 left-5 z-20">
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
        <div className="absolute top-12 right-60 z-20">
          <img src={bulbImage} alt="" className="w-20 h-20" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
