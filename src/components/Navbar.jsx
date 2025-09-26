import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // Hamburger & close icons

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "home",
    "services",
    "choose-us",
    "process",
    "faq",
    "contact-us",
  ];

  useEffect(() => {
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
  }, [navItems]);

  return (
    <header className="fixed top-0 w-full bg-[#0A51B0] z-50 ">
      <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center px-6 lg:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <div className="text-white">
            <div className="font-semibold text-lg">Quick Docs</div>
            <div className="text-xs text-blue-200">Sri Lanka</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`text-white hover:text-blue-400 transition-colors pb-1 ${
                activeLink === item ? "border-b-2 border-white" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0A51B0] shadow-lg transform transition-transform duration-300 z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-24 ml-6 gap-6 text-white">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsMobileMenuOpen(false)} // close menu on click
              className={`text-lg hover:text-blue-300 transition-colors ${
                activeLink === item ? "font-bold underline" : "font-medium"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
