import React from 'react';

const ProductImage = ({ image }) => {
  if (!image) {
    return (
      <img
        src="https://www.britax-roemer.ru/on/demandware.static/Sites-Britax-EU-Site/-/default/dw1afbfed6/images/britax/PlaceholderProductImage.jpg"
        alt="placeholder"
      />
    );
  }
  return <img src={image} alt="placeholder" />;
};

export default ProductImage;
