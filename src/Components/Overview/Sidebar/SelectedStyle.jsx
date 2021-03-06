import React from 'react';

const SelectedStyle = (props) => {
  const { name, funk } = props;

  if (name === '') {
    return <div className="selectedStyle">Style: </div>;
  }
  return (
    <div className="selectedStyle">
      <div className="selectedStyle">Style:</div>
      <div>{name}</div>
    </div>
  );
};

export default SelectedStyle;
