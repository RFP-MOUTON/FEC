import React from 'react';

const StyleImage = (props) => {
  const { src, alt, selected } = props;
  if (selected) {
    return (
      <React.Fragment>
        Checkmark
        <img src={src} alt={alt} className="categoryImage" />
      </React.Fragment>
    );
  }
  return <img src={src} alt={alt} className="categoryImage" />;
};

export default StyleImage;
