import React from "react";
import "./Journey.scss";

export default function Journey() {
  return (
    <section className="journey">
      <div className="container">
        <div className="journey-content">
          <p className="journey-subtitle">The Magical Journey</p>
          <h2 className="journey-title">
            From Platform 9¾ to the Heart of Magic coming soon
          </h2>
          <p className="journey-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
            reprehenderit placeat earum fugit laudantium blanditiis ad pariatur
            adipisci itaque dicta quo odio vitae consequuntur error accusantium
            consectetur, molestias rerum dolores.
          </p>
          <p className="journey-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            possimus harum omnis? Cum, ea eveniet? Aspernatur tempore quis quas
            corrupti iusto ut illo, nam veritatis magni? Ipsum fuga libero
            vitae!
          </p>
        </div>
        <div className="journey-visual">
          <div className="line"></div>
          <div className="dot start">Platform 9¾</div>
          <div className="dot middle">On the Way</div>
          <div className="dot end">Hogwarts</div>
        </div>
      </div>
    </section>
  );
}
