import React from 'react';
import axios from 'axios';
import RelatedItemsSlider from './RelatedItemsSlider.jsx';
import YourOutfitSlider from './YourOutfitSlider.jsx';
import data from './data.js';

import '../../css/RelatedItems.scss';

const localStorageData = Object.values(localStorage);

class RelatedItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: data,
      currentProduct: data[0],
      viewedProductInfo: '',
      localStorageInfo: localStorageData,
      currentLocalStorage: localStorageData[0],
    };
    this.LeftButtonHandler = this.LeftButtonHandler.bind(this);
    this.RightButtonHandler = this.RightButtonHandler.bind(this);
    this.LeftButtonOutfitHandler = this.LeftButtonOutfitHandler.bind(this);
    this.RightButtonOutfitHandler = this.RightButtonOutfitHandler.bind(this);
    this.AddOutfitHandler = this.AddOutfitHandler.bind(this);
    this.RemoveOutfitHandler = this.RemoveOutfitHandler.bind(this);
  }

  componentDidMount() {
    const { viewedProductId } = this.props;
    const relatedItemsRoute = `/products/${viewedProductId}/related`;
    axios
      .get(relatedItemsRoute)
      .then((relatedItemsArray) => {
        this.setState({ productData: relatedItemsArray.data });
        this.setState({ currentProduct: relatedItemsArray.data[0] });
      })
      .catch((error) => {
        throw error;
      });

    axios.get(`/products/${viewedProductId}`).then((viewedProductData) => {
      this.setState({ viewedProductInfo: viewedProductData.data });
    });
  }

  LeftButtonHandler() {
    const { productData, currentProduct } = this.state;
    const newIndex = productData.indexOf(currentProduct) - 1;
    this.setState({ currentProduct: productData[newIndex] });
  }

  RightButtonHandler() {
    const { productData, currentProduct } = this.state;
    const newIndex = productData.indexOf(currentProduct) + 1;
    this.setState({ currentProduct: productData[newIndex] });
  }

  LeftButtonOutfitHandler() {
    const { localStorageInfo, currentLocalStorage } = this.state;
    const newIndex = localStorageInfo.indexOf(currentLocalStorage) - 1;
    this.setState({ currentLocalStorage: localStorageInfo[newIndex] });
  }

  RightButtonOutfitHandler() {
    const { localStorageInfo, currentLocalStorage } = this.state;
    const newIndex = localStorageInfo.indexOf(currentLocalStorage) + 1;
    this.setState({ currentLocalStorage: localStorageInfo[newIndex] });
  }

  AddOutfitHandler(productName, productId) {
    localStorage.setItem(productName, productId);
    const newLocalStorage = Object.values(localStorage);
    this.setState({ localStorageInfo: newLocalStorage });
  }

  RemoveOutfitHandler(productName) {
    localStorage.removeItem(productName);
    const newLocalStorage = Object.values(localStorage);
    this.setState({ localStorageInfo: newLocalStorage });
  }

  render() {
    const {
      productData,
      currentProduct,
      viewedProductInfo,
      localStorageInfo,
      currentLocalStorage,
    } = this.state;
    return (
      <div id="relatedItemsContainer">
        <RelatedItemsSlider
          productData={productData}
          currentProduct={currentProduct}
          viewedProductInfo={viewedProductInfo}
          LeftButtonHandler={this.LeftButtonHandler}
          RightButtonHandler={this.RightButtonHandler}
        />
        <YourOutfitSlider
          viewedProductInfo={viewedProductInfo}
          currentLocalStorage={currentLocalStorage}
          localStorageInfo={localStorageInfo}
          LeftButtonOutfitHandler={this.LeftButtonOutfitHandler}
          RightButtonOutfitHandler={this.RightButtonOutfitHandler}
          AddOutfitHandler={this.AddOutfitHandler}
          RemoveOutfitHandler={this.RemoveOutfitHandler}
        />
      </div>
    );
  }
}

export default RelatedItemsContainer;
