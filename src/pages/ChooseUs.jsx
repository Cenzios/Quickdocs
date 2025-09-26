import React from "react";
import { GraduationCap, Sparkles, Target, Clock } from "lucide-react";
import Group from "../assets/Group.png";
import BlueArrow from "../assets/BlueArrow.png";

const ChooseUs = () => {
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

        {/* Main Content */}
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
