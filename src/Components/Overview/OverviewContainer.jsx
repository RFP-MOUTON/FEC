import React from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
// import instance from '../../env/config.js';

class OverviewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    if (id !== '') {
      axios
        .get('/reviews/meta', { params: { product_id: id } })
        .then((response) => {
          this.setState({
            reviews: response.data,
          });
        })
        .then((error) => {});
    }
  }

  render() {
    const { reviews } = this.state;

    return (
      <div id="overviewContainer">
        <Ratings ratings={reviews.ratings} />
      </div>
    );
  }
}

export default OverviewContainer;
