import React from 'react';
import '../assets/js/bootstrap.bundle.js';
import '../assets/js/bootstrap.bundle.js.map';
import '../assets/js/custom.js';
import '../assets/js/jquery3.5.1.min.js';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import logo from '../assets/images/logo.png';
import call_top from '../assets/images/call-top.svg';
import email_top from '../assets/images/email-top.svg';
const Header = () => (
  <div>
 <div id="top_bar">
				<div className="container">
					<div className="contact_text">
						<a href="tel:4249840099">
							<span><img src={call_top} alt="" /></span> (484) 985 0189
						</a>
						<a href="mailto:info@ohanatherapies.com">
							<span><img src={email_top} alt="" /></span> info@ohanatherapies.com
						</a>
						<a href="getintouch.html">
							<span><img src={email_top} alt="" /></span> Get in Touch
						</a>
					</div>
				</div>
			</div>
  <div id="header_wrapper" className="sticky">
    <header className="header_menu container">
      <div className="w_logo">
        <a href="index.html" className="logo_wrap">
          <img src={logo} alt="web page" />
        </a>
      </div>
      <div className="menu_item_wrap menu_block">
        <ul className="inn_menu">
          <li className="menu_item">
            <a href="#hero_sec" className="menu_list scrollTo active">HOME</a>
          </li>
          <li className="menu_item">
            <a href="#about_sec" className="menu_list scrollTo">ABOUT OHANA</a>
          </li>
          <li className="menu_item">
            <a href="#service_sec" className="menu_list scrollTo">SERVICES</a>
          </li>
          <li className="menu_item">
            <a href="#careers_sec" className="menu_list scrollTo">CAREERS</a>
          </li>
          <li className="menu_item">
            <a href="#contact_info_sec" className="menu_list scrollTo">CONTACT US</a>
          </li>
        </ul>
      </div>
      <div className="menu_toggle_btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  </div>
  </div>
);

export default Header;
