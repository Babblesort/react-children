import React from 'react';

const OmniButton = ({ buttonName, onClick, children }) => (
  <button className="omni-button" onClick={() => onClick(buttonName)}>
    {children}
  </button>
);

export default OmniButton;
