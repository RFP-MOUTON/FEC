import React from 'react';
import axios from 'axios';
import QuantitySelect from './QuantitySelect.jsx';
import AddButton from './AddButton.jsx';
import PleaseSelectStyle from './PleaseSelectStyle.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenSKU: '',
      skuID: '',
      chosenQuantity: 1,
      submitted: false,
      pleaseSelectStyle: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    // this.addItemToCart = this.addItemToCart.bind(this);
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
    const { skuID, chosenQuantity } = this.state;
    if (skuID === '') {
      this.setState({
        pleaseSelectStyle: true,
        submitted: false,
      });
    } else {
      this.setState({
        submitted: true,
      });
      // instead of setting submitted to true here
      // it would be nice to have a set timeout that displays
      // a success message on submit
      // for(let i = 0; i < chosenQuantity; i++) {
      //   let resp = await axios.post('/cart', {params : {sku_id}})
      // }

      // Going to want to actually do some research on how to send multiple
      // posts when adding to cart
    }
  }

  // async addItemToCart(quantity, id) {
  //   const { submitted } = this.state;
  //   let success = true;
  //   for (let i = 0; i < quantity; i += 1) {
  //     let result = await axios.post('/cart', { params: { sku_id: id } });

  //     if (result.status !== 201) {
  //       success = false;
  //     }
  //   }
  //   return success;
  // }

  // async addItemToCart(quantity, id) {
  /*
    The plan for this async function:
    1. Move the array we created for our quantity selector into state
    2. map through the state and await the result of each get request as you map
    3. if any of the requests are denied get very angry
  */
  // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
  // }

  render() {
    const { style } = this.props;
    const { chosenSKU, skuID, chosenQuantity, pleaseSelectStyle } = this.state;

    if (style === '') {
      return <div />;
    }
    return (
      <>
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
        <QuantitySelect
          quantity={chosenSKU.quantity}
          funk={this.handleQuantity}
        />
        <div>
          <AddButton
            skuID={skuID}
            chosenQuantity={chosenQuantity}
            chosenSKU={chosenSKU}
            onChange={this.handleSubmission}
          />
        </div>
      </>
    );
  }
}

export default AddToCart;
