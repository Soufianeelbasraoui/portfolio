import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import ProjectThumbnail from '../../components/ProjectThumbnail/ProjectThumbnail';
import './MyProjects.css';

import DefaultImg from "../../assets/Crypto.png";
import food from "../../assets/food-recipe.png";
import restApp from "../../assets/restApp.png";
import healt  from "../../assets/healt.png";


const projects = [
  {
    title: 'Système de Gestion Médicale ',
    description:
      ' API REST sécurisée (JWT) pour la gestion des patients, médecins, RDV et dossiers médicaux. Rôles, pagination, Flyway, Docker.',
    img: healt,
    demoLink: 'https://github.com/ENAA-School-Student/Syst-me-de-Gestion-M-dicale.git',
    codeLink: 'https://github.com/ENAA-School-Student/Syst-me-de-Gestion-M-dicale.git',
    tags: ['Java 21', 'Spring Boot', 'MySQL','JWT','Flyway','Docker']
  },
  {
    title: 'Recipe App -food recipe search',
    description:
      'Application web responsive de recherche de recettes avec intégration de l’API TheMealDB et interface moderne en mode sombre',
    img: food,
    demoLink: 'https://recipe-app-brown-chi.vercel.app/',
    codeLink: 'https://github.com/Soufianeelbasraoui/Recipe-App.git',
    tags: ['Html', 'Css', 'JavaScript','API']
  },
  {
    title: 'Restaurant App',
    description:
      'Application full-stack pour gestion de restaurant avec API Laravel et interface React.',
    img:restApp,
    demoLink: 'https://github.com/Soufianeelbasraoui/Restaurant.git',
    codeLink: 'https://github.com/Soufianeelbasraoui/Restaurant.git',
    tags: ['React.js', 'Laravel','MySQL','CSS']
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