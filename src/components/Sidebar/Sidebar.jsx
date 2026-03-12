import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon, FiHome, FiUser, FiBriefcase, FiList, FiMail } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="sidebar">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>

      <nav className="nav-menu">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          <div className="icon-circle">
            <FiHome />
          </div>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          <div className="icon-circle">
            <FiUser />
          </div>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          <div className="icon-circle">
            <FiBriefcase />
          </div>
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          <div className="icon-circle">
            <FiList />
          </div>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          <div className="icon-circle">
            <FiMail />
          </div>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
