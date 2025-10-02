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
      staggerChildren: 0.18,
    },
  },
};

// Contact Data
const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "+94 7111 86028",
    href: "tel:+94711186028",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Quickdocssrilanka@gmail.com",
    href: "mailto:Quickdocssrilanka@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.quickdocs.cenzios.com",
    href: "https://quickdocs.cenzios.com/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kandy, Sri Lanka",
    href: null,
  },
];

// ===== Mobile Layout: contact LEFT, image RIGHT (visible on small screens) =====
const ContactUsMobile = () => (
  // visible on screens smaller than md, hidden on md and up
  <motion.div
    className="block md:hidden w-full"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={staggerContainer}
  >
    <div className="flex flex-row items-center justify-between gap-4 px-2 py-8">
      {/* Contact Info (Left) */}
      <motion.div variants={fadeInUp} className="flex-1 text-left">
        <h3 className="text-[16px] font-semibold text-gray-900 mb-4">
          Contact Information
        </h3>
        <div className="space-y-4">
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3"
              variants={fadeInUp}
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="">
                <p className="text-[13px] font-medium text-gray-900 leading-tight">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={label === "Website" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-[13px] text-gray-600 hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-[13px] text-gray-600">{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Illustration (Right) */}
      <motion.div
        variants={fadeInUp}
        className="flex-1 flex justify-end items-center"
      >
        <motion.img
          src={Group2}
          alt="Contact Illustration"
          className="w-[150px] h-auto object-contain"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </div>
  </motion.div>
);

// ===== Desktop Layout: shows from md and up (contact left, image right) =====
const ContactUsDesktop = () => (
  <motion.div
    className="hidden md:block w-full"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <div className="grid md:grid-cols-2 gap-12 items-center py-8">
      {/* Contact Info */}
      <motion.div variants={fadeInUp} className="order-1">
        <h3 className="text-[24px] text-black mb-8">Contact Information</h3>
        <div className="space-y-6">
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-[#004AAD]" />
              </div>
              <div>
                <p className="text-[16px] font-medium text-black mb-1">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={label === "Website" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-gray-600 text-[16px] hover:text-blue-600 hover:underline"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-gray-600 text-[16px]">{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Illustration */}
      <motion.div
        variants={fadeInUp}
        className="order-2 flex justify-center md:justify-end"
      >
        <motion.img
          src={Group2}
          alt="Contact Illustration"
          className="w-96 h-96 object-contain"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: -2 }}
        />
      </motion.div>
    </div>
  </motion.div>
);

// ===== Main Component =====
const ContactUs = () => (
  <section id="contact" className="bg-blue-50 min-h-screen overflow-hidden">
    <div className="max-w-6xl mx-auto py-20 px-4">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="text-center mb-12 "
      >
        <h2 className="text-[20px] sm:text-[36px] font-bold text-black mb-4">
          Get In Touch
        </h2>
        <p className="text-[14px] sm:text-[20px] text-gray-600 mx-auto max-w-none lg:max-w-4xl">
          Ready to start your project? Contact us today for a free consultation
        </p>
      </motion.div>

      {/* Layouts */}
      <ContactUsMobile />
      <ContactUsDesktop />
    </div>

    {/* Call To Action Section (bottom) */}
    <motion.section
      className="bg-[#0A51B0] py-16 px-4 text-white w-full"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: { duration: 0.8 },
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-[18px] md:text-[48px] font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
        >
          Let's Build Your Winning
          <br />
          Document Today
        </motion.h2>
        <motion.p
          className="text-[14px] md:text-[24px] text-blue-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
        >
          Ready to take your business documents to the next level? Let's discuss
          your project.
        </motion.p>
        <motion.a
          href="tel:+94711186028"
          className="bg-white text-blue-700 text-[10px] md:text-[16px] px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
        >
          <Phone className="w-5 h-5" />
          Call Us Now
        </motion.a>
      </div>
    </motion.section>
  </section>
);

export default ContactUs;
