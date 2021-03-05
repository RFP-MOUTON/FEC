import React from 'react';

const StyleImage = (props) => {
  const { src, alt, selected, name } = props;
  const altConcat = `${alt} ${name}`;
  if (selected) {
    return (
      <>
        Checkmark
        <img src={src} alt={altConcat} className="categoryImage" />
      </>
    );
  }
  return <img src={src} alt={altConcat} className="categoryImage" />;
};

export default StyleImage;
