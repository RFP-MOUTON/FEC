import React from 'react';

import AddAReviewForm from './AddAReviewModal.jsx';

class AddAReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.setState((previousState) => {
      return {
        modalVisible: !previousState.modalVisible,
      };
    });
  }

  render() {
    const { modalVisible } = this.state;
    const { metaData } = this.props;
    return (
      <>
        <button id="AddAReviewButton" type="button" onClick={this.toggleModal}>
          ADD A REVIEW
        </button>
        {modalVisible ? <AddAReviewForm toggle={this.toggleModal} metaData={metaData}/> : null}
      </>
    );
  }
}

export default AddAReview;
