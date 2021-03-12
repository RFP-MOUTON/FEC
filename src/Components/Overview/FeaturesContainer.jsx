import React from 'react';

const FeaturesContainer = (props) => {
  const { data } = props;
  if (data.features === undefined) {
    return null;
  }
  return (
    <div className="featuresContainer">
      {data.features.map((feature) => {
        return (
          <div className="singleFeatureContainer">
            <div className="overviewFeature">{feature.feature}: </div>
            <div className="featureValue"> {feature.value}</div>
          </div>
        );
      })}
    </div>
  );
};
export default FeaturesContainer;
