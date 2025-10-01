import React, { useState } from "react";
import { Plus, Minus, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import amico from "../assets/amico.png";

const Faq = () => {
  const [openItems, setOpenItems] = useState([]); // none open by default

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What types of documents do you create?",
      answer:
        "We specialize in business proposals, project reports, company profiles, pitch decks, investor documents, and research-based documents—all tailored to your goals.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Depends on the scope of the project. You will be notified about the delivery date before the project initiation.",
    },
    {
      question: "What is the payment process?",
      answer:
        "The payment process is divided into three stages: 40% after the sample project document, 40% after the first meeting for the final document, and 20% upon final delivery.",
    },
    {
      question: "Will I get editable files?",
      answer: "Yes, editable files can be shared upon request.",
    },
    {
      question: "Can I request multiple revisions?",
      answer: "Yes. Your revision time is unlimited.",
    },
  ];

  return (
    <section id="faqs" className="bg-blue-50 py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[18px] sm:text-[36px] font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>

          <p className="lg:hidden text-gray-600 text-[14px]">
            Find solutions to your top questions
          </p>
        </motion.div>

        {/* ======================= MOBILE VIEW ======================= */}
        <div className="block lg:hidden">
          {/* Mobile Illustration */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-48">
              <img
                src={amico}
                alt="FAQ Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <hr className="border-t border-gray-300 my-4" />
              {faqData.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left flex items-center justify-between py-2 hover:text-blue-600 transition-colors"
                  >
                    <h3 className="text-[14px] font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {openItems.includes(index) ? (
                        <Minus className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-600" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        className="pl-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <p className="text-gray-600 text-[12px] leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <hr className="border-t border-gray-300 my-4" />
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              className="mt-10 pt-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-[12px] text-gray-600 mb-2">
                Ask any questions
              </p>
              <a
                href="tel:+94711186028"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-[14px] font-medium"
              >
                <Phone className="w-4 h-4" />
                +94 7111 86028
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ======================= DESKTOP VIEW ======================= */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - FAQ Accordion */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 -mt-8">
              <hr className="border-t border-gray-300 my-4" />
              {faqData.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left flex items-center justify-between py-2 hover:text-blue-600 transition-colors"
                  >
                    <h3 className="text-[18px] font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {openItems.includes(index) ? (
                        <Minus className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-600" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        className="pl-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <hr className="border-t border-gray-300 my-4" />
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              className="mt-10 pt-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-600 mb-2">Ask any questions</p>
              <a
                href="tel:+94711186028"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                +94 7111 86028
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            className="hidden lg:flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-96 h-96 flex items-center justify-center">
              <img
                src={amico}
                alt="FAQ Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
