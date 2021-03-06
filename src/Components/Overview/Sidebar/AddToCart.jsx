import React from 'react';
import QuantitySelect from './QuantitySelect.jsx';
import AddButton from './AddButton.jsx';
import PleaseSelectStyle from './PleaseSelectStyle.jsx';
class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenSKU: '',
      skuID: '',
      chosenQuantity: '',
      submitted: false,
      pleaseSelectStyle: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleChange(event) {
    const { style } = this.props;
    this.setState({
      skuID: event.target.value,
      chosenSKU: style.skus[event.target.value],
    });
  }

  handleQuantity(event) {
    this.setState({
      chosenQuantity: event.target.value,
    });
  }

  handleSubmission(event) {
    const { skuID } = this.state;
    if (skuID === '') {
      this.setState({
        pleaseSelectStyle: true,
        submitted: false,
      });
    } else {
      this.setState({
        submitted: true,
      });
    }
  }

  render() {
    const { style } = this.props;
    const { chosenSKU, skuID, chosenQuantity, pleaseSelectStyle } = this.state;

    if (style === '') {
      return <div id="AddToCart" />;
    }
    return (
      <div id="AddToCart">
        <PleaseSelectStyle toggle={pleaseSelectStyle} />
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
        <div>
          <QuantitySelect
            quantity={chosenSKU.quantity}
            funk={this.handleQuantity}
          />
        </div>
        <AddButton
          skuID={skuID}
          chosenQuantity={chosenQuantity}
          chosenSKU={chosenSKU}
          onChange={this.handleSubmission}
        />
      </div>
    );
  }
}

export default AddToCart;
