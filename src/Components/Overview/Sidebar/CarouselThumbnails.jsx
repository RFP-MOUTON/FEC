import React from 'react';
import CarouselThumbnail from './CarouselThumbnail.jsx';

class CarouselThumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //  + displayedPage * 7

  render() {
    const {
      images,
      hasButtons,
      downArrow,
      upArrow,
      selectedImage,
      displayedPage,
    } = this.props;
    if (!hasButtons) {
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
    return (
      <div>
        {images.map((image) => {
          console.log(Object.keys(image));
          return (
            <CarouselThumbnail
              thumbNail={image.thumbnail_url}
              index={images.indexOf(image) + displayedPage * 7 - 7}
              currentImageIndex={selectedImage}
            />
          );
        })}
      </div>
    );
  }
}

export default CarouselThumbnails;
