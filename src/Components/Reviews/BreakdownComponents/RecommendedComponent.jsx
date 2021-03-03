import React from 'react';

const Recommended = ({ recommended, totalReviews }) => {
  const numberRecommended = recommended.true;
  const roughRecommended = numberRecommended / totalReviews;
  const percentage = Math.round(roughRecommended * 100);

  return (
    <>
      <p>{percentage}% of reviews recommend this product</p>
    </>
  );
};

export default Recommended;
