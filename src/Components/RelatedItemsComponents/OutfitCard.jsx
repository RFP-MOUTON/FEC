import React from 'react';
import axios from 'axios';
import ProductRating from './ProductRating.jsx';

import dummyStyles from './dummyStyles.js';
import dummyReviews from './dummyReviews.js';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductInfo: '',
      stylesInfo: dummyStyles,
      reviewsInfo: dummyReviews,
    };
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

  render() {
    const { RemoveOutfitHandler, newProductHandler } = this.props;
    const { currentProductInfo, stylesInfo, reviewsInfo } = this.state;
    return (
      <div className="productCard">
        <div className="productImg">
          <img src={stylesInfo.photos[0].thumbnail_url} alt="placeholder" />
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
          onClick={() => {
            return RemoveOutfitHandler(currentProductInfo.name);
          }}
        >
          ✗
        </button>
      </div>
    );
  }
}

export default OutfitCard;
