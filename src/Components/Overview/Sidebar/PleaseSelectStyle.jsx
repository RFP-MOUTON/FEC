import React from 'react';

const PleaseSelectStyle = (props) => {
  const { toggle } = props;
  if (toggle === true) {
    return <div id="pleaseSelectStyle">Please Select Style!</div>;
  }
  return <div id="pleaseSelectStyle" />;
};

export default PleaseSelectStyle;
