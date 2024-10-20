import React from 'react';
import './contact.css';

const Contact = () =>{
  return (
    <div className="contact-page">
      <div className="overlay"></div>
      <div className="form-wrapper">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <textarea id="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;