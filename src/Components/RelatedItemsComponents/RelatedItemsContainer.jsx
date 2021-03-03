import React from 'react';
import RelatedItemsSlider from './RelatedItemsSlider.jsx';
import data from './data.js';

import '../../css/RelatedItems.scss';

class RelatedItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: data,
      currentProduct: data[0],
    };
    this.LeftButtonHandler = this.LeftButtonHandler.bind(this);
    this.RightButtonHandler = this.RightButtonHandler.bind(this);
  }

  LeftButtonHandler() {
    const { productData, currentProduct } = this.state;
    const newIndex = productData.indexOf(currentProduct) - 1;
    this.setState({ currentProduct: data[newIndex] });
  }

  RightButtonHandler() {
    const { productData, currentProduct } = this.state;
    const newIndex = productData.indexOf(currentProduct) + 1;
    this.setState({ currentProduct: data[newIndex] });
  }

  render() {
    const { productData, currentProduct } = this.state;
    return (
      <div>
        <RelatedItemsSlider
          productData={productData}
          currentProduct={currentProduct}
          LeftButtonHandler={this.LeftButtonHandler}
          RightButtonHandler={this.RightButtonHandler}
        />
      </div>
    );
  }
}

export default RelatedItemsContainer;
