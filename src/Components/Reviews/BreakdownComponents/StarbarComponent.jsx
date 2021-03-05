import React from 'react';

const StarBar = ({ num, stars, total }) => {
  const percentage = Math.round((stars / total) * 100);
  const newWidth = `${percentage}%`;
  return (
    <div className="barContainer">
      <div className="starNums">{num} stars</div>
      <div className="progress">
        <div className="progress-value" style={{ width: newWidth }} />
      </div>
      <div className="starsTotal">{stars}</div>
    </div>
  );
};

export default StarBar;
