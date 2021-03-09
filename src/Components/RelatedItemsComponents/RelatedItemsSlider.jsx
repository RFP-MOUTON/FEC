import React from 'react';
import ProductCard from './ProductCard.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';

const RelatedItemsSlider = ({
  productData,
  currentProduct,
  LeftButtonHandler,
  RightButtonHandler,
  viewedProductInfo,
}) => {
  return (
    <div className="itemSliderGrid">
      Related Items
      <ArrowLeft LeftButtonHandler={LeftButtonHandler} />
      <ArrowRight RightButtonHandler={RightButtonHandler} />
      <div className="cardSlider">
        <div
          className="cardSliderWrapper"
          style={{
            transform: `translateX(-${
              productData.indexOf(currentProduct) * (100 / productData.length)
            }%)`,
          }}
        >
          {productData.map((productId) => {
            return (
              <ProductCard
                key={productId}
                productId={productId}
                viewedProductInfo={viewedProductInfo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedItemsSlider;
