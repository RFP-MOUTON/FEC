import React from 'react';

import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({ reviews }) => {
  return (
    <div id="reviewList">
      {reviews.map((review) => {
        return <ReviewTile key={review.review_id} review={review} />;
      })}
    </div>
  );
};

export default ReviewList;
