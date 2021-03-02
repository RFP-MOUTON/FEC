import React from 'react';
import Reviews from './Reviews.jsx';
class OverviewContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        hello
        <Reviews />
      </React.Fragment>
    );
  }
}

export default OverviewContainer;
