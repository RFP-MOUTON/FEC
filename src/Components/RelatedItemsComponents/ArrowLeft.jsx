import React from 'react';

const ArrowLeft = ({ LeftButtonHandler }) => {
  return (
    <button
      type="button"
      className="slideArrowLeft"
      onClick={LeftButtonHandler}
    >
      ❮
    </button>
  );
};

export default ArrowLeft;
