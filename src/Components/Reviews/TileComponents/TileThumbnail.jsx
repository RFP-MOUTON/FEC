import React from 'react';

import PhotoModal from './PhotoModal.jsx';

class TileThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  }

  render() {
    const { photo } = this.props;
    const { visible } = this.state;
    return (
      <>
        <img
          key={photo.id}
          src={photo.url}
          alt={photo.url}
          onClick={this.toggleModal}
        />
        {visible ? (
          <PhotoModal photo={photo} toggle={this.toggleModal} />
        ) : null}
      </>
    );
  }
}

export default TileThumbnail;
