import React, { useState } from "react";
import { Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import callImg from "../assets/call.png"; // adjust path if needed

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Call to Action Section */}
      <section className="bg-[#0A51B0] py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Let's Build Your Winning
            <br />
            Document Today
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to take your business documents to the next level? Let's
            discuss your project.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-700 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </button>
        </div>
      </section>

      {/* Popup Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
          onClick={() => setIsModalOpen(false)} // close if clicking outside
        >
          <div
            className="bg-white rounded-2xl p-6 w-96 text-center shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <img
              src={callImg}
              alt="Call illustration"
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl text-black font-bold mb-2">
              Have questions ?
            </h3>
            <p className="text-gray-600 mb-6">We're here to help !</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/94771234567" // replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Open WhatsApp
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="border border-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-[#101828] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-base md:text-xl font-bold text-[#004AAD] mb-3 md:mb-4">
                QuickDocs Sri Lanka
              </h3>
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-xs md:text-base">
                Your trusted partner for professional business documents. We
                combine MBA-level expertise with fast delivery to help your
                business succeed
              </p>

              {/* Social Icons */}
              <div className="flex gap-2 md:gap-4">
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-6 text-white">
                Our Services
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Business Proposals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Project Report
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Company Profiles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Pitch Decks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Investor Documents
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Research Documents
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Why Choose us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Process
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
            <p className="text-gray-400 text-xs md:text-sm">
              © 2025 QuickDocs Sri Lanka. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
