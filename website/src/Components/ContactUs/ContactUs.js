import React, { Component } from 'react';

import './ContactUs.css';

class ContactUs extends Component {
  render() {

    const map = 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.8243057403215!2d-77.24983798464876!3d38.927993079565894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64a5db81e6fe7%3A0x5114cd17729acd72!2sEsri!5e0!3m2!1sen!2sus!4v1534275903343" width="500" height="400" frameBorder="0" title="ESri-Vienna-map"allowFullScreen></iframe>;  

    const contact = 
      <div className="wrapper">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h4>Address</h4>
            <p>8615 Westwood Center Dr, Vienna, VA 22182</p>
          </div>
          <div className="contact-info">
            <h4>Phone</h4>
            <p>(703) 506-9515</p>
          </div>
          <div className="contact-info">
            <h4>Hours</h4>
            <p>Monday: 8AM - 5PM</p>
            <p>Tuesday: 8AM - 5PM</p>
            <p>Wednesday: 8AM - 5PM</p>
            <p>Thursday: 8AM - 5PM</p>
            <p>Friday: 8AM - 5PM</p>
            <p>Saturday: Closed</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="contact-us-map">
          {map}
        </div>
      </div>;

    return (
      <div className="contact-us">
        <h1>Contact Us</h1>
        {contact}
        {/* {map} */}
      </div>
    );  
  }
}

export default ContactUs;