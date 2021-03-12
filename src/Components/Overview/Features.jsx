import React from 'react';
import FeaturesContainer from './FeaturesContainer.jsx';

const Features = (props) => {
  const { data } = props;
  console.log('render called');
  console.log(data);
  if (data === undefined) {
    return <div />;
  }
  return (
    <div className="overviewBottomHalf">
      <div className="Description">
        <div className="slogan">{data.slogan}</div>
        {data.description}
      </div>
      <FeaturesContainer data={data} />
    </div>
  );
};

export default Features;
