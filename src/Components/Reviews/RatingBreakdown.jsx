/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import Rating from './BreakdownComponents/Rating.jsx';
import Recommended from './BreakdownComponents/RecommendedComponent.jsx';
import StarBar from './BreakdownComponents/StarbarComponent.jsx';
import SortingList from './BreakdownComponents/SortingListComponent.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingList: new Set(),
    };
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  handleSortClick(num) {
    const sortingNum = Number(num);
    const { handleFiltersList } = this.props;
    const { sortingList } = this.state;
    if (sortingList.has(sortingNum)) {
      this.setState(
        ({ sortingList }) => {
          const newSortingList = new Set(sortingList);
          newSortingList.delete(sortingNum);
          return {
            sortingList: newSortingList,
          };
        },
        () => {
          handleFiltersList(this.state.sortingList);
        }
      );
    } else {
      this.setState(
        ({ sortingList }) => {
          return {
            sortingList: new Set(sortingList).add(sortingNum),
          };
        },
        () => {
          handleFiltersList(this.state.sortingList);
        }
      );
    }
  }

  render() {
    const { sortingList } = this.state;
    const { metaData } = this.props;
    const { ratings, recommended } = metaData;
    const one = Number(ratings['1']) || 0;
    const two = Number(ratings['2']) || 0;
    const three = Number(ratings['3']) || 0;
    const four = Number(ratings['4']) || 0;
    const five = Number(ratings['5']) || 0;
    const totalReviews = one + two + three + four + five;
    const average =
      (one + two * 2 + three * 3 + four * 4 + five * 5) / totalReviews;

    return (
      <div id="ratingBreakdown">
        <p>RATINGS &amp; REVIEWS</p>
        <Rating average={average} totalReviews={totalReviews} />
        <SortingList sortingList={sortingList} />
        <Recommended recommended={recommended} totalReviews={totalReviews} />
        <StarBar
          num="1"
          stars={one}
          total={totalReviews}
          handleClick={this.handleSortClick}
        />
        <StarBar
          num="2"
          stars={two}
          total={totalReviews}
          handleClick={this.handleSortClick}
        />
        <StarBar
          num="3"
          stars={three}
          total={totalReviews}
          handleClick={this.handleSortClick}
        />
        <StarBar
          num="4"
          stars={four}
          total={totalReviews}
          handleClick={this.handleSortClick}
        />
        <StarBar
          num="5"
          stars={five}
          total={totalReviews}
          handleClick={this.handleSortClick}
        />
      </div>
    );
  }
}

export default RatingBreakdown;
