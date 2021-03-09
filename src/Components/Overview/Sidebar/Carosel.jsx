import React from 'react';
import CarouselThumbnail from './CarouselThumbnail.jsx';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

class Carosel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: '',
    };
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.leftArrowClick = this.leftArrowClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      selectedImage: 0,
    });
  }

  componentDidUpdate(prevProps) {
    const { styleID } = this.props;
    const { styleHistory } = this.state;
    if (styleID !== prevProps.styleID && styleHistory !== undefined) {
      if (!styleHistory[styleID]) {
        this.setState({
          selectedImage: 0,
        });
      } else {
        this.setState({
          selectedImage: styleHistory[styleID],
        });
      }
    }
    // const styleString = styleID.toString();
  }

  rightArrowClick() {
    const { selectedImage } = this.state;
    const { images, styleID } = this.props;
    if (images.length - 1 <= selectedImage) {
      this.setState({
        selectedImage: 0,
        styleHistory: {
          [styleID]: 0,
        },
      });
    } else {
      this.setState({
        selectedImage: selectedImage + 1,
        styleHistory: {
          [styleID]: selectedImage + 1,
        },
      });
    }
  }

  leftArrowClick() {
    const { selectedImage } = this.state;
    const { images, styleID } = this.props;
    if (selectedImage >= 0) {
      this.setState({
        selectedImage: images.length - 1,
        styleHistory: {
          [styleID]: 0,
        },
      });
    } else {
      this.setState({
        selectedImage: selectedImage - 1,
        styleHistory: {
          [styleID]: selectedImage - 1,
        },
      });
    }
  }
  /*
    Mapping over state:
    {images.map((image, index) => {
      return <img src={image.url} alt={index} className="caroselImage" />;
    })}
  */

  render() {
    const { images, styleID } = this.props;
    const { selectedImage } = this.state;
    let thumbnailIndex = 0;
    if (images === '' || images === undefined) {
      return <div />;
    }

    return (
      <div className="imageCarousel">
        <FaArrowAltCircleLeft
          className="left-arrow"
          onClick={this.leftArrowClick}
        />
        <FaArrowAltCircleRight
          className="right-arrow"
          onClick={this.rightArrowClick}
        />
        <img
          src={images[selectedImage].url}
          alt="MainImage"
          className="carouselImage"
        />
        <div className="carouselThumbnails">
          {images.map((image) => {
            thumbnailIndex += 1;
            return (
              <CarouselThumbnail
                thumbNail={image.thumbnail_url}
                index={thumbnailIndex - 1}
                currentImageIndex={selectedImage}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carosel;
