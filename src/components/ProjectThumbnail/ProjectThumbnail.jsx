import React from 'react';

const ProjectThumbnail = ({ src, alt, badgeText }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px 12px 0 0', backgroundColor: 'var(--icon-bg)' }}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e293b' }}>
          <span style={{ color: '#fff', opacity: 0.5, fontSize: '0.9rem' }}>Project Mockup</span>
        </div>
      )}
      {badgeText && (
        <span style={{
          position: 'absolute', top: '12px', right: '12px',
          backgroundColor: '#3b82f6', color: 'white',
          padding: '4px 12px', borderRadius: '16px',
          fontSize: '0.75rem', fontWeight: 'bold',
          letterSpacing: '0.5px'
        }}>
          {badgeText}
        </span>
      )}
    </div>
  );
};

export default ProjectThumbnail;
