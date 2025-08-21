import React from 'react';
import './Button.css'; // Import the CSS file

const Button = ({ icon = {}, text = "Button" }) => {
  return (
    <div className="button-wrapper">
      <button className="cssbuttons-io-button">
        {icon}
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Button;
