import React from 'react';

const FitBar = ({ fit }) => {
  if (!fit) {
    return null;
  }
  const { value } = fit;
  const roughPercent = value / 5;
  const roundedPercent = Math.round(roughPercent * 100) + '%';
  return (
    <div className="factorBarContainer">
      <div>Fit</div>
      <div className="factor">
        <div className="factor-value" style={{ left: roundedPercent }}>
          <svg
            className="indicator"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="characteristics">
        <div className="leftChar">tight</div>
        <div className="rightChar">loose</div>
      </div>
    </div>
  );
};

export default FitBar;
