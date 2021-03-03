import React from 'react';

const StarBar = () => {
  let newWidth = '50%';
  return (
    <div className="progress">
      <div className="progress-value" style={{ width: newWidth }}></div>
    </div>
  );
};

export default StarBar;
