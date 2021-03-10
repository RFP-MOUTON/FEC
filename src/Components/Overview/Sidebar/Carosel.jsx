import React from 'react';
import CarouselThumbnails from './CarouselThumbnails.jsx';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

class Carosel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: '',
    };
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.handleDownArrow = this.handleDownArrow.bind(this);
    this.handleUpArrow = this.handleUpArrow.bind(this);
  }

  componentDidMount() {
    this.setState({
      selectedImage: 0,
      displayedPage: 1,
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

  // handleSidebarClick() {}

  handleUpArrow() {
    const { displayedPage } = this.state;
    const { images } = this.props;
    if (images.length - displayedPage * 7 < 0) {
      this.setState({
        displayedPage: 1,
      });
    } else if (images.length - displayedPage * 7 > 0) {
      this.setState({
        displayedPage: displayedPage + 1,
      });
    }
  }

  handleDownArrow() {
    const { displayedPage } = this.state;
    const { images } = this.props;
    // if (images.length - displayedPage * 7 < 0) {
    //   this.setState({
    //     displayedPage: 1,
    //   });
    // } else if (images.length - displayedPage * 7 > 0) {
    //   this.setState({
    //     displayedPage: displayedPage + 1,
    //   });
    // }

    if (displayedPage - 1 <= 0) {
      const findPageOverflow = images.length / 7;
      if (findPageOverflow - Math.floor(findPageOverflow) !== 0) {
        this.setState({
          displayedPage: Math.floor(findPageOverflow) + 1,
        });
      } else {
        this.setState({
          displayedPage: Math.floor(findPageOverflow),
        });
      }
    }
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
    const { selectedImage, displayedPage } = this.state;
    let selectedImages;
    let hasPages = false;
    if (images === '' || images === undefined) {
      return <div />;
    }
    if (images.length > 7) {
      hasPages = true;
      selectedImages = images.slice(
        displayedPage * 7 - 7,
        displayedPage * 7 - 1
      );
    }
    return (
      <div id="carousel">
        <div className="carouselImage">
          <div>
            <FaArrowAltCircleLeft
              className="left-arrow"
              onClick={this.leftArrowClick}
            />
            <FaArrowAltCircleRight
              className="right-arrow"
              onClick={this.rightArrowClick}
            />
            <img src={images[selectedImage].url} alt="MainImage" />
          </div>
        </div>
        <div className="carouselThumbnails">
          <CarouselThumbnails
            images={selectedImages || images}
            displayedPage={displayedPage}
            hasButtons={hasPages}
            upArrow={this.handleUpArrow}
            downArrow={this.handleDownArrow}
            selectedImage={selectedImage}
          />
        </div>
      </div>
    );
  }
}

export default Carosel;
