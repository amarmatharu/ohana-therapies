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
    "name": "Ohana Therapies - ABA Therapy Services in San Jose & Santa Clara",
    "description": "Empowering families through personalized Applied Behavior Analysis therapy in San Jose, Santa Clara, and the Bay Area, CA.",
    "url": "https://ohanatherapies.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ohana Therapies",
      "description": "Leading ABA therapy provider serving San Jose and Santa Clara with family-centered care",
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
        "postalCode": "95050",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "San Jose",
          "containedInPlace": {
            "@type": "State",
            "name": "California"
          }
        },
        {
          "@type": "City",
          "name": "Santa Clara",
          "containedInPlace": {
            "@type": "State",
            "name": "California"
          }
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.3382",
        "longitude": "-121.8863"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+1-408-123-4567",
        "email": "info@ohanatherapies.com",
        "areaServed": ["San Jose", "Santa Clara", "Bay Area"],
        "availableLanguage": "English"
      }
    }
  };

  return (
    <section id="hero_sec">
      <SEO
        title="ABA Therapy San Jose & Santa Clara | Ohana Therapies | Autism Services"
        description="Leading ABA therapy provider in San Jose and Santa Clara, CA. Expert autism therapy, in-home ABA services, family-centered care. Insurance accepted. Join our waitlist today."
        keywords="ABA therapy San Jose, ABA therapy Santa Clara, autism therapy San Jose, autism services Santa Clara, applied behavior analysis Bay Area, in-home ABA therapy, behavioral therapy San Jose, family-centered autism care, ABA provider San Jose"
        structuredData={structuredData}
        image={hero1}
        breadcrumbs={[
          { name: 'Home', url: 'https://ohanatherapies.com' }
        ]}
      />
      <div className="container">
        <div className="cm_row">
          <div className="hero_content_wrap">
            {/* Trust Badge */}
            <div className="hero_badge">
              <span className="badge_dot"></span>
              <span className="badge_text">Trusted ABA Therapy Provider in San Jose & Santa Clara</span>
            </div>
            
            <h1 className="hero_title">No family should have to <span>do it alone</span></h1>
            
            <p className="hero_detail">
              Team Ohana is passionate about supporting and empowering families in San Jose, Santa Clara, and throughout the Bay Area to create meaningful changes through In-home Applied Behavior Analysis (ABA) therapy, individualized for each of our family's needs.
            </p>
            
            {/* Trust Badges */}
            <div className="hero_trust_badges">
              <div className="trust_badge">
                <div className="trust_badge_icon">✓</div>
                <div className="trust_badge_content">
                  <div className="trust_badge_title">Insurance Accepted</div>
                  <div className="trust_badge_subtitle">Most major plans</div>
                </div>
              </div>
              <div className="trust_badge">
                <div className="trust_badge_icon">🏠</div>
                <div className="trust_badge_content">
                  <div className="trust_badge_title">In-Home Services</div>
                  <div className="trust_badge_subtitle">Comfortable & convenient</div>
                </div>
              </div>
              <div className="trust_badge">
                <div className="trust_badge_icon">👨‍👩‍👧‍👦</div>
                <div className="trust_badge_content">
                  <div className="trust_badge_title">Family-Centered</div>
                  <div className="trust_badge_subtitle">Personalized care plans</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="hero_cta_group">
              <a href="/waitlist" className="cm_btn cm_btn_primary" aria-label="Join our waitlist">
                Join Waitlist
              </a>
              <a href="#service_sec" className="cm_btn cm_btn_secondary scrollTo" aria-label="Learn more about our services">
                Learn More
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="hero_social_proof">
              <div className="social_proof_item">
                <span className="social_proof_number">500+</span>
                <span className="social_proof_label">Therapy Sessions</span>
              </div>
              <div className="social_proof_divider"></div>
              <div className="social_proof_item">
                <span className="social_proof_number">100+</span>
                <span className="social_proof_label">Families Served</span>
              </div>
              <div className="social_proof_divider"></div>
              <div className="social_proof_item">
                <span className="social_proof_number">4.9★</span>
                <span className="social_proof_label">Parent Rating</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="hero_social">
              <span className="hero_social_label">Follow us:</span>
              <a href="https://www.facebook.com/ohanatherapies/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="social_link">
                <img src={social1} alt="Facebook" loading="lazy" />
              </a>
              <a href="https://www.linkedin.com/company/ohana-therapies" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="social_link">
                <img src={social2} alt="LinkedIn" loading="lazy" />
              </a>
            </div>
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
