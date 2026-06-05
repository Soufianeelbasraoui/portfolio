import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import IconCircle from '../../components/IconCircle/IconCircle';
import './AboutMe.css';
 

const skills = [
  { name: 'Java & Spring Boot', percent: 90 },
  { name: 'PHP & Laravel', percent: 90 },
  { name: 'MERN Stack (React, Node, Express)', percent: 85 },
  { name: 'React.js & Next.js', percent: 90 },
  { name: 'Tailwind CSS & bootstrap css', percent: 80 },
  { name: 'SQL & NoSQL (MySQL, MongoDB)', percent: 85 },
  { name: 'UML & System Architecture', percent: 90 },
  { name: 'Figma (UI/UX Design)', percent: 70 }
];

const timeline = [
  {
    title: "Baccalauréat en Sciences Physiques",
    text: "Solide base scientifique et esprit analytique développés durant le parcours secondaire."
  },
  {
    title: "Droit Arabe",
    text: "Approfondissement des capacités d'analyse, de rédaction et de compréhension des structures complexes."
  },
  {
    title: "Technicien Spécialisé en Développement",
    text: "Expertise Full Stack acquise (ISTA), avec une maîtrise du cycle de vie complet du développement logiciel."
  },
  {
    title: "École Numérique Ahmed Al Hansali",
    text: "Perfectionnement continu des compétences architecturales et adoption des technologies web de pointe."
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
        <h3 className="subsection-title">Architectural Mindset & Full-Stack Expertise</h3>
        <p className="about-text">
          As a results-driven Full-Stack Developer, I, <strong>Soufiane</strong>, bridge the gap between complex backend architectures and intuitive user experiences. 
          Expert in the Java ecosystem (Spring Boot) and PHP (Laravel), with advanced proficiency in the MERN stack. 
          My approach is rooted in solid software engineering principles, prioritizing UML modeling and architectural planning to ensure scalable, 
          clean code. Beyond development, I leverage Figma and Tailwind CSS to craft modern, minimalist interfaces that resonate with users. 
          I am dedicated to building high-performance applications that solve real-world problems through technical excellence.
        </p>
        <div className="about-actions">
           <a href="/cv.pdf" download className="btn-primary">Download CV</a>
           <a href="/contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
      
      <div className="skills-section">
        <h3 className="subsection-title">Technical Expertise</h3>
        <p className="subsection-subtitle">Specialized in scalable full-stack applications and professional software modeling.</p>
        
        <div className="skills-grid">
          {skills.map(skill => (
            <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
          ))}
        </div>
      </div>

      <div className="timeline-section">
        <h3 className="subsection-title">Career Path</h3>
        
        <div className="timeline-grid">
          <TimelineColumn items={timelineLeft} />
          <TimelineColumn items={timelineRight} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
