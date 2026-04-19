import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import ProjectThumbnail from '../../components/ProjectThumbnail/ProjectThumbnail';
import './MyProjects.css';
import DefaultImg from "../../assets/Crypto.png";

const projects = [
  {
    title: 'Crypto Analytics Port',
    badge: 'VUE',
    description: 'Real-time cryptocurrency tracking platform with advanced charting tools and personalized alert systems.',
    img: DefaultImg,
    link: '#'
  },
  {
    title: 'E-Commerce Ecosystem',
    badge: 'REACT',
    description: 'A comprehensive online shopping solution with real-time inventory management and secure payment gateway integration.',
    img: 'https://picsum.photos/600/400?random=1',
    link: '#'
  },
  {
    title: 'SaaS Task Manager',
    badge: 'NODE.JS',
    description: 'Collaborative project management tool featuring drag-and-drop boards, automated reporting, and Slack integration.',
    img: 'https://picsum.photos/600/400?random=3',
    link: '#'
  }
];

const MyProjects = () => {
  return (
    <section className="projects-container">
      <h2 className="section-title">My <span>Projects</span></h2>
      
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <ProjectThumbnail 
              src={project.img} 
              alt={project.title}
              badgeText={project.badge} 
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-actions">
                <button className="btn-demo">
                  <FiExternalLink /> Demo
                </button>
                <button className="btn-code">
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
