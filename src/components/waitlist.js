import React, { useState, useEffect } from "react";
import { Plus, X, Check, Clock, Users, MapPin, Mail, Phone, User, Shield, Calendar, Heart, Loader2, ChevronRight } from "lucide-react";
import axios from "axios";

const API_BASE_URL = "https://api.ohanabehavioralservice.com";

// Inline styles
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #fff1f2, #ffffff, #fdf2f8)',
  },
  main: {
    maxWidth: '896px',
    margin: '0 auto',
    padding: '32px 16px',
  },
  heroSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#ffe4e6',
    color: '#be123c',
    padding: '8px 16px',
    borderRadius: '9999px',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '24px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '16px',
    lineHeight: '1.2',
  },
  titleGradient: {
    background: 'linear-gradient(to right, #f43f5e, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '18px',
    color: '#4b5563',
    maxWidth: '672px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    border: '1px solid #f3f4f6',
    overflow: 'hidden',
    marginBottom: '32px',
  },
  cardSection: {
    padding: '24px 32px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
  },
  statCard: {
    background: 'linear-gradient(to bottom right, #fff1f2, #fdf2f8)',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #fecdd3',
  },
  statCardBlue: {
    background: 'linear-gradient(to bottom right, #eff6ff, #eef2ff)',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #bfdbfe',
  },
  statHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
  },
  statIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#ffe4e6',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIconBlue: {
    width: '40px',
    height: '40px',
    backgroundColor: '#dbeafe',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#4b5563',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#111827',
  },
  statUnit: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#6b7280',
    marginLeft: '8px',
  },
  graySection: {
    backgroundColor: '#f9fafb',
    borderTop: '1px solid #f3f4f6',
    padding: '24px 32px',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '12px',
  },
  stepItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '12px',
    border: '1px solid #f3f4f6',
  },
  stepIcon: {
    width: '32px',
    height: '32px',
    backgroundColor: '#dcfce7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  stepText: {
    fontSize: '14px',
    color: '#374151',
  },
  ctaSection: {
    padding: '24px 32px',
    borderTop: '1px solid #f3f4f6',
    display: 'flex',
    justifyContent: 'center',
  },
  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: 'linear-gradient(to right, #f43f5e, #ec4899)',
    color: '#ffffff',
    padding: '16px 32px',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 25px -5px rgba(244, 63, 94, 0.4)',
    transition: 'all 0.3s ease',
  },
  trustBadges: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
  },
  trustBadge: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  trustBadgeIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#ffe4e6',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '12px',
  },
  trustBadgeTitle: {
    fontWeight: '600',
    color: '#111827',
    marginBottom: '4px',
  },
  trustBadgeDesc: {
    fontSize: '14px',
    color: '#6b7280',
  },
  modal: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    width: '100%',
    maxWidth: '512px',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  modalHeader: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #f3f4f6',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  modalTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
  },
  closeButton: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  form: {
    padding: '20px 24px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px',
  },
  required: {
    color: '#ef4444',
  },
  optional: {
    color: '#9ca3af',
  },
  inputWrapper: {
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
  },
  input: {
    width: '100%',
    paddingLeft: '44px',
    paddingRight: '16px',
    paddingTop: '12px',
    paddingBottom: '12px',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  inputError: {
    borderColor: '#fca5a5',
    backgroundColor: '#fef2f2',
  },
  select: {
    width: '100%',
    paddingLeft: '44px',
    paddingRight: '40px',
    paddingTop: '12px',
    paddingBottom: '12px',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '16px',
    outline: 'none',
    appearance: 'none',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
  errorText: {
    marginTop: '6px',
    fontSize: '14px',
    color: '#dc2626',
  },
  helpText: {
    marginTop: '6px',
    fontSize: '12px',
    color: '#6b7280',
  },
  errorBox: {
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    color: '#b91c1c',
    padding: '12px 16px',
    borderRadius: '12px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '20px',
  },
  errorIcon: {
    width: '20px',
    height: '20px',
    backgroundColor: '#fee2e2',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  submitButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: 'linear-gradient(to right, #f43f5e, #ec4899)',
    color: '#ffffff',
    padding: '16px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 25px -5px rgba(244, 63, 94, 0.3)',
  },
  submitButtonDisabled: {
    background: 'linear-gradient(to right, #9ca3af, #6b7280)',
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  successModal: {
    padding: '32px',
    textAlign: 'center',
  },
  successIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: '#dcfce7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
  },
  successTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '8px',
  },
  successText: {
    color: '#4b5563',
    marginBottom: '24px',
  },
  positionNumber: {
    fontWeight: '700',
    color: '#e11d48',
  },
  nextStepsBox: {
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '24px',
    textAlign: 'left',
  },
  nextStepsTitle: {
    fontWeight: '600',
    color: '#111827',
    marginBottom: '12px',
  },
  nextStepItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px',
    color: '#374151',
    marginBottom: '12px',
  },
  nextStepIcon: {
    width: '28px',
    height: '28px',
    backgroundColor: '#ffe4e6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  contactInfo: {
    fontSize: '14px',
    color: '#4b5563',
    marginBottom: '24px',
  },
  contactBold: {
    fontWeight: '600',
  },
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px',
  },
  spin: {
    animation: 'spin 1s linear infinite',
  },
};

// Add keyframes for spin animation
const spinKeyframes = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export default function Waitlist() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [insurance, setInsurance] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [position, setPosition] = useState(null);
  const [waitlistSize, setWaitlistSize] = useState(0);
  const [estimatedWaitTime, setEstimatedWaitTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWaitlistData();
  }, []);

  useEffect(() => {
    if (isOpen || showSuccessModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, showSuccessModal]);

  const fetchWaitlistData = async () => {
    setIsLoading(true);
    try {
      const [sizeResponse, waitTimeResponse] = await Promise.all([
        axios.get(`${API_BASE_URL}/api/waitlist/size`),
        axios.get(`${API_BASE_URL}/api/waitlist/estimated-wait-time`)
      ]);
      setWaitlistSize(sizeResponse.data.size);
      setEstimatedWaitTime(waitTimeResponse.data.estimatedWaitTime);
    } catch (error) {
      console.error("Error fetching waitlist data", error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formatPhoneNumber = (value) => {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return value;
  };

  const validateForm = () => {
    const errors = {};
    
    if (!name.trim()) errors.name = "Name is required";
    if (!age) errors.age = "Please select your child's age";
    if (!insurance.trim()) errors.insurance = "Insurance provider is required";
    if (!location.trim()) errors.location = "Location is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email";
    }
    if (phoneNumber && phoneNumber.replace(/\D/g, '').length > 0 && phoneNumber.replace(/\D/g, '').length < 10) {
      errors.phoneNumber = "Please enter a valid 10-digit phone number";
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    const formattedPhone = formatPhoneNumber(phoneNumber);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/waitlist`, {
        name,
        age: age ? parseInt(age, 10) : 0,
        location,
        insurance,
        email,
        phoneNumber: formattedPhone
      });

      setPosition(response.data.position);
      await fetchWaitlistData();
      setName("");
      setAge("");
      setInsurance("");
      setLocation("");
      setEmail("");
      setPhoneNumber("");
      setFieldErrors({});
      setIsOpen(false);
      setShowSuccessModal(true);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage("This email is already registered on the waitlist.");
      } else {
        setErrorMessage("Something went wrong. Please try again or contact us directly.");
        console.error("Error signing up", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(value);
    if (fieldErrors.phoneNumber) {
      setFieldErrors(prev => ({ ...prev, phoneNumber: null }));
    }
  };

  const clearFieldError = (field) => {
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  return (
    <div style={styles.container}>
      <style>{spinKeyframes}</style>
      
      <main style={styles.main}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <div style={styles.badge}>
            <MapPin size={16} />
            Serving San Jose, Santa Clara & the Bay Area
          </div>
          <h1 style={styles.title}>
            ABA Therapy <span style={styles.titleGradient}>Waitlist</span>
          </h1>
          <p style={styles.subtitle}>
            Expert autism therapy services, in-home ABA therapy, and family support programs tailored to your child's unique needs.
          </p>
        </div>

        {/* Stats Card */}
        <div style={styles.card}>
          <div style={styles.cardSection}>
            <h2 style={styles.sectionTitle}>
              <Users size={20} color="#f43f5e" />
              Current Waitlist Status
            </h2>
            
            {isLoading ? (
              <div style={styles.loader}>
                <Loader2 size={32} color="#f43f5e" style={styles.spin} />
              </div>
            ) : (
              <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                  <div style={styles.statHeader}>
                    <div style={styles.statIcon}>
                      <Users size={20} color="#e11d48" />
                    </div>
                    <span style={styles.statLabel}>Families Waiting</span>
                  </div>
                  <p style={styles.statValue}>
                    {waitlistSize}
                    <span style={styles.statUnit}>
                      {waitlistSize === 1 ? 'family' : 'families'}
                    </span>
                  </p>
                </div>
                
                <div style={styles.statCardBlue}>
                  <div style={styles.statHeader}>
                    <div style={styles.statIconBlue}>
                      <Clock size={20} color="#2563eb" />
                    </div>
                    <span style={styles.statLabel}>Estimated Wait</span>
                  </div>
                  <p style={{ ...styles.statValue, fontSize: '18px' }}>
                    {estimatedWaitTime || "Contact us for details"}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* What to Expect */}
          <div style={styles.graySection}>
            <h3 style={styles.sectionTitle}>
              <Calendar size={20} color="#f43f5e" />
              What happens after you join?
            </h3>
            <div style={styles.stepsGrid}>
              {[
                { icon: Mail, text: "Confirmation email with your position" },
                { icon: Phone, text: "Contact within 2-3 business days" },
                { icon: User, text: "Discuss your child's needs & insurance" },
                { icon: Check, text: "Notified when a slot opens" }
              ].map((item, index) => (
                <div key={index} style={styles.stepItem}>
                  <div style={styles.stepIcon}>
                    <item.icon size={16} color="#16a34a" />
                  </div>
                  <span style={styles.stepText}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div style={styles.ctaSection}>
            <button
              onClick={() => setIsOpen(true)}
              style={styles.primaryButton}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <Plus size={20} />
              Join Waitlist Now
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div style={styles.trustBadges}>
          {[
            { icon: Shield, title: "Insurance Accepted", desc: "Most major plans covered" },
            { icon: MapPin, title: "In-Home Services", desc: "Comfortable & convenient" },
            { icon: Heart, title: "Family-Centered", desc: "Personalized care plans" }
          ].map((badge, index) => (
            <div key={index} style={styles.trustBadge}>
              <div style={styles.trustBadgeIcon}>
                <badge.icon size={20} color="#e11d48" />
              </div>
              <h4 style={styles.trustBadgeTitle}>{badge.title}</h4>
              <p style={styles.trustBadgeDesc}>{badge.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Form Modal */}
      {isOpen && (
        <div 
          style={styles.modal}
          onClick={(e) => e.target === e.currentTarget && !isSubmitting && setIsOpen(false)}
        >
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Join Our Waitlist</h2>
              <button
                onClick={() => !isSubmitting && setIsOpen(false)}
                style={styles.closeButton}
                disabled={isSubmitting}
              >
                <X size={20} color="#6b7280" />
              </button>
            </div>

            <form onSubmit={handleSignup} style={styles.form}>
              {errorMessage && (
                <div style={styles.errorBox}>
                  <div style={styles.errorIcon}>
                    <X size={12} color="#dc2626" />
                  </div>
                  {errorMessage}
                </div>
              )}

              {/* Name Field */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Parent/Guardian Name <span style={styles.required}>*</span>
                </label>
                <div style={styles.inputWrapper}>
                  <User size={20} style={styles.inputIcon} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); clearFieldError('name'); }}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                    style={{...styles.input, ...(fieldErrors.name ? styles.inputError : {})}}
                  />
                </div>
                {fieldErrors.name && <p style={styles.errorText}>{fieldErrors.name}</p>}
              </div>

              {/* Age Field */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Child's Age <span style={styles.required}>*</span>
                </label>
                <div style={styles.inputWrapper}>
                  <Calendar size={20} style={styles.inputIcon} />
                  <select
                    value={age}
                    onChange={(e) => { setAge(e.target.value); clearFieldError('age'); }}
                    disabled={isSubmitting}
                    style={{...styles.select, ...(fieldErrors.age ? styles.inputError : {})}}
                  >
                    <option value="" disabled>Select your child's age</option>
                    {[...Array(13)].map((_, i) => (
                      <option key={i + 3} value={i + 3}>{i + 3} years old</option>
                    ))}
                  </select>
                  <ChevronRight size={20} style={{...styles.inputIcon, left: 'auto', right: '12px', transform: 'translateY(-50%) rotate(90deg)'}} />
                </div>
                {fieldErrors.age && <p style={styles.errorText}>{fieldErrors.age}</p>}
              </div>

              {/* Insurance Field */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Insurance Provider <span style={styles.required}>*</span>
                </label>
                <div style={styles.inputWrapper}>
                  <Shield size={20} style={styles.inputIcon} />
                  <input
                    type="text"
                    value={insurance}
                    onChange={(e) => { setInsurance(e.target.value); clearFieldError('insurance'); }}
                    placeholder="e.g., Blue Shield, Kaiser, Medi-Cal"
                    disabled={isSubmitting}
                    style={{...styles.input, ...(fieldErrors.insurance ? styles.inputError : {})}}
                  />
                </div>
                {fieldErrors.insurance && <p style={styles.errorText}>{fieldErrors.insurance}</p>}
              </div>

              {/* Location Field */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  City/Location <span style={styles.required}>*</span>
                </label>
                <div style={styles.inputWrapper}>
                  <MapPin size={20} style={styles.inputIcon} />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => { setLocation(e.target.value); clearFieldError('location'); }}
                    placeholder="e.g., San Jose, Santa Clara"
                    disabled={isSubmitting}
                    style={{...styles.input, ...(fieldErrors.location ? styles.inputError : {})}}
                  />
                </div>
                {fieldErrors.location && <p style={styles.errorText}>{fieldErrors.location}</p>}
              </div>

              {/* Email Field */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Email Address <span style={styles.required}>*</span>
                </label>
                <div style={styles.inputWrapper}>
                  <Mail size={20} style={styles.inputIcon} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); clearFieldError('email'); }}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                    style={{...styles.input, ...(fieldErrors.email ? styles.inputError : {})}}
                  />
                </div>
                {fieldErrors.email && <p style={styles.errorText}>{fieldErrors.email}</p>}
              </div>

              {/* Phone Field */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Phone Number <span style={styles.optional}>(optional)</span>
                </label>
                <div style={styles.inputWrapper}>
                  <Phone size={20} style={styles.inputIcon} />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="(123) 456-7890"
                    disabled={isSubmitting}
                    style={{...styles.input, ...(fieldErrors.phoneNumber ? styles.inputError : {})}}
                  />
                </div>
                {fieldErrors.phoneNumber && <p style={styles.errorText}>{fieldErrors.phoneNumber}</p>}
                <p style={styles.helpText}>Helps us contact you faster about therapy availability</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{...styles.submitButton, ...(isSubmitting ? styles.submitButtonDisabled : {})}}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} style={styles.spin} />
                    Joining Waitlist...
                  </>
                ) : (
                  <>
                    <Plus size={20} />
                    Join Waitlist
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          style={styles.modal}
          onClick={(e) => e.target === e.currentTarget && setShowSuccessModal(false)}
        >
          <div style={{...styles.modalContent, maxWidth: '448px'}}>
            <div style={styles.successModal}>
              <div style={styles.successIcon}>
                <Check size={40} color="#16a34a" />
              </div>
              
              <h2 style={styles.successTitle}>Welcome to Our Waitlist!</h2>
              <p style={styles.successText}>
                You're now <span style={styles.positionNumber}>#{position}</span> on our waitlist
              </p>

              <div style={styles.nextStepsBox}>
                <h3 style={styles.nextStepsTitle}>What's Next?</h3>
                {[
                  { icon: Mail, text: "Check your email for confirmation" },
                  { icon: Phone, text: "We'll contact you within 2-3 days" },
                  { icon: User, text: "Discuss your child's needs" },
                  { icon: Check, text: "Get notified when a slot opens" }
                ].map((item, index) => (
                  <div key={index} style={styles.nextStepItem}>
                    <div style={styles.nextStepIcon}>
                      <item.icon size={14} color="#e11d48" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>

              <p style={styles.contactInfo}>
                Questions? Call <span style={styles.contactBold}>(484) 985-0189</span> or email{" "}
                <span style={styles.contactBold}>info@ohanatherapies.com</span>
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                style={styles.primaryButton}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
