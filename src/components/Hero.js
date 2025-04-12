import React from 'react';
import SEO from './SEO';
import '../assets/css/style.css';
import social1 from '../assets/images/social-1.svg';
import social2 from '../assets/images/social-4.svg';
import hero1 from '../assets/images/hero-img-1.png';
import hero2 from '../assets/images/hero-img-2.png';
import hero3 from '../assets/images/hero-img-3.png';
import hero4 from '../assets/images/hero-img-4.png';

const Hero = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ohana Therapies - ABA Therapy Services",
    "description": "Empowering families through personalized Applied Behavior Analysis therapy in Santa Clara, CA.",
    "url": "https://ohanatherapies.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ohana Therapies",
      "description": "A leading ABA therapy provider committed to family-centered care",
      "url": "https://ohanatherapies.com",
      "logo": "https://ohanatherapies.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/ohanatherapies/",
        "https://www.linkedin.com/company/ohana-therapies"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santa Clara",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+1-408-123-4567",
        "email": "info@ohanatherapies.com"
      }
    }
  };

  return (
    <section id="hero_sec">
      <SEO
        title="Ohana Therapies | ABA Therapy Services in Santa Clara"
        description="Empowering families through personalized Applied Behavior Analysis therapy. Join our waitlist for compassionate, family-centered care."
        keywords="ABA therapy, autism therapy, behavioral therapy, Santa Clara therapy, family-centered care"
        structuredData={structuredData}
        image={hero1}
        breadcrumbs={[
          { name: 'Home', url: 'https://ohanatherapies.com' }
        ]}
      />
      <div className="container">
        <div className="cm_row">
          <div className="hero_content_wrap">
            <h1 className="hero_title">No family should have to <span>do it alone</span></h1>
            <p className="hero_detail">
              Team Ohana is passionate about supporting and empowering families to create meaningful changes
              through In-home Applied Behavior Analysis, individualized for each of our family's needs.
            </p>
            <div className="hero_social">
              <h2 className="hero_social_title">Follow Us:</h2>
              <ul>
                <li>
                  <a href="https://www.facebook.com/ohanatherapies/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                    <img src={social1} alt="Facebook" loading="lazy" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/ohana-therapies" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                    <img src={social2} alt="LinkedIn" loading="lazy" />
                  </a>
                </li>
              </ul>
            </div>
            <a href="#service_sec" className="cm_btn scrollTo" aria-label="Learn more about our services">LEARN MORE</a>
          </div>
          <div className="hero_img_wrap">
            <div className="hero_pro_wrap">
              <div className="row">
                <div className="hero_pro_box hero_pro_box_one">
                  <div className="cm_img_wrap">
                    <img src={hero1} alt="Therapy session example 1" loading="lazy" />
                  </div>
                  <div className="cm_img_wrap">
                    <img src={hero2} alt="Therapy session example 2" loading="lazy" />
                  </div>
                </div>
                <div className="hero_pro_box hero_pro_box_two">
                  <div className="cm_img_wrap">
                    <img src={hero3} alt="Child engaging in therapy activity" loading="lazy" />
                  </div>
                  <div className="cm_img_wrap">
                    <img src={hero4} alt="Family therapy session" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
