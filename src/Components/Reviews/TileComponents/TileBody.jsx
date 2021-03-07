import React from 'react';

class TileBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooLong: false,
      shortBody: '',
    };
    this.toggleIsTooLong = this.toggleIsTooLong.bind(this);
  }

  componentDidMount() {
    const { body } = this.props;
    if (body.length > 250) {
      let shortBody = '';
      shortBody = body.slice(0, 250) + '...';
      this.setState({
        isTooLong: true,
        shortBody,
      });
    }
  }

  toggleIsTooLong() {
    this.setState({
      isTooLong: false,
    });
  }

  render() {
    const { body } = this.props;
    const { isTooLong, shortBody } = this.state;
    return (
      <div className="tileBody">
        <div className="bodyText">{isTooLong ? shortBody : body}{isTooLong ? <div className="showMore" onClick={this.toggleIsTooLong}>SHOW MORE</div> : null}</div>
      </div>
    );
  }
}

export default TileBody;
