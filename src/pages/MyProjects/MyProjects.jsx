import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import ProjectThumbnail from '../../components/ProjectThumbnail/ProjectThumbnail';
import './MyProjects.css';

import DefaultImg from "../../assets/Crypto.png";
import food from "../../assets/food-recipe.png";

const projects = [
  {
    title: 'Crypto Analytics Port',
    description:
      'Real-time cryptocurrency tracking platform with advanced charting tools and personalized alert systems.',
    img: DefaultImg,
    demoLink: 'https://your-demo-link.com',
    codeLink: 'https://github.com/your-github-repo',
    tags: ['React.js', 'Chart.js', 'Tailwind', 'Supabase']
  },
  {
    title: 'E-Commerce Ecosystem',
    description:
      'A comprehensive online shopping solution with real-time inventory management and secure payment gateway integration.',
    img: food,
    demoLink: 'https://recipe-app-brown-chi.vercel.app/',
    codeLink: 'https://github.com/Soufianeelbasraoui/Recipe-App.git',
    tags: ['React.js', 'Redux', 'Node.js', 'Stripe']
  },
  {
    title: 'SaaS Task Manager',
    description:
      'Collaborative project management tool featuring drag-and-drop boards, automated reporting, and Slack integration.',
    img: 'https://picsum.photos/600/400?random=3',
    demoLink: 'https://your-demo-link.com',
    codeLink: 'https://github.com/your-github-repo',
    tags: ['React.js', 'Express', 'MongoDB', 'Socket.io']
  }
];

const MyProjects = () => {
  return (
    <section className="projects-container">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-thumbnail-container">
              <ProjectThumbnail
                src={project.img}
                alt={project.title}
              />
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-overlay"
              >
                <span className="overlay-cta">View Live Demo</span>
                <FiExternalLink className="overlay-icon" />
              </a>
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>

              <p className="project-desc">
                {project.description}
              </p>

              {project.tags && (
                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-actions">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-demo"
                >
                  <FiExternalLink />
                  Demo
                </a>

                {/* GitHub Button */}
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-code"
                >
                  <FaGithub />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;