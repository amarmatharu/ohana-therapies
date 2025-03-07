import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Services2 from "./components/Services2";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Waitlist from "./components/waitlist";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
