import React from 'react';
import axios from 'axios';
import Ratings from './Sidebar/Ratings.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getMeta = this.getMeta.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    if (id !== '') {
      this.getMeta(id);
    }
  }

  getMeta(id) {
    axios
      .get('/reviews/meta', { params: { product_id: id } })
      .then((response) => {
        this.setState({
          reviews: response.data,
        });
      })
      .then((error) => {});
  }

  render() {
    const { reviews } = this.state;
    const { data } = this.props;
    return (
      <div id="sidebarContainer">
        <Ratings ratings={reviews.ratings} />
        <div id="titles">
          <div id="category" class="text">
            {data.category}
          </div>
          <h1 id="productName">{data.name}</h1>
        </div>
      </div>
    );
  }
}

export default Sidebar;
