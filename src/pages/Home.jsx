import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0A51B0]">
      <div className="w-full max-w-[1400px] mx-auto">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
