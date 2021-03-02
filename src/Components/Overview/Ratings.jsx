import React from 'react';
import axios from 'axios';
import instance from './instance';
import StarIcon from './StarIcon.jsx';

function Ratings(props) {
  let count = 0;
  let average = 0;
  if (props.ratings !== undefined) {
    Object.keys(props.ratings).map((key, index) => {
      count = count + parseInt(props.ratings[key]);
      average = average + props.ratings[key] * key;
    });
    average = average / count;
  }

  return (
    <div>
      <StarIcon />
      {average}
    </div>
  );
}

export default Ratings;
