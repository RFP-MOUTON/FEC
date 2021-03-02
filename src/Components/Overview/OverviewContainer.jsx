import React from 'react';
import Ratings from './Ratings.jsx';
import instance from './instance';
import StarIcon from './StarIcon.jsx';

class OverviewContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      reviews: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateComponent = this.updateComponent.bind(this);
  }

  componentDidMount() {
    // Get one product
    instance
      .get('/products', { params: { count: 1 } })
      .then((response) => {
        console.log(response.data[0]);
        this.setState({
          data: response.data[0],
        });
        this.updateComponent();
      })
      .then(function (error) {
        console.log(error);
      });
    // Save that product in state
  }
  updateComponent() {
    console.log('id: ' + this.state.data.id);
    if (this.state.data !== '') {
      instance
        .get('/reviews/meta', { params: { product_id: this.state.data.id } })
        .then((response) => {
          console.log(response.data);
          this.setState({
            reviews: response.data,
          });
        })
        .then(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Ratings ratings={this.state.reviews.ratings} />
      </React.Fragment>
    );
  }
}

export default OverviewContainer;
