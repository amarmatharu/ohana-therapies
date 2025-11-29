import React from 'react';
import SEO from './SEO';
import '../assets/css/style.css';
import aboutImage from '../assets/images/about_right.png';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Ohana Therapies",
    "description": "Learn about our mission to provide compassionate ABA therapy services to families in Santa Clara, CA.",
    "url": "https://ohanatherapies.com/#about_sec",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ohana Therapies",
      "description": "A leading ABA therapy provider committed to family-centered care",
      "mission": "To empower families through personalized Applied Behavior Analysis therapy",
      "areaServed": {
        "@type": "City",
        "name": "Santa Clara",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      }
    }
  };

  return (
    <section className="page-section" id="about_sec">
      <SEO
        title="About Ohana Therapies | Our Mission and Values"
        description="Learn about Ohana Therapies' commitment to providing compassionate ABA therapy services and our family-centered approach to care."
        keywords="about Ohana Therapies, ABA therapy mission, family-centered care, Santa Clara ABA provider"
        structuredData={structuredData}
        image={aboutImage}
        breadcrumbs={[
          { name: 'Home', url: 'https://ohanatherapies.com' },
          { name: 'About', url: 'https://ohanatherapies.com/#about_sec' }
        ]}
      />
      <div className="container">
        <div className="cm_sec_ttile">
          <div className="sec_ttile">
            <h1 className="sec_titel_text">About <span>Ohana</span></h1>
          </div>
          <p className="dummy_text">
            "Ohana" is a Hawaiian term that means family, in all of its forms: blood-related, adoptive, and chosen.
            The company's name reflects our family-centered approach to care.
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
                Our philosophy is simple - <strong>You are important</strong> and we are invested in your <span>child's success.</span>
              </p>
              <p className="about_dummy_content">
                Ohana Therapies embraces the spirit of Meraki. We put <span>"something of ourselves"</span> into our work.
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
};

export default About;
