/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import axios from 'axios';

const withClickTracker = (WrappedComponent) => {
  class WithClickTracker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleClickTrack = this.handleClickTrack.bind(this);
    }

    handleClickTrack(event, widget) {
      const date = new Date();
      const clickData = {
        element: event.target.outerHTML,
        widget: widget,
        time: date,
      };

      axios.post('/interactions', clickData).catch((error) => {
        console.error(error);
      });
    }

    render() {
      return (
        <WrappedComponent
          clickTracker={this.handleClickTrack}
          {...this.props}
        />
      );
    }
  }
  return WithClickTracker;
};

export default withClickTracker;
