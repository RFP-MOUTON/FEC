import React from 'react';

import ReviewList from './ReviewList.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Reviews go here!</div>
        <ReviewList id="reviewList" />
      </div>
    );
  }
}

export default Reviews;
