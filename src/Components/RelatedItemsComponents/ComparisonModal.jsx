import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#808080',
  padding: '50px',
  zIndex: 1000,
};

const ComparisonModal = ({ isModalOpen, ToggleModalHandler }) => {
  if (!isModalOpen) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="comparisonModal" style={MODAL_STYLES}>
      <div>Current Product Value</div>
      <div>Characteristic</div>
      <div>Compared Product Value</div>
      <button type="button" onClick={ToggleModalHandler}>
        Close
      </button>
    </div>,
    document.getElementById('portal')
  );
};

export default ComparisonModal;
