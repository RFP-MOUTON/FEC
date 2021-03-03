import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';

const ProductCard = ({ product, isModalOpen, ToggleModalHandler }) => {
  return (
    <div
      className="productCard"
      role="button"
      tabIndex={0}
      onClick={ToggleModalHandler}
      onKeyPress={ToggleModalHandler}
    >
      <img src={product.photos[0].url} alt="placeholder" />
      <div className="productCategory">{product.category}</div>
      <div className="productName">{product.name}</div>
      <div className="productPrice">${product.default_price}</div>
      <div className="productRating">Instert Rating Here</div>
      <ComparisonModal
        isModalOpen={isModalOpen}
        ToggleModalHandler={ToggleModalHandler}
      />
    </div>
  );
};

export default ProductCard;
