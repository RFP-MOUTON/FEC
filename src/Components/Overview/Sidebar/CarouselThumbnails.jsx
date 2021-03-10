import React from 'react';
import CarouselThumbnail from './CarouselThumbnail.jsx';

class CarouselThumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      images,
      hasButtons,
      downArrow,
      upArrow,
      selectedImage,
    } = this.props;

    return (
      <div>
        {images.map((image) => {
          return (
            <CarouselThumbnail
              thumbNail={image.thumbnail_url}
              index={images.indexOf(image)}
              currentImageIndex={selectedImage}
            />
          );
        })}
      </div>
    );
  }
}

export default CarouselThumbnails;
