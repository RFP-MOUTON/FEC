import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.ToggleModalHandler = this.ToggleModalHandler.bind(this);
  }

  ToggleModalHandler() {
    console.log('TMH invoked');
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  }

  render() {
    const { product, viewedProductInfo } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div
        className="productCard"
        role="button"
        tabIndex={0}
        onClick={this.ToggleModalHandler}
        onKeyPress={this.ToggleModalHandler}
      >
        <img src={product.photos[0].url} alt="placeholder" />
        <div className="productCategory">{product.category}</div>
        <div className="productName">{product.name}</div>
        <div className="productPrice">${product.default_price}</div>
        <div className="productRating">Instert Rating Here</div>
        <ComparisonModal
          isModalOpen={isModalOpen}
          ToggleModalHandler={this.ToggleModalHandler}
          viewedProductInfo={viewedProductInfo}
        />
      </div>
    );
  }
}

// const ProductCard = ({
//   product,
//   isModalOpen,
//   ToggleModalHandler,
//   viewedProductInfo,
// }) => {
//   return (
//     <div
//       className="productCard"
//       role="button"
//       tabIndex={0}
//       onClick={ToggleModalHandler}
//       onKeyPress={ToggleModalHandler}
//     >
//       <img src={product.photos[0].url} alt="placeholder" />
//       <div className="productCategory">{product.category}</div>
//       <div className="productName">{product.name}</div>
//       <div className="productPrice">${product.default_price}</div>
//       <div className="productRating">Instert Rating Here</div>
//       <ComparisonModal
//         isModalOpen={isModalOpen}
//         ToggleModalHandler={ToggleModalHandler}
//         viewedProductInfo={viewedProductInfo}
//       />
//     </div>
//   );
// };

export default ProductCard;
