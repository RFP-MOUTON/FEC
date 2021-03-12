import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import config from './env/config.js';
import OverviewContainer from './Components/Overview/OverviewContainer.jsx';
import Reviews from './Components/Reviews/ReviewsContainer.jsx';
import RelatedItemsContainer from './Components/RelatedItemsComponents/RelatedItemsContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.newProductHandler = this.newProductHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/products/17072`, { params: { count: 1 } })
      .then((response) => {
        this.setState({
          data: response.data,
        });
        // this.updateComponent();
      })
      .catch((error) => {
        throw error;
      });
  }

  newProductHandler(productData) {
    this.setState({ data: productData });
  }

  render() {
    const { data } = this.state;
    const { id, name } = data;
    if (data === '') {
      return <div id="mainContainer">Loading</div>;
    }
    return (
      <div id="mainContainer">
        <OverviewContainer id={data.id} data={data} />
        <RelatedItemsContainer
          viewedProductId={data.id}
          newProductHandler={this.newProductHandler}
        />
        <Reviews id={id} productName={name} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
