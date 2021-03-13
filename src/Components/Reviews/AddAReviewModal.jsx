/* eslint-disable react/jsx-boolean-value */
/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from 'cloudinary-react';

import SizeComponent from './CharactersisticsFormComponents/SizeSelector.jsx';
import WidthComponent from './CharactersisticsFormComponents/WidthSelector.jsx';
import ComfortComponent from './CharactersisticsFormComponents/ComfortSelector.jsx';
import QualityComponent from './CharactersisticsFormComponents/QualitySelector.jsx';
import LengthComponent from './CharactersisticsFormComponents/LengthSelector.jsx';
import FitComponent from './CharactersisticsFormComponents/FitSelector.jsx';

// const cloudinary = require('cloudinary').v2;

class AddAReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
      ratingMessage: 'Poor',
      recommend: null,
      size: null,
      width: null,
      comfort: null,
      quality: null,
      length: null,
      fit: null,
      summary: '',
      body: '',
      photo: null,
      name: '',
      email: '',
      photoUrl: '',
    };
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleRecommend = this.handleRecommend.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleComfort = this.handleComfort.bind(this);
    this.handleQuality = this.handleQuality.bind(this);
    this.handleLength = this.handleLength.bind(this);
    this.handleWidth = this.handleWidth.bind(this);
    this.handleFit = this.handleFit.bind(this);
    this.handleSummary = this.handleSummary.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStarClick(event) {
    let ratingMessage = '';
    if (Number(event.target.dataset.rating) === 1) {
      ratingMessage = 'Poor';
    }
    if (Number(event.target.dataset.rating) === 2) {
      ratingMessage = 'Fair';
    }
    if (Number(event.target.dataset.rating) === 3) {
      ratingMessage = 'Average';
    }
    if (Number(event.target.dataset.rating) === 4) {
      ratingMessage = 'Good';
    }
    if (Number(event.target.dataset.rating) === 5) {
      ratingMessage = 'Great';
    }
    this.setState({
      rating: event.target.dataset.rating,
      ratingMessage,
    });
  }

  handleRecommend(event) {
    this.setState({
      recommend: event.target.value,
    });
  }

  handleSize(event) {
    this.setState({
      size: event.target.value,
    });
  }

  handleWidth(event) {
    this.setState({
      width: event.target.value,
    });
  }

  handleComfort(event) {
    this.setState({
      comfort: event.target.value,
    });
  }

  handleQuality(event) {
    this.setState({
      quality: event.target.value,
    });
  }

  handleLength(event) {
    this.setState({
      length: event.target.value,
    });
  }

  handleFit(event) {
    this.setState({
      fit: event.target.value,
    });
  }

  handleSummary(event) {
    this.setState({
      summary: event.target.value,
    });
  }

  handleBody(event) {
    this.setState({
      body: event.target.value,
    });
  }

  handlePhoto(event) {
    const photoFile = event.target.files[0];
    const photoReader = new FileReader();
    photoReader.readAsDataURL(photoFile);
    photoReader.onloadend = () => {
      this.setState(
        {
          photo: photoReader.result,
        },
        () => {
          const sendPhoto = axios.create({
            baseURL: 'http://localhost:3000/',
          });

          sendPhoto
            .post('', {
              photo: this.state.photo,
            })
            .then((result) => {
              this.setState({
                photoUrl: result.data,
              });
            })
            .catch((err) => console.log('Error sending photo', err));
        }
      );
    };
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { metaData, submit } = this.props;
    // eslint-disable-next-line camelcase
    const { product_id, characteristics } = metaData;
    const {
      rating,
      summary,
      body,
      recommend,
      name,
      email,
      photoUrl,
    } = this.state;
    const newCharacteristics = {};
    let newRec = true;
    if (recommend === 'true') {
      newRec = true;
    } else {
      newRec = false;
    }

    Object.keys(characteristics).forEach((key) => {
      const current = characteristics[key];
      // eslint-disable-next-line react/destructuring-assignment
      newCharacteristics[current.id] = Number(this.state[key.toLowerCase()]);
    });

    const reviewObject = {
      product_id: Number(product_id),
      rating: Number(rating),
      summary: summary,
      body: body,
      recommend: newRec,
      name: name,
      email: email,
      photos: [photoUrl],
      characteristics: newCharacteristics,
    };

    axios.post('/reviews', reviewObject).then(() => {
      submit();
    });
  }

  render() {
    const { toggle, metaData, productName } = this.props;
    const {
      rating,
      ratingMessage,
      summary,
      body,
      name,
      email,
    } = this.state;
    const { characteristics } = metaData;
    const { Width, Size, Comfort, Quality, Fit, Length } = characteristics;
    return (
      <div className="blur">
        <form id="addAReviewModal">
          <div id="formLine1">Write Your Review</div>
          <div id="formLine2">For the {productName}</div>
          <div id="overallRating">
            <div className="overallMessage">Overall rating*</div>

            <div
              className="formStar"
              data-rating="1"
              onClick={this.handleStarClick}
              style={{ background: rating > 0 ? 'black' : null }}
            />
            <div
              className="formStar"
              data-rating="2"
              onClick={this.handleStarClick}
              style={{ background: rating > 1 ? 'black' : null }}
            />
            <div
              className="formStar"
              data-rating="3"
              onClick={this.handleStarClick}
              style={{ background: rating > 2 ? 'black' : null }}
            />
            <div
              className="formStar"
              data-rating="4"
              onClick={this.handleStarClick}
              style={{ background: rating > 3 ? 'black' : null }}
            />
            <div
              className="formStar"
              data-rating="5"
              onClick={this.handleStarClick}
              style={{ background: rating > 4 ? 'black' : null }}
            />
            <div className="ratingMessage">{ratingMessage}</div>
          </div>
          <div id="recommend">
            <label>
              Do you recommend this product?*
              <div onChange={this.handleRecommend} id="recommendOptions">
                <label>
                  Yes
                  <input type="radio" value={true} name="recommend" required />
                </label>
                <label>
                  No
                  <input type="radio" value={false} name="recommend" />
                </label>
              </div>
            </label>
          </div>
          <div id="characteristics">
            <label>
              Characteristics*
              <div>
                <SizeComponent handleChange={this.handleSize} meta={Size} />
                <WidthComponent handleChange={this.handleWidth} meta={Width} />
                <ComfortComponent
                  handleChange={this.handleComfort}
                  meta={Comfort}
                />
                <QualityComponent
                  handleChange={this.handleQuality}
                  meta={Quality}
                />
                <LengthComponent
                  handleChange={this.handleLength}
                  meta={Length}
                />
                <FitComponent handleChange={this.handleFit} meta={Fit} />
              </div>
            </label>
          </div>
          <div id="summary">
            <label>
              <div id="summaryTitle">Review summary</div>
              <input
                maxLength="60"
                onChange={this.handleSummary}
                value={summary}
                placeholder="Example: Best purchase ever!"
                type="text"
              />
            </label>
          </div>
          <div id="reviewBody">
            <label>
              <div id="bodyTitle">Reviewbody*</div>
              <textarea
                maxLength="1000"
                onChange={this.handleBody}
                value={body}
                placeholder="Why did you like the product or not?"
                minLength="50"
                required
              />
              <div id="characterCount">
                {50 - body.length <= 0
                  ? 'Minimum reached'
                  : `Minimum required characters left: ${50 - body.length}`}
              </div>
            </label>
          </div>
          <div id="reviewPhoto">
            <label>
              <div>Include a photo</div>
              <input onChange={this.handlePhoto} type="file" />
            </label>
          </div>
          {this.state.photo ? (
            <img src={this.state.photo} id="preview" />
          ) : null}
          <div id="reviewName">
            <label>
              <div>Name to display*</div>
              <input
                onChange={this.handleName}
                value={name}
                maxLength="60"
                placeholder="Example: jackson11!"
                type="text"
                required
              />
            </label>
          </div>
          <div id="reviewEmail">
            <label>
              <div>Your email*</div>
              <input
                onChange={this.handleEmail}
                value={email}
                maxLength="60"
                placeholder="Example: jacson11@email.com"
                type="text"
                required
              />
              <div id="authenticationMessage">
                For authentication reasons, you will not be emailed
              </div>
            </label>
          </div>
          <button type="button" onClick={toggle} id="cancelButton">
            CANCEL
          </button>
          <input
            type="submit"
            value="SUBMIT"
            onClick={this.handleSubmit}
            id="submitButton"
          />
        </form>
      </div>
    );
  }
}

export default AddAReviewForm;
