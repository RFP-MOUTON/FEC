import React from 'react';
import ReactDOM from 'react-dom';
// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

<<<<<<< HEAD
import Reviews from './Components/ReviewsContainer.jsx';
=======
import Reviews from './Components/Reviews/ReviewsContainer.jsx';
>>>>>>> f29971b6e15fcf5c5b6678ec6d987d0b9d9161bb

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
