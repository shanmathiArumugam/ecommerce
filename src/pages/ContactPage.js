import React from "react";
import "../App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact For Any Query</h1>
      </header>

      <div className="contact-content">
        {/* Map and Form Section */}
        <div className="map-and-form">
          {/* Google Map */}
          <div className="map-container">
          <div className="map-container">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15648.607265206878!2d77.67051764482802!3d11.323612021764097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96e8cb4370e61%3A0x41525d7cd50fe810!2sThindal%2C%20Tamil%20Nadu%20638012!5e0!3m2!1sen!2sin!4v1734775808471!5m2!1sen!2sin"
    style={{ border: 0, width: "100%", height: "300px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="contact-footer">
        <div className="contact-details">
          <div className="detail">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              Maruthi Nagar, <br />
              Thindal,Erode
            </p>
          </div>
          <div className="detail">
            <i className="fas fa-phone-alt"></i>
            <p>+91 79051763622</p>
          </div>
          <div className="detail">
            <i className="fas fa-envelope"></i>
            <p>shud@example.com</p>
          </div>
          <div className="detail">
            <i className="fas fa-clock"></i>
            <p>
              <strong>Opening Hours:</strong> <br />
              Monday - Saturday: 09AM - 09PM <br />
              Sunday: 10AM - 08PM
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
