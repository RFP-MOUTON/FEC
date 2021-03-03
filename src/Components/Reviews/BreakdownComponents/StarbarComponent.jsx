import React from 'react';

const StarBar = ({ num, stars, total }) => {
  const percentage = Math.round((stars / total) * 100);
  const newWidth = `${percentage}%`;
  return (
    <div className="barContainer">
      <div>{num} stars</div>
      <div className="progress">
        <div className="progress-value" style={{ width: newWidth }} />
      </div>
      <div>{stars}</div>
    </div>
  );
};

export default StarBar;
