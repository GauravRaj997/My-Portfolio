import React from 'react';
import './Home.css';
import { Github, Linkedin, Mail } from 'lucide-react';

function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="profile-pic">👋</div>
        <h1 className="home-title">Hi, I'm Gaurav Raj</h1>
        <p className="home-subtitle">Web Developer Student</p>
        <div className="button-group">
          <button className="btn-primary" onClick={() => scrollToSection('projects')}>
            View My Work
          </button>
          <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
            Contact Me
          </button>
        </div>
        <div className="social-links">
          <a href="https://github.com/GauravRaj997" target="_blank" rel="noopener noreferrer">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/gauravraj-gurjar-70b7b2239/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={28} />
          </a>
          <a href="mailto:gauravrajgurjar38@gmail.com">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;