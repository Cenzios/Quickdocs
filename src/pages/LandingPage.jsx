// LandingPage.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Services from "./Services";
import ChooseUs from "./ChooseUs";
import Process from "./Process";
import Faq from "./Faq";
import Payment from "./Payment";
import ContactUs from "./ContactUs";
import Footer from "../components/Footer";

const LandingPage = () => {
  const location = useLocation();

  // Handle hash navigation when landing on the page
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth overflow-x-hidden overflow-y-hidden w-full">
      <Navbar />
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="services" className="min-h-screen">
        <Services />
      </section>
      <section id="choose-us" className="min-h-screen">
        <ChooseUs />
      </section>
      <section id="process" className="min-h-screen">
        <Process />
      </section>
      <section id="faq" className="min-h-screen">
        <Faq />
      </section>
      <section id="payment" className="min-h-screen">
        <Payment />
      </section>
      <section id="contact-us" className="min-h-screen">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
