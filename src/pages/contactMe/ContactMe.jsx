import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h2 className="section-title">Contact <span>Me</span></h2>
      
      <div className="contact-card">
        {/* Left Side: Info */}
        <div className="contact-info">
          <h3 className="info-title">Let's talk about your project</h3>
          <p className="info-desc">
            I'm currently available for freelance work and full-time opportunities. 
            Feel free to reach out via the form or social links!
          </p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon"><FiPhone /></div>
              <span>+212 766566365</span>
            </div>
            <div className="info-item">
              <div className="info-icon"><FiMail /></div>
              <span>soufianeelbasraoui0@gmail.com</span>
            </div>
           
          </div>
          
          <div className="contact-socials">
            <a href="#" className="social-icon"><FiGithub /></a>
            <a href="#" className="social-icon"><FiLinkedin /></a>
             <a href="#" className="social-icon"><FiInstagram /></a>

          </div>
        </div>
        
        {/* Right Side: Form */}
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea rows="5" placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
