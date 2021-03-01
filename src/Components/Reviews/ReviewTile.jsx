import React from 'react';

import TileStars from './TileComponents/TileStars.jsx';
import TileUserDate from './TileComponents/TileUserDate.jsx';
import TilePhotos from './TileComponents/TilePhotos.jsx';
import TileHelpfulReport from './TileComponents/TileHelpfulReport.jsx';
import TileResponse from './TileComponents/TileResponse.jsx';
import TileRecommend from './TileComponents/TileRecommend.jsx';
import TileSummary from './TileComponents/TileSummary.jsx';
import TileBody from './TileComponents/TileBody.jsx';

const ReviewTile = ({ review }) => {
  return (
    <div className="reviewTile">
      <TileStars rating={review.rating} />
      <TileUserDate user={review.reviewer_name} date={review.date} />
      <TileSummary summary={review.summary} />
      <TileBody body={review.body} />
      <TileRecommend recommend={review.recommend} />
      <TileResponse response={review.response} />
      <TilePhotos photos={review.photos} />
      <TileHelpfulReport helpfulness={review.helpfulness} />
    </div>
  );
};

export default ReviewTile;
