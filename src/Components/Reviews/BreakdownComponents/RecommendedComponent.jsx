import React from 'react';

const Recommended = ({ recommended, totalReviews }) => {
  const numberRecommended = recommended.true;
  const roughRecommended = numberRecommended / totalReviews;
  const percentage = Math.round(roughRecommended * 100);

  return (
    <div>
      <p className="recommendPercent">
        {percentage}% of reviews recommend this product
      </p>
    </div>
  );
};

export default Recommended;
