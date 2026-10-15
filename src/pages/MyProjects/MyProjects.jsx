import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiLayers, FiCode, FiGlobe, FiMaximize2, FiX } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import ProjectThumbnail from '../../components/ProjectThumbnail/ProjectThumbnail';
import './MyProjects.css';

import soukTransport from "../../assets/souk-transport.png";
import food from "../../assets/food-recipe.png";
import restApp from "../../assets/restApp.png";
import healt from "../../assets/healt.png";

const projects = [
  {
    id: 'souk-transport',
    title: 'SoukTransport — Transport Collaboratif',
    category: 'Full-Stack',
    categoryLabel: 'Full-Stack',
    description:
      'Plateforme de transport collaboratif au Maroc : mise en relation expéditeurs et transporteurs, gestion des trajets et cargaisons, contrats numériques, paiements sécurisés et suivi GPS en temps réel.',
    img: soukTransport,
    demoLink: 'https://github.com/Soufianeelbasraoui/souk-transport-frontend.git',
    codeLink: 'https://github.com/Soufianeelbasraoui/souk-transport-backend.git',
    demoLabel: 'Frontend',
    codeLabel: 'Backend',
    objectPosition: 'center center',
    isLive: false,
    tags: ['React 19', 'Spring Boot 3', 'Java 21', 'Spring Security', 'JWT', 'MySQL', 'Docker', 'Flyway']
  },
  {
    id: 'healthcare-gestion-medicale',
    title: 'HealthCare+ — Système de Gestion Médicale',
    category: 'Full-Stack',
    categoryLabel: 'Full-Stack',
    categories: ['Full-Stack', 'Backend'],
    description:
      'Application web Full Stack dédiée à la gestion médicale : gestion complète des patients, des médecins, prise de rendez-vous, dossiers médicaux et tableau de bord statistique. Intègre une API REST sécurisée avec authentification JWT et gestion des rôles.',
    img: healt,
    demoLink: 'https://github.com/Soufianeelbasraoui/HealthCare-Frontend.git',
    codeLink: 'https://github.com/ENAA-School-Student/Syst-me-de-Gestion-M-dicale.git',
    demoLabel: 'Frontend',
    codeLabel: 'Backend',
    objectPosition: 'center center',
    isLive: false,
    tags: ['Java 21', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Flyway', 'Docker']
  },
  {
    id: 'recipe-app',
    title: 'Recipe App - Food Recipe Search',
    category: 'Frontend',
    categoryLabel: 'Frontend / Web',
    description:
      'Application web responsive de recherche de recettes culinaires avec intégration de l’API TheMealDB, filtres intuitifs par ingrédients et interface moderne en mode sombre.',
    img: food,
    demoLink: 'https://recipe-app-brown-chi.vercel.app/',
    codeLink: 'https://github.com/Soufianeelbasraoui/Recipe-App.git',
    demoLabel: 'Live Demo',
    codeLabel: 'Code',
    objectPosition: 'top center',
    isLive: true,
    tags: ['JavaScript', 'HTML5', 'CSS3', 'TheMealDB API', 'Vercel']
  },
  {
    id: 'restaurant-app',
    title: 'Restaurant Management App',
    category: 'Full-Stack',
    categoryLabel: 'Full-Stack',
    description:
      'Application full-stack pour la gestion complète d’un restaurant : commandes, menus et réservations avec une API robuste Laravel et une interface réactive React.',
    img: restApp,
    demoLink: 'https://github.com/Soufianeelbasraoui/Restaurant.git',
    codeLink: 'https://github.com/Soufianeelbasraoui/Restaurant.git',
    demoLabel: 'Consulter Projet',
    codeLabel: 'Code',
    objectPosition: 'top center',
    isLive: false,
    tags: ['React.js', 'Laravel', 'MySQL', 'REST API', 'CSS3']
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: FiLayers },
  { id: 'Full-Stack', label: 'Full-Stack', icon: FiCode },
  { id: 'Backend', label: 'Backend & API', icon: FiCode },
  { id: 'Frontend', label: 'Frontend', icon: FiGlobe }
];

const MyProjects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [previewProject, setPreviewProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPreviewProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => 
        p.category === activeCategory || 
        (Array.isArray(p.categories) && p.categories.includes(activeCategory))
      );

  return (
    <section className="projects-container">
      <header className="projects-header">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <p className="projects-subtitle">
          Découvrez une sélection de mes réalisations : applications full-stack, APIs robustes et interfaces web modernes.
        </p>

        <div className="projects-filter-bar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = cat.id === 'all' 
              ? projects.length 
              : projects.filter(p => 
                  p.category === cat.id || 
                  (Array.isArray(p.categories) && p.categories.includes(cat.id))
                ).length;
            
            return (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon className="filter-icon" />
                <span>{cat.label}</span>
                <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>
      </header>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <article key={project.id || idx} className="project-card">
            <div 
              className="project-thumbnail-container"
              onClick={() => setPreviewProject(project)}
              role="button"
              tabIndex={0}
              aria-label={`Agrandir la capture d'écran de ${project.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter') setPreviewProject(project); }}
            >
              <ProjectThumbnail
                src={project.img}
                alt={project.title}
                objectPosition={project.objectPosition}
              />
              
              <div className="project-badge-pill">
                {project.categoryLabel}
              </div>

              <div className="project-image-overlay">
                <button
                  type="button"
                  className="overlay-btn-zoom"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewProject(project);
                  }}
                  title="Agrandir l'image"
                >
                  <FiMaximize2 />
                  <span>Agrandir</span>
                </button>

                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn-link"
                  onClick={(e) => e.stopPropagation()}
                  title={project.isLive ? 'Voir la démo' : 'Voir le repository'}
                >
                  <FiExternalLink />
                  <span>{project.isLive ? 'Démo' : 'Projet'}</span>
                </a>
              </div>
            </div>

            <div className="project-info">
              <div className="project-meta-row">
                <span className="project-kicker">
                  <span className="kicker-dot"></span>
                  {project.categoryLabel}
                </span>
                {project.isLive && (
                  <span className="live-status-pill">
                    <span className="live-pulse"></span>
                    Live
                  </span>
                )}
              </div>

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
                  title={`Voir le repository frontend: ${project.demoLabel}`}
                >
                  <FiExternalLink />
                  <span>{project.demoLabel || 'Demo'}</span>
                </a>

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-code"
                  title={`Voir le repository backend / code: ${project.codeLabel}`}
                >
                  <FaGithub />
                  <span>{project.codeLabel || 'Code'}</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {previewProject && (
        <div 
          className="project-lightbox-backdrop"
          onClick={() => setPreviewProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="project-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="lightbox-close-btn"
              onClick={() => setPreviewProject(null)}
              aria-label="Fermer"
            >
              <FiX />
            </button>

            <div className="lightbox-image-wrapper">
              <img 
                src={previewProject.img} 
                alt={previewProject.title}
                className="lightbox-img" 
              />
            </div>

            <div className="lightbox-footer">
              <div className="lightbox-info">
                <h4>{previewProject.title}</h4>
                <p>{previewProject.categoryLabel}</p>
              </div>

              <div className="lightbox-actions">
                <a 
                  href={previewProject.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-demo"
                >
                  <FiExternalLink />
                  <span>{previewProject.demoLabel || 'Demo'}</span>
                </a>
                <a 
                  href={previewProject.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-code"
                >
                  <FaGithub />
                  <span>{previewProject.codeLabel || 'Code'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyProjects;