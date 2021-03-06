import React from 'react';

const LengthComponent = ({ handleChange, meta }) => {
  if (!meta) {
    return null;
  }
  return (
    <label>
      Length
      <div onChange={handleChange}>
        <label>
          Runs short
          <input type="radio" value="1" name="length" required />
        </label>
        <label>
          Runs slightly short
          <input type="radio" value="2" name="length" />
        </label>
        <label>
          Perfect
          <input type="radio" value="3" name="length" />
        </label>
        <label>
          Runs slightly long
          <input type="radio" value="4" name="length" />
        </label>
        <label>
          Runs long
          <input type="radio" value="5" name="length" />
        </label>
      </div>
    </label>
  );
};

export default LengthComponent;
