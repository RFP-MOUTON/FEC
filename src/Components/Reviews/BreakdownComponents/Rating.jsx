import React from 'react';

import Star from '../TileComponents/Star.jsx';

const Rating = ({ average, totalReviews }) => {
  const averageRounded = Math.round(average * 10) / 10;
  let currentRating = averageRounded;
  const starArray = [];
  let emptyStars = false;

  for (let i = 0; i < 5; i += 1) {
    if (emptyStars || currentRating === 0) {
      starArray.push({ shade: '0%', id: Math.random() });
    } else if (currentRating >= 1) {
      starArray.push({ shade: '100%', id: Math.random() });
      currentRating -= 1;
    } else if (currentRating < 1 && currentRating > 0.63) {
      starArray.push({ shade: '60%', id: Math.random() });
      emptyStars = true;
    } else if (currentRating <= 0.63 && currentRating > 0.38) {
      starArray.push({ shade: '50%', id: Math.random() });
      emptyStars = true;
    } else if (currentRating <= 0.38 && currentRating > 0) {
      starArray.push({ shade: '40%', id: Math.random() });
      emptyStars = true;
    }
  }
  return (
    <div id="ratingStars">
      <div id="average">{averageRounded}</div>
      <div id="starsContainer">
        {starArray.map((shade) => {
          return <Star key={shade.id} id={shade.id} shade={shade.shade} />;
        })}
      </div>
      <p id="outOf">Out of {totalReviews} reviews</p>
    </div>
  );
};

export default Rating;
