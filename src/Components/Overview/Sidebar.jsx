import React from 'react';
import axios from 'axios';
import Ratings from './Sidebar/Ratings.jsx';
import Styles from './Sidebar/Styles.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: '',
      styles: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getMeta = this.getMeta.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    if (id !== '') {
      this.getMeta(id);
      this.getStyles(id);
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

  getStyles(id) {
    axios
      .get(`products/${id}/styles`, { params: { product_id: id } })
      .then((response) => {
        this.setState({
          styles: response.data,
        });
      })
      .then((error) => {});
  }

  render() {
    const { reviews, styles } = this.state;
    const { data, id } = this.props;
    if (styles === '') {
      return <div></div>;
    }
    return (
      <div id="sidebarContainer">
        <Ratings ratings={reviews.ratings} />
        <div id="titles">
          <div id="category" className="text">
            {data.category}
          </div>
          <h1 id="productName">{data.name}</h1>
          <div id="price">{data.default_price}</div>
          <div id="styles">
            <Styles data={styles} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
