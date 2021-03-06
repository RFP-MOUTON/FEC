import React from 'react';

const StyleImage = (props) => {
  const { src, alt, selected, data } = props;
  if (selected) {
    return (
      <>
        Checkmark
        <img src={src} alt={alt} className="categoryImage" />
      </>
    );
  }
  return <img src={src} alt={alt} className="categoryImage" bunger={data} />;
};

export default StyleImage;
