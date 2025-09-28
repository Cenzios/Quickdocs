import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
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
        "depends with the scope of the project. But you will be noted about the delivery date before the project initiation.",
    },
    {
      question: "What is the payment process?",
      answer:
        "The payment process is divided into three stages: 40% after the sample project document, 40% after the first meeting for the final document, and 20% upon final delivery.",
    },
    {
      question: "Will I get editable files?",
      answer: "Yes, Editable files can be shared upon request",
    },
    {
      question: "Can I request multiple revisions?",
      answer: "Yes. Your revision time is unlimited.",
    },
  ];

  return (
    <section id="faqs" className="bg-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          {/* Mobile subtitle */}
          <p className="lg:hidden text-gray-600 text-sm">
            Find solutions to your top questions
          </p>
        </div>

        {/* Mobile Illustration - Only on mobile */}
        <div className="lg:hidden flex justify-center mb-8">
          <div className="w-64 h-48">
            <img
              src={amico}
              alt="FAQ Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - FAQ Accordion */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 -mt-8">
              <hr className="border-t border-gray-300 my-4" />
              {faqData.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left flex items-center justify-between py-2 hover:text-blue-600 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <Minus className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </button>

                  {openItems.includes(index) && (
                    <div className="pl-1">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}

                  {/* gray separator */}
                  <hr className="border-t border-gray-300 my-4" />
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-10 pt-6">
              <p className="text-sm text-gray-600 mb-2">Ask any questions</p>
              <a
                href="mailto:info@quickdocs.lk"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                info@quickdocs.lk
              </a>
            </div>
          </div>

          {/* Right Side - Illustration - Only on desktop */}
          <div className="hidden lg:flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-96 h-96 flex items-center justify-center">
              <img
                src={amico}
                alt="FAQ Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
