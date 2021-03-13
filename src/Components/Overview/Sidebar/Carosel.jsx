import React from 'react';
import CarouselThumbnails from './CarouselThumbnails.jsx';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

class Carosel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: '',
      styleHistory: {},
    };
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.handleDownArrow = this.handleDownArrow.bind(this);
    this.handleUpArrow = this.handleUpArrow.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.updatePage = this.updatePage.bind(this);
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
    this.updatePage();
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

  handleThumbnailClick(event) {
    const { selectedImage, styleHistory } = this.state;
    const { styleID } = this.props;
    if (event.target.alt !== selectedImage) {
      this.setState({
        selectedImage: parseInt(event.target.alt, 10),
        styleHistory: {
          ...styleHistory,
          [styleID]: parseInt(event.target.alt, 10),
        },
      });
    }
  }

  rightArrowClick() {
    const { selectedImage, styleHistory } = this.state;
    const { images, styleID } = this.props;
    let newIndex;
    if (images.length - 1 <= selectedImage) {
      newIndex = 0;
      this.setState({
        selectedImage: 0,
        styleHistory: {
          ...styleHistory,
          [styleID]: 0,
        },
      });
    } else {
      newIndex = selectedImage + 1;
      this.setState({
        selectedImage: selectedImage + 1,
        styleHistory: {
          ...styleHistory,
          [styleID]: selectedImage + 1,
        },
      });
    }
    this.updatePage(newIndex);
  }

  updatePage(newIndex) {
    const { images } = this.props;
    const { displayedPage } = this.state;
    if (images.length > 7) {
      if (
        displayedPage * 7 - 1 < newIndex ||
        displayedPage * 7 - 7 > newIndex
      ) {
        this.setState({
          displayedPage: Math.floor(newIndex / 7) + 1,
        });
      }
    }
  }

  leftArrowClick() {
    const { selectedImage, styleHistory } = this.state;
    const { images, styleID } = this.props;
    let newIndex;
    if (selectedImage <= 0) {
      newIndex = images.length - 1;
      this.setState({
        selectedImage: images.length - 1,
        styleHistory: {
          ...styleHistory,
          [styleID]: 0,
        },
      });
    } else {
      newIndex = selectedImage - 1;
      this.setState({
        selectedImage: selectedImage - 1,
        styleHistory: {
          ...styleHistory,
          [styleID]: selectedImage - 1,
        },
      });
    }
    this.updatePage(newIndex);
  }

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
      selectedImages = images.slice(displayedPage * 7 - 7, displayedPage * 7);
    }
    return (
      <div id="carousel">
        <img src={images[selectedImage].url} alt="MainImage" id="selectedImg" />
        <div className="carouselImage">
          <div>
            <FaArrowLeft className="left-arrow" onClick={this.leftArrowClick} />
            <FaArrowRight
              className="right-arrow"
              onClick={this.rightArrowClick}
            />
          </div>
        </div>
        <div className="carouselThumbnails">
          <CarouselThumbnails
            images={selectedImages || images}
            displayedPage={displayedPage}
            hasButtons={hasPages}
            upArrow={this.handleUpArrow}
            downArrow={this.handleDownArrow}
            thumbnailClick={this.handleThumbnailClick}
            selectedImage={selectedImage}
          />
        </div>
      </div>
    );
  }
}

export default Carosel;
