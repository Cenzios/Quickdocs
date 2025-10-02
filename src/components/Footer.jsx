import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  // Handle navigation clicks for Quick Links
  const handleQuickLinkClick = (href, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isHomePage) {
      // If on home page, scroll to section
      const sectionId = href.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other pages, navigate to home with hash
      navigate(`/${href}`);
    }
  };

  const socialIcons = [
    {
      Icon: FaFacebook,
      href: "https://web.facebook.com/profile.php?id=61579357920849",
      hoverColor: "hover:bg-blue-600",
    },
    { Icon: FaTwitter, href: "#", hoverColor: "hover:bg-blue-400" },
    { Icon: FaLinkedin, href: "#", hoverColor: "hover:bg-blue-500" },
    { Icon: FaInstagram, href: "#", hoverColor: "hover:bg-pink-600" },
    {
      Icon: SiFiverr,
      href: "https://www.fiverr.com/lahiru_001?source=gig_page",
      hoverColor: "hover:bg-green-600",
    },
  ];

  return (
    <>
      

      {/* ===== Desktop Footer ===== */}
      <motion.footer
        className="hidden md:block bg-[#101828] text-white py-12 px-6 overflow-x-hidden w-full"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-[24px] font-bold text-[#004AAD] mb-4">
                QuickDocs Sri Lanka
              </h3>
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                Your trusted partner for professional business documents. We
                combine MBA-level expertise with fast delivery to help your
                business succeed.
              </p>
              <div className="flex gap-4">
                {socialIcons.map(({ Icon, href, hoverColor }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 ${hoverColor} rounded-lg flex items-center justify-center transition-colors`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "Business Proposals",
                  "Project Report",
                  "Company Profiles",
                  "Pitch Decks",
                  "Investor Documents",
                  "Research Documents",
                ].map((service, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={(e) => handleQuickLinkClick("#services", e)}
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left touch-manipulation"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "#services" },
                  { name: "Why Choose us", href: "#choose-us" },
                  { name: "Process", href: "#process" },
                  { name: "FAQs", href: "#faqs" },
                  { name: "Contact Us", href: "#contact" },
                ].map((link, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={(e) => handleQuickLinkClick(link.href, e)}
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left touch-manipulation"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 QuickDocs Sri Lanka. All rights reserved.
              </p>
              <div className="flex gap-6 flex-wrap justify-center">
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-conditions"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* ===== Mobile Footer ===== */}
      <motion.footer
        className="md:hidden bg-[#101828] text-white py-8 px-4 overflow-x-hidden w-full"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-sm mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {/* Company Info */}
            <div>
              <h3 className="text-[14px] font-bold text-[#004AAD] mb-2">
                QuickDocs Sri Lanka
              </h3>
              <p className="text-gray-300 text-[10px] mb-4 leading-relaxed">
                Expert business documents—MBA insight, fast delivery.
              </p>
              <div className="flex gap-2 flex-wrap">
                {socialIcons.map(({ Icon, href, hoverColor }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-7 h-7 bg-gray-800 ${hoverColor} rounded-md flex items-center justify-center transition-colors`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[10px] font-semibold mb-3">Our Services</h4>
              <ul className="space-y-2 text-xs">
                {[
                  "Business Proposals",
                  "Project Report",
                  "Company Profiles",
                  "Pitch Decks",
                  "Investor Docs",
                  "Research Docs",
                ].map((service, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={(e) => handleQuickLinkClick("#services", e)}
                      className="text-gray-300 text-[10px] hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left touch-manipulation"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                {[
                  { name: "Home", href: "#home" },
                  { name: "Services", href: "#services" },
                  { name: "Choose Us", href: "#choose-us" },
                  { name: "Process", href: "#process" },
                  { name: "FAQs", href: "#faqs" },
                  { name: "Contact", href: "#contact" },
                ].map((link, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={(e) => handleQuickLinkClick(link.href, e)}
                      className="text-gray-300 text-[10px] hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left touch-manipulation"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-6 pt-4">
            <p className="text-gray-400 text-[8px] mb-2 text-center">
              © 2025 QuickDocs Sri Lanka. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white text-[8px] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-gray-400 hover:text-white text-[8px] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
