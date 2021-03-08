import React from 'react';

// class AddButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handlClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     const { skuID, chosenQuantity, chosenSKU } = this.props;
//     if (chosenSKU === '') {
//     }
//   }
//   render() {
//     const { skuID, chosenQuantity, chosenSKU } = this.props;
//     return (
//       <div>
//         <button type="submit" value="Add To Cart">
//           Add To Cart
//         </button>
//       </div>
//     );
//   }
// }

const AddButton = (props) => {
  const { onChange, chosenSKU } = props;
  if (chosenSKU.quantity === 0) {
    return <div>Out of Stock!</div>;
  }
  return (
    <button type="submit" onClick={onChange} id="addButton">
      Add To Cart
    </button>
  );
};
export default AddButton;
