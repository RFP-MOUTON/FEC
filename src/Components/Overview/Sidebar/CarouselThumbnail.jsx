import React from 'react';

class CarouselThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedPage: 1,
    };
  }

  // handleUpArrow() {

  // }

  // handleDownArrow() {
  //   if()
  // }

  render() {
    const { thumbNail, index, currentImageIndex } = this.props;
    if (index === currentImageIndex) {
      return (
        <>
          <img
            src={thumbNail}
            alt={index}
            className="selectedCarouselThumbnail"
          />
        </>
      );
    }
    return <img src={thumbNail} alt={index} className="carouselThumbnail" />;
  }
}

export default CarouselThumbnail;
