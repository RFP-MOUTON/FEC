import React from 'react';

import Star from './Star.jsx';

const TileStars = ({ rating }) => {
  let currentRating = rating;
  const starArray = [];

  for (let i = 0; i < 5; i += 1) {
    if (currentRating === 0) {
      starArray.push({ shade: '0%', id: Math.random() });
    } else if (currentRating >= 1) {
      starArray.push({ shade: '100%', id: Math.random() });
      currentRating -= 1;
    }
  }
  return (
    <div>
      {starArray.map((shade) => {
        return <Star key={shade.id} id={shade.id} shade={shade.shade} />;
      })}
    </div>
  );
};

export default TileStars;
