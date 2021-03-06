import React from 'react';

const QualityComponent = ({ handleChange, meta }) => {
  if (!meta) {
    return null;
  }
  return (
    <label>
      Quality
      <div onChange={handleChange}>
        <label>
          Inferior
          <input type="radio" value="1" name="quality" required />
        </label>
        <label>
          Below average
          <input type="radio" value="2" name="quality" />
        </label>
        <label>
          What I expected
          <input type="radio" value="3" name="quality" />
        </label>
        <label>
          Pretty great
          <input type="radio" value="4" name="quality" />
        </label>
        <label>
          Impecable
          <input type="radio" value="5" name="quality" />
        </label>
      </div>
    </label>
  );
};

export default QualityComponent;
