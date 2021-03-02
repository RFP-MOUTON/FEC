import React from 'react';

const TilePhotos = ({ photos }) => {
  if (photos.length === 0) {
    return null;
  }
  return (
    <div>
      <div>Photos Here</div>
    </div>
  );
};

export default TilePhotos;
