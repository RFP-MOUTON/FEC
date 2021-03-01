import React from 'react';
import ReactDOM from 'react-dom';
// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from './Components/ReviewsContainer.jsx';

// this is where we're call reactDOM.render and define our entry point to the
// app.
// Enzyme.configure({ adapter: new Adapter() });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <Reviews />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
