import React from 'react';
import ProductCard from './ProductCard.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';

const RelatedItemsSlider = ({
  productData,
  currentProduct,
  LeftButtonHandler,
  RightButtonHandler,
}) => {
  return (
    <div>
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
          {productData.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedItemsSlider;
