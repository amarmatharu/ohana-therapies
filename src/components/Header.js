import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import logo from "../assets/images/logo.png";
import call_top from "../assets/images/call-top.svg";
import email_top from "../assets/images/email-top.svg";
import WaitlistButton from "./WaitlistButton";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isWaitlistPage = location.pathname === "/waitlist";

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const headerHeight = document.getElementById('header_wrapper')?.offsetHeight || 0;
    const scrollOffset = headerHeight + 10; // Reduced padding for more precise positioning

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - scrollOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      requestAnimationFrame(() => {
        setTimeout(scrollToSection, 100);
      });
    } else {
      scrollToSection();
    }
  };

  return (
    <header id="header_wrapper" className="sticky">
      <Helmet>
        <title>Ohana Therapies - Navigation</title>
        <meta name="description" content="Explore Ohana Therapies through our easy-to-navigate website." />
      </Helmet>
      <div id="top_bar">
        <div className="container">
          <div className="contact_text">
            <a href="tel:4849850189" aria-label="Call Ohana Therapies">
              <img src={call_top} alt="Call Icon" loading="lazy" /> (484) 985 0189
            </a>
            <a href="mailto:info@ohanatherapies.com" aria-label="Email Ohana Therapies">
              <img src={email_top} alt="Email Icon" loading="lazy" /> info@ohanatherapies.com
            </a>
            {!isWaitlistPage && (
              <div className="header-buttons">
                <WaitlistButton />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="header_menu container">
        <div className="w_logo">
          <Link to="/" className="logo_wrap" aria-label="Go to Home Page">
            <img src={logo} alt="Ohana Therapies Logo" loading="lazy" />
          </Link>
        </div>
        {!isWaitlistPage && (
          <nav className="menu_item_wrap menu_block" aria-label="Main Navigation">
            <ul className="inn_menu">
              <li className="menu_item">
                <a href="#hero_sec" onClick={(e) => handleScroll(e, "hero_sec")} className="menu_list" aria-label="Go to Home">Home</a>
              </li>
              <li className="menu_item">
                <a href="#about_sec" onClick={(e) => handleScroll(e, "about_sec")} className="menu_list" aria-label="Go to About Section">ABOUT OHANA</a>
              </li>
              <li className="menu_item">
                <a href="#service_sec" onClick={(e) => handleScroll(e, "service_sec")} className="menu_list" aria-label="Go to Services Section">SERVICES</a>
              </li>
              <li className="menu_item">
                <a href="#careers_sec" onClick={(e) => handleScroll(e, "careers_sec")} className="menu_list" aria-label="Go to Careers Section">CAREERS</a>
              </li>
              <li className="menu_item">
                <a href="#contact_info_sec" onClick={(e) => handleScroll(e, "contact_info_sec")} className="menu_list" aria-label="Go to Contact Section">CONTACT US</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;