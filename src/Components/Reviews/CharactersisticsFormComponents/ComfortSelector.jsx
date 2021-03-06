import React from 'react';

const ComfortComponent = ({ handleChange, meta }) => {
  if (!meta) {
    return null;
  }
  return (
    <label>
      Comfort
      <div onChange={handleChange}>
        <label>
          Uncomfortable
          <input type="radio" value="1" name="comfort" required />
        </label>
        <label>
          Slightly uncomfortable
          <input type="radio" value="2" name="comfort" />
        </label>
        <label>
          Ok
          <input type="radio" value="3" name="comfort" />
        </label>
        <label>
          Comfortable
          <input type="radio" value="4" name="comfort" />
        </label>
        <label>
          Perfect
          <input type="radio" value="5" name="comfort" />
        </label>
      </div>
    </label>
  );
};

export default ComfortComponent;
