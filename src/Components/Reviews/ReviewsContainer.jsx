import React from 'react';

import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Factors from './Factors.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="reviewContainer">
        <RatingBreakdown />
        <Factors />
        <ReviewList />
      </div>
    );
  }
}

export default Reviews;
