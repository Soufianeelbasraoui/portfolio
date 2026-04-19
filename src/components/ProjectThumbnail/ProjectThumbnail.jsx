import React from 'react';


const ProjectThumbnail = ({ src, alt, badgeText }) => {
  return (
    <div className="project-thumbnail-wrapper" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px 12px 0 0', backgroundColor: 'var(--icon-bg)' }}>
      {src ? (
        <img
          src={src}
          alt={alt || 'Project image'}
          style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
          className="thumbnail-img"
        />
      ) : (
        <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e293b' }}>
          <img src={src} alt="Default project" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, transition: 'transform 0.5s ease' }} className="thumbnail-img" />
          <span style={{ position: 'absolute', color: '#fff', opacity: 0.9, fontSize: '0.9rem', zIndex: 2 }}>Project Mockup</span>
        </div>
      )}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
      {badgeText && (
        <span style={{
          position: 'absolute', top: '15px', right: '15px',
          background: 'linear-gradient(135deg, #FF8C00, #ff5e00)', color: 'white',
          padding: '6px 14px', borderRadius: '20px',
          fontSize: '0.75rem', fontWeight: 'bold',
          letterSpacing: '0.5px',
          boxShadow: '0 4px 10px rgba(255, 140, 0, 0.4)',
          zIndex: 3
        }}>
          {badgeText}
        </span>
      )}
    </div>
  );
};

export default ProjectThumbnail;
