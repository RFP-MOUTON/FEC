import React from 'react';
import Ratings from './Ratings.jsx';
import instance from './instance.js';
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
      .then((error) => {
        console.log(error);
      });
    // Save that product in sta
  }

  updateComponent() {
    const { data } = this.state;
    console.log(`id: ${data.id}`);
    if (data !== '') {
      instance
        .get('/reviews/meta', { params: { product_id: data.id } })
        .then((response) => {
          console.log(response.data);
          this.setState({
            reviews: response.data,
          });
        })
        .then((error) => {
          console.log(error);
        });
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
