import React from "react";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Group2 from "../assets/Group2.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-blue-50 py-20 px-4 min-h-screen overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-gray-600 mx-auto max-w-none lg:max-w-4xl">
            Ready to start your project? Contact us today for a free
            consultation
          </p>
        </motion.div>

        {/* Mobile Layout */}
        <motion.div
          className="lg:hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-2 gap-4 items-start">
            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Phone", value: "+94 77 123 4567" },
                  { icon: Mail, label: "Email", value: "info@quickdocs.lk" },
                  { icon: Globe, label: "Website", value: "www.quickdocs.lk" },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Colombo, Sri Lanka",
                  },
                ].map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2"
                    variants={fadeInUp}
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900 mb-1">
                        {label}
                      </p>
                      <p className="text-xs text-gray-600">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              className="flex justify-center items-start"
              variants={fadeInUp}
            >
              <motion.img
                src={Group2}
                alt="Contact Illustration"
                className="w-full max-w-48 object-contain"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          className="hidden lg:block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+94 77 123 4567" },
                  { icon: Mail, label: "Email", value: "info@quickdocs.lk" },
                  { icon: Globe, label: "Website", value: "www.quickdocs.lk" },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Colombo, Sri Lanka",
                  },
                ].map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    variants={fadeInUp}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        {label}
                      </p>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              variants={fadeInUp}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <motion.img
                src={Group2}
                alt="Contact Illustration"
                className="w-96 h-96 object-contain mt-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: -3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
