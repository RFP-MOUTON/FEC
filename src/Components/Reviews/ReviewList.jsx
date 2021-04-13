import React from 'react';

import ReviewTile from './ReviewTile.jsx';

const ReviewList = ({ reviews, handleHelpful, report }) => {
  return (
    <>

      <div id="reviewList">
        {reviews.map((review) => {
          if (review) {
            return (
              <ReviewTile
                key={review.review_id}
                review={review}
                handleHelpful={handleHelpful}
                report={report}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default ReviewList;
