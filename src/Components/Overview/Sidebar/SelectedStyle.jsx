import React from 'react';

const SelectedStyle = (props) => {
  const { name } = props;

  if (name === '') {
    return <div className="selectedStyle">Style: </div>;
  }
  return (
    <div className="selectedStyle">
      <div className="chosenStyle">Style:</div>
      <div>{name}</div>
    </div>
  );
};

export default SelectedStyle;
