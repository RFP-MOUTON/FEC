import React from 'react';
import { FaCheck } from 'react-icons/fa';

const StyleImage = (props) => {
  const { src, alt, selected, handleClick } = props;
  if (selected) {
    return (
      <>
        <FaCheck id="checkmark" />
        <img src={src} alt={alt} className="categoryImage" />
      </>
    );
  }
  return (
    <img src={src} alt={alt} className="categoryImage" onClick={handleClick} />
  );
};

export default StyleImage;
