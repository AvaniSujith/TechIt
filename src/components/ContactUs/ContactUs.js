// ContactUs.js
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Have questions or suggestions? Reach out to us!</p>
        <address>
          <strong>TechIt</strong><br />
          123 Street,Kochi<br />
          India<br />
          Email: techit@gmail.com<br />
          Phone: +123 456 7890
        </address>
      </div>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Message:
         </label>
        <textarea></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;

