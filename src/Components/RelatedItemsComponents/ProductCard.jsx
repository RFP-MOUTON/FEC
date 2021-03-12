import React from 'react';
import axios from 'axios';
import ProductRating from './ProductRating.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import ProductImage from './ProductImage.jsx';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      currentProductInfo: '',
      stylesInfo: '',
      reviewsInfo: '',
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
      .then(
        axios
          .get(`/products/${productId}/styles`)
          .then((stylesData) => {
            this.setState({ stylesInfo: stylesData.data.results[0] });
          })
          .catch((error) => {
            throw error;
          })
      )
      .then(
        axios
          .get(`/reviews/meta/?product_id=${productId}`)
          .then((reviewsMetaData) => {
            this.setState({ reviewsInfo: reviewsMetaData.data });
          })
          .catch((error) => {
            throw error;
          })
      )
      .catch((error) => {
        throw error;
      });
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props;
    if (prevProps.productId !== productId) {
      axios
        .get(`/products/${productId}`)
        .then((productData) => {
          this.setState({ currentProductInfo: productData.data });
        })
        .then(
          axios
            .get(`/products/${productId}/styles`)
            .then((stylesData) => {
              this.setState({ stylesInfo: stylesData.data.results[0] });
            })
            .catch((error) => {
              throw error;
            })
        )
        .then(
          axios
            .get(`/reviews/meta/?product_id=${productId}`)
            .then((reviewsMetaData) => {
              this.setState({ reviewsInfo: reviewsMetaData.data });
            })
            .catch((error) => {
              throw error;
            })
        )
        .catch((error) => {
          throw error;
        });
    }
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
<<<<<<< HEAD
=======

    if (!stylesInfo || !reviewsInfo) {
      return <div>Loading</div>;
    }

>>>>>>> 76a94ca899d26ae03a65c392b1f3e7591b03d1a1
    return (
      <div className="productCard">
        <div
          className="productImg"
          onClick={() => {
            newProductHandler(currentProductInfo);
          }}
        >
          <ProductImage image={stylesInfo.photos[0].url} />
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
        <div
          className="productPrice"
          onClick={() => {
            newProductHandler(currentProductInfo);
          }}
        >
          ${stylesInfo.original_price}
        </div>
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
