import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  // Nav items (IDs used for scrolling)
  const navItems = [
    "home",
    "services",
    "choose-us",
    "process",
    "faq",
    "contact-us",
  ];

  // Custom display labels for nav items
  const navLabels = {
    home: "Home",
    services: "Services",
    "choose-us": "Why Choose Us",
    process: "Process",
    faq: "FAQs",
    "contact-us": "Contact Us",
  };

  // Handle navigation clicks
  const handleNavClick = (item, e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      // If on home page, scroll to section
      const section = document.getElementById(item);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other pages, navigate to home with hash
      navigate(`/#${item}`);
    }
  };

  useEffect(() => {
    // Only handle scroll on home page
    if (!isHomePage) {
      setActiveLink(""); // Clear active link on other pages
      return;
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      let current = navItems[0];

      navItems.forEach((item) => {
        const section = document.getElementById(item);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPos >= sectionTop &&
            scrollPos < sectionTop + sectionHeight
          ) {
            current = item;
          }
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        current = navItems[navItems.length - 1];
      }

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, isHomePage]);

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <motion.header
      className="fixed top-0 w-full bg-[#0A51B0] z-50 overflow-x-hidden"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 overflow-x-hidden">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0, x: -30, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <div className="text-white leading-tight">
            {/* Smaller on mobile, larger on desktop */}
            <div className="font-semibold text-base sm:text-lg">Quick Docs</div>
            <div className="text-[10px] sm:text-xs text-blue-200">
              Sri Lanka
            </div>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.button
              key={item}
              type="button"
              onClick={(e) => handleNavClick(item, e)}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              className={`relative text-white hover:text-blue-300 transition-colors pb-1 cursor-pointer bg-transparent border-none touch-manipulation ${
                activeLink === item ? "after:w-full" : "after:w-0"
              } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300`}
            >
              {navLabels[item]}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Hamburger / Cross */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white z-50 relative"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-[#0A51B0] z-40 flex flex-col pt-24 pl-6 gap-6 text-white shadow-2xl"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.3 }
              }}
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  type="button"
                  onClick={(e) => handleNavClick(item, e)}
                  custom={i}
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 30, scale: 0.9 }}
                  transition={{ 
                    delay: i * 0.1,
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-lg hover:text-blue-300 transition-colors cursor-pointer bg-transparent border-none text-left touch-manipulation ${
                    activeLink === item
                      ? "font-bold underline underline-offset-4"
                      : "font-medium"
                  }`}
                >
                  {navLabels[item]}
                </motion.button>
              ))}
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
