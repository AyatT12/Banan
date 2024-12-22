import React from "react";
import logo from '../../src/Assets/images/benan_logo.svg';

const Loader = () => {
  return (
    <div className="Main_loader_container">
      <div className="loader">
        <img src={logo} className="imj" alt="logo loader"/>
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
