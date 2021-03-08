import React from 'react';

class Carosel extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   if()
  // }

  render() {
    const { images } = this.props;
    if (!images) {
      return <div />;
    }

    return (
      <>
        {images.map((image, index) => {
          return <img src={image.url} alt={index} className="caroselImage" />;
        })}
      </>
    );
  }
}

export default Carosel;
