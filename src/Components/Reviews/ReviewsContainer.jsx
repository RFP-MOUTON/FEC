import React from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Factors from './Factors.jsx';
import MoreReviewsBtn from './MoreReviewsButton.jsx';
import meta from './metadummydata.js';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentlyDisplayed: [],
      metaData: meta,
    };
    this.handleAddMoreReviews = this.handleAddMoreReviews.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    axios
      .get('/reviews', { params: { product_id: id, count: 100 } })
      .then(({ data }) => {
        this.setState({
          reviews: data.results,
          currentlyDisplayed: [data.results[0], data.results[1]],
        });
      })
      .then(
        axios
          .get('/reviews/meta', { params: { product_id: id } })
          .then(({ data }) => {
            this.setState({
              metaData: data,
            });
          })
      ).catch((error) => {
        console.log(error);
      });
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
