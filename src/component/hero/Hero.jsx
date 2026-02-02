import React from "react";
import "./Hero.scss";

export default function Hero() {
  const heroImage =
    "https://images.unsplash.com/photo-1618944847023-38aa001235f0?q=80&w=2069&auto=format&fit=crop";
  return (
    <div className="home" style={{ position: "relative", overflow: "hidden" }}>
      <img
        src={heroImage}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
        alt="Hero"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      />
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
          <div className="buttons">
            <button>Start the Journey</button>
            <button style={{ marginLeft: "1rem" }}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
