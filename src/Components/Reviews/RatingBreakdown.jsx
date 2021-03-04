import React from 'react';

import Rating from './BreakdownComponents/Rating.jsx';
import Recommended from './BreakdownComponents/RecommendedComponent.jsx';
import StarBar from './BreakdownComponents/StarbarComponent.jsx';

const RatingBreakdown = ({ metaData }) => {
  const { ratings, recommended } = metaData;
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
      <Rating average={average} totalReviews={totalReviews} />
      <Recommended recommended={recommended} totalReviews={totalReviews} />
      <StarBar num="1" stars={one} total={totalReviews} />
      <StarBar num="2" stars={two} total={totalReviews} />
      <StarBar num="3" stars={three} total={totalReviews} />
      <StarBar num="4" stars={four} total={totalReviews} />
      <StarBar num="5" stars={five} total={totalReviews} />
    </div>
  );
};

export default RatingBreakdown;
