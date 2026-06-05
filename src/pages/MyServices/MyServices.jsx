import React from 'react';
import { FiCode, FiLayout, FiDatabase, FiServer, FiSmartphone, FiSettings } from 'react-icons/fi';
import './MyServices.css';

const services = [
  {
    icon: <FiLayout />,
    title: 'Frontend Development',
    description: 'Creating responsive, high-performance, and visually stunning user interfaces using React and modern CSS.'
  },
  {
    icon: <FiServer />,
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs using Laravel, Node.js, and PHP.'
  },
  {
    icon: <FiDatabase />,
    title: 'Database Management',
    description: 'Designing and optimizing database schemas with MySQL and PostgreSQL for efficient data storage.'
  },
  {
    icon: <FiCode />,
    title: 'Full-Stack Solutions',
    description: 'Delivering end-to-end web applications, from conceptual design to deployment and maintenance.'
  },
  {
    icon: <FiSmartphone />,
    title: 'Responsive Design',
    description: 'Ensuring your application looks and works perfectly on all devices, from desktops to mobile phones.'
  },
  {
    icon: <FiSettings />,
    title: 'API Integration',
    description: 'Connecting your platform with third-party services and building custom RESTful APIs.'
  }
];

const MyServices = () => {
  return (
    <section className="services-container">
      <h2 className="section-title">
        My <span>Services</span>
      </h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServices;
