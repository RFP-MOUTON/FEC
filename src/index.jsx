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
      .get('/products', { params: { count: 1 } })
      .then((response) => {
        this.setState({
          data: response.data[0],
        });
        // this.updateComponent();
      })
      .then((error) => {});
  }

  render() {
    const { data } = this.state;
    // if (state = '') div
    if (data === '') {
      return <div id="mainContainer">Loading</div>;
    }
    return (
      <div id="mainContainer">
<<<<<<< HEAD
        <OverviewContainer id={data.id} data={data} />
=======
        <OverviewContainer id={data.id} />
>>>>>>> 31307350e2a1fe196bb77dac6a5460bdd85baecb
        <RelatedItemsContainer />
        <Reviews id={data.id} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
