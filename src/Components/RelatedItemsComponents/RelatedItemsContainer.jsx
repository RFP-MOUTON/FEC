import React from 'react';
import RelatedItemsSlider from './RelatedItemsSlider.jsx';
import data from './data.js';

import '../../css/RelatedItems.scss';

<<<<<<< HEAD
const RelatedItemsContainer = () => {
  return (
    <>
      <h6>Related Items Container Test</h6>
      <RelatedItemsSlider />
    </>
  );
};
=======
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
      <div>
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
>>>>>>> d70ed672701d59bbfbe63f171503e9fc3e40029b

export default RelatedItemsContainer;
