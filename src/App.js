import React from 'react';
import TopBar from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Services2 from './components/Services2';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="light-mode">
      <div className="main_wrapper">
        <TopBar />       
        <div className="main_content">
          <Hero />
          <About />
          <Services />
          <Services2 />
          <Careers />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
