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
      icon: FileText,
      title: "Business Proposals",
      description: "Client-winning proposals with polished formatting",
    },
    {
      icon: BarChart3,
      title: "Project Reports",
      description: "Data-driven project reports with actionable insights",
    },
    {
      icon: Building2,
      title: "Company Profiles",
      description:
        "Company profiles that highlight your brand and capabilities",
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
      description: "Investor documents featuring business plans and financials",
    },
    {
      icon: BookOpen,
      title: "Research-Based Documents",
      description: "Expertly crafted, research-driven documents",
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 bg-gray-50">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose QuickDocs ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We combine expertise, customization, and efficiency to deliver
            exceptional results.
          </p>
        </div>

        {/* Desktop Grid - 3 columns on large screens, 2 on medium */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg duration-300 text-center group hover:scale-105 transform transition-all border border-gray-100"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-50 rounded-2xl">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout - 2-column grid exactly like the image */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
