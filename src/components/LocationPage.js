import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import '../assets/css/location.css';

const LocationPage = ({ location }) => {
  const {
    slug,
    city,
    title,
    description,
    keywords,
    intro,
    areasLine,
    neighborhoods,
    whyCity,
    faqs,
  } = location;

  const url = `https://www.ohanatherapies.com/${slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'In-Home ABA Therapy',
    name: `ABA Therapy in ${city}, CA`,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ohana Therapies',
      url: 'https://www.ohanatherapies.com',
      telephone: '+1-484-985-0189',
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: 'California' },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        type="website"
        image="https://www.ohanatherapies.com/logo512.png"
        structuredData={[serviceSchema, faqSchema]}
        breadcrumbs={[
          { name: 'Home', url: 'https://www.ohanatherapies.com' },
          { name: `ABA Therapy in ${city}`, url },
        ]}
      />
      <Header />
      <main className="location_page">
        {/* Hero */}
        <section className="location_hero">
          <div className="container">
            <span className="location_badge">In-Home ABA Therapy · {city}, CA</span>
            <h1 className="location_h1">
              ABA Therapy in {city}, <span>California</span>
            </h1>
            <p className="location_intro">{intro}</p>
            <div className="location_cta_group">
              <Link to="/waitlist" className="cm_btn cm_btn_primary" aria-label={`Join the waitlist for ABA therapy in ${city}`}>
                Join the Waitlist
              </Link>
              <a href="tel:4849850189" className="cm_btn cm_btn_secondary" aria-label="Call Ohana Therapies">
                Call (484) 985-0189
              </a>
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section className="location_section">
          <div className="container">
            <h2>In-Home ABA Therapy Across {city}</h2>
            <p>{areasLine}</p>
            <ul className="location_neighborhoods">
              {neighborhoods.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="location_section location_section_alt">
          <div className="container">
            <h2>Our ABA Services for {city} Families</h2>
            <div className="location_services_grid">
              <div className="location_service_card">
                <h3>In-Home ABA Therapy</h3>
                <p>Individualized applied behavior analysis delivered in your {city} home, where your child is most comfortable.</p>
              </div>
              <div className="location_service_card">
                <h3>Autism Support</h3>
                <p>Evidence-based programs that build communication, social, and daily-living skills while reducing challenging behaviors.</p>
              </div>
              <div className="location_service_card">
                <h3>Family Training &amp; Coaching</h3>
                <p>Hands-on caregiver training so progress continues between sessions and becomes part of everyday routines.</p>
              </div>
              <div className="location_service_card">
                <h3>Insurance Support</h3>
                <p>We accept most major plans — including Santa Clara Family Health Plan, Cigna, and Anthem — and handle the paperwork for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="location_section">
          <div className="container">
            <h2>Why {city} Families Choose Ohana Therapies</h2>
            <p>{whyCity}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="location_section location_section_alt">
          <div className="container">
            <h2>ABA Therapy in {city}: Frequently Asked Questions</h2>
            <div className="location_faq">
              {faqs.map((item) => (
                <div className="location_faq_item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="location_cta">
          <div className="container">
            <h2>Ready to start ABA therapy in {city}?</h2>
            <p>Join the Ohana Therapies waitlist and our team will guide you through insurance and scheduling.</p>
            <Link to="/waitlist" className="cm_btn cm_btn_primary" aria-label={`Join the waitlist for ABA therapy in ${city}`}>
              Join the Waitlist
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LocationPage;
