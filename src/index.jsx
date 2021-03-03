import React from 'react';
import ReactDOM from 'react-dom';
// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import OverviewContainer from './Components/Overview/OverviewContainer.jsx';
import Reviews from './Components/Reviews/ReviewsContainer.jsx';
import RelatedItemsContainer from './Components/RelatedItemsComponents/RelatedItemsContainer.jsx';
import instance from './Components/Overview/instance.js';
// this is where we're call reactDOM.render and define our entry point to the
// app.
// Enzyme.configure({ adapter: new Adapter() });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    instance
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
        <div>Hello World</div>
        <OverviewContainer id={data.id} />
        <RelatedItemsContainer />
        <Reviews />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
