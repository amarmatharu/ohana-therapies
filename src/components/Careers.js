import React, { useState } from 'react';
import axios from 'axios';
import SEO from './SEO';
import config from '../config';
import '../assets/css/style.css';
import heart_icon from '../assets/images/heart_1.png';
import file_uploader from '../assets/images/file_uploader.png';

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    resume: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');
  const [resumeFileName, setResumeFileName] = useState('Resume');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage('Please upload a PDF or Word document');
        setSubmitStatus('error');
        e.target.value = '';
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('File size must be less than 5MB');
        setSubmitStatus('error');
        e.target.value = '';
        return;
      }
      
      setFormData({ ...formData, resume: file });
      setResumeFileName(file.name);
      
      if (submitStatus === 'error') {
        setSubmitStatus(null);
        setErrorMessage('');
      }
    }
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setErrorMessage('Please enter your first name');
      return false;
    }
    if (!formData.lastName.trim()) {
      setErrorMessage('Please enter your last name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMessage('Please enter your phone number');
      return false;
    }
    if (!formData.position) {
      setErrorMessage('Please select a position');
      return false;
    }
    if (!formData.resume) {
      setErrorMessage('Please upload your resume');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('phoneNumber', formData.phoneNumber);
      submitData.append('position', formData.position);
      submitData.append('resume', formData.resume);

      const response = await axios.post(
        `${config.API_BASE_URL}/api/careers/apply`,
        submitData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          position: '',
          resume: null
        });
        setResumeFileName('Resume');
        document.getElementById('file-input').value = '';
        
        // Auto-hide success message after 7 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 7000);
      }
    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitStatus('error');
      
      if (error.response?.data) {
        const errorData = typeof error.response.data === 'string' 
          ? error.response.data 
          : error.response.data.message || 'Something went wrong';
        setErrorMessage(errorData);
      } else if (error.message === 'Network Error') {
        setErrorMessage('Unable to connect to server. Please email your resume to info@ohanatherapies.com');
      } else {
        setErrorMessage('Something went wrong. Please email your resume to info@ohanatherapies.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Behavior Interventionist",
    "description": "Join our team providing ABA therapy services in San Jose and Santa Clara",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Ohana Therapies",
      "sameAs": "https://ohanatherapies.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Jose",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    }
  };

  return (
    <section className="page-section" id="careers_sec">
      <SEO 
        title="Careers at Ohana Therapies | Join Our Team in San Jose & Santa Clara"
        description="Join the Ohana Therapies team! We're hiring Behavior Interventionists and BCBAs in San Jose and Santa Clara. Apply today and make a difference."
        keywords="ABA therapy jobs, behavior interventionist jobs San Jose, BCBA jobs Santa Clara, autism therapy careers"
        structuredData={structuredData}
      />
      
      <div className="container">
        <div className="cm_sec_ttile">
          <div className="sec_ttile">
            <h1 className="sec_titel_text">Careers</h1>
          </div>
          <p className="dummy_text">
            Ohana Therapies is founded on the philosophy of providing services with Meraki—doing something with soul, creativity, or love. 
            We are growing and constantly looking for passionate and talented individuals to join our team.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 col-12">
            <div className="careers_content_wrap">
              <h2 className="careers_title">We're Hiring!</h2>
              
              <div className="job_listing_item">
                <h3 className="careers_text" style={{ fontSize: '22px', fontWeight: '700', color: '#EE5066', marginBottom: '10px' }}>
                  Behavior Interventionist (BI)
                </h3>
                <p className="careers_text">
                  <span>Location:</span> San Jose & Santa Clara, CA<br />
                  <span>Type:</span> Full-Time / Part-Time<br />
                  <span>Experience:</span> Entry Level (Training Provided)
                </p>
              </div>

              <div className="job_listing_item" style={{ marginTop: '30px' }}>
                <h3 className="careers_text" style={{ fontSize: '22px', fontWeight: '700', color: '#EE5066', marginBottom: '10px' }}>
                  Board Certified Behavior Analyst (BCBA)
                </h3>
                <p className="careers_text">
                  <span>Location:</span> San Jose & Santa Clara, CA<br />
                  <span>Type:</span> Full-Time<br />
                  <span>Experience:</span> BCBA Certification Required
                </p>
              </div>

              <p className="careers_text" style={{ marginTop: '30px', fontSize: '16px' }}>
                Join our compassionate team dedicated to making a meaningful difference in the lives 
                of children with autism and their families. We post all job openings on <strong>Indeed</strong>.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <form className="careers_form" onSubmit={handleSubmit}>
              <h3 className="careers_form_title">
                Join <span><img src={heart_icon} alt="heart" /></span> our Ohana
              </h3>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="alert alert-success" style={{ 
                  padding: '12px 15px', 
                  marginBottom: '20px', 
                  backgroundColor: '#d4edda', 
                  color: '#155724', 
                  border: '1px solid #c3e6cb', 
                  borderRadius: '5px',
                  fontSize: '14px'
                }}>
                  ✓ Application submitted successfully! We'll be in touch soon.
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && errorMessage && (
                <div className="alert alert-danger" style={{ 
                  padding: '12px 15px', 
                  marginBottom: '20px', 
                  backgroundColor: '#f8d7da', 
                  color: '#721c24', 
                  border: '1px solid #f5c6cb', 
                  borderRadius: '5px',
                  fontSize: '14px'
                }}>
                  ✕ {errorMessage}
                </div>
              )}

              <div className="careers_input">
                <div className="inner_input_group">
                  <input 
                    type="text"
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required 
                  />
                </div>
                <div className="inner_input_group">
                  <input 
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required 
                  />
                </div>
              </div>

              <div className="careers_input">
                <input 
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required 
                />
              </div>

              <div className="careers_input">
                <input 
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required 
                />
              </div>

              <div className="careers_input">
                <select 
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                >
                  <option value="">I'm Interested In</option>
                  <option value="Behavior Interventionist">Behavior Interventionist</option>
                  <option value="BCBA">BCBA</option>
                  <option value="Other Position">Other Position</option>
                </select>
              </div>

              <div className="careers_input" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <div className="file-upload" style={{ width: '100%' }}>
                  <label 
                    htmlFor="file-input" 
                    className="file-upload-select"
                    style={{
                      borderBottomColor: formData.resume ? '#4CAF50' : '#A99699'
                    }}
                  >
                    <div className="file-select-button">
                      {formData.resume ? (
                        <span style={{ 
                          fontSize: '20px', 
                          color: '#4CAF50',
                          display: 'inline-block',
                          animation: 'checkBounce 0.4s ease-out'
                        }}>✓</span>
                      ) : (
                        <img src={file_uploader} alt="upload" style={{ width: '20px', height: '20px' }} />
                      )}
                    </div>
                    <div 
                      className="file-select-name"
                      style={{
                        color: formData.resume ? '#000000' : '#EE5066',
                        fontWeight: formData.resume ? 500 : 300
                      }}
                    >
                      {resumeFileName}
                    </div>
                  </label>
                  <input 
                    type="file" 
                    name="resume" 
                    id="file-input" 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                    style={{ display: 'none' }}
                  />
                </div>
                <small style={{
                  fontSize: '13px',
                  color: formData.resume ? '#4CAF50' : '#A99699',
                  marginTop: '8px',
                  display: 'block',
                  transition: 'color 0.3s ease'
                }}>
                  {formData.resume ? '✓ File uploaded successfully' : 'PDF or Word document (Max 5MB)'}
                </small>
              </div>

              <button 
                type="submit" 
                className="form_btn"
                disabled={isSubmitting}
                style={{
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <span style={{ 
                      display: 'inline-block', 
                      width: '16px', 
                      height: '16px', 
                      border: '2px solid #F7E2E9', 
                      borderTop: '2px solid transparent', 
                      borderRadius: '50%', 
                      animation: 'spin 1s linear infinite',
                      marginRight: '8px',
                      verticalAlign: 'middle'
                    }}></span>
                    Submitting...
                  </>
                ) : (
                  'Apply Now'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
