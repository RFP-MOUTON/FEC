import React from 'react';
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

  rightArrowClick() {
    let { selectedImage } = this.state;
    const { images, styleID } = this.props;
    if (images.length - 1 <= selectedImage) {
      console.log('click');
      this.setState({
        selectedImage: 0,
        [styleID]: 0,
      });
    } else {
      this.setState({
        selectedImage: selectedImage + 1,
        [styleID]: selectedImage + 1,
      });
    }
  }

  leftArrowClick() {
    const { selectedImage } = this.state;
    const { images, styleID } = this.props;
    if (selectedImage >= 0) {
      this.setState({
        selectedImage: images.length - 1,
        [styleID]: images.length - 1,
      });
    } else {
      this.setState({
        selectedImage: selectedImage - 1,
        [styleID]: images.length - 1,
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
    if (images === '' || images === undefined) {
      return <div />;
    }

    return (
      <div className="slider">
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
          className="caroselImage"
        />
      </div>
    );
  }
}

export default Carosel;
