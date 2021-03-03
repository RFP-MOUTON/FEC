import React from 'react';

import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Factors from './Factors.jsx';
import data from './dummydata.js';
import meta from './metadummydata.js';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: data,
      metaData: meta,
    };
  }

  render() {
    const { reviews, metaData } = this.state;
    return (
      <div id="reviewContainer">
        <RatingBreakdown metaData={metaData} />
        <Factors metaData={metaData} />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default Reviews;
