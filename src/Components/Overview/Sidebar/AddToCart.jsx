import React from 'react';
import QuantitySelect from './QuantitySelect.jsx';
class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenSKU: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { style } = this.props;
    this.setState({
      skuID: event.target.value,
      chosenSKU: style.skus[event.target.value],
    });
  }

  render() {
    const { style } = this.props;
    const { chosenSKU } = this.state;
    let index = 0;
    if (style === '') {
      return <div id="AddToCart"></div>;
    }
    return (
      <div id="AddToCart">
        <select onChange={this.handleChange}>
          {Object.keys(style.skus).map((key) => {
            return (
              <option
                key={key}
                text="size"
                name={style.skus[key].quantity}
                value={key}
              >
                {style.skus[key].size}
              </option>
            );
          })}
        </select>
        <QuantitySelect quantity={chosenSKU.quantity} />
      </div>
    );
  }
}

// const AddToCart = (props) => {
//   /*
//     Here we can pass these props to lower sub compoenents if we need.
//   */
//   const { style } = props;
//   if (style === '') {
//     return <div id="AddToCart"></div>;
//   }
//   return (
//     <div id="AddToCart">
//       <select>
//         {Object.keys(style.skus).map((key) => {
//           return (
//             <option key={key} text="size">
//               {style.skus[key].size}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// };

export default AddToCart;
