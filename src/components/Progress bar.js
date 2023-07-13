import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ phase }) => {
  
  return (
    <div className="progress-bar">
      <div className={`progress-bar__phase ${phase >= 1 ? 'active' : ''}`}></div>
      <div className={`progress-bar__phase ${phase >= 2 ? 'active' : ''}`}></div>
      <div className={`progress-bar__phase ${phase >= 3 ? 'active' : ''}`}></div>
    </div>
  );
}

export default ProgressBar;
