import React from "react";
import "./footer.scss"
import { NavLink } from "react-router-dom";


export default function Footer() {
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <h3>Hogwarts Express</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut est soluta voluptatem unde optio, odit inventore maxime temporibus quas consectetur eligendi magni deserunt tempore praesentium enim. Eveniet assumenda corporis accusamus!</p>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
           <ul className="links">
          <li>
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/journey">Journey</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/footer">Footer</NavLink>
          </li>
        </ul>
        </div>
        <div className="footer-links">
         <h4>Support</h4>
          <ul>
            <li>Terms of Magic</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom ">
        <p>2026 Hogwarts Express All rights reserved.</p>
      </div>
    </footer>
  );
}
