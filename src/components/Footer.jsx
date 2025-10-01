import React, { useState } from "react";
import { Phone } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import callImg from "../assets/call.png"; // adjust path if needed

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const socialIcons = [
    {
      Icon: FaFacebook,
      href: "https://web.facebook.com/profile.php?id=61579357920849",
      hoverColor: "hover:bg-blue-600",
    },
    { Icon: FaTwitter, href: "#", hoverColor: "hover:bg-blue-400" },
    { Icon: FaLinkedin, href: "#", hoverColor: "hover:bg-blue-500" },
    { Icon: FaInstagram, href: "#", hoverColor: "hover:bg-pink-600" },
    { Icon: SiFiverr, href: "#", hoverColor: "hover:bg-green-600" },
  ];

  return (
    <>
      {/* Call to Action Section */}
      <motion.section
        className="bg-[#0A51B0] py-16 px-4 text-white"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-[18px] md:text-[48px] font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Let's Build Your Winning
            <br />
            Document Today
          </motion.h2>
          <motion.p
            className="text-[14px] md:text-[24px] text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to take your business documents to the next level? Let's
            discuss your project.
          </motion.p>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-700 text-[10px] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </motion.button>
        </div>
      </motion.section>

      {/* Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-96 text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.7, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 100 }}
              transition={{ duration: 0.4, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={callImg}
                alt="Call illustration"
                className="w-32 h-32 mx-auto mb-4"
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.h3
                className="text-xl text-black font-bold mb-2"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Have questions ?
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We're here to help !
              </motion.p>
              <motion.div
                className="flex justify-center gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="https://wa.me/94711186028"
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
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Desktop Footer ===== */}
      <motion.footer
        className="hidden md:block bg-[#101828] text-white py-12 px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-[24px] font-bold text-[#004AAD] mb-4">
                QuickDocs Sri Lanka
              </h3>
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                Your trusted partner for professional business documents. We
                combine MBA-level expertise with fast delivery to help your
                business succeed.
              </p>
              <div className="flex gap-4">
                {socialIcons.map(({ Icon, href, hoverColor }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 ${hoverColor} rounded-lg flex items-center justify-center transition-colors`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "Business Proposals",
                  "Project Report",
                  "Company Profiles",
                  "Pitch Decks",
                  "Investor Documents",
                  "Research Documents",
                ].map((service, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "#services" },
                  { name: "Why Choose us", href: "#choose-us" },
                  { name: "Process", href: "#process" },
                  { name: "FAQs", href: "#faqs" },
                  { name: "Contact Us", href: "#contact" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 QuickDocs Sri Lanka. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>

      {/* ===== Mobile Footer ===== */}
      <motion.footer
        className="md:hidden bg-[#101828] text-white py-8 px-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-sm mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {/* Company Info */}
            <div>
              <h3 className="text-[14px] font-bold text-[#004AAD] mb-2">
                QuickDocs Sri Lanka
              </h3>
              <p className="text-gray-300 text-[10px] mb-4 leading-relaxed">
                Expert business documents—MBA insight, fast delivery.
              </p>
              <div className="flex gap-2 flex-wrap">
                {socialIcons.map(({ Icon, href, hoverColor }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-7 h-7 bg-gray-800 ${hoverColor} rounded-md flex items-center justify-center transition-colors`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[10px] font-semibold mb-3">Our Services</h4>
              <ul className="space-y-2 text-xs">
                {[
                  "Business Proposals",
                  "Project Report",
                  "Company Profiles",
                  "Pitch Decks",
                  "Investor Docs",
                  "Research Docs",
                ].map((service, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-300 text-[10px] hover:text-white transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "#services" },
                  { name: "Choose Us", href: "#choose-us" },
                  { name: "Process", href: "#process" },
                  { name: "FAQs", href: "#faqs" },
                  { name: "Contact", href: "#contact" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-[10px] hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-6 pt-4">
            <p className="text-gray-400 text-[8px]">
              © 2025 QuickDocs Sri Lanka. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
