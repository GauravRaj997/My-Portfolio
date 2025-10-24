import React from 'react';
import './About.css';
import { User, Code2 } from 'lucide-react';

function About() {
  const skills = [
    'HTML & CSS',
    'React.js',
    'Node.js',
    'Git & GitHub',
    'Responsive Design',
    'Problem Solving'
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">
          <User className="title-icon" />
          About Me
        </h2>
        <div className="about-content">
          <p className="about-text">
            I'm a passionate Computer Science student learning web development. 
            I love building projects and learning new technologies. Currently focusing on 
            React.js and Node.js to create modern web applications.
          </p>
        </div>
        
        <h3 className="skills-title">
          <Code2 className="title-icon" />
          Skills
        </h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;