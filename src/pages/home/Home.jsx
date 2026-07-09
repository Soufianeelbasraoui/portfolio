import React from 'react';
import ProfileAvatar from '../../components/ProfileAvatar/ProfileAvatar';
import { FiDownload } from 'react-icons/fi';
import './Home.css';
import myImage from '../../assets/img.png';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <div className="avatar-wrapper">
          <ProfileAvatar src={myImage}  />
        </div>
        
        <h1 className="home-title">
          Hi, I'm Soufiane — <span>Full-Stack Developer.</span>
        </h1>
        
        <p className="home-description">
       I'm a Full-Stack Developer with a strong focus on Java, Spring Boot, and React. I specialize in developing scalable backend services, RESTful APIs, and modern frontend applications. With experience in MySQL, MongoDB, Laravel, and Node.js, I'm passionate about building reliable software, writing clean code, and continuously learning new technologies.
        </p>

        <div className="home-actions">
          <a
            href="/Soufiane_El_Basraoui_CV.pdf"
            download="Soufiane_El_Basraoui_CV.pdf"
            className="btn-primary"
          >
            Download Cv
            <span className="btn-icon">
              <FiDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
