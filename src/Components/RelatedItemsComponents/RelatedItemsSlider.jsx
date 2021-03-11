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
  newProductHandler,
}) => {
  return (
    <div className="itemSliderGrid" id="relatedItemsSliderContainer">
      <div className="cardSliderTitle">Related Products</div>
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
                newProductHandler={newProductHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedItemsSlider;
