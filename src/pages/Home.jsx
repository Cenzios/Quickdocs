import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0A51B0]">
      <div className="w-full max-w-[1400px] mx-auto">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default Home
