import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/css/style.css';
import career_icon from '../assets/images/arrow.png';
import heart_icon from '../assets/images/heart_1.png';
import file_uploader from '../assets/images/file_uploader.png';

const Careers = () => (
  <section className="page-section" id="careers_sec">
    <Helmet>
      <title>Careers at Ohana Therapies</title>
      <meta name="description" content="Join the Ohana Therapies team and work with passion and dedication." />
    </Helmet>
    <div className="container">
      <div className="cm_sec_ttile">
        <div className="sec_ttile">
          <h1 className="sec_titel_text">Careers</h1>
        </div>
        <p className="dummy_text">
          Ohana Therapies is founded on the philosophy of providing services with Meraki—doing something with soul, creativity, or love.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 col-12 p_rr">
          <div className="careers_content_wrap">
            <h2 className="careers_title">Open Positions</h2>
            <p className="careers_text">
              <strong>Behavior Interventionists (BI)</strong><br />
              Work directly with our licensed staff to provide quality care for our clients.
            </p>
          </div>
          <div className="right_arrow">
            <img src={career_icon} alt="Apply arrow icon" loading="lazy" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="careers_form">
            <h2 className="careers_form_title">Join<span><img src={heart_icon} alt="Heart icon" loading="lazy" /></span> our Ohana</h2>
            <form>
              <div className="careers_input input_group">
                <input type="text" placeholder="First Name" aria-label="First Name" required />
                <input type="text" placeholder="Last Name" aria-label="Last Name" required />
              </div>
              <div className="careers_input input_group">
                <input type="email" placeholder="Email Address" aria-label="Email Address" required />
              </div>
              <div className="careers_input input_group">
                <input type="text" pattern="[0-9]*" maxLength="8" required name="zip" id="zip" placeholder="Zip Code" aria-label="Zip Code" />
              </div>
              <div className="careers_input input_group">
                <select aria-label="Position Interested In">
                  <option value="">I'm Interested In</option>
                  <option value="Behavior Interventionist">Behavior Interventionist</option>
                </select>
                <div className="file-upload">
                  <label htmlFor="file-upload-input" className="file-upload-label">
                    <img src={file_uploader} alt="Upload Resume" loading="lazy" /> Upload Resume
                  </label>
                  <input type="file" id="file-upload-input" name="resume" aria-label="Upload Resume" />
                </div>
              </div>
              <button className="form_btn" type="submit">Apply Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Careers;
