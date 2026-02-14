import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SocialLinks from './SocialLinks';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      
      const serviceID = 'service_pupwj0a';
      const templateID = 'template_9k9pstg';
      const publicKey = 'u3RbzTw40tHI6DvGo';

      // Check if EmailJS is configured
      if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        setSubmitStatus('not-configured');
        setIsSubmitting(false);
        return;
      }

      // EmailJS send function
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'tickets.meghleela@gmail.com',
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <motion.div
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="id-color">03</span> Get In Touch
            </motion.h2>
            <div className="small-border"></div>
          </div>
        </div>

        {/* Contact Cards (Left) and Form (Right) */}
        <div className="row mt-5">
          {/* Contact Cards - Left Side (Stacked Vertically) */}
          <div className="col-lg-5 col-md-12 mb-4">
            <div className="contact-cards-wrapper">
              <motion.div
                className="contact-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="contact-icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <h4>Location</h4>
                <p>next to Utkantheshwar Mahadev Village, Punadra, Gujarat 387610</p>
              </motion.div>

              <motion.div
                className="contact-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="contact-icon">
                  <i className="fa fa-phone"></i>
                </div>
                <h4>Phone</h4>
                <p><a href="tel:+919873983824">+91 98739 83824</a></p>
              </motion.div>

              <motion.div
                className="contact-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="contact-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <h4>Email</h4>
                <p><a href="mailto:meghleela.fourace@gmail.com">meghleela.fourace@gmail.com</a></p>
              </motion.div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="col-lg-7 col-md-12 mb-4">
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="form-title">Send Us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Describe your query or message..."
                  ></textarea>
                </div>
                {submitStatus === 'success' && (
                  <div className="form-message success">
                    <i className="fa fa-check-circle"></i> Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-message error">
                    <i className="fa fa-exclamation-circle"></i> Failed to send message. Please try again or contact us directly.
                  </div>
                )}
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa fa-paper-plane"></i> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Google Map - Below Cards and Form */}
        <div className="row mt-5">
          <div className="col-12">
            <motion.div
              className="map-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="map-title">Find Us</h3>
              <div className="google-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.02940179319!2d72.97470287695731!3d23.096019513580217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e71daac30a2d3%3A0xd19da37b32072e27!2sSerenity%20Circles%20By%20Bhagwat!5e0!3m2!1sen!2sin!4v1770798533118!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Event Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="social-title">Follow Us</h3>
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

