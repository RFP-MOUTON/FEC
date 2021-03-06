import React from 'react';
import StyleImage from './StyleImage.jsx';
import SelectedStyle from './SelectedStyle.jsx';
import AddToCart from './AddToCart.jsx';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetID: '',
      selectedObj: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.setInitial = this.setInitial.bind(this);
  }
  /*
    1. Map over images
    2. render a component for each image
    3. Format this component to be a little ity bitty circle and have some sort of
    on click element

    I don't actually think that it needs to be a component just make it happen

  */
  /*
  handleClick() {
    This is where we're going to handle the selection for the thingy dingy. I think that the image carosel should maybe be dependant on this so it shouldn't render on it's own
  }
  */

  componentDidMount() {
    const { data } = this.props;
    if (data) {
      this.setInitial();
    }
  }

  handleClick(event) {
    const { data } = this.props;
    const eventData = event.target.alt.split(' ');
    this.setState({
      targetID: eventData[0],
      selectedObj: data.results[eventData[1]],
    });
  }

  setInitial() {
    const { data } = this.props;
    this.setState({
      targetID: data.results[0].style_id,
      selectedObj: data.results[0],
    });
  }
  // handleClick(event) {
  //   const { id, data } = this.props;
  //   // const eventData = event.target.alt.split(' ');
  //   this.setState({
  //     target: id,
  //     targetID: data,
  //   });
  // }

  render() {
    const { data } = this.props;
    const { selectedObj, targetID } = this.state;
    if (data === '') {
      return <div className="category-list">Loading</div>;
    }
    let count = 0;
    return (
      <div>
        <SelectedStyle name={selectedObj.name || data.results[0].name} />
        <div className="category-list">
          {data.results.map((style) => {
            count += 1;
            let selected = false;
            if (targetID === '' && style['default?'] === true) {
              selected = true;
            }
            if (style.style_id.toString() === targetID.toString()) {
              selected = true;
            }
            return (
              <div className="category-data" key={style.style_id}>
                <div
                  alt={style.name}
                  name={style.style_id}
                  onClick={this.handleClick}
                >
                  <StyleImage
                    src={style.photos[0].thumbnail_url}
                    alt={`${style.style_id} ${count - 1}`}
                    selected={selected}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <AddToCart style={selectedObj} />
      </div>
    );
  }
}

export default Styles;
