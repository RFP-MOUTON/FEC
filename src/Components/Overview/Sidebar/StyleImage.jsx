import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const StyleImage = (props) => {
  const { src, alt, selected, handleClick } = props;
  if (selected) {
    return (
      <>
        <FaCheckCircle id="checkmark" />
        <img src={src} alt={alt} className="categoryImage" />
      </>
    );
  }
  return (
    <img src={src} alt={alt} className="categoryImage" onClick={handleClick} />
  );
};

export default StyleImage;
