import React from 'react';

import TileThumb from './TileThumbnail.jsx';

const TilePhotos = ({ photos }) => {
  if (photos.length === 0) {
    return null;
  }
  return (
    <div className="thumbnails">
      {photos.map((photo) => {
        return <TileThumb key={photo.id} photo={photo} />;
      })}
    </div>
  );
};

export default TilePhotos;
