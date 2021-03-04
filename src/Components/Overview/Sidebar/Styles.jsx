import React from 'react';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: '',
    };
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

  render() {
    const { data } = this.props;
    if (data === '') {
      return <div></div>;
    }
    return (
      <div>
        <div className="category-list">
          {data.results.map((style) => {
            return (
              <div className="category-data" key={style.style_id}>
                <img src={style.photos[0].thumbnail_url} alt={style.name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Styles;
