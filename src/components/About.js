import React from 'react';
import '../assets/js/bootstrap.bundle.js';
import '../assets/js/bootstrap.bundle.js.map';
import '../assets/js/custom.js';
import '../assets/js/jquery3.5.1.min.js';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import subtract from '../assets/images/Subtract.png';
const About = () => (
	<section className="page-section" id="about_sec">
				<div className="container">
					<div className="cm_sec_ttile">
						<div className="sec_ttile">
							<h2 className="sec_titel_text">ABOUT <span>oHANA</span></h2>
						   <img src={subtract} alt="" />
						</div>
						<p className="dummy_text">
							“Ohana” is a Hawaiian term that means family, in all of its forms: blood-related, adoptive,
							and chosen. The company’s name reflects our family-centered approach to care, commitment to
							serving our families,
							and recognition that it will take a determined team to reach our goals.
						</p>
					</div>
					<div className="row">
						<div className="col-lg-5 col-md-6 col-12">
							<div className="meraki_box">
								<h2 className="meraki_title">m e r a k i</h2>
								<p className="meraki_sub">[may - rah - kee] + Greek</p>
								<p className="meraki_cuntent">(adj.) when you do something with soul. creativity or love:
									putting a piece of yourself into what you do.</p>
							</div>
						</div>
						<div className="col-lg-7 col-md-6 col-12">
							<div className="about_content_wrap">
								<h3 className="about_content_title">The Philosophy and Our Commitment to You</h3>
								<p className="about_dummy_content">Our philosophy is simple- You are important and we are
									invested in your <span>child’s success.</span></p>
								<p className="about_dummy_content">
									Ohana Therapies embraces the spirit of Meraki. This is a word that Greeks use to
									describe doing something with soul, creativity, or love — when you put
									<span>“something of yourself”</span> into your
									work.
								</p>
								<p className="about_dummy_content">
									Each child that works through our doors becomes a part of our family; and in turn,
									we do our work with <span>passion and dedication that your child deserves.</span>
									Ohana Therapies is here to offer
									your child the world class care they deserve. And for you, the peace of mind that
									comes from knowing your child is in the best of hands.
								</p>
								<p className="about_dummy_content">
									We strive to be your partner. We are completely transparent in our programs and
									curriculum, we continuously <span>self-assess and look to improve,</span> and we
									make communication with you a
									<span>paramount part of the childcare environment.</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
);

export default About;
