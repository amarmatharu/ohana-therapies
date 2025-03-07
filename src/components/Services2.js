import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/css/style.css';
import servise_box from '../assets/images/servise_box.png';
import heart from '../assets/images/heart.png';

const Services2 = () => (
  <section className="page-section" id="service_2_sec">
    <Helmet>
      <title>Specialized Services - Ohana Therapies</title>
      <meta name="description" content="Discover our specialized services at Ohana Therapies, including social skills, communication, and behavior support." />
    </Helmet>
    <div className="container">
      <div className="shape_bg">
        <img src={servise_box} alt="Decorative background shape" loading="lazy" />
      </div>
      <div className="service_2_content">
        <div className="media_content">
          <div className="media_img">
            <img src={heart} alt="Social skills icon" loading="lazy" />
          </div>
          <div className="media_boby">
            <h2 className="media_title">Social Skills</h2>
            <p className="media_text">We help your child develop foundational skills for meaningful social interactions.</p>
          </div>
        </div>
        <div className="media_content">
          <div className="media_img">
            <img src={heart} alt="Communication icon" loading="lazy" />
          </div>
          <div className="media_boby">
            <h2 className="media_title">Communication</h2>
            <p className="media_text">We work with children to enhance functional language, communication, and instruction-following skills.</p>
          </div>
        </div>
        <div className="media_content">
          <div className="media_img">
            <img src={heart} alt="Adaptive skills icon" loading="lazy" />
          </div>
          <div className="media_boby">
            <h2 className="media_title">Adaptive Skills</h2>
            <p className="media_text">We teach essential daily living skills to increase independence at home, school, and in the community.</p>
          </div>
        </div>
        <div className="media_content">
          <div className="media_img">
            <img src={heart} alt="Focus skills icon" loading="lazy" />
          </div>
          <div className="media_boby">
            <h2 className="media_title">Focus</h2>
            <p className="media_text">Our strategies help children maintain focus and attention on tasks effectively.</p>
          </div>
        </div>
        <div className="media_content">
          <div className="media_img">
            <img src={heart} alt="Behavior support icon" loading="lazy" />
          </div>
          <div className="media_boby">
            <h2 className="media_title">Behavior Support</h2>
            <p className="media_text">We provide resources and strategies to address behaviors and support families during challenging situations.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services2;