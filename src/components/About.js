import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/css/style.css';
import subtract from '../assets/images/Subtract.png';

const About = () => (
  <section className="page-section" id="about_sec">
    <Helmet>
      <title>About Ohana Therapies</title>
      <meta name="description" content="Learn about Ohana Therapies and our family-centered approach to care." />
    </Helmet>
    <div className="container">
      <div className="cm_sec_ttile">
        <div className="sec_ttile">
          <h1 className="sec_titel_text">ABOUT <span>OHANA</span></h1>
          <img src={subtract} alt="Decorative separator" loading="lazy" />
        </div>
        <p className="dummy_text">
          “Ohana” is a Hawaiian term that means family, in all of its forms: blood-related, adoptive, and chosen.
          The company’s name reflects our family-centered approach to care.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-5 col-md-6 col-12">
          <div className="meraki_box">
            <h2 className="meraki_title">m e r a k i</h2>
            <p className="meraki_sub">[may - rah - kee] + Greek</p>
            <p className="meraki_cuntent">(adj.) when you do something with soul, creativity, or love: putting a piece of yourself into what you do.</p>
          </div>
        </div>
        <div className="col-lg-7 col-md-6 col-12">
          <div className="about_content_wrap">
            <h2 className="about_content_title">Our Commitment to You</h2>
            <p className="about_dummy_content">
              Our philosophy is simple - <strong>You are important</strong> and we are invested in your <span>child’s success.</span>
            </p>
            <p className="about_dummy_content">
              Ohana Therapies embraces the spirit of Meraki. We put <span>“something of ourselves”</span> into our work.
            </p>
            <p className="about_dummy_content">
              Each child that works through our doors becomes a part of our family. We work with <strong>passion and dedication</strong> to offer world-class care.
            </p>
            <p className="about_dummy_content">
              We strive to be your partner. We are transparent in our programs, continuously <span>self-assess and improve</span>, and prioritize open communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
