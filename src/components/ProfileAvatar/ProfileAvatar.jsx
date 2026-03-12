import React from 'react';

const ProfileAvatar = ({ src, alt, size = '280px' }) => {
  return (
    <div style={{
      width: size, height: size,
      borderRadius: '50%',
      backgroundColor: 'var(--icon-bg)', 
      overflow: 'hidden',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      border: '4px solid var(--bg-color)',
      margin: '0 auto'
    }}>
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span style={{ color: 'var(--text-muted)', fontSize: '1.5rem' }}>No Image</span>
      )}
    </div>
  );
};

export default ProfileAvatar;
