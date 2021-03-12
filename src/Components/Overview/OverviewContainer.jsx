import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';
import Features from './Features.jsx';
import '../../css/Overview.scss';
import withClickTracker from '../../../HOC/withClickTracker.js';
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
  const { id, data, clickTracker } = props;
  return (
    <div
      id="overviewContainer"
      onClick={(event) => {
        return clickTracker(event, 'overview');
      }}
    >
      <div>
        <Sidebar id={id} data={data} />
        <Features data={data} />
      </div>
    </div>
  );
};
export default withClickTracker(OverviewContainer);
// withClickTracker(sidebar)
