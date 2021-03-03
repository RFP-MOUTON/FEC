import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
// import instance from '../../env/config.js';

// class OverviewContainer extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div id="overviewContainer">
//         <Sidebar id={this.props} />
//       </div>
//     );
//   }
// }
const OverviewContainer = (props) => {
  const { id, data } = props;
  return (
    <div id="overviewContainer">
      <Sidebar id={id} data={data} />
    </div>
  );
};
export default OverviewContainer;
