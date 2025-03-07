import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/css/style.css';
import social_5 from '../assets/images/social-5.svg';
import social_6 from '../assets/images/social-6.svg';
import social_7 from '../assets/images/social-7.svg';
import social_8 from '../assets/images/social-8.svg';

const Footer = () => (
  <footer className="footer_wrapper" id="footer_section">
    <Helmet>
      <title>Ohana Therapies - Stay Connected</title>
      <meta name="description" content="Stay connected with Ohana Therapies through our social media platforms." />
    </Helmet>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="copy_right">
            <p>© {new Date().getFullYear()} <a href="/">Ohana Therapies</a> | All rights reserved.</p>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="hero_social">
            <ul>
              <li>
                <a href="https://www.facebook.com/ohanatherapies/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                  <img src={social_5} alt="Facebook" loading="lazy" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                  <img src={social_6} alt="Twitter" loading="lazy" />
                </a>
              </li>
              <li>
                <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Pinterest">
                  <img src={social_7} alt="Pinterest" loading="lazy" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ohana-therapies" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                  <img src={social_8} alt="LinkedIn" loading="lazy" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
