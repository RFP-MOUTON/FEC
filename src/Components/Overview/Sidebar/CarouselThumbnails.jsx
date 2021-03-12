import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import CarouselThumbnail from './CarouselThumbnail.jsx';
/*
    <FAChevronUp className="up-arrow" onClick={upArrow} />
        <FaChevronDown className="down-arrow" onClick={downArrow} />
*/
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
      thumbnailClick,
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
                thumbnailClick={thumbnailClick}
              />
            );
          })}
        </div>
      );
    }
    return (
      <>
        <FaChevronUp className="up-arrow" onClick={upArrow} />

        {images.map((image) => {
          return (
            <CarouselThumbnail
              thumbNail={image.thumbnail_url}
              index={images.indexOf(image) + displayedPage * 7 - 7}
              currentImageIndex={selectedImage}
              thumbnailClick={thumbnailClick}
            />
          );
        })}
        <FaChevronDown className="down-arrow" onClick={downArrow} />
      </>
    );
  }
}

export default CarouselThumbnails;
