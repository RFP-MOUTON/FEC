import React from 'react';
import axios from 'axios';
import instance from './instance';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    instance
      .get('/products')
      .then((response) => {
        console.log(response);
      })
      .then(function (error) {
        console.log(error);
      });
  }

  render() {
    return <div>Greetings travelers</div>;
  }
}

export default Reviews;
