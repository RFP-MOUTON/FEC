import React from 'react';

const ArrowRight = ({ RightButtonHandler }) => {
  return (
    <button
      type="button"
      className="slideArrowRight"
      onClick={RightButtonHandler}
    >
      ❯
    </button>
  );
};

export default ArrowRight;
