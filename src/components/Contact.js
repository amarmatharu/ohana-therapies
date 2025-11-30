import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import config from '../config';
import '../assets/css/style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email');
      return false;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter a message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Send to backend API
      const response = await axios.post(`${config.baseUrl}/api/contact/submit`, {
        name: formData.name,
        phone: formData.phone || 'Not provided',
        email: formData.email,
        message: formData.message
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus('success');
        // Clear form
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      
      // Handle different error types
      if (error.response?.data) {
        // Backend returned an error message (string or object)
        const errorData = typeof error.response.data === 'string' 
          ? error.response.data 
          : error.response.data.message || 'Something went wrong';
        setErrorMessage(errorData);
      } else if (error.message === 'Network Error') {
        setErrorMessage('Unable to connect to server. Please try again or call us directly at (484) 985-0189.');
      } else {
        setErrorMessage('Something went wrong. Please try again or contact us directly at (484) 985-0189.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact_info_sec">
      <Helmet>
        <title>Contact Ohana Therapies | San Jose & Santa Clara ABA Therapy</title>
        <meta name="description" content="Contact Ohana Therapies for ABA therapy inquiries in San Jose and Santa Clara. Call (484) 985-0189 or send us a message." />
      </Helmet>
      <div className="container">
        <div className="cm_sec_ttile">
          <div className="sec_ttile">
            <h1 className="sec_titel_text">Contact <span>Information</span></h1>
          </div>
          <p className="dummy_text">
            Have questions about our ABA therapy services? We're here to help! 
            Fill out the form below or call us directly.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="contact_form_wrap">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="contact_alert contact_success" role="alert">
                  <div className="alert_icon">✓</div>
                  <div className="alert_content">
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for contacting Ohana Therapies! We will respond to your message within 48 to 72 hours.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="contact_alert contact_error" role="alert">
                  <div className="alert_icon">⚠</div>
                  <div className="alert_content">
                    <h3>Oops! Something went wrong</h3>
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="cn_input input_group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name *" 
                    value={formData.name} 
                    onChange={handleChange} 
                    aria-label="Name" 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="cn_input input_group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone (Optional)" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    aria-label="Phone"
                    disabled={isSubmitting}
                  />
                  <small className="input_helper">We'll never share your phone number</small>
                </div>
                <div className="cn_input input_group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address *" 
                    value={formData.email} 
                    onChange={handleChange} 
                    aria-label="Email" 
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="cn_input input_group">
                  <textarea 
                    name="message" 
                    placeholder="Your Message *" 
                    value={formData.message} 
                    onChange={handleChange} 
                    aria-label="Message" 
                    required
                    rows="5"
                    disabled={isSubmitting}
                  ></textarea>
                  <small className="input_helper">Tell us how we can help you</small>
                </div>
                
                <button 
                  className="form_btn cn_btn" 
                  type="submit" 
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? 'Sending message' : 'Send message'}
                >
                  {isSubmitting ? (
                    <>
                      <span className="btn_spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                <p className="form_privacy">
                  By submitting this form, you agree to our <a href="#privacy">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="contact_detail">
              <h2>Contact Details</h2>
              <p><strong>Phone:</strong> <a href="tel:4849850189">(484) 985-0189</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@ohanatherapies.com">info@ohanatherapies.com</a></p>
              <h2>Location</h2>
              <p>Serving Contra Costa County: Danville, San Ramon.</p>
              <p>Serving Alameda County: Pleasanton, Dublin, Livermore, Castro Valley, Fremont.</p>
              <p>Serving Santa Clara County: San Jose, Santa Clara.</p>
              <h2>Business Hours</h2>
              <p><strong>Monday to Friday:</strong> 8:00 AM - 6:00 PM</p>
              <p><strong>Saturday & Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
