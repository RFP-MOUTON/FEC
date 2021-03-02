import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <img src={product.photos[0].url} alt="placeholder" />
      <div className="productCategory">{product.category}</div>
      <div className="productName">{product.name}</div>
      <div className="productPrice">${product.default_price}</div>
      <div className="productRating">Instert Rating Here</div>
    </div>
  );
};

export default ProductCard;
