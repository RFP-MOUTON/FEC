import React from 'react';

const FitComponent = ({ handleChange, meta }) => {
  if (!meta) {
    return null;
  }
  return (
    <label>
      Fit
      <div onChange={handleChange}>
        <label>
          Runs tight
          <input type="radio" value="1" name="fit" required />
        </label>
        <label>
          Runs slightly tight
          <input type="radio" value="2" name="fit" />
        </label>
        <label>
          Perfect
          <input type="radio" value="3" name="fit" />
        </label>
        <label>
          Runs slightly long
          <input type="radio" value="4" name="fit" />
        </label>
        <label>
          Runs long
          <input type="radio" value="5" name="fit" />
        </label>
      </div>
    </label>
  );
};

export default FitComponent;
