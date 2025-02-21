import React from 'react';
import '../assets/js/bootstrap.bundle.js';
import '../assets/js/bootstrap.bundle.js.map';
import '../assets/js/custom.js';
import '../assets/js/jquery3.5.1.min.js';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import servise_box from '../assets/images/servise_box.png';
import heart from '../assets/images/heart.png';
const Services = () => (
<section className="page-section" id="service_2_sec">
<div className="container">
					<div className="shape_bg">
						<img src={servise_box} alt="" />
					</div>
					<div className="service_2_content">
						<div className="media_content">
							<div className="media_img">
								<img src={heart} alt="" />
							</div>
							<div className="media_boby">
								<h3 className="media_title">Social Skills</h3>
								<p className="media_text">Our approach focuses on teaching foundational skills that will
									help your child learn how to interact with other kids in socially meaningful ways.
								</p>
							</div>
						</div>
						<div className="media_content">
							<div className="media_img">
								<img src={heart} alt="" />
							</div>
							<div className="media_boby">
								<h3 className="media_title">Communication</h3>
								<p className="media_text">Team Ohana will work with your child to increase functional
									language, communication, and ability to follow instructions.</p>
							</div>
						</div>
						<div className="media_content">
							<div className="media_img">
								<img src={heart} alt="" />
							</div>
							<div className="media_boby">
								<h3 className="media_title">Adaptive skills</h3>
								<p className="media_text">
									Sometimes also referred to as activities of daily living. We support children in
									learning daily living skills which are essential to increasing independence at home,
									at school, and in the community.
								</p>
							</div>
						</div>
						<div className="media_content">
							<div className="media_img">
								<img src={heart} alt="" />
							</div>
							<div className="media_boby">
								<h3 className="media_title">Focus</h3>
								<p className="media_text">Our approach focuses on teaching children skills and strategies
									that help them to maintain their focus and attention on the tasks at hand.</p>
							</div>
						</div>
						<div className="media_content">
							<div className="media_img">
								<img src={heart} alt="" />
							</div>
							<div className="media_boby">
								<h3 className="media_title">Behaviors</h3>
								<p className="media_text">Our care focuses on sharing strategies and resources with you to
									address behaviors and to support you during challenging situations.</p>
							</div>
						</div>
					</div>
				</div>
        
			</section>
      
      
);

export default Services;
