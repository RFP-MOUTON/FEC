import React from 'react';

import AddAReviewForm from './AddAReviewModal.jsx';

class AddAReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.toggleModal = this.toggleModal.bind(this);

    this.handleSuccessfulSubmit = this.handleSuccessfulSubmit.bind(this);
  }

  handleSuccessfulSubmit() {
    this.setState((previousState) => {
      return {
        modalVisible: !previousState.modalVisible,
      };
    });
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
    const { metaData, productName } = this.props;
    return (
      <>
        <button id="AddAReviewButton" type="button" onClick={this.toggleModal}>
          ADD A REVIEW
        </button>
        {modalVisible ? (
          <AddAReviewForm
            toggle={this.toggleModal}
            submit={this.handleSuccessfulSubmit}
            metaData={metaData}
            productName={productName}
          />
        ) : null}
      </>
    );
  }
}

export default AddAReview;
