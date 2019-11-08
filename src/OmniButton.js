import React from 'react';

const OmniButton = ({ buttonName, onClick, children }) => (
  <button className="omni-button" onClick={() => onClick(buttonName)}>
    {children}
    {!children && <p>Default Content</p>}
  </button>
);

export default OmniButton;
