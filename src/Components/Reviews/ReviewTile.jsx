import React from 'react';

import TileStars from './TileComponents/TileStars.jsx';
import TileUserDate from './TileComponents/TileUserDate.jsx';
import TilePhotos from './TileComponents/TilePhotos.jsx';
import TileHelpfulReport from './TileComponents/TileHelpfulReport.jsx';
import TileResponse from './TileComponents/TileResponse.jsx';
import TileRecommend from './TileComponents/TileRecommend.jsx';
import TileSummary from './TileComponents/TileSummary.jsx';
import TileBody from './TileComponents/TileBody.jsx';

const ReviewTile = ({ review, handleHelpful, report }) => {
  const { review_id } = review;
  return (
    <div className="reviewTile">
      <TileStars rating={review.rating} />
      <TileUserDate user={review.reviewer_name} date={review.date} />
      <TileSummary summary={review.summary} />
      <TileBody body={review.body} />
      <TilePhotos photos={review.photos} />
      <TileRecommend recommend={review.recommend} />
      <TileResponse response={review.response} />
      <TileHelpfulReport
        helpfulness={review.helpfulness}
        handleHelpful={handleHelpful}
        reviewId={review_id}
        report={report}
      />
    </div>
  );
};

export default ReviewTile;
