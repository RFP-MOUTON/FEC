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
  }

  componentDidMount() {
    axios
      .get('/products', { params: { count: 10 } })
      .then((response) => {
        console.log(response.data[8]);
        this.setState({
          data: response.data[8],
        });
        // this.updateComponent();
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    const { data } = this.state;
    // if (state = '') div
    if (data === '') {
      return <div id="mainContainer">Loading</div>;
    }
    return (
      <div id="mainContainer">
        <OverviewContainer id={data.id} data={data} />
        <RelatedItemsContainer viewedProductId={data.id} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
