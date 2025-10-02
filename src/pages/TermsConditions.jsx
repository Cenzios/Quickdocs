import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import {
  FileText,
  Scale,
  Shield,
  AlertCircle,
  CheckCircle,
  Mail,
  Phone,
  MessageCircle,
  User,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const TermsConditions = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "1. Services",
      content: [
        {
          text: "QuickDocs provides professional document services including, but not limited to:",
        },
        { text: "• Proposals" },
        { text: "• Reports" },
        { text: "• Pitch decks" },
        { text: "• Profile documents" },
        { text: "All services are delivered digitally." },
      ],
    },
    {
      icon: User,
      title: "2. User Responsibilities",
      content: [
        { text: "By using QuickDocs, you agree to:" },
        { text: "• Provide accurate, complete, and current information." },
        { text: "• Use our services only for lawful purposes." },
        {
          text: "• Not submit content that is offensive, defamatory, illegal, or infringes on intellectual property rights.",
        },
        {
          text: "• Ensure that any documents you upload do not contain confidential or sensitive information unless explicitly agreed.",
        },
      ],
    },
    {
      icon: Scale,
      title: "3. Payment Terms",
      content: [
        { text: "All services must be paid in full as specified at checkout." },
        { text: "Payments are processed securely via our payment gateways." },
        {
          text: "QuickDocs reserves the right to suspend or refuse services if payments are not received or if there is suspected fraudulent activity.",
        },
      ],
    },
    {
      icon: CheckCircle,
      title: "4. Refunds and Revisions",
      content: [
        {
          text: "Refunds and revisions are provided according to the specific service package and policy.",
        },
        { text: "Unlimited revisions apply only where explicitly stated." },
        {
          text: "Refund requests must be submitted within the timeframe specified in your service package.",
        },
      ],
    },
    {
      icon: Shield,
      title: "5. Intellectual Property",
      content: [
        {
          text: "All documents created by QuickDocs remain our intellectual property until full payment is received.",
        },
        {
          text: "You may not copy, reproduce, modify, or distribute any content created by QuickDocs without explicit written consent.",
        },
        {
          text: "You retain ownership of any original content you provide to us.",
        },
      ],
    },
    {
      icon: FileText,
      title: "6. User-Generated Content",
      content: [
        {
          text: "Users retain responsibility for content uploaded or submitted to QuickDocs.",
        },
        {
          text: "You grant QuickDocs a non-exclusive, worldwide license to use, display, and process your content for providing our services.",
        },
      ],
    },
    {
      icon: AlertCircle,
      title: "7. Limitation of Liability",
      content: [
        {
          text: "QuickDocs is not liable for indirect, incidental, or consequential damages arising from use of our services.",
        },
        {
          text: "We do not guarantee specific outcomes or results from documents or services provided.",
        },
        { text: "Services are provided “as is” and “as available.”" },
      ],
    },
    {
      icon: AlertCircle,
      title: "8. Termination",
      content: [
        {
          text: "We may suspend or terminate your account or access if you violate these Terms or engage in unlawful activity.",
        },
        {
          text: "You may terminate your account at any time by contacting support.",
        },
      ],
    },
    {
      icon: Scale,
      title: "9. Governing Law and Jurisdiction",
      content: [
        { text: "These Terms are governed by the laws of Sri Lanka." },
        {
          text: "Any disputes will be subject to the exclusive jurisdiction of the courts in Sri Lanka.",
        },
      ],
    },
    {
      icon: FileText,
      title: "10. Modifications to Terms",
      content: [
        { text: "QuickDocs may update these Terms periodically." },
        {
          text: "Continued use of our services after changes constitutes acceptance of the updated Terms.",
        },
      ],
    },
  ];

  return (
    <PageTransition>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow--hidden w-full mt-6">
        {/* Header */}
        <motion.div
          className="bg-[#004AAD] text-white py-12 md:py-16 px-4 md:px-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="flex justify-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <div className="bg-white/20 p-4 rounded-full">
                <Scale className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto">
              These Terms & Conditions (“Terms”) govern your use of the
              QuickDocs website and services. By accessing or using our
              platform, you agree to comply with these Terms. If you do not
              agree, you must not use our services.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 text-xs md:text-sm text-blue-100">
              <span>Effective Date: 1/10/2025</span>
              <span className="hidden sm:inline">•</span>
              <span>Last Updated: 1/10/2025</span>
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-8 md:mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#004AAD] p-3 rounded-xl flex-shrink-0">
                    {React.createElement(section.icon, {
                      className: "w-5 h-5 md:w-6 md:h-6 text-white",
                    })}
                  </div>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 pt-2">
                    {section.title}
                  </h2>
                </div>
                <div className="ml-0 md:ml-16 space-y-4">
                  {section.content.map((item, idx) => (
                    <p
                      key={idx}
                      className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed"
                    >
                      {item.text}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#004AAD] to-[#0066CC] rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                11. Contact Information
              </h2>
              <p className="text-xs md:text-sm lg:text-base mb-6 text-blue-100">
                For questions or concerns about these Terms:
              </p>
              <div className="space-y-4">
                <motion.a
                  href="mailto:Quickdocssrilanka@gmail.com"
                  className="flex items-center gap-3 text-sm md:text-base hover:text-blue-200 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>Quickdocssrilanka@gmail.com</span>
                </motion.a>
                <motion.a
                  href="tel:+94711186028"
                  className="flex items-center gap-3 text-sm md:text-base hover:text-blue-200 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+94 7111 86028</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/94711186028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm md:text-base hover:text-blue-200 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white/20 p-2 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span>WhatsApp: +94 7111 86028</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-block bg-[#004AAD] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-[#003580] transition-colors"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default TermsConditions;
