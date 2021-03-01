import React from 'react';

import TileStars from './TileStars.jsx';
import TileUserDate from './TileUserDate.jsx';
import TilePhotos from './TilePhotos.jsx';
import TileHelpfulReport from './TileHelpfulReport.jsx';
import TileResponse from './TileResponse.jsx';
import TileRecommend from './TileRecommend.jsx';
import TileSummary from './TileSummary.jsx';
import TileBody from './TileBody.jsx';

const ReviewTile = ({ review }) => {
  return (
    <div className="reviewTile">
      <TileStars />
      <TileUserDate />
      <TileSummary />
      <TileBody />
      <TileRecommend />
      <TileResponse />
      <TilePhotos />
      <TileHelpfulReport />
    </div>
  );
};

export default ReviewTile;
