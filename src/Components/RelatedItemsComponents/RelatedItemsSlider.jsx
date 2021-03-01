import React from 'react';
import ProductCard from './ProductCard.jsx';

const RelatedItemsSlider = () => {
  const sliderArr = [1, 2, 3, 4, 5];
  return (
    <React.Fragment>
      <div className="slider">
        {sliderArr.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default RelatedItemsSlider;
