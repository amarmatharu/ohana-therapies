import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="modern_footer" id="footer_section">
      <Helmet>
        <title>Ohana Therapies - Contact & Information</title>
        <meta name="description" content="Contact Ohana Therapies for expert ABA therapy services in San Jose and Santa Clara. Insurance accepted." />
      </Helmet>
      
      {/* Main Footer Content */}
      <div className="footer_main">
        <div className="container">
          <div className="footer_grid">
            
            {/* Column 1: About */}
            <div className="footer_col">
              <h3 className="footer_heading">Ohana Therapies</h3>
              <p className="footer_description">
                Expert ABA therapy services for families in San Jose, Santa Clara, and the Bay Area. 
                Compassionate, in-home care that makes a difference.
              </p>
              <div className="footer_badge">
                <span className="footer_badge_icon">✓</span>
                <span className="footer_badge_text">Insurance Accepted</span>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div className="footer_col">
              <h4 className="footer_heading">Quick Links</h4>
              <ul className="footer_links">
                <li><a href="#hero_sec">Home</a></li>
                <li><a href="#about_sec">About Ohana</a></li>
                <li><a href="#service_sec">Services</a></li>
                <li><a href="#careers_sec">Careers</a></li>
                <li><a href="#contact_info_sec">Contact Us</a></li>
                <li><Link to="/waitlist">Join Waitlist</Link></li>
              </ul>
            </div>
            
            {/* Column 3: Services */}
            <div className="footer_col">
              <h4 className="footer_heading">Our Services</h4>
              <ul className="footer_links">
                <li><a href="#service_sec">In-Home ABA Therapy</a></li>
                <li><a href="#service_sec">Autism Therapy</a></li>
                <li><a href="#service_sec">Family Training</a></li>
                <li><a href="#service_sec">Behavior Support</a></li>
                <li><a href="#service_sec">Social Skills Development</a></li>
              </ul>
            </div>
            
            {/* Column 4: Contact */}
            <div className="footer_col">
              <h4 className="footer_heading">Contact Us</h4>
              <ul className="footer_contact">
                <li>
                  <span className="contact_icon">📞</span>
                  <a href="tel:4849850189">(484) 985-0189</a>
                </li>
                <li>
                  <span className="contact_icon">✉️</span>
                  <a href="mailto:info@ohanatherapies.com">info@ohanatherapies.com</a>
                </li>
                <li>
                  <span className="contact_icon">📍</span>
                  <span>Serving San Jose, Santa Clara & Bay Area</span>
                </li>
                <li>
                  <span className="contact_icon">🕐</span>
                  <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                </li>
              </ul>
              
              {/* Social Media */}
              <div className="footer_social">
                <h5 className="footer_social_heading">Follow Us</h5>
                <div className="footer_social_links">
                  <a href="https://www.facebook.com/ohanatherapies/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="social_icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/ohana-therapies" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="social_icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer_bottom">
        <div className="container">
          <div className="footer_bottom_content">
            <p className="footer_copyright">
              © {currentYear} Ohana Therapies. All rights reserved.
            </p>
            <div className="footer_bottom_links">
              <a href="#privacy">Privacy Policy</a>
              <span className="footer_divider">•</span>
              <a href="#terms">Terms of Service</a>
              <span className="footer_divider">•</span>
              <a href="#accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
