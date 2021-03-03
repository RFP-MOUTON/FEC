import React from 'react';

const MoreReviewsBtn = ({ totalReviews, currentlyDisplayed, handleClick }) => {
  if (
    totalReviews.length <= 2 ||
    totalReviews.length - currentlyDisplayed.length === 0
  ) {
    return null;
  }
  return <button id="moreReviewsButton" type="button" onClick={handleClick}>MORE REVIEWS</button>;
};

export default MoreReviewsBtn;
