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
    const newIndex =
      this.state.productData.indexOf(this.state.currentProduct) - 1;
    this.setState({ currentProduct: data[newIndex] });
  }

  RightButtonHandler() {
    const newIndex =
      this.state.productData.indexOf(this.state.currentProduct) + 1;
    this.setState({ currentProduct: data[newIndex] });
  }

  render() {
    return (
      <div id="relatedItemsContainer">
        <RelatedItemsSlider
          productData={this.state.productData}
          currentProduct={this.state.currentProduct}
          LeftButtonHandler={this.LeftButtonHandler}
          RightButtonHandler={this.RightButtonHandler}
        />
      </div>
    );
  }
}

export default RelatedItemsContainer;
