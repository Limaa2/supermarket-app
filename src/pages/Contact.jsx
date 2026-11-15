import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for feedback messages and errors
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear error when user starts typing again
  };

  // Handle form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Validate required fields
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.');
      setSuccessMessage('');
      return;
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setSuccessMessage('');
      return;
    }

    // If validation passes
    setError('');
    setSuccessMessage('Thank you! Your message has been successfully sent. We will get back to you soon.');
    
    // Clear form fields
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Get in Touch with Support</h2>
        <p>Have questions about your grocery delivery or an order? Reach out to our team!</p>
      </div>

      <div className="contact-grid">
        {/* Contact Information Column */}
        <div className="contact-info-card">
          <h3>Contact Information</h3>
          <p>Feel free to contact us through any of the channels below or fill out the support form.</p>
          
          <div className="contact-info-item">
            <Phone className="contact-icon" />
            <div>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="contact-info-item">
            <Mail className="contact-icon" />
            <div>
              <h4>Email</h4>
              <p>support@freshmarket.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <MapPin className="contact-icon" />
            <div>
              <h4>Location</h4>
              <p>123 Grocery Lane, Fresh City, FC 90210</p>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="contact-form-card">
          <h3>Send Us a Message</h3>
          
          {error && <div className="form-alert error">{error}</div>}
          {successMessage && (
            <div className="form-alert success">
              <CheckCircle2 size={18} /> {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Delivery inquiry / Product question"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              <Send size={16} /> Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;