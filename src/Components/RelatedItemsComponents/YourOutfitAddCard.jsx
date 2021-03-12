import React from 'react';

const YourOutfitAddCard = ({ viewedProductInfo, AddOutfitHandler }) => {
  const { name, id } = viewedProductInfo;
  return (
    <div
      className="addOutfitCard"
      onClick={() => {
        return AddOutfitHandler(name, id);
      }}
    >
      <div className="addOutfitImg">
        <img src="https://www.iconsdb.com/icons/preview/black/add-xxl.png" />
      </div>
      <div className="addOutfitTitle">Add Item to Your Outfit</div>
    </div>
  );
};

export default YourOutfitAddCard;
