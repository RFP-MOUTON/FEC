import React from 'react';

class AddAReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { toggle } = this.props;
    return (
      <form id="addAReviewModal">
        <div>
          Overall rating (mandatory)
        </div>
        <label>
          Do you recommend this product? (mandatory)
          <div>
            <label>
              Yes
            <input type="radio" value="Yes" name="recommend"></input>
            </label>
            <label>
              No
            <input type="radio" value="No" name="recommend"></input>
            </label>

          </div>
        </label>
        <label>
          Characteristics (mandatory)
          <input></input>
        </label>
        <label>
          Review summary
          <input></input>
        </label>
        <label>
          Reviewbody (mandatory)
          <input></input>
        </label>
        <label>
          Upload your photo (paste url)
          <input></input>
        </label>
        <label>
          Name to display (mandatory)
          <input></input>
        </label>
        <label>
          Your email (mandatory)
          <input></input>
          For authentication reasons, you will not be emailed
        </label>
        <button onClick={toggle}>CANCEL</button>
        <button type="submit">SUBMIT</button>
      </form>
    )
  }
}

export default AddAReviewForm;
