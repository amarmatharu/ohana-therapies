import React from 'react';
import '../assets/js/bootstrap.bundle.js';
import '../assets/js/bootstrap.bundle.js.map';
import '../assets/js/custom.js';
import '../assets/js/jquery3.5.1.min.js';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import social_5 from '../assets/images/social-5.svg';
import social_6 from '../assets/images/social-6.svg';
import social_7 from '../assets/images/social-7.svg';
import social_8 from '../assets/images/social-8.svg';
const Footer = () => (
  <div className="footer_wrapper" id="footer_section">
  <footer className="container">
				<div className="row">
					<div className="col-md-6 col-12">
						<div className="copy_right">
							<p>© 2025 <a href="index.html">Ohana Therapies</a> | All rights reserved.</p>
						</div>
					</div>
					<div className="col-md-6 col-12">
						<div className="hero_social">
							<ul>
								<li>
									<a href="https://www.facebook.com/login/" target="_blank"><img
											src={social_5} alt="" /></a>
								</li>
								<li>
									<a href="https://twitter.com/i/flow/login" target="_blank"><img
											src={social_6} alt="" /></a>
								</li>
								<li>
									<a href="https://in.pinterest.com/" target="_blank"><img
											src={social_7} alt="" /></a>
								</li>
								<li>
									<a href="https://www.linkedin.com/login" target="_blank"><img
											src={social_8} alt="" /></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
  </div>
);

export default Footer;
