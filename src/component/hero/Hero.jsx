import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="home">
      <div className="background-media">
        <video
          className="video-bg"
          autoPlay
          loop
          muted
          playsInline
          src="https://www.shutterstock.com/shutterstock/videos/3981221411/preview/stock-footage-london-uk-july-the-hogwarts-express-steam-engine-stationary-at-the-platform-with.webm"
        />
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="content">
          <span className="sub-title">Welcome to the Wizarding World</span>

          <h1 className="title">All Aboard the Hogwarts Express</h1>

          <p className="description">
            Step onto Platform 9¾ and begin your magical journey to Hogwarts
            School of Witchcraft and Wizardry. The train is about to depart!
          </p>
          <div className="buttons">
            <button>Start the Journey</button>
            <button className="share">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
