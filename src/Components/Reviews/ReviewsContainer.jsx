import React from 'react';

import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Factors from './Factors.jsx';
import data from './dummydata.js';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: data,
    };
  }

  render() {
    const { reviews } = this.state;
    return (
      <div id="reviewContainer">
        <RatingBreakdown />
        <Factors />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default Reviews;
