import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  FileText,
  Mail,
  Phone,
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

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "a. Personal Information:",
          text: "Name, email address, phone number, billing and payment details, and other information you provide when submitting documents or registering an account.",
        },
        {
          subtitle: "b. Usage Information:",
          text: "Pages visited, services used, time spent on the website, IP addresses, browser type, device information, and other usage metrics.",
        },
        {
          subtitle: "c. Cookies and Tracking Technologies:",
          text: "We may use cookies, web beacons, and similar tracking technologies to improve site functionality, enhance user experience, and gather analytics.",
        },
        {
          subtitle: "d. User-Submitted Content:",
          text: "Any documents, files, or information you upload through our platform.",
        },
      ],
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      content: [
        {
          text: "To provide, maintain, and improve our services.",
        },
        {
          text: "To communicate with you regarding your requests, orders, or support inquiries.",
        },
        {
          text: "To process payments and manage accounts securely.",
        },
        {
          text: "To analyze website usage and trends to enhance functionality and user experience.",
        },
        {
          text: "To prevent fraud, enforce our terms, and comply with legal obligations.",
        },
        {
          text: "To send marketing communications, if you have opted in.",
        },
      ],
    },
    {
      icon: UserCheck,
      title: "3. Sharing Your Information",
      content: [
        {
          text: "We do not sell or rent your personal data. We may share your information in the following situations:",
        },
        {
          subtitle: "Service Providers:",
          text: "Third-party providers assisting with hosting, payment processing, analytics, and customer support.",
        },
        {
          subtitle: "Legal Requirements:",
          text: "When required by law, regulation, legal process, or government request.",
        },
        {
          subtitle: "Business Transfers:",
          text: "If QuickDocs undergoes a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.",
        },
      ],
    },
    {
      icon: Lock,
      title: "4. Data Retention",
      content: [
        {
          text: "We retain your personal information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements. Usage data and non-identifiable data may be stored for longer periods for analytical purposes.",
        },
      ],
    },
    {
      icon: Shield,
      title: "5. Data Security",
      content: [
        {
          text: "We implement technical, administrative, and organizational measures to protect your information against unauthorized access, disclosure, alteration, or destruction. However, no system is completely secure, and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      icon: UserCheck,
      title: "6. Your Rights",
      content: [
        {
          text: "Depending on your location, you may have the following rights:",
        },
        {
          text: "Access, correct, or delete your personal information.",
        },
        {
          text: "Opt out of marketing communications.",
        },
        {
          text: "Restrict processing or object to certain uses of your data.",
        },
        {
          text: "Withdraw consent where applicable.",
        },
        {
          text: "To exercise these rights, contact us at Quickdocssrilanka@gmail.com.",
        },
      ],
    },
  ];

  return (
    <PageTransition>
      <Navbar />
      <div className=" bg-gradient-to-b from-blue-50 to-white w-full mt-6 ">
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
                <Shield className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto">
              QuickDocs is committed to protecting your privacy and ensuring
              that your personal information is handled responsibly.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 text-xs md:text-sm text-blue-100">
              <span>Effective Date: 1/10/2025</span>
              <span className="hidden sm:inline">•</span>
              <span>Last Updated: 1/10/2025</span>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            By using our services, you agree to the practices described in this
            policy. QuickDocs ("we", "our", "us") values your trust and is
            dedicated to maintaining the highest standards of data protection
            and privacy.
          </p>
        </motion.div>

        {/* Main Content Sections */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 pb-16">
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
                    <div key={idx}>
                      {item.subtitle && (
                        <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Additional Sections */}
          <motion.div
            className="mb-8 md:mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                7. Third-Party Links
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of external
                websites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 md:mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed">
                Our services are not directed at individuals under 13 years old.
                We do not knowingly collect personal information from children.
                If you believe we have collected information from a child,
                please contact us to have it deleted.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-8 md:mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Updates
                will be posted on this page with the updated effective date. We
                encourage you to review the policy periodically.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-[#004AAD] to-[#0066CC] rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                10. Contact Information
              </h2>
              <p className="text-xs md:text-sm lg:text-base mb-6 text-blue-100">
                For questions, concerns, or requests regarding this policy:
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
              </div>
            </div>
          </motion.div>

          {/* Back to Home Button */}
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

export default PrivacyPolicy;
