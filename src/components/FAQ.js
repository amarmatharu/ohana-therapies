import React, { useState } from 'react';
import '../assets/css/faq.css';

const faqs = [
  {
    question: 'What is ABA therapy?',
    answer:
      'ABA (Applied Behavior Analysis) is an evidence-based therapy that uses proven techniques to help children with autism build communication, social, and daily-living skills while reducing challenging behaviors. It is widely recognized as a leading treatment for autism spectrum disorder.',
  },
  {
    question: 'Do you offer in-home ABA therapy in San Jose and Santa Clara?',
    answer:
      'Yes. Ohana Therapies provides in-home ABA therapy throughout San Jose, Santa Clara, and the greater Bay Area, so your child can learn in the comfortable, familiar environment of your own home.',
  },
  {
    question: 'Does insurance cover ABA therapy?',
    answer:
      'Many major insurance plans cover ABA therapy. We work with providers including Santa Clara Family Health Plan, Cigna, and Anthem, and our team handles the insurance paperwork so you can focus on your child’s progress.',
  },
  {
    question: 'How is each ABA therapy plan created?',
    answer:
      'Every plan is individualized. We assess your child’s unique strengths and needs and build a personalized, family-centered program, with training and coaching so caregivers can support progress at home.',
  },
  {
    question: 'How do I get started with Ohana Therapies?',
    answer:
      'Getting started is easy — join our waitlist and our team will reach out to guide you through the next steps, including insurance verification and scheduling.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq_sec" className="faq_sec">
      <div className="container">
        <div className="cm_sec_ttile">
          <div className="sec_ttile">
            <h2 className="sec_titel_text">Frequently Asked <span>Questions</span></h2>
          </div>
          <p className="dummy_text">
            Answers to common questions about ABA therapy in San Jose and Santa Clara.
          </p>
        </div>

        <div className="faq_list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq_item${isOpen ? ' faq_item_open' : ''}`} key={index}>
                <button
                  type="button"
                  className="faq_question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq_icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq_answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};

export default FAQ;
