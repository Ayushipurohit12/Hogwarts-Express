import React, { useState } from "react";
import "./navbar.scss";
import Dark from "../../assets/dark.svg";
import Light from "../../assets/light.svg";
import { NavLink } from "react-router-dom";

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
const logo = "https://i.pinimg.com/736x/57/44/8a/57448aa1269568cc5f1957749fb65849.jpg";
export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <NavLink to="/" className="brand">
          <img src={logo} alt="Hogwarts Express Logo" />
        </NavLink>
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
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/journey">Journey</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/footer">Footer</NavLink>
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
