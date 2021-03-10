import React from 'react';

const YourOutfitAddCard = ({ viewedProductInfo, AddOutfitHandler }) => {
  const { name, id } = viewedProductInfo;
  return (
    <div className="addOutfitCard">
      <div className="addOutfitImg">
        <img
          src="https://cdn2.iconfinder.com/data/icons/everything-but-the-kitchen-sink-2/100/common-06-512.png"
          alt="placeholder"
        />
      </div>
      <button
        className="addOutfitButton"
        type="button"
        onClick={() => {
          return AddOutfitHandler(name, id);
        }}
      >
        Add Viewed Item to Your Outfit
      </button>
    </div>
  );
};

export default YourOutfitAddCard;
