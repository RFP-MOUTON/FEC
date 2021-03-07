import React from 'react';

const PhotoModal = ({ photo, toggle }) => {
  return (
    <div className="blur">
      <div className="photoContainer">
        <img
          className="modal-main"
          key={photo.id}
          src={photo.url}
          alt={photo.url}
        />
        <button type="button" className="closeButton" onClick={toggle}>
          X
        </button>
      </div>
    </div>
  );
};

export default PhotoModal;
