import React from 'react';

const TileRecommend = ({ recommend }) => {
  if (!recommend) {
    return null;
  }
  return (
    <div className="tileRecommend">
      <svg
        className="w-6 h-6 check"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <div className="recommendMessage">I recommend this product</div>
    </div>
  );
};

export default TileRecommend;
