import React from 'react';

const TilePhotos = ({ photos }) => {
  if (photos.length === 0) {
    return null;
  }
  return (
    <div className="thumbnails">
      {photos.map((photo) => {
        return <img key={photo.id} src={photo.url} alt={photo.url} />;
      })}
    </div>
  );
};

export default TilePhotos;
