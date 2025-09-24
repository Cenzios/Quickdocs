import React, { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    "Home",
    "Services",
    "Why Choose Us",
    "Process",
    "FAQs",
    "Contact",
  ];

  return (
    <header className="flex justify-between items-center px-12 py-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-8 h-8 " />
        <div className="text-white">
          <div className="font-semibold text-lg">Quick Docs</div>
          <div className="text-xs text-blue-200">Sri Lanka</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            onClick={() => setActiveLink(link)}
            className={`text-white ${
              activeLink === link ? "border-b-2 border-white" : ""
            } pb-1`}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
