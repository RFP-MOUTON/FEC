import React from 'react';

const StarBar = ({ num, stars, total, handleClick }) => {
  const percentage = Math.round((stars / total) * 100);
  const newWidth = `${percentage}%`;
  return (
    <div
      className="barContainer"
      onClick={() => {
        return handleClick(num);
      }}
    >
      <div className="starNums">{num} star</div>
      <div className="progress">
        <div className="progress-value" style={{ width: newWidth }} />
      </div>
      <div className="starsTotal">{stars}</div>
    </div>
  );
};

export default StarBar;
