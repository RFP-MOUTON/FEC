import React from 'react';
import axios from 'axios';
import RelatedItemsSlider from './RelatedItemsSlider.jsx';
import YourOutfitSlider from './YourOutfitSlider.jsx';

import '../../css/RelatedItems.scss';

import withClickTracker from '../../../HOC/withClickTracker.js';

const localStorageData = Object.values(localStorage);

class RelatedItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: '',
      currentProduct: '',
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
      .then(
        axios.get(`/products/${viewedProductId}`).then((viewedProductData) => {
          this.setState({ viewedProductInfo: viewedProductData.data });
        })
      )
      .catch((error) => {
        throw error;
      });
  }

  componentDidUpdate(prevProps) {
    const { viewedProductId } = this.props;
    if (prevProps.viewedProductId !== viewedProductId) {
      const { viewedProductId } = this.props;
      const relatedItemsRoute = `/products/${viewedProductId}/related`;
      axios
        .get(relatedItemsRoute)
        .then((relatedItemsArray) => {
          this.setState({ productData: relatedItemsArray.data });
          this.setState({ currentProduct: relatedItemsArray.data[0] });
        })
        .then(
          axios
            .get(`/products/${viewedProductId}`)
            .then((viewedProductData) => {
              this.setState({ viewedProductInfo: viewedProductData.data });
            })
        )
        .catch((error) => {
          throw error;
        });
    }
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
    const { clickTracker, newProductHandler } = this.props;

    if (!productData) {
      return <div>Loading</div>;
    }

    return (
      <div
        id="relatedItemsContainer"
        onClick={(event) => clickTracker(event, 'relatedItems')}
      >
        <RelatedItemsSlider
          productData={productData}
          currentProduct={currentProduct}
          viewedProductInfo={viewedProductInfo}
          LeftButtonHandler={this.LeftButtonHandler}
          RightButtonHandler={this.RightButtonHandler}
          newProductHandler={newProductHandler}
        />
        <YourOutfitSlider
          viewedProductInfo={viewedProductInfo}
          currentLocalStorage={currentLocalStorage}
          localStorageInfo={localStorageInfo}
          LeftButtonOutfitHandler={this.LeftButtonOutfitHandler}
          RightButtonOutfitHandler={this.RightButtonOutfitHandler}
          AddOutfitHandler={this.AddOutfitHandler}
          RemoveOutfitHandler={this.RemoveOutfitHandler}
          newProductHandler={newProductHandler}
        />
      </div>
    );
  }
}

export default withClickTracker(RelatedItemsContainer);
