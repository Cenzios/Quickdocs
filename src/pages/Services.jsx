import React from "react";
import {
  FileText,
  BarChart3,
  Building2,
  Presentation,
  DollarSign,
  BookOpen,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Business Proposals",
      description:
        "Compelling proposals that win clients and secure contracts with professional formatting.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Project Reports",
      description:
        "Comprehensive project reports with data analysis, insights, and clear recommendations.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Company Profiles",
      description:
        "Professional company profiles that showcases your brand, values, and capabilities",
    },
    {
      icon: <Presentation className="w-8 h-8 text-blue-600" />,
      title: "Pitch Decks",
      description:
        "Engaging pitch decks designed to captivate investors and stakeholders.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Investor Documents",
      description:
        "Detailed investor documents including business plans and financial projections",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Research-Based Documents",
      description:
        "Well-researched documents backed by industry and market analysis",
    },
  ];

  return (
    <section id="services" className="py-18 bg-[#FFFFFF]">
      <div className="w-full max-w-[1400px] mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            From business proposals to investor documents, we create tailored
            solutions for every need
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl duration-300 text-center group hover:scale-105 transform transition-all"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 ">
                <div className="p-4 bg-[#004AAD1A] rounded-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#4A5565] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
