import React from 'react';
import StyleImage from './StyleImage.jsx';
import SelectedStyle from './SelectedStyle.jsx';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: '',
      targetID: '',
    };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event) {
    console.log(event.target.alt);
    const eventData = event.target.alt.split(' ');
    this.setState({
      target: eventData[0],
      targetID: eventData[1],
    });
  }

  render() {
    const { data } = this.props;
    const { target, targetID } = this.state;
    if (data === '') {
      return <div>Loading</div>;
    }
    return (
      <div>
        <SelectedStyle name={target || data.results[0].name} />
        <div className="category-list">
          {data.results.map((style) => {
            //console.log(style.style_id);
            let selected = false;
            if (targetID !== '' && style.style_id === targetID) {
              selected = true;
            }
            if (style.default) {
              selected = true;
            }
            return (
              <div
                className="category-data"
                key={style.style_id}
                onClick={this.handleClick}
              >
                <div alt={style.name} name={style.style_id}>
                  <StyleImage
                    src={style.photos[0].thumbnail_url}
                    alt={style.name}
                    selected={selected}
                    name={style.style_id}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Styles;
