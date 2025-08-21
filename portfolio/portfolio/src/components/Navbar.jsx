import React from 'react';
import './Navbar.css';
import {
  IoHomeOutline,
  IoFolderOpenOutline,
  IoChatbubblesOutline,
  IoPersonOutline,
  IoDocumentTextOutline,
  IoImagesOutline
} from 'react-icons/io5';

import { 
    FaGithub, 
    FaLinkedin 
} from 'react-icons/fa';
import imgUrl from '../assets/img/profileImg.png';

const menuItems = [
  { icon: <IoHomeOutline />, label: 'Home', url: "https://github.com/yourusername"},
  { icon: <IoPersonOutline />, label: 'About' },
  { icon: <IoFolderOpenOutline />, label: 'Projects' },
  { icon: <IoDocumentTextOutline />, label: 'Resume' },
  { icon: <IoChatbubblesOutline />, label: 'Contact' }
];

const socialLinks = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    url: 'https://github.com/TQO-001'
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername'
  }
];


const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="profile-container">
            <div className="img-container">
                <img className="navImg" src={imgUrl} alt="" />
            </div>
            <div className="details-container">
                <ul className="socials">
                    {socialLinks.map(({ icon, label, url }, index) => (
                        <li key={index}>
                        <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                            {icon}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <ul className="navbar-items flexbox-col">
            {menuItems.map(({ icon, label }, index) => (
            <li className="navbar-item flexbox-left" key={index}>
                <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                    {icon}
                </div>
                <span className="link-text">{label}</span>
                </a>
            </li>
            ))}
        </ul>
    </nav>
  );
};

export default Navbar;


