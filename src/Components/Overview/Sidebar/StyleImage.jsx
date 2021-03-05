import React from 'react';

const StyleImage = (props) => {
  const { src, alt, selected } = props;
  if (selected) {
    return (
      <>
        Checkmark
        <img src={src} alt={alt} className="categoryImage" />
      </>
    );
  }
  return <img src={src} alt={alt} className="categoryImage" />;
};

export default StyleImage;
