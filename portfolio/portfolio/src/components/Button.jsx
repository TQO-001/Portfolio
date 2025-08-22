import React from 'react';
import './Button.css'; // Import the CSS file

const Button = ({ icon = {}, text = "Button", download, link, props={} }) => {
  return (
    <div className="button-wrapper">
      <a 
        className="cssbuttons-io-button clay-button" 
        {...props} 
        download={download} 
        href={link}
      >
        {icon}
        <span>{text}</span>
      </a>
    </div>
  );
};

export default Button;
