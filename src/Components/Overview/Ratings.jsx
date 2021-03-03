import React from 'react';
import axios from 'axios';
import instance from './instance';
import StarIcon from './StarIcon.jsx';

function Ratings(props) {
  const { ratings } = props;
  let count = 0;
  let average = 0;
  const results = [];
  if (ratings !== undefined) {
    Object.keys(ratings).map((key, index) => {
      count += parseInt(props.ratings[key]);
      average += props.ratings[key] * key;
      return 'Success';
    });
    average /= count;
  }

  // for (let i = 0; i < )
  // <StarIcon />
  if (ratings === undefined) {
    return <div>Loading Stars</div>;
  }
  return (
    <div>
      {Object.keys(ratings).map((key) => {
        if (key < average) {
          return <StarIcon fill="100%" id={key} />;
        }
        if (average - key > 0 && average - key < 1) {
          if (average - key < 0.25) {
            return <StarIcon fill="38%" id={key} />;
          }
          if (average - key > 0.75) {
            return <StarIcon fill="62%" id={key} />;
          }
          return <StarIcon fill="50%" id={key} />;
        }
        return <StarIcon fill="0%" id={key} />;
      })}
      {average}
    </div>
  );
}

export default Ratings;
