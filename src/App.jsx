import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className="app">
      <h1>Tooltip Example</h1>
      <Tooltip position="top" text="Top Tooltip">
        <button>Hover me for Top Tooltip</button>
      </Tooltip>
      <Tooltip position="bottom" text="Bottom Tooltip">
        <button>Hover me for Bottom Tooltip</button>
      </Tooltip>
      <Tooltip position="right" text="Right Tooltip">
        <button>Hover me for Right Tooltip</button>
      </Tooltip>
      <Tooltip position="left" text="Left Tooltip">
        <button>Hover me for Left Tooltip</button>
      </Tooltip>
    </div>
  );
};

export default App;
