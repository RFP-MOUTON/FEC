import React from 'react';

import SizeBar from './FactorsComponents/SizeBarComponent.jsx';
import WidthBar from './FactorsComponents/WidthBarComponent.jsx';
import QualityBar from './FactorsComponents/QualityBarComponent.jsx';
import LengthBar from './FactorsComponents/LengthBarComponent.jsx';
import FitBar from './FactorsComponents/FitBarComponent.jsx';
import ComfortBar from './FactorsComponents/ComfortBarComponent.jsx';

const Factors = ({ characteristics }) => {
  const { Comfort, Quality, Size, Width, Fit, Length } = characteristics;

  return (
    <div id="factors">
      <SizeBar size={Size} />
      <WidthBar width={Width} />
      <QualityBar quality={Quality} />
      <LengthBar length={Length} />
      <FitBar fit={Fit} />
      <ComfortBar comfort={Comfort} />
    </div>
  );
};

export default Factors;
