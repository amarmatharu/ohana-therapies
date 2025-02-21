import React from 'react';
import '../assets/js/bootstrap.bundle.js';
import '../assets/js/bootstrap.bundle.js.map';
import '../assets/js/custom.js';
import '../assets/js/jquery3.5.1.min.js';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import subtract from '../assets/images/Subtract.png';
import career_icon from '../assets/images/arrow.png';
import heart_icon from '../assets/images/heart_1.png';
import file_uploader from '../assets/images/file_uploader.png';
const Careers = () => (
  <section className="page-section" id="careers_sec">
  <div className="container">
    <div className="cm_sec_ttile">
      <div className="sec_ttile">
        <h2 className="sec_titel_text">careers</h2>
        <img src={subtract} alt="" />
      </div>
      <p className="dummy_text">
        Ohana Therapies is founded on the philosophy of providing services with Meraki. This is a
        word that Greeks use to describe doing something with soul, creativity, or love — when you
        put “something of yourself”
        into your work. If you think you can work with or embrace the spirit of Meraki, this place
        is for you. Submit a form to apply.
      </p>
    </div>
    <div className="row">
      <div className="col-md-6 col-12 p_rr">
        <div className="careers_content_wrap">
          <h3 className="careers_title">POSITIONS CURRENTLY OPEN</h3>
          <p className="careers_text">
            <span>Behavior Interventionists (BI) </span><br />
            Behavior Interventionists are critical member of our team and work directly with our
            licensed staff to give them tools necessary to work effectively with our clients.
          </p>
        </div>
        <div className="right_arrow">
          <img src={career_icon} alt="" />
        </div>
      </div>
      <div className="col-md-6 col-12">
        <div className="careers_form">
          <h2 className="careers_form_title">
            Join<span><img src={heart_icon} alt="" /></span>ur Ohana
          </h2>
          <form action="">
            <div className="careers_input input_group">
              <div className="inner_input_group">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="inner_input_group">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="careers_input input_group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="careers_input input_group">
              <div className="inner_input_group">
                <input type="text" pattern="[0-9]*" maxLength="8" required name="zip"
                  id="zip" placeholder="Zip code" />
              </div>

            </div>
            <div className="careers_input input_group">
              <div className="inner_input_group">
                <select>
                  <option>I’m Interested In</option>
                  <option>Bhevaior Interventionists</option>
                </select>
              </div>
              <div className="inner_input_group">
                <div className="file-upload">
                  <div className="file-upload-select">
                    <div className="file-select-button"><img
                        src={file_uploader} alt="" /></div>
                    <div className="file-select-name">UPLOAD RESUME</div>
                    <input type="file" name="file-upload-input"
                      id="file-upload-input" />
                  </div>
                </div>
              </div>
            </div>
            <button className="form_btn">APPLY NOW</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
);

export default Careers;
