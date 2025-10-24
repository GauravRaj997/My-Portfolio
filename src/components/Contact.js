import React from 'react';
import './Contact.css';
import { Mail, Github, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          <Mail className="title-icon" />
          Get In Touch
        </h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm currently looking for opportunities and open to collaborating on projects. 
            Feel free to reach out if you'd like to connect!
          </p>
          <a href="mailto:gauravrajgurjar38@gmail.com" className="email-button">
            Send Email
          </a>
          <div className="contact-social">
            <a href="https://github.com/GauravRaj997" target="_blank" rel="noopener noreferrer">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/gauravraj-gurjar-70b7b2239/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;