import React from 'react';

const PhotoModal = ({ photo, toggle }) => {
  return (
    <>
      <img
        className="modal-main"
        key={photo.id}
        src={photo.url}
        alt={photo.url}
      />
      <button
        type="button"
        className="closeButton"
        onClick={toggle}
      >X</button>
    </>
  );
};

export default PhotoModal;
