import React from 'react';

const WidthComponent = ({ handleChange, meta }) => {
  if (!meta) {
    return null;
  }
  return (
    <label>
      Width
      <div onChange={handleChange}>
        <label>
          Too narrow
          <input type="radio" value="1" name="width" required />
        </label>
        <label>
          Slightly narrow
          <input type="radio" value="2" name="width" />
        </label>
        <label>
          Perfect
          <input type="radio" value="3" name="width" />
        </label>
        <label>
          Slightly wide
          <input type="radio" value="4" name="width" />
        </label>
        <label>
          Too wide
          <input type="radio" value="5" name="width" />
        </label>
      </div>
    </label>
  );
};

export default WidthComponent;
