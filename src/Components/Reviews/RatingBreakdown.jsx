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
    const one = Number(ratings['1']);
    const two = Number(ratings['2']);
    const three = Number(ratings['3']);
    const four = Number(ratings['4']);
    const five = Number(ratings['5']);
    const totalReviews = one + two + three + four + five;
    const average =
      (one + two * 2 + three * 3 + four * 4 + five * 5) / totalReviews;

    return (
      <div id="ratingBreakdown">
        <p>RATINGS AND REVIEWS</p>
        <SortingList sortingList={sortingList} />
        <Rating average={average} totalReviews={totalReviews} />
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
