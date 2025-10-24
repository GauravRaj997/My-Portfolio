import React from 'react';
import './Projects.css';
import { FolderOpen, ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A simple, modern personal portfolio built with React.js and Node.js. Designed for students and beginners to showcase projects, skills, and contact info using a clean UI and Lucide icons.',
      tech: ['React', 'CSS'],
      github: 'https://github.com/GauravRaj997/My-Portfolio.git'
    },
    {
      title: 'Simple Express site',
      description: 'A basic 2-3 page website built using Node.js and Express.js only — without any frontend framework or database. This project demonstrates how to create multiple static pages (Home, About, Contact) and serve them using Express.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/GauravRaj997/Simple-Express-Site.git'
    },
    {
      title: 'Login-Sign up',
      description: 'A modern and responsive Login & Signup Page built using React.js with smooth navigation using React Router DOM. Features an elegant UI with gradient backgrounds, dynamic form switching between login and signup, and a welcoming landing page.',
      tech: ['JavaScript', 'API', 'CSS'],
      github: 'https://github.com/GauravRaj997/Login-Sign-Up.git'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          <FolderOpen className="title-icon" />
          My Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.github} className="project-link">
                View Code <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;