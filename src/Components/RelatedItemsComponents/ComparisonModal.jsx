import React from 'react';
import ReactDom from 'react-dom';
import FeaturesCurrent from './FeaturesCurrent.jsx';
import FeaturesViewed from './FeaturesViewed.jsx';
import FeaturesList from './FeaturesList.jsx';

const ComparisonModal = ({
  isModalOpen,
  ToggleModalHandler,
  viewedProductInfo,
  currentProductInfo,
}) => {
  if (!isModalOpen) {
    return null;
  }

  if (!viewedProductInfo && !currentProductInfo) {
    return null;
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
  };

  const viewedProductFeatures = [];
  const currentProductFeatures = [];

  viewedProductInfo.features.forEach((feature) => {
    let completeFeature = '';
    if (feature.value) {
      completeFeature = `${feature.feature}: ${feature.value}`;
    } else {
      completeFeature = feature.feature;
    }
    viewedProductFeatures.push(completeFeature);
  });

  currentProductInfo.features.forEach((feature) => {
    let completeFeature = '';
    if (feature.value) {
      completeFeature = `${feature.feature}: ${feature.value}`;
    } else {
      completeFeature = feature.feature;
    }
    currentProductFeatures.push(completeFeature);
  });

  const mergedFeatures = currentProductFeatures.concat(viewedProductFeatures);

  const noDupeFeatures = Array.from(new Set(mergedFeatures));

  return ReactDom.createPortal(
    <div style={OVERLAY_STYLES}>
      <div className="comparisonModal">
        <div className="colTitle">{currentProductInfo.name}</div>
        <div className="colTitle">Features</div>
        <div className="colTitle"> {viewedProductInfo.name}</div>
        <div className="currentItemFeatures">
          {noDupeFeatures.map((feature) => {
            if (currentProductFeatures.includes(feature))
              return <FeaturesCurrent key={feature} glyph="✔" />;
            return <FeaturesCurrent key={feature} glyph="✘" />;
          })}
        </div>

        <div className="featuresList">
          {noDupeFeatures.map((feature) => {
            return <FeaturesList key={feature} feature={feature} />;
          })}
        </div>

        <div className="viewedItemFeatures">
          {noDupeFeatures.map((feature) => {
            if (viewedProductFeatures.includes(feature))
              return <FeaturesViewed key={feature} glyph="✔" />;
            return <FeaturesViewed key={feature} glyph="✘" />;
          })}
        </div>

        <button
          className="closeModalButton"
          type="button"
          onClick={ToggleModalHandler}
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default ComparisonModal;
