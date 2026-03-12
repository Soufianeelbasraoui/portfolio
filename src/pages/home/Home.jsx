import React from 'react';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import { FiDownload } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <div className="avatar-wrapper">
          <ProfileAvatar size="250px" />
        </div>
        
        <h1 className="home-title">
          Hi, I'm Soufiane — <span>Full-Stack Developer.</span>
        </h1>
        
        <p className="home-description">
         Self-driven and detail-oriented junior full-stack web developer with a strong passion for building modern, efficient, and user-focused digital solutions. Skilled in HTML, CSS, JavaScript, React, PHP, Laravel, and MySQL, with a solid ability to transform ideas into functional and visually appealing applications.
         Actively seeking an entry-level opportunity within a dynamic organization where I can apply my technical skills, grow professionally, and contribute to impactful web projects.
    
        </p>

        <div className="home-actions">
          <button className="btn-primary">
            Download Cv
            <span className="btn-icon">
              <FiDownload />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
