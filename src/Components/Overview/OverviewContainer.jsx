import React from 'react';
import Ratings from './Ratings.jsx';
import instance from './instance.js';
import StarIcon from './StarIcon.jsx';

class OverviewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.updateComponent = this.updateComponent.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    if (id !== '') {
      instance
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
