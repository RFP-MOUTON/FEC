import React from 'react';
import axios from 'axios';
import RelatedItemsSlider from './RelatedItemsSlider.jsx';
import YourOutfitSlider from './YourOutfitSlider.jsx';
import data from './data.js';

import '../../css/RelatedItems.scss';

class RelatedItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: data,
      currentProduct: data[0],
      viewedProductInfo: '',
    };
    this.LeftButtonHandler = this.LeftButtonHandler.bind(this);
    this.RightButtonHandler = this.RightButtonHandler.bind(this);
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

  render() {
    const { productData, currentProduct, viewedProductInfo } = this.state;
    return (
      <div id="relatedItemsContainer">
        <RelatedItemsSlider
          productData={productData}
          currentProduct={currentProduct}
          viewedProductInfo={viewedProductInfo}
          LeftButtonHandler={this.LeftButtonHandler}
          RightButtonHandler={this.RightButtonHandler}
        />
        <YourOutfitSlider />
      </div>
    );
  }
}

export default RelatedItemsContainer;
