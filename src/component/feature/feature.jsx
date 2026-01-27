import React from "react";
import "./Features.scss";

const featuresData = [
  {
    title: "Magical Comfort",
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quia asperiores inventore omnis, dolore voluptatibus debitis nesciunt reprehenderit at nulla fuga? Explicabo sit dolorum voluptate ratione sapiente nisi officiis vel.",
  },
  {
    title: "Honeydukes Treats",
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quia asperiores inventore omnis, dolore voluptatibus debitis nesciunt reprehenderit at nulla fuga? Explicabo sit dolorum voluptate ratione sapiente nisi officiis vel.",
  },
  {
    title: "Spellbound Views",
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quia asperiores inventore omnis, dolore voluptatibus debitis nesciunt reprehenderit at nulla fuga? Explicabo sit dolorum voluptate ratione sapiente nisi officiis vel.",
  },
  {
    title: "Friendships Begin",
    description:"Meet fellow witches and wizards and form friendships that last a lifetime.",
  },
];
export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <p className="subtitle">Why Travel With Us</p>
          <h2 className="title">A Magical Experience Awaits</h2>
        </div>
        <div className="features-grid">
          {featuresData.map((item, index) => (
            <div className="feature-card " key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
