import React from 'react';

const Features = (props) => {
  const { data } = props;
  console.log('render called');
  return (
    <div className="overviewBottomHalf">
      <div className="Description">{data.description}</div>
      <div className="featuresContainer">
        {data.features.map((feature) => {
          return (
            <div className="singleFeatureContainer">
              <div className="overviewFeature">{feature.feature}</div>
              <div className="featureValue">{feature.value} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
