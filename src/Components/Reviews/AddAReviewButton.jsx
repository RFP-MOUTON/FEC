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

  toggleModal() {
    this.setState((previousState) => {
      return {
        modalVisible: !previousState.modalVisible,
      };
    });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <>
        <button id="AddAReviewButton" type="button" onClick={this.toggleModal}>
          ADD A REVIEW
        </button>
        {modalVisible ? <AddAReviewForm toggle={this.toggleModal} /> : null}
      </>
    );
  }
}

export default AddAReview;
