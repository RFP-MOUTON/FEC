import React from 'react';

class CarouselThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /*
  margin-top: 1em;
  margin-bottom: 1em;
  flex-shrink: 1;
  flex-basis: 13%;
  border-bottom: 1px solid black;
*/

  render() {
    const { thumbNail, index, currentImageIndex, thumbnailClick } = this.props;
    if (index === currentImageIndex) {
      return (
        <div className="carouselSidebarThumbnail">
          <img
            src={thumbNail}
            alt={index}
            className="carouselThumbnail"
            id="selectedCarouselThumbnail"
          />
        </div>
      );
    }
    return (
      <div className="carouselSidebarThumbnail">
        <img
          src={thumbNail}
          alt={index}
          className="carouselThumbnail"
          onClick={thumbnailClick}
        />
      </div>
    );
  }
}

export default CarouselThumbnail;
