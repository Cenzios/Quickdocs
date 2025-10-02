import React from "react";
import {
  FileText,
  BarChart3,
  Building2,
  Presentation,
  DollarSign,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Business Proposals",
      description:
        "Complete proposals that win clients and secure contracts with professional formatting.",
    },
    {
      icon: BarChart3,
      title: "Project Reports",
      description:
        "Comprehensive project reports with data analysis, insights, and clear recommendations.",
    },
    {
      icon: Building2,
      title: "Company Profiles",
      description:
        "Professional company profiles that showcases your brand, values, and capabilities",
    },
    {
      icon: Presentation,
      title: "Pitch Decks",
      description:
        "Engaging pitch decks that captivate investors and stakeholders",
    },
    {
      icon: DollarSign,
      title: "Investor Documents",
      description:
        "Detailed investor documents including business plans and financial projections",
    },
    {
      icon: BookOpen,
      title: "Research-Based Documents",
      description:
        "Well-researched documents backed by industry and market analysis",
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 bg-gray-50">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[20px] md:text-3xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-[14px] md:text-base text-gray-600 max-w-2xl mx-auto">
            From business proposals to investor documents, we create tailored
            solutions for every need.
          </p>
        </motion.div>

        {/* ---------- Desktop View ---------- */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg duration-300 text-center group hover:scale-105 transform transition-all border border-gray-100"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-4 bg-blue-50 rounded-2xl"
                  >
                    <IconComponent className="w-8 h-8 text-[#004AAD]" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[16px] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ---------- Mobile View ---------- */}
        <motion.div
          className="md:hidden grid grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="p-3 bg-blue-50 rounded-xl"
                  >
                    <IconComponent className="w-6 h-5 text-[#004AAD]" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-[14px] font-semibold text-gray-900 mb-2 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[12px] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
