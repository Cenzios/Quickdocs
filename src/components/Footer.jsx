import React, { useState } from "react";
import { Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import callImg from "../assets/call.png"; // adjust path if needed

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            className="text-4xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Let's Build Your Winning
            <br />
            Document Today
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to take your business documents to the next level? Let's
            discuss your project.
          </motion.p>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-700 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
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
            onClick={() => setIsModalOpen(false)} // close if clicking outside
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-96 text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.7, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 100 }}
              transition={{ duration: 0.4, type: "spring" }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
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
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Section */}
      <motion.footer
        className="bg-[#101828] text-white py-8 px-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {/* Company Info */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
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
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Our Services */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-6 text-white">
                Our Services
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Business Proposals",
                  "Project Report",
                  "Company Profiles",
                  "Pitch Decks",
                  "Investor Documents",
                  "Research Documents",
                ].map((service, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6, color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-6 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Home",
                  "Services",
                  "Why Choose us",
                  "Process",
                  "FAQs",
                  "Contact Us",
                ].map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6, color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-xs md:text-base"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-gray-400 text-xs md:text-sm">
              © 2025 QuickDocs Sri Lanka. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
