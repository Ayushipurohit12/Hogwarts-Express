import React from "react";
import heroImage from "../../assets/e4ti_hs3b_220303.jpg";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">All Aboard the Hogwarrts Express</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, officia, vero ipsam non pariatur unde minus asperiores
            enim sequi maiores suscipit rem. Adipisci ipsam quaerat nulla
            molestiae qui est natus?
          </p>
          <button>Start the Journey</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img
              src={heroImage}
              alt="Hogwarts Express"
              width={400}
              height={300}
            />
          </div>

          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
