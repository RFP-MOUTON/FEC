import React from 'react';
import ReviewStars from './ReviewStars.jsx';

const ProductRating = ({ reviewsInfo }) => {
  if (!reviewsInfo) return <div>loading</div>;
  const { ratings } = reviewsInfo;

  let count = 0;
  let average = 0;

  Object.keys(ratings).map((key) => {
    count += parseInt(ratings[key], 10);
    average += ratings[key] * key;
    return null;
  });

  average /= count;

  return (
    <div>
      {Object.keys(ratings).map((key) => {
        if (key < average) {
          return <ReviewStars key={key} fill="100%" id={key} />;
        }
        if (key - average > 0 && key - average < 1) {
          if (key - average < 0.25) {
            return <ReviewStars key={key} fill="38%" id={key} />;
          }
          if (key - average > 0.75) {
            return <ReviewStars key={key} fill="62%" id={key} />;
          }
          return <ReviewStars key={key} fill="50%" id={key} />;
        }
        return <ReviewStars key={key} fill="0%" id={key} />;
      })}
      {average}
    </div>
  );
};

export default ProductRating;
