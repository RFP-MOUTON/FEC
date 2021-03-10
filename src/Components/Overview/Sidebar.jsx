import React from 'react';
import axios from 'axios';
import Ratings from './Sidebar/Ratings.jsx';
import Styles from './Sidebar/Styles.jsx';
import Carosel from './Sidebar/Carosel.jsx';

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
    this.liftStyle = this.liftStyle.bind(this);
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

  liftStyle(styleID, style) {
    this.setState({
      styleID,
      stylePhotos: style,
    });
  }

  render() {
    const { reviews, styles, styleID, stylePhotos } = this.state;
    const { data, id } = this.props;
    if (styles === '') {
      return <div className="sidebarContainer" />;
    }
    return (
      <div id="overviewTopHalf">
        <div className="sidebarContainer">
          <div id="titles">
            <Ratings ratings={reviews.ratings} />
            <div id="category" className="text">
              {data.category}
            </div>
            <h1 id="productName">{data.name}</h1>
            <div id="price">{data.default_price}</div>
          </div>
          <div>
            <Styles data={styles} liftStyle={this.liftStyle} />
          </div>
        </div>
        <div>
          <Carosel styleID={styleID} images={stylePhotos} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
