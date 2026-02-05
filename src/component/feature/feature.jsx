import React from "react";
import "./Features.scss";

const featuresData = [
  {
    title: "Magical Comfort",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quia asperiores inventore omnis, dolore voluptatibus debitis nesciunt reprehenderit at nulla fuga? Explicabo sit dolorum voluptate ratione sapiente nisi officiis vel.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrIvaUZFxovW-ZoTA0V-9OINwGSMK6lfzbA&s",
  },
  {
    title: "Honeydukes Treats",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quia asperiores inventore omnis, dolore voluptatibus debitis nesciunt reprehenderit at nulla fuga? Explicabo sit dolorum voluptate ratione sapiente nisi officiis vel.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8ZaOwE0RLfSJpaO3-PqN-YkRET4kO5Balw&s",
  },
  {
    title: "Spellbound Views",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quia asperiores inventore omnis, dolore voluptatibus debitis nesciunt reprehenderit at nulla fuga? Explicabo sit dolorum voluptate ratione sapiente nisi officiis vel.",
    image:
      "https://www.emilyluxton.co.uk/wp-content/uploads/2021/06/Harry-Potter-Train-Jacobite-Express-Glenfinnan-Viaduct-Scotland.jpg",
  },
  {
    title: "Friendships Begin",
    description:
      "Meet fellow witches and wizards and form friendships that last a lifetime.",
    image:
      "https://i.ytimg.com/vi/zHE1QY8Jp5s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCehfnX2YB59Ev6SQKlhUrZhK-iHw",
  },
];
export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-header">
          <p className="subtitle">Why Travel With Us</p>
          <h2 className="title">A Magical Experience Awaits</h2>
        </div>
        <div className="features-grid">
          {featuresData.map((item, index) => (
            <div
              className="feature-card "
              key={index}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
