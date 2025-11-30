import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Services2 from "./components/Services2";
import Insurance from "./components/Insurance";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Waitlist from "./components/waitlist";
import usePageTracking from "./hooks/usePageTracking";
import '../src/assets/css/style.css';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/typography.css';
import '../src/assets/css/polish.css';
import '../src/assets/css/modern-clean.css';
import '../src/assets/css/hero-polish.css';
import '../src/assets/css/insurance.css';
import '../src/assets/css/modern-footer.css';
import '../src/assets/css/better-spacing.css';
import '../src/assets/css/optimized-image.css';
import '../src/assets/css/contact-form.css';

function AppContent() {
  // Track page views on route changes
  usePageTracking();

  return (
    <>
    <Helmet>
      {/* Performance Optimizations */}
      <link rel="preconnect" href="https://www.facebook.com" />
      <link rel="preconnect" href="https://www.linkedin.com" />
      <link rel="dns-prefetch" href="https://www.facebook.com" />
      <link rel="dns-prefetch" href="https://www.linkedin.com" />
      
      {/* Mobile Web App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Ohana Therapies" />
      
      {/* iOS App Links */}
      <meta property="al:ios:url" content="ohanatherapies://app" />
      <meta property="al:ios:app_store_id" content="123456789" />
      <meta property="al:ios:app_name" content="Ohana Therapies" />
    </Helmet>
    <div className="light-mode">
      <div className="main_wrapper">
        <Routes>
          {/* Home Page - Shows Everything */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="main_content">
                  <Hero />
                  <About />
                  <Services />
                  <Services2 />
                  <Insurance />
                  <Careers />
                  <Contact />
                </div>
                <Footer />
              </>
            }
          />

          {/* Waitlist Page - Shows ONLY Header and Waitlist */}
          <Route
            path="/waitlist"
            element={
              <>
                <Header />
                <Waitlist />
              </>
            }
          />
        </Routes>
      </div>
    </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
