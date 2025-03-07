import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../assets/css/style.css';
import subtract from '../assets/images/Subtract.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact_info_sec">
      <Helmet>
        <title>Contact Ohana Therapies</title>
        <meta name="description" content="Get in touch with Ohana Therapies. Contact us for inquiries or support." />
      </Helmet>
      <div className="container">
        <div className="cm_sec_ttile">
          <div className="sec_ttile">
            <h1 className="sec_titel_text">Contact <span>Information</span></h1>
            <img src={subtract} alt="Decorative separator" loading="lazy" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="contact_form_wrap">
              <form>
                <div className="cn_input input_group">
                  <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} aria-label="Name" required />
                </div>
                <div className="cn_input input_group">
                  <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} aria-label="Phone" required />
                </div>
                <div className="cn_input input_group">
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} aria-label="Email" required />
                </div>
                <div className="cn_input input_group">
                  <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} aria-label="Message" required></textarea>
                </div>
                <button className="form_btn cn_btn" type="submit">Send</button>
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
