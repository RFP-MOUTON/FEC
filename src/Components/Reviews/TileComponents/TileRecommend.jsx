import React from 'react';

const TileRecommend = ({ recommend }) => {
  if (!recommend) {
    return null;
  }
  return (
    <div>
      <div>I recommend this product</div>
    </div>
  );
};

export default TileRecommend;
