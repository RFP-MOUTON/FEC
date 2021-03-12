import React from 'react';
import ReviewStars from './ReviewStars.jsx';

const ProductRating = ({ reviewsInfo }) => {
  if (!reviewsInfo) return <div>loading</div>;
  const { ratings } = reviewsInfo;

  let count = 0;
  let average = 0;
  let ratingsObj;

  if (Object.keys(ratings).length < 5) {
    const myObj = { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0' };
    ratingsObj = { ...myObj, ...ratings };
  } else {
    ratingsObj = ratings;
  }

  Object.keys(ratingsObj).map((key) => {
    count += parseInt(ratingsObj[key], 10);
    average += ratingsObj[key] * key;
    return null;
  });

  average /= count;

  return (
    <div>
      {Object.keys(ratingsObj).map((key) => {
        if (key <= average) {
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
    </div>
  );
};

export default ProductRating;
