import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ChooseUs from "./pages/ChooseUs";
import Process from "./pages/Process";
import Faq from "./pages/Faq";
import Payment from "./pages/Payment";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth overflow-y-hidden">
      <Navbar />
      <div>
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
      </div>
      <Footer />
    </div>
  );
};
export default App;
