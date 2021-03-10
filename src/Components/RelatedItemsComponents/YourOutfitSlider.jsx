import React from 'react';
import OutfitCard from './OutfitCard.jsx';
import ArrowLeft from './ArrowLeft.jsx';
import ArrowRight from './ArrowRight.jsx';
import YourOutfitAddCard from './YourOutfitAddCard.jsx';

const YourOutfitSlider = ({
  viewedProductInfo,
  localStorageInfo,
  currentLocalStorage,
  AddOutfitHandler,
  RemoveOutfitHandler,
  LeftButtonOutfitHandler,
  RightButtonOutfitHandler,
  newProductHandler,
}) => {
  return (
    <div className="itemSliderGrid">
      <div className="cardSliderTitle">Your Outfit</div>
      <ArrowLeft LeftButtonHandler={LeftButtonOutfitHandler} />
      <ArrowRight RightButtonHandler={RightButtonOutfitHandler} />
      <div className="outfitSlider">
        <div
          className="outfitSliderWrapper"
          style={{
            transform: `translateX(-${
              localStorageInfo.indexOf(currentLocalStorage) *
              (100 / localStorageInfo.length)
            }%)`,
          }}
        >
          <YourOutfitAddCard
            viewedProductInfo={viewedProductInfo}
            AddOutfitHandler={AddOutfitHandler}
          />
          {localStorageInfo.map((productId) => {
            return (
              <OutfitCard
                key={productId}
                productId={productId}
                RemoveOutfitHandler={RemoveOutfitHandler}
                newProductHandler={newProductHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YourOutfitSlider;
