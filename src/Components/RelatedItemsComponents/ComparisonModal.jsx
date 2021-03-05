import React from 'react';
import ReactDom from 'react-dom';
import FeaturesCurrent from './FeaturesCurrent.jsx';
import FeaturesViewed from './FeaturesViewed.jsx';
import FeaturesList from './FeaturesList.jsx';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#808080',
  padding: '50px',
  zIndex: 1000,
};

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
    <div className="comparisonModal" style={MODAL_STYLES}>
      {noDupeFeatures.map((feature) => {
        if (currentProductFeatures.includes(feature))
          return <FeaturesCurrent glyph="✔" />;
        return <FeaturesCurrent glyph="✘" />;
      })}

      {noDupeFeatures.map((feature) => {
        return <FeaturesList key={feature} feature={feature} />;
      })}

      {noDupeFeatures.map((feature) => {
        if (viewedProductFeatures.includes(feature))
          return <FeaturesViewed glyph="✔" />;
        return <FeaturesViewed glyph="✘" />;
      })}

      <button type="button" onClick={ToggleModalHandler}>
        Close
      </button>
    </div>,
    document.getElementById('portal')
  );
};

export default ComparisonModal;
