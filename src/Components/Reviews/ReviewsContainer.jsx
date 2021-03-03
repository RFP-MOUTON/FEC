import React from 'react';

import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Factors from './Factors.jsx';
import MoreReviewsBtn from './MoreReviewsButton.jsx';
import data from './dummydata.js';
import meta from './metadummydata.js';
import tempDisplay from './tempdisplaydata.js';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: data,
      currentlyDisplayed: tempDisplay,
      metaData: meta,
    };
    this.handleAddMoreReviews = this.handleAddMoreReviews.bind(this);
  }

  handleAddMoreReviews(event) {
    event.preventDefault();
    const { reviews, currentlyDisplayed } = this.state;
    if (reviews.length - currentlyDisplayed.length === 1) {
      currentlyDisplayed.push(reviews[reviews.length - 1]);
      this.setState({
        currentlyDisplayed,
      });
    } else {
      const currentIndex = currentlyDisplayed.length;
      const newReviews = reviews.slice(currentIndex, currentIndex + 2);
      currentlyDisplayed.push(...newReviews);
      this.setState({
        currentlyDisplayed,
      });
    }
  }

  render() {
    const { reviews, metaData, currentlyDisplayed } = this.state;
    const { characteristics } = metaData;
    return (
      <div id="reviewContainer">
        <RatingBreakdown metaData={metaData} />
        <Factors characteristics={characteristics} />
        <ReviewList reviews={currentlyDisplayed} />
        <MoreReviewsBtn
          totalReviews={reviews}
          currentlyDisplayed={currentlyDisplayed}
          handleClick={this.handleAddMoreReviews}
        />
      </div>
    );
  }
}

export default Reviews;
