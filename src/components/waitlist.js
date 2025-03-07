import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Plus } from "lucide-react";
import config from '../config';
import axios from "axios";
import '../assets/css/style.css';
import subtract from '../assets/images/Subtract.png';

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [position, setPosition] = useState(null);
  const [waitlistSize, setWaitlistSize] = useState(0);
  const [estimatedWaitTime, setEstimatedWaitTime] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchWaitlistData();
  }, []);

  const fetchWaitlistData = async () => {
    try {
      const sizeResponse = await axios.get(`${config.baseUrl}/api/waitlist/size`);
      setWaitlistSize(sizeResponse.data.size);

      const waitTimeResponse = await axios.get(`${config.baseUrl}api/waitlist/estimated-wait-time`);
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
    event.preventDefault(); // Prevent form refresh
    setErrorMessage("");
    
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format");
      return;
    }
    
    const formattedPhone = formatPhoneNumber(phoneNumber);
    
    try {
      const response = await axios.post(`${config.baseUrl}/api/waitlist`, { email, phoneNumber: formattedPhone });
      setPosition(response.data.position);
      fetchWaitlistData();
      setShowForm(false);

      // Show toast message
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide after 3 sec
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage("This email is already registered on the waitlist.");
      } else {
        console.error("Error signing up", error);
      }
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-lg mt-10 relative">

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-500 py-3 px-5 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out opacity-100">
          Successfully added to the waitlist!
        </div>
      )}
      
      {errorMessage && (
        <div className="text-red-500 text-center font-semibold mb-4">{errorMessage}</div>
      )}
      
      <Card className="bg-white rounded-lg shadow-md p-6">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Current Waitlist</h2>
          <p className="text-center text-gray-600">📌 <strong>{waitlistSize}</strong> people are currently on the waitlist.</p>
          <p className="text-center text-gray-600 mt-2">⏳ {estimatedWaitTime}</p>
        </CardContent>
      </Card>
      
      <div className="mt-6 flex justify-center">
        <Button onClick={() => setShowForm(!showForm)} className="add-details-button">
          <Plus className="mr-2 text-white" size={20} /> <span className="">Add to Waitlist</span>
        </Button>
      </div>
      
      {showForm && (
         <div className="container">
         <div className="cm_sec_ttile">
           <div className="sec_ttile">
             <h1 className="sec_titel_text">Join <span>Waitlist</span></h1>
             <img src={subtract} alt="Decorative separator" loading="lazy" />
           </div>
         </div>
         <div className="d-flex justify-content-center align-items-center bg-light">
           <div className="col-md-6 col-12">
             <div className="contact_form_wrap">
               <form onSubmit={handleSignup}>
                 <div className="cn_input input_group">
                   <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" required />
                 </div>
                 <div className="cn_input input_group">
                   <input type="tel" name="phone" placeholder="Enter your phone number (optional)" value={phoneNumber} onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))} aria-label="Phone" required />
                 </div>
                 <button className="form_btn cn_btn" type="submit">Send</button>
                 {position !== null && (
                   <p className="mt-2 text-center text-green-700 font-semibold">Your position in the waitlist: {position}</p>
                 )}
               </form>
             </div>
           </div>
         </div>
       </div>
      )}
    </div>
  );
}
