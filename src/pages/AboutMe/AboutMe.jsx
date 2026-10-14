import React, { useState } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { 
  FaJava, 
  FaHtml5, 
  FaCss3Alt,
  FaDiagramProject 
} from 'react-icons/fa6';
import { 
  SiSpringboot, 
  SiReact, 
  SiJavascript, 
  SiPhp,
  SiLaravel, 
  SiNodedotjs, 
  SiExpress,
  SiTailwindcss, 
  SiBootstrap,
  SiMysql, 
  SiMongodb,
  SiPostman, 
  SiGit, 
  SiGithub,
  SiFigma, 
  SiDocker,
  SiSwagger 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import IconCircle from '../../components/IconCircle/IconCircle';
import './AboutMe.css';

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'database', label: 'Data & Architecture' },
  { id: 'tools', label: 'DevOps & Tools' }
];

const skills = [
  // Backend & APIs
  {
    name: 'Java',
    category: 'backend',
    percent: 90,
    icon: FaJava,
    brandColor: '#F89820'
  },
  {
    name: 'Spring Boot',
    category: 'backend',
    percent: 90,
    icon: SiSpringboot,
    brandColor: '#6DB33F'
  },
  {
    name: 'PHP',
    category: 'backend',
    percent: 85,
    icon: SiPhp,
    brandColor: '#777BB4'
  },
  {
    name: 'Laravel',
    category: 'backend',
    percent: 85,
    icon: SiLaravel,
    brandColor: '#FF2D20'
  },
  {
    name: 'Node.js',
    category: 'backend',
    percent: 85,
    icon: SiNodedotjs,
    brandColor: '#5FA04E'
  },
  {
    name: 'Express.js',
    category: 'backend',
    percent: 85,
    icon: SiExpress,
    brandColor: '#828282'
  },
  {
    name: 'REST API',
    category: 'backend',
    percent: 90,
    icon: TbApi,
    brandColor: '#10B981'
  },
  {
    name: 'Swagger (OpenAPI)',
    category: 'backend',
    percent: 85,
    icon: SiSwagger,
    brandColor: '#85EA2D'
  },

  // Frontend & UI
  {
    name: 'React.js',
    category: 'frontend',
    percent: 90,
    icon: SiReact,
    brandColor: '#61DAFB'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    percent: 90,
    icon: SiJavascript,
    brandColor: '#F7DF1E'
  },
  {
    name: 'HTML5',
    category: 'frontend',
    percent: 95,
    icon: FaHtml5,
    brandColor: '#E34F26'
  },
  {
    name: 'CSS3',
    category: 'frontend',
    percent: 90,
    icon: FaCss3Alt,
    brandColor: '#1572B6'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    percent: 85,
    icon: SiTailwindcss,
    brandColor: '#06B6D4'
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    percent: 80,
    icon: SiBootstrap,
    brandColor: '#7952B3'
  },

  // Data & Architecture
  {
    name: 'MySQL',
    category: 'database',
    percent: 85,
    icon: SiMysql,
    brandColor: '#4479A1'
  },
  {
    name: 'MongoDB',
    category: 'database',
    percent: 80,
    icon: SiMongodb,
    brandColor: '#47A248'
  },
  {
    name: 'UML & System Design',
    category: 'database',
    percent: 85,
    icon: FaDiagramProject,
    brandColor: '#8B5CF6'
  },

  // DevOps & Tools
  {
    name: 'Docker',
    category: 'tools',
    percent: 85,
    icon: SiDocker,
    brandColor: '#2496ED'
  },
  {
    name: 'Git',
    category: 'tools',
    percent: 90,
    icon: SiGit,
    brandColor: '#F05032'
  },
  {
    name: 'GitHub',
    category: 'tools',
    percent: 90,
    icon: SiGithub,
    brandColor: '#8B949E'
  },
  {
    name: 'Postman',
    category: 'tools',
    percent: 85,
    icon: SiPostman,
    brandColor: '#FF6C37'
  },
  {
    name: 'Figma (UI/UX)',
    category: 'tools',
    percent: 75,
    icon: SiFigma,
    brandColor: '#F24E1E'
  }
];

const timeline = [
  {
    title: "Technicien Spécialisé en Développement",
    text: "Technicien Spécialisé en Développement (ISTA), spécialisé en développement Full Stack, avec une solide compréhension du cycle de vie logiciel et des bonnes pratiques de conception et d’intégration."
  },
  {
    title: "École Numérique Ahmed Al Hansali",
    text: "Développeur web Full Stack spécialisé en Java et Spring Boot, avec une solide maîtrise des principes et des design patterns, garantissant des applications robustes, maintenables et évolutives."
  }
];

const timelineLeft = timeline.filter((_, index) => index % 2 === 0);
const timelineRight = timeline.filter((_, index) => index % 2 !== 0);

const SkillCard = ({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <div className="skill-card" style={{ '--skill-brand': skill.brandColor }}>
      <div className="skill-card-inner">
        <div className="skill-icon-box" style={{ '--brand-color': skill.brandColor }}>
          <IconComponent className="skill-tech-icon" />
        </div>

        <div className="skill-details">
          <div className="skill-header-row">
            <h4 className="skill-title">{skill.name}</h4>
            <span className="skill-percentage-value">{skill.percent}%</span>
          </div>

          <div className="skill-track">
            <div
              className="skill-fill"
              style={{
                width: `${skill.percent}%`,
                background: `linear-gradient(90deg, var(--primary-color) 0%, ${skill.brandColor} 100%)`
              }}
            >
              <span className="skill-fill-glow" style={{ backgroundColor: skill.brandColor }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineColumn = ({ items }) => (
  <div className="timeline-column">
    <div className="timeline-line"></div>
    {items.map((item, index) => {
      if (!item) return null;
      return (
        <div className="timeline-item" key={index}>
          <div className="timeline-icon">
            <IconCircle icon={<FiBriefcase />} isActive={false} />
          </div>
          <div className="timeline-content">
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', color: 'var(--text-color)', fontWeight: '700' }}>
              {item.title}
            </h4>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>{item.text}</p>
          </div>
        </div>
      );
    })}
  </div>
);

const AboutMe = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

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
           <a 
            href="/Soufiane_El_Basraoui_CV.pdf"
            download="Soufiane_El_Basraoui_CV.pdf"
            className="btn-primary">
              Download CV
            </a>
           <a href="/contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
      
      <div className="skills-section">
        <h3 className="subsection-title">Technical Expertise</h3>
        <p className="subsection-subtitle">
          Specialized in scalable full-stack applications, robust backend architectures, and modern user interfaces.
        </p>

        {/* Category Filters */}
        <div className="skills-filter-container">
          {categories.map(cat => {
            const count = cat.id === 'all'
              ? skills.length
              : skills.filter(s => s.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                className={`skills-filter-pill ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="skills-filter-count">{count}</span>
              </button>
            );
          })}
        </div>
        
        <div className="skills-grid">
          {filteredSkills.map(skill => (
            <SkillCard key={skill.name} skill={skill} />
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
