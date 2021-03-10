import React from 'react';
import StarIcon from './StarIcon.jsx';

function Ratings(props) {
  const { ratings } = props;
  let count = 0;
  let average = 0;
  if (ratings !== undefined && Number.isNaN(parseFloat(ratings)) === false) {
    Object.keys(ratings).map((key) => {
      count += parseInt(props.ratings[key], 10);
      average += props.ratings[key] * key;
      return 'Success';
    });
    average /= count;
  }

  if (ratings === undefined || Number.isNaN(ratings) === true) {
    return <div className="overviewStars" />;
  }
  return (
    <div className="overviewStars">
      {Object.keys(ratings).map((key) => {
        if (key < average) {
          return <StarIcon fill="100%" id={key} key={key} />;
        }
        if (key - average > 0 && key - average < 1) {
          if (key - average > 0.25) {
            return <StarIcon fill="38%" id={key} key={key} />;
          }
          if (key - average < 0.75) {
            return <StarIcon fill="62%" id={key} key={key} />;
          }
          return <StarIcon fill="50%" id={key} key={key} />;
        }
        return <StarIcon fill="0%" id={key} key={key} />;
      })}
    </div>
  );
}

export default Ratings;
