import React from 'react';
import SEO from './SEO';
import '../assets/css/style.css';
import insurance1 from '../assets/images/insurances-1.png';

const Insurance = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ABA Therapy Insurance Coverage",
    "description": "We currently accept Santa Clara Family Health insurance for ABA therapy services in San Jose and Santa Clara, CA. Expanding to more providers soon.",
    "provider": {
      "@type": "Organization",
      "name": "Ohana Therapies"
    },
    "paymentAccepted": "Santa Clara Family Health Insurance",
    "areaServed": [
      {
        "@type": "City",
        "name": "San Jose"
      },
      {
        "@type": "City",
        "name": "Santa Clara"
      }
    ]
  };

  return (
    <section className="insurance_section" id="insurance_sec">
      <SEO
        title="Insurance Accepted - ABA Therapy San Jose | Ohana Therapies"
        description="We accept Santa Clara Family Health insurance for ABA therapy in San Jose and Santa Clara. Expanding to additional providers soon."
        keywords="ABA therapy insurance, Santa Clara Family Health, insurance coverage San Jose, autism therapy insurance, ABA insurance accepted"
        structuredData={structuredData}
      />
      
      <div className="container">
        <div className="insurance_content">
          <div className="insurance_header">
            <div className="insurance_badge">
              <span className="insurance_badge_icon">✓</span>
              <span className="insurance_badge_text">Insurance Accepted</span>
            </div>
            <h2 className="insurance_title">We Currently Accept Santa Clara Family Health Insurance</h2>
            <p className="insurance_subtitle">
              Making quality ABA therapy accessible to families in San Jose, Santa Clara, and the Bay Area. 
              We handle all the insurance paperwork so you can focus on your child's progress.
            </p>
          </div>
          
          <div className="insurance_single">
            <div className="insurance_logo_featured">
              <div className="featured_badge">Currently Accepted</div>
              <img src={insurance1} alt="Santa Clara Family Health Insurance" loading="lazy" />
              <p className="insurance_name">Santa Clara Family Health</p>
            </div>
          </div>
          
          <div className="insurance_expanding">
            <div className="expanding_content">
              <div className="expanding_icon">🔄</div>
              <h3 className="expanding_title">Expanding Insurance Network</h3>
              <p className="expanding_text">
                We're actively working to accept additional insurance providers. 
                <strong> Don't have Santa Clara Family Health?</strong> Contact us - we may still be able to help!
              </p>
            </div>
          </div>
          
          <div className="insurance_cta">
            <p className="insurance_cta_text">
              Have Santa Clara Family Health or want to learn about other options? <strong>Let's talk!</strong>
            </p>
            <a href="/waitlist" className="cm_btn insurance_btn">
              Contact Us About Insurance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;

