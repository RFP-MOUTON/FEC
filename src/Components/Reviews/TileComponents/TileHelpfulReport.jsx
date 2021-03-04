import React from 'react';

class TileHelpfulReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      reported: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  handleReport() {
    this.setState({
      reported: true,
    });
  }

  render() {
    const { helpfulness, handleHelpful, reviewId, report } = this.props;
    const { clicked, reported } = this.state;
    if (!clicked && !reported) {
      return (
        <div>
          <div>
            Was this review helpful?{' '}
            <a
              className="helpfulLink"
              onClick={() =>
                handleHelpful(reviewId, () => {
                  this.handleClick();
                })
              }
            >
              Yes
            </a>{' '}
            ({helpfulness}) |{' '}
            <a
              className="helpfulLink"
              onClick={() =>
                report(reviewId, () => {
                  this.handleReport();
                })
              }
            >
              Report
            </a>
          </div>
        </div>
      );
    } else if (reported) {
      return (
        <div>
          <div>Was this review helpful? Yes ({helpfulness}) | Reported</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>Was this review helpful? Yes ({helpfulness + 1})</div>
        </div>
      );
    }
  }
}

export default TileHelpfulReport;
