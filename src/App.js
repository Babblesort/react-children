import React from 'react';
import OmniButton from './OmniButton';
import './App.css';
import Circle from './Circle';

function App() {
  const generalClick = buttonName => alert(`Click on ${buttonName}`);
  return (
    <div className="App">
      <OmniButton buttonName="stuff" onClick={generalClick}>
        <p>Stuff Inside</p>
        <div>Children is a automatically applied prop</div>
      </OmniButton>

      <OmniButton buttonName="component-children" onClick={generalClick}>
        <p>Children can be other React Components</p>
        <Circle />
      </OmniButton>
    </div>
  );
}

export default App;
