import React from 'react';

import TileThumb from './TileThumbnail.jsx';

const TilePhotos = ({ photos }) => {
  if (photos.length === 0) {
    return null;
  }
  return (
    <div className="thumbnails">
      {photos.map((photo) => {
        const urlCheck = photo.url.slice(0, 3);
        if (urlCheck === 'htt') {
          return <TileThumb key={photo.id} photo={photo} />;
        }
      })}
    </div>
  );
};

export default TilePhotos;
