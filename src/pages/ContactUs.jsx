import React from "react";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import Group2 from "../assets/Group2.png";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-blue-50 py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-gray-600 mx-auto max-w-none lg:max-w-4xl">
            Ready to start your project? Contact us today for a free
            consultation
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-4 items-start">
            {/* Mobile Contact Information - Left Side */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900 mb-1">
                      Phone
                    </p>
                    <p className="text-xs text-gray-600">+94 77 123 4567</p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900 mb-1">
                      Email
                    </p>
                    <p className="text-xs text-gray-600">info@quickdocs.lk</p>
                  </div>
                </div>
                {/* Website */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900 mb-1">
                      Website
                    </p>
                    <p className="text-xs text-gray-600">www.quickdocs.lk</p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900 mb-1">
                      Location
                    </p>
                    <p className="text-xs text-gray-600">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Illustration - Right Side */}
            <div className="flex justify-center items-start">
              <div className="w-full max-w-48">
                <img
                  src={Group2}
                  alt="Contact Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Your Original Code */}
        <div className="hidden lg:block">
          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Information */}
            <div className="order-2 lg:order-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Phone
                    </p>
                    <p className="text-gray-600">+94 77 123 4567</p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Email
                    </p>
                    <p className="text-gray-600">info@quickdocs.lk</p>
                  </div>
                </div>
                {/* Website */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Website
                    </p>
                    <p className="text-gray-600">www.quickdocs.lk</p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Location
                    </p>
                    <p className="text-gray-600">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side - Contact Illustration */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end ">
              <div className="w-96 h-96 flex items-center justify-center ">
                <img
                  src={Group2}
                  alt="Contact Illustration"
                  className="w-full h-full object-contain mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
