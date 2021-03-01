import React from 'react';

import TileStars from './TileStars.jsx';
import TileUserDate from './TileUserDate.jsx';
import TilePhotos from './TilePhotos.jsx';
import TileHelpfulReport from './TileHelpfulReport.jsx';

const ReviewTile = () => {
  return (
    <div className="reviewTile">
      <TileStars />
      <TileUserDate />
      <div>Summary Here</div>
      <div>Body Here</div>
      <TilePhotos />
      <TileHelpfulReport />
    </div>
  );
};

export default ReviewTile;
