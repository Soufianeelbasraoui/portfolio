import React from 'react';

const IconCircle = ({ icon, isActive }) => {
  return (
    <div style={{
      width: '50px', height: '50px',
      borderRadius: '50%',
      backgroundColor: isActive ? 'var(--primary-color)' : 'var(--icon-bg)', 
      color: isActive ? '#FFFFFF' : 'var(--icon-color)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontSize: '1.25rem',
      transition: 'all 0.3s ease',
      boxShadow: isActive ? '0 4px 14px rgba(255, 140, 0, 0.4)' : 'none',
      zIndex: 2
    }}>
      {icon}
    </div>
  );
};

export default IconCircle;
