import React from 'react';

const QuantitySelect = (props) => {
  let { quantity, funk } = props;
  const items = [];
  if (quantity === undefined || quantity === '') {
    return (
      <select id="quantitySelect">
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
    <select onChange={funk} id="quantitySelect">
      {items.map((item) => {
        return <option key={item}>{item}</option>;
      })}
    </select>
  );
};
export default QuantitySelect;
