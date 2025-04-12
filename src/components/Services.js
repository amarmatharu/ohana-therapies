import React from 'react';
import SEO from './SEO';
import '../assets/js/bootstrap.bundle.js';
import '../assets/js/bootstrap.bundle.js.map';
import '../assets/js/custom.js';
import '../assets/js/jquery3.5.1.min.js';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import subtract from '../assets/images/Subtract.png';
import services_1 from '../assets/images/services_1.png';
import service_icon from '../assets/images/icon.svg';
import service_image from '../assets/images/services_2.png';

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ABA Therapy Services",
    "description": "Comprehensive Applied Behavior Analysis therapy services for children and families in Santa Clara, CA.",
    "provider": {
      "@type": "Organization",
      "name": "Ohana Therapies",
      "sameAs": "https://ohanatherapies.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Santa Clara",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ABA Therapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "In-Home ABA Therapy",
            "description": "Personalized ABA therapy sessions conducted in the comfort of your home"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Training",
            "description": "Comprehensive training for families to support their child's development"
          }
        }
      ]
    }
  };

  return (
    <section className="page-section" id="service_sec">
      <SEO
        title="ABA Therapy Services | Ohana Therapies"
        description="Discover our comprehensive ABA therapy services, including in-home therapy and family training programs in Santa Clara, CA."
        keywords="ABA therapy services, in-home therapy, family training, behavioral therapy, Santa Clara ABA"
        structuredData={structuredData}
        image={services_1}
        breadcrumbs={[
          { name: 'Home', url: 'https://ohanatherapies.com' },
          { name: 'Services', url: 'https://ohanatherapies.com/#service_sec' }
        ]}
      />
      <div className="container">
        <div className="cm_sec_ttile">
          <div className="sec_ttile">
            <h1 className="sec_titel_text">SERVICES</h1>
            <img src={subtract} alt="Decorative separator" loading="lazy" />
          </div>
        </div>
        <div className="row mt_top_30">
          <div className="col-md-6 col-12 order-md-2 p_rr">
            <div className="service_img">
              <img 
                src={services_1} 
                alt="ABA therapy session in progress" 
                width="600" 
                height="400"
                loading="lazy"
              />
            </div>
            <div className="service_icon">
              <img src={service_icon} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-1">
            <div className="service_content">
              <h3 className="service_title">Where are the services provided:</h3>
              <h6 className="service_sub">We come to you!</h6>
              <p className="service_text">
                Your Ohana Therapist meets you where you are- whether it's caregiver's home, or a
                typically attended setting, such as a preschool or daycare, we work around your busy
                schedule and provide care in your
                own home, where your child feels the most comfortable.
              </p>
              <p className="service_text">
              </p>
            </div>
          </div>
        </div>
        <div className="row mt_top_77">
          <div className="col-md-6 col-12">
            <div className="service_img">
              <img src={service_image} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="service_content">
              <h3 className="service_title">Our Approach:</h3>
              <h3 className="service_sub">Personalized ABA therapy</h3>
              <p className="service_text">At Ohana Therapies, we believe in personalized care that is
                grounded in play with the very best therapist.</p>
              <p className="service_text">Ohana Therapies provides personalized weekly ABA therapy,
                consultations with caregivers or other professionals who are working with the
                individual, and parent training.</p>
              <p className="service_text">
                We make sure that families are truly listened to and are kept at the heart of all
                decision-making; how a service is provided and organized. We focus on skills and
                behaviors that are socially
                significant for the child and the their families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
