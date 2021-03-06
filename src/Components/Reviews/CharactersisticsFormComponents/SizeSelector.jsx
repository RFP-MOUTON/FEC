import React from 'react';

const SizeComponent = ({ handleChange, meta }) => {
  if (!meta) {
    return null;
  }
  return (
    <label>
      Size
      <div onChange={handleChange}>
        <label>
          A size too small
          <input type="radio" value="1" name="size" required />
        </label>
        <label>
          1/2 a size too small
          <input type="radio" value="2" name="size" />
        </label>
        <label>
          Perfect
          <input type="radio" value="3" name="size" />
        </label>
        <label>
          1/2 a size too big
          <input type="radio" value="4" name="size" />
        </label>
        <label>
          A size too wide
          <input type="radio" value="5" name="size" />
        </label>
      </div>
    </label>
  );
};

export default SizeComponent;
