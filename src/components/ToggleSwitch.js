import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ toggleDarkMode }) => {
  return (
    <div className="toggle-switch">
      <label>
        Dark Mode
        <input type="checkbox" onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
