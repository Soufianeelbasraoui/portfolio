import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './ContactMe.css';
import { supabase } from '../../supabaseClient';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // 1. Save the message in the contacts table
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (dbError) {
        throw new Error(`Database error: ${dbError.message || 'Failed to save submission.'}`);
      }

      // 2. Automatically send an email using Supabase Edge Function
      const { data: functionData, error: functionError } = await supabase.functions.invoke('send-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });

      if (functionError) {
        throw new Error(`Email delivery failed: ${functionError.message || 'Failed to send notification email.'}`);
      }

      // Check if the Edge Function returned an error in the response body
      if (functionData && functionData.error) {
        throw new Error(`Email delivery failed: ${functionData.error}`);
      }

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-container">
      <h2 className="section-title">Contact <span>Me</span></h2>
      
      <div className="contact-card">
      
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
               <a href="https://github.com/Soufianeelbasraoui" className="social-icon" target="_blank" rel="noopener noreferrer" > <FiGithub /></a>
               <a href="https://linkedin.com/in/soufiane-el-basraoui" className="social-icon" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
               <a href="https://instagram.com/soufiane_elbs"  className="social-icon"  target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
        </div>
        </div>
  
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="soufiane ..." 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email"
                placeholder="soufiane@example.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea 
                name="message"
                rows="5" 
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <div style={{
                padding: '0.75rem 1rem',
                borderRadius: '5px',
                fontSize: '0.9rem',
                fontWeight: '500',
                backgroundColor: status.type === 'success' ? 'rgba(46, 204, 113, 0.15)' : 'rgba(231, 76, 60, 0.15)',
                color: status.type === 'success' ? '#2ecc71' : '#e74c3c',
                border: `1px solid ${status.type === 'success' ? '#2ecc71' : '#e74c3c'}`,
                marginTop: '1rem',
                textAlign: 'center'
              }}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
