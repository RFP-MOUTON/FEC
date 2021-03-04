import React from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Factors from './Factors.jsx';
import MoreReviewsBtn from './MoreReviewsButton.jsx';
import SortingSelector from './SortingSelectorComponent.jsx';
import meta from './metadummydata.js';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentlyDisplayed: [],
      filterList: new Set(),
      filtered: [],
      metaData: meta,
    };
    this.handleAddMoreReviews = this.handleAddMoreReviews.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleFiltersList = this.handleFiltersList.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
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
      .then(() => {
        this.setState(({ currentlyDisplayed }) => {
          return {
            filtered: currentlyDisplayed,
          };
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
      )
      .catch((error) => {
        console.log(error);
      });
  }

  handleFiltersList(filters) {
    this.setState(
      {
        filterList: filters,
      },
      () => {
        this.handleFilter();
      }
    );
  }

  handleFilter() {
    const { filterList, currentlyDisplayed } = this.state;
    if (filterList.size === 0) {
      this.setState({
        filtered: currentlyDisplayed,
      });
    } else {
      const newFiltered = [];
      filterList.forEach((rating) => {
        for (let i = 0; i < currentlyDisplayed.length; i++) {
          if (currentlyDisplayed[i].rating === rating) {
            newFiltered.push(currentlyDisplayed[i]);
          }
        }
      });
      this.setState({
        filtered: newFiltered,
      });
    }
  }

  handleSort(event) {
    event.preventDefault();
    const { id } = this.props;
    axios
      .get('/reviews', {
        params: { product_id: id, count: 100, sort: event.target.value },
      })
      .then(({ data }) => {
        this.setState({
          reviews: data.results,
          currentlyDisplayed: [data.results[0], data.results[1]],
        });
      })
      .then(() => {
        this.handleFilter();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleHelpful(reviewId, callback) {
    axios.put(`/reviews/${reviewId}/helpful`).then(() => {
      callback()
    })
  }

  handleReport(reviewId, callback) {
    axios.put(`/reviews/${reviewId}/report`).then(() => {
      callback()
    })
  }

  handleAddMoreReviews(event) {
    event.preventDefault();
    const { reviews, currentlyDisplayed } = this.state;
    if (reviews.length - currentlyDisplayed.length === 1) {
      currentlyDisplayed.push(reviews[reviews.length - 1]);
      this.setState(
        {
          currentlyDisplayed,
        },
        () => {
          this.handleFilter();
        }
      );
    } else {
      const currentIndex = currentlyDisplayed.length;
      const newReviews = reviews.slice(currentIndex, currentIndex + 2);
      currentlyDisplayed.push(...newReviews);
      this.setState(
        {
          currentlyDisplayed,
        },
        () => {
          this.handleFilter();
        }
      );
    }
  }

  render() {
    const { reviews, metaData, currentlyDisplayed, filtered } = this.state;
    const { characteristics } = metaData;
    return (
      <div id="reviewContainer">
        <RatingBreakdown
          metaData={metaData}
          handleFiltersList={this.handleFiltersList}
        />
        <Factors characteristics={characteristics} />
        <SortingSelector reviews={reviews} handleSort={this.handleSort} />
        <ReviewList reviews={filtered} handleHelpful={this.handleHelpful} report={this.handleReport}/>
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
