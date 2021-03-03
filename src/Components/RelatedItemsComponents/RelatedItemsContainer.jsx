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
      isModalOpen: false,
    };
    this.LeftButtonHandler = this.LeftButtonHandler.bind(this);
    this.RightButtonHandler = this.RightButtonHandler.bind(this);
    this.ToggleModalHandler = this.ToggleModalHandler.bind(this);
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

  ToggleModalHandler() {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  }

  render() {
    const { productData, currentProduct, isModalOpen } = this.state;
    return (
      <div id="relatedItemsContainer">
        <RelatedItemsSlider
          productData={productData}
          currentProduct={currentProduct}
          isModalOpen={isModalOpen}
          LeftButtonHandler={this.LeftButtonHandler}
          RightButtonHandler={this.RightButtonHandler}
          ToggleModalHandler={this.ToggleModalHandler}
        />
      </div>
    );
  }
}

export default RelatedItemsContainer;
