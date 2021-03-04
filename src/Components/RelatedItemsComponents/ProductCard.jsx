import React from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal.jsx';

import dummyStyles from './dummyStyles.js';
import dummyReviews from './dummyReviews.js';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      currentProductInfo: '',
      stylesInfo: dummyStyles,
      reviewsInfo: dummyReviews,
    };
    this.ToggleModalHandler = this.ToggleModalHandler.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    axios
      .get(`/products/${productId}`)
      .then((productData) => {
        this.setState({ currentProductInfo: productData.data });
      })
      .catch((error) => {
        throw error;
      });

    axios
      .get(`/products/${productId}/styles`)
      .then((stylesData) => {
        this.setState({ stylesInfo: stylesData.data.results[0] });
      })
      .catch((error) => {
        throw error;
      });

    axios
      .get(`/reviews/?product_id=${productId}`)
      .then((reviewsData) => {
        this.setState({ reviewsInfo: reviewsData.data });
      })
      .catch((error) => {
        throw error;
      });
  }

  ToggleModalHandler() {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  }

  render() {
    const { viewedProductInfo } = this.props;
    const {
      isModalOpen,
      currentProductInfo,
      stylesInfo,
      reviewsInfo,
    } = this.state;
    let reviewsSum = 0;
    reviewsInfo.results.map((reviewObj) => {
      reviewsSum += reviewObj.rating;
      return null;
    });
    const reviewAverage = reviewsSum / reviewsInfo.count;
    return (
      <div
        className="productCard"
        role="button"
        tabIndex={0}
        onClick={this.ToggleModalHandler}
        onKeyPress={this.ToggleModalHandler}
      >
        <img src={stylesInfo.photos[0].thumbnail_url} alt="placeholder" />
        <div className="productCategory">{currentProductInfo.category}</div>
        <div className="productName">{currentProductInfo.name}</div>
        <div className="productPrice">${stylesInfo.original_price}</div>
        <div className="productRating">{reviewAverage} stars</div>
        <ComparisonModal
          isModalOpen={isModalOpen}
          ToggleModalHandler={this.ToggleModalHandler}
          viewedProductInfo={viewedProductInfo}
          currentProductInfo={currentProductInfo}
        />
      </div>
    );
  }
}

export default ProductCard;
