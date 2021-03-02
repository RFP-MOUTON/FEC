import React from 'react';

import Rating from './BreakdownComponents/Rating.jsx';

const RatingBreakdown = ({ metaData }) => {
  const { ratings } = metaData;
  const one = Number(ratings['1']);
  const two = Number(ratings['2']);
  const three = Number(ratings['3']);
  const four = Number(ratings['4']);
  const five = Number(ratings['5']);
  const totalReviews = one + two + three + four + five;
  const average =
    (one + two * 2 + three * 3 + four * 4 + five * 5) / totalReviews;

  return (
    <div id="ratingBreakdown">
      <p>RATINGS AND REVIEWS</p>
      <Rating average={average} />
    </div>
  );
};

export default RatingBreakdown;
