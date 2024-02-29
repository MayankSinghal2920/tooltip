import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

const Tooltip = ({ position, text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && (
        <div className={`tooltip tooltip-${position}`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
