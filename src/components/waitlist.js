import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import SEO from "./SEO";
import config from '../config';
import axios from "axios";
import '../assets/css/style.css';
import subtract from '../assets/images/Subtract.png';

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

  useEffect(() => {
    fetchWaitlistData();
    document.body.style.overflow = "auto"; // Enable scrolling
  return () => {
    document.body.style.overflow = ""; // Reset when leaving the page
  };
  }, []);

  const fetchWaitlistData = async () => {
    try {
      const sizeResponse = await axios.get(`${config.baseUrl}/api/waitlist/size`);
      setWaitlistSize(sizeResponse.data.size);

      const waitTimeResponse = await axios.get(`${config.baseUrl}/api/waitlist/estimated-wait-time`);
      setEstimatedWaitTime(waitTimeResponse.data.estimatedWaitTime);
    } catch (error) {
      console.error("Error fetching waitlist data", error);
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

  const handleSignup = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);
    
    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }
    
    // Validate phone number
    if (phoneNumber && phoneNumber.replace(/\D/g, '').length < 10) {
      setErrorMessage("Please enter a valid 10-digit phone number");
      setIsSubmitting(false);
      return;
    }
    
    const formattedPhone = formatPhoneNumber(phoneNumber);
    
    try {
      const response = await axios.post(`${config.baseUrl}/api/waitlist`, { 
        name, 
        age: age ? parseInt(age, 10) : 0,  
        location, 
        insurance,
        email, 
        phoneNumber: formattedPhone 
      });
      
      setPosition(response.data.position);
      await fetchWaitlistData();
      
      // Reset form fields
      setName("");
      setAge("");
      setInsurance("");
      setLocation("");
      setEmail("");
      setPhoneNumber("");
      
      // Close form modal and show success modal
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

  // Structured Data for Waitlist Page
  const waitlistStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ohana Therapies Waitlist",
    "description": "Join the waitlist for ABA therapy services in San Jose and Santa Clara. Expert autism therapy, in-home ABA services, and family support programs.",
    "url": "https://ohanatherapies.com/waitlist",
    "medicalSpecialty": "Applied Behavior Analysis",
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "ABA Therapy for Autism",
        "description": "Comprehensive applied behavior analysis therapy for children with autism spectrum disorder in San Jose and Santa Clara"
      },
      {
        "@type": "MedicalTherapy",
        "name": "In-Home Autism Therapy",
        "description": "Personalized in-home ABA therapy services throughout the Bay Area"
      }
    ],
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
    ]
  };

  return (
    <>
      <SEO
        title="Join Waitlist - ABA Therapy San Jose & Santa Clara | Ohana Therapies"
        description="Join our waitlist for expert ABA therapy services in San Jose and Santa Clara, CA. In-home autism therapy, family training, and personalized care. Insurance accepted."
        keywords="ABA therapy waitlist San Jose, autism therapy Santa Clara, join ABA waitlist, ABA provider San Jose, autism services waitlist, in-home therapy Bay Area, ABA therapy enrollment"
        structuredData={waitlistStructuredData}
        breadcrumbs={[
          { name: 'Home', url: 'https://ohanatherapies.com' },
          { name: 'Waitlist', url: 'https://ohanatherapies.com/waitlist' }
        ]}
      />
      
      <div className="p-6 max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-lg mt-10 relative">
        
        {/* Location-Specific Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">ABA Therapy Waitlist</h1>
          <p className="text-gray-700 text-lg">
            Serving San Jose, Santa Clara & the Bay Area
          </p>
          <p className="text-gray-600 mt-2">
            Expert autism therapy services, in-home ABA therapy, and family support programs
          </p>
        </div>
        
        <Card className="bg-white rounded-lg shadow-md p-6">
          <CardContent className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Current Waitlist</h2>
            <p className="text-center text-gray-600 text-lg">📌 <strong>{waitlistSize}</strong> {waitlistSize === 1 ? 'family is' : 'families are'} currently on the waitlist.</p>
            <p className="text-center text-gray-600 mt-2 text-lg">⏳ {estimatedWaitTime}</p>
            
            {/* What to Expect Section */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">What happens after you join?</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ You'll receive a confirmation email with your position</li>
                <li>✓ Our team will contact you within 2-3 business days</li>
                <li>✓ We'll discuss your child's needs and insurance coverage</li>
                <li>✓ You'll be notified when a therapy slot becomes available</li>
              </ul>
            </div>
          </CardContent>
          <div className="mt-6 flex justify-center">
            <Button onClick={() => setIsOpen(true)} className="add-details-button">
              <Plus className="mr-2 text-white" size={20} /> <span className="">Join Waitlist Now</span>
            </Button>
          </div>
        </Card>
      
           
      {isOpen && (
          <div className="popup-form-container">
          <div className="popup-form">
            <span className="close-btn" onClick={() => !isSubmitting && setIsOpen(false)}>&times;</span>
            <div className="container">
              <div className="cm_sec_ttile">
                <div className="sec_ttile">
                  <h1 className="sec_titel_text">Join <span>Waitlist</span></h1>
                  <img src={subtract} alt="Decorative separator" loading="lazy" />
                </div>
              </div>
              
              {errorMessage && (
                <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-center">
                  {errorMessage}
                </div>
              )}
              
              <div className="d-flex justify-content-center align-items-center bg-light">
                <div className="col-md-6 col-12">
                  <div className="contact_form_wrap">
                    <form onSubmit={handleSignup}>
                      <div className="cn_input_waitlist input_group">
                        <label className="text-sm text-gray-600 mb-1 block">Parent/Guardian Name *</label>
                        <input 
                          type="text" 
                          placeholder="Enter your full name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          disabled={isSubmitting}
                          required 
                        />
                      </div>
                      
                      <div className="cn_input input_group">
                        <label className="text-sm text-gray-600 mb-1 block">Child's Age *</label>
                        <select 
                          value={age} 
                          onChange={(e) => setAge(e.target.value)} 
                          disabled={isSubmitting}
                          required
                        >
                          <option value="">Select your child's age</option>
                          <option value="3">3 years old</option>
                          <option value="4">4 years old</option>
                          <option value="5">5 years old</option>
                          <option value="6">6 years old</option>
                          <option value="7">7 years old</option>
                          <option value="8">8 years old</option>
                          <option value="9">9 years old</option>
                          <option value="10">10 years old</option>
                          <option value="11">11 years old</option>
                          <option value="12">12 years old</option>
                          <option value="13">13 years old</option>
                          <option value="14">14 years old</option>
                          <option value="15">15 years old</option>
                        </select>
                      </div>
                      
                      <div className="cn_input_waitlist">
                        <label className="text-sm text-gray-600 mb-1 block">Insurance Provider *</label>
                        <input 
                          type="text" 
                          placeholder="e.g., Blue Shield, Kaiser, Medi-Cal" 
                          value={insurance} 
                          onChange={(e) => setInsurance(e.target.value)} 
                          disabled={isSubmitting}
                          required 
                        />
                      </div>
                      
                      <div className="cn_input_waitlist">
                        <label className="text-sm text-gray-600 mb-1 block">City/Location *</label>
                        <input 
                          type="text" 
                          placeholder="e.g., San Jose, Santa Clara" 
                          value={location} 
                          onChange={(e) => setLocation(e.target.value)} 
                          disabled={isSubmitting}
                          required 
                        />
                      </div>
                      
                      <div className="cn_input_waitlist">
                        <label className="text-sm text-gray-600 mb-1 block">Email Address *</label>
                        <input 
                          type="email" 
                          placeholder="your.email@example.com" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          disabled={isSubmitting}
                          required 
                        />
                      </div>
                      
                      <div className="cn_input_waitlist">
                        <label className="text-sm text-gray-600 mb-1 block">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="(123) 456-7890" 
                          value={phoneNumber} 
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          disabled={isSubmitting}
                        />
                        <small className="text-gray-500 text-xs">Optional - We'll use this to contact you faster</small>
                      </div>
                      
                      <button 
                        className="cn_input_waitlist" 
                        type="submit"
                        disabled={isSubmitting}
                        style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                      >
                        {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center mt-3">
                        By submitting this form, you agree to be contacted by Ohana Therapies regarding ABA therapy services.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="popup-form-container">
          <div className="popup-form" style={{ maxWidth: '500px' }}>
            <span className="close-btn" onClick={() => setShowSuccessModal(false)}>&times;</span>
            <div className="container text-center p-6">
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Welcome to Our Waitlist!</h2>
              <p className="text-lg text-gray-700 mb-4">
                You're now <strong className="text-blue-600">#{position}</strong> on our waitlist
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4 text-left">
                <h3 className="font-semibold text-gray-800 mb-2">What's Next?</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✉️ Check your email for a confirmation message</li>
                  <li>📞 We'll contact you within 2-3 business days</li>
                  <li>📋 We'll discuss your child's needs and next steps</li>
                  <li>🎉 You'll be notified when a therapy slot opens</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Questions? Call us at <strong>(484) 985-0189</strong> or email <strong>info@ohanatherapies.com</strong>
              </p>
              <button 
                className="cm_btn" 
                onClick={() => setShowSuccessModal(false)}
                style={{ padding: '12px 30px', fontSize: '16px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
