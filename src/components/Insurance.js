import React from 'react';
import SEO from './SEO';
import '../assets/css/style.css';
import insurance1 from '../assets/images/insurances-1.png';
import insurance2 from '../assets/images/insurances-2.png';
import insurance3 from '../assets/images/insurances-3.png';

const Insurance = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ABA Therapy Insurance Coverage",
    "description": "We accept Santa Clara Family Health Plan, Cigna, and Anthem insurance for ABA therapy services in San Jose and Santa Clara, CA.",
    "provider": {
      "@type": "Organization",
      "name": "Ohana Therapies"
    },
    "paymentAccepted": ["Santa Clara Family Health Plan", "Cigna", "Anthem"],
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
        description="We accept Santa Clara Family Health Plan, Cigna, and Anthem insurance for ABA therapy in San Jose and Santa Clara."
        keywords="ABA therapy insurance, Santa Clara Family Health, Cigna, Anthem, insurance coverage San Jose, autism therapy insurance, ABA insurance accepted"
        structuredData={structuredData}
      />
      
      <div className="container">
        <div className="insurance_content">
          <div className="insurance_header">
            <div className="insurance_badge">
              <span className="insurance_badge_icon">✓</span>
              <span className="insurance_badge_text">Insurance Accepted</span>
            </div>
            <h2 className="insurance_title">We Accept Multiple Insurance Plans</h2>
            <p className="insurance_subtitle">
              Making quality ABA therapy accessible to families in San Jose, Santa Clara, and the Bay Area. 
              We handle all the insurance paperwork so you can focus on your child's progress.
            </p>
          </div>
          
          <div className="insurance_logos_grid_multi">
            <div className="insurance_logo_item">
              <img 
                src={insurance1} 
                alt="Santa Clara Family Health Plan" 
                loading="lazy"
              />
              <p className="insurance_name">Santa Clara Family Health Plan</p>
            </div>
            <div className="insurance_logo_item">
              <img 
                src={insurance2} 
                alt="Cigna Insurance" 
                loading="lazy"
              />
              <p className="insurance_name">Cigna</p>
            </div>
            <div className="insurance_logo_item">
              <img 
                src={insurance3} 
                alt="Anthem Insurance" 
                loading="lazy"
              />
              <p className="insurance_name">Anthem</p>
            </div>
          </div>
          
          <div className="insurance_expanding">
            <div className="expanding_content">
              <div className="expanding_icon">🔄</div>
              <h3 className="expanding_title">Expanding Insurance Network</h3>
              <p className="expanding_text">
                We're actively working to accept additional insurance providers. 
                <strong> Don't see your insurance?</strong> Contact us - we may still be able to help!
              </p>
            </div>
          </div>
          
          <div className="insurance_cta">
            <p className="insurance_cta_text">
              Have one of these insurance plans or want to learn about other options? <strong>Let's talk!</strong>
            </p>
            <a href="/waitlist" className="cm_btn insurance_btn">
              Check Your Coverage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;

