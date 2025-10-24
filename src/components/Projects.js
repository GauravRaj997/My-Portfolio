import React from 'react';
import './Projects.css';
import { FolderOpen, ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A responsive portfolio website built with React.js to showcase my projects and skills.',
      tech: ['React', 'CSS'],
      github: '#'
    },
    {
      title: 'Todo App',
      description: 'A simple task management application with add, delete, and mark complete features.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: '#'
    },
    {
      title: 'Weather App',
      description: 'A weather application that shows current weather using a public weather API.',
      tech: ['JavaScript', 'API', 'CSS'],
      github: '#'
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