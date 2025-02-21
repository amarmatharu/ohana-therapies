import React, { useState } from 'react';
import '../assets/js/bootstrap.bundle.js';
import '../assets/js/bootstrap.bundle.js.map';
import '../assets/js/custom.js';
import '../assets/js/jquery3.5.1.min.js';
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import subtract from '../assets/images/Subtract.png';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    body: ''
  });

  return (
    <section id="contact_info_sec">
      <div className="container">
      <div className="cm_sec_ttile">
						<div className="sec_ttile">
							<h2 className="sec_titel_text">CONTACT <span>INFoRMATION</span></h2>
              <img src={subtract} alt="" />
						</div>
					</div>
          <div className="row">
          <div className="col-md-6 col-12">
							<div className="contact_form_wrap">
								<div className="careers_text" id="success_message"></div>
        <form>
        <div className="cn_input input_group">
          <input type="text" placeholder="Name" value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="cn_input input_group">
          <input type="tel" placeholder="Phone" value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
            <div className="cn_input input_group">
          <input type="email" placeholder="Email" value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="cn_input input_group">
          <textarea placeholder="Message" value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}></textarea>
            </div>
          <button className="form_btn cn_btn" type="submit">Send</button>
        </form>
      </div>
      </div>
			<div className="col-md-6 col-12">
							<div className="contact_detail">
								<div className="contact_content">
									<div className="contact_media">
										<div className="contact_icon">
											<img src="assets/images/customer-care.png" alt="" />
										</div>
										<div className="contact_body">
											<h2>Contact</h2>
											<div className="cm_contact mobile_nu"><span>Phone:</span> <a
													href="tel:5175123617">(484) 985-0189</a></div>
											<div className="cm_contact mobile_nu"><span>Fax:</span> <a
													href="tel:5177963104">(805) 856-1529</a></div>
										</div>
									</div>
									<div className="contact_media">
										<div className="contact_icon">
											<img src="assets/images/location.png" alt="" />
										</div>
										<div className="contact_body">
											<h2>Location</h2>
											<div className="cm_contact">
												<span>Serving Contra Costa County:</span>
												<p>Danville, San Ramon.</p>
											</div>
											<div className="cm_contact">
												<span>Serving Alameda County:</span>
												<p>Pleasanton, Dublin, Livermore, Castro Valley, Fremont</p>
											</div>
											<div className="cm_contact">
												<span>Serving Santa Clara County:</span>
												<p>San Jose, Santa Clara</p>
											</div>
										</div>
									</div>
									<div className="contact_media">
										<div className="contact_icon">
											<img src="assets/images/clock.png" alt="" />
										</div>
										<div className="contact_body">
											<h2>Business Hours</h2>
											<div className="cm_contact business_cn">
												<span>MONDAY TO FRIDAY :</span>
												<p>8:00 AM - 6:00 PM</p>
											</div>
											<div className="cm_contact business_cn">
												<span>saturday TO SUNDAY :</span>
												<p className="color_change">CLOSED</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
    </section>
  );
};

export default Contact;
