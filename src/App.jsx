// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage"; // your single-page with sections
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import FloatingCallButton from "./components/FloatingCallButton";

const App = () => {
  useEffect(() => {
    // initMobileOptimizations();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Single page landing with smooth scroll sections */}
        <Route path="/" element={<LandingPage />}  />

        {/* Standalone extra pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy  />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <FloatingCallButton />
    </Router>
  );
};

export default App;
