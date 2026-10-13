import React from 'react';

const ProjectThumbnail = ({ src, alt, objectPosition }) => {
  return (
    <div className="project-thumbnail-wrapper">
      {src ? (
        <img
          src={src}
          alt={alt || 'Project screenshot'}
          className="thumbnail-img"
          style={objectPosition ? { objectPosition } : undefined}
          loading="lazy"
        />
      ) : (
        <div className="thumbnail-fallback">
          <span>Project Preview</span>
        </div>
      )}
    </div>
  );
};

export default ProjectThumbnail;
