import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import IconCircle from '../../components/IconCircle/IconCircle';
import './AboutMe.css';
 

const skills = [
  { name: 'HTML5 / CSS3', percent: 90 },
  { name: 'PHP / Laravel', percent: 85 },
  { name: 'JavaScript (ES6+)', percent: 80 },
  { name: 'MySQL & MongoDB', percent: 80 },
  { name: 'React & Next.js', percent: 75 },
  { name: 'Tailwind CSS ', percent: 90 },
  {name:" UI Design",percent:60},
  { name: 'Java', percent: 70 },
    { name: 'Spring Boot', percent: 65 },
  { name: 'Bootstrap CSS', percent: 90 }
];

const timeline = [
  {
    title: "Baccalauréat en Sciences Physiques",
    text: "J'ai obtenu un Baccalauréat en Sciences Physiques, une formation qui m'a permis d'acquérir un esprit analytique et une base scientifique solide."
  },
  {
    title: "Droit Arabe",
    text: "J'ai poursuivi deux années d'études en Droit Arabe, ce qui m'a permis de développer une bonne compréhension des principes juridiques fondamentaux ainsi que des capacités d'analyse et de rédaction."
  },
  {
    title: "Technicien Spécialisé en Développement",
    text: "J'ai obtenu un Diplôme de Technicien Spécialisé en Développement Digital (Web Full Stack) à l'ISTA Oued Zem, où j'ai appris à développer des applications web complètes en maîtrisant le frontend, le backend et les bases de données."
  },
  {
    title: "École Numérique Ahmed Al Hansali",
    text: "Je poursuis une formation à l'École Numérique Ahmed Al Hansali (ENAA), où je développe mes compétences en technologies du numérique et en développement web moderne."
  }
];

const timelineLeft = [timeline[0], timeline[2]];
const timelineRight = [timeline[1], timeline[3]];

const SkillBar = ({ name, percent }) => (
  <div className="skill-box">
    <div className="skill-header">
      <span className="skill-name">{name}</span>
      <span className="skill-percent">{percent}%</span>
    </div>
    <div className="skill-bar-bg">
      <div className="skill-bar-fill" style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

const TimelineColumn = ({ items }) => (
  <div className="timeline-column">
    <div className="timeline-line"></div>
    {items.map((item, index) => (
      <div className="timeline-item" key={index}>
        <div className="timeline-icon">
          <IconCircle icon={<FiBriefcase />} isActive={false} />
        </div>
        <div className="timeline-content">
          <p>{item.text}</p>
        </div>
      </div>
    ))}
  </div>
);

const AboutMe = () => {
  return (
    <section className="about-container">
      <h2 className="section-title">ABOUT <span>ME</span></h2>
      <div className="about-intro">
        <h3 className="subsection-title">Information About Me</h3>
        <p className="about-text">
          Self-driven and detail-oriented junior full-stack web developer with a strong passion for building modern,
          efficient, and user-focused digital solutions. Skilled in HTML, CSS, JavaScript, React, PHP, Laravel, and MySQL, 
          with a solid ability to transform ideas into functional and visually appealing applications. Actively seeking an
          entry-level opportunity within a dynamic organization where I can apply my technical skills, grow professionally, 
          and contribute to impactful web projects.
        </p>
      </div>
      
      <div className="skills-section">
        <h3 className="subsection-title">My Skills</h3>
        <p className="subsection-subtitle">Specialized in building end-to-end web applications with modern technologies.</p>
        
        <div className="skills-grid">
          {skills.map(skill => (
            <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
          ))}
        </div>
      </div>

      <div className="timeline-section">
        <h3 className="subsection-title">My Timeline</h3>
        
        <div className="timeline-grid">
          <TimelineColumn items={timelineLeft} />
          <TimelineColumn items={timelineRight} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
