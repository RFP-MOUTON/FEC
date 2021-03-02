import React from 'react';
import axios from 'axios';
import instance from './instance';
import StarIcon from './StarIcon.jsx';

// class Ratings extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       ratings: this.props.ratings,
//       average: '',
//       count: '',
//     };

//   }
//   render() {
//     return (
//       <div>
//         Average Reviews:
//         <div>{this.state.average}</div>
//       </div>
//     );
//   }
// }
function Ratings(props) {
  // const {
  //   index,
  //   rating,
  //   hoverRating,
  //   onMouseEnter,
  //   onMouseLeave,
  //   onSaveRating,
  // } = props;
  // const fill = React.useMemo(() =>)
  let count = 0;
  let average = 0;
  if (props.ratings !== undefined) {
    Object.keys(props.ratings).map((key, index) => {
      count = average + proprs.ratings[key];
      average = count + props.ratings[key] * key;
    });

    average = average / count;
  }

  return (
    <div>
      <StarIcon />
      {average}
    </div>
  );
}

export default Ratings;
