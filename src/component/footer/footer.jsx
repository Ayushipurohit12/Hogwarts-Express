import React from "react";
import "./footer.scss"


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
          <ul>
            <li>Home</li>
            <li>Journey</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-links">
         <h4>Support</h4>
          <ul>
            <li>Terms of Magic</li>
            <li>Privacy Policy</li>
            <li>Wizard Help</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom ">
        <p>2026 Hogwarts Express. All rights reserved.</p>
      </div>
    </footer>
  );
}
