import React from 'react';

const QuantitySelect = (props) => {
  let { quantity } = props;
  const items = [];
  if (quantity === undefined || quantity === '') {
    return (
      <select>
        <option>-</option>
      </select>
    );
  }
  if (quantity > 15) {
    quantity = 15;
  }
  for (let i = 1; i <= quantity; i += 1) {
    items.push(i);
  }
  return (
    <select>
      {items.map((item) => {
        return <option>{item}</option>;
      })}
    </select>
  );
};
export default QuantitySelect;
