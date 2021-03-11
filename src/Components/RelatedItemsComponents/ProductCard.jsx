import React from 'react';
import axios from 'axios';
import ProductRating from './ProductRating.jsx';
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
      .get(`/reviews/meta/?product_id=${productId}`)
      .then((reviewsMetaData) => {
        this.setState({ reviewsInfo: reviewsMetaData.data });
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
    const { viewedProductInfo, newProductHandler } = this.props;
    const {
      isModalOpen,
      currentProductInfo,
      stylesInfo,
      reviewsInfo,
    } = this.state;
    return (
      <div className="productCard">
        <div className="productImg">
          <img src={stylesInfo.photos[0].url} alt="placeholder" />
        </div>
        <div className="productCategory">{currentProductInfo.category}</div>
        <div
          className="productName"
          onClick={() => {
            newProductHandler(currentProductInfo);
          }}
        >
          {currentProductInfo.name}
        </div>
        <div className="productPrice">${stylesInfo.original_price}</div>
        <div className="productRating">
          <ProductRating reviewsInfo={reviewsInfo} />
        </div>
        <button
          className="actionButton"
          type="button"
          onClick={this.ToggleModalHandler}
        >
          ✭
        </button>
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
