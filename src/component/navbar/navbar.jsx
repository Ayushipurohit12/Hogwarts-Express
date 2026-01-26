import React, { useState } from "react";
import Logo from "../../assets/train.svg";
import "./navbar.scss";
import Dark from "../../assets/dark.svg";
import Light from "../../assets/light.svg";

const HamburgerMenu = ({ onClick, className }) => (
  <svg
    onClick={onClick}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = ({ onClick, className }) => (
  <svg
    onClick={onClick}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={Logo} alt="logo" width={50} height={50} />
          <h1>Hogwarts Express</h1>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <CloseIcon onClick={() => setNavState(false)} />
            ) : (
              <HamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <img src={Dark} alt="dark mode" />
            ) : (
              <img src={Light} alt="light mode" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#journey">Journey</a>
          </li> 
          <li>
            <a href="#launch">Contact</a>
          </li>
          <li>
            <a href="#footer">Footer</a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <img src={Light} alt="light mode" />
            ) : (
              <img src={Dark} alt="dark mode" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
