import React from 'react';
import SEO from './SEO';
import OptimizedImage from './OptimizedImage';
import '../assets/css/style.css';
import services2Image from '../assets/images/services_2.png';

const Services2 = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ABA Therapy Programs",
    "description": "Specialized ABA therapy programs focusing on social skills, communication, and behavior management.",
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
      "name": "Specialized ABA Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Skills Development",
            "description": "Programs designed to enhance social interaction and communication skills"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Behavior Management",
            "description": "Strategies and techniques for managing challenging behaviors"
          }
        }
      ]
    }
  };

  return (
    <section className="page-section" id="services2_sec">
      <SEO
        title="Specialized ABA Programs | Ohana Therapies"
        description="Explore our specialized ABA therapy programs focusing on social skills development and behavior management in Santa Clara, CA."
        keywords="ABA programs, social skills therapy, behavior management, specialized therapy, Santa Clara ABA"
        structuredData={structuredData}
        image={services2Image}
        breadcrumbs={[
          { name: 'Home', url: 'https://ohanatherapies.com' },
          { name: 'Services', url: 'https://ohanatherapies.com/#service_sec' },
          { name: 'Specialized Programs', url: 'https://ohanatherapies.com/#services2_sec' }
        ]}
      />
      <div className="container">
        <div className="cm_sec_ttile">
          <div className="sec_ttile">
            <h1 className="sec_titel_text">Specialized Programs</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="service_img">
              <OptimizedImage 
                src={services2Image} 
                alt="Child participating in social skills therapy" 
                width={600} 
                height={400}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="service_content_wrap">
              <h2 className="service_content_title">Our Specialized Programs</h2>
              <p className="service_dummy_content">
                We offer targeted programs designed to address specific developmental needs and challenges.
              </p>
              <ul className="service_list">
                <li>Social Skills Development</li>
                <li>Communication Enhancement</li>
                <li>Behavior Management</li>
                <li>School Readiness</li>
                <li>Life Skills Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;