import React, { useState, useEffect } from "react";
import "./Journey.scss";

export default function Journey() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentView, setCurrentView] = useState(0);
  const steps = [
    { className: "start", label: "Platform 9" },
    { className: "middle", label: "On the Way" },
    { className: "end", label: "Hogwart" },
  ];

  useEffect(() => {
    const handlemobile = () => setIsMobile(window.innerWidth < 768);
    handlemobile();
    window.addEventListener("responsive", handlemobile);
    return () => window.removeEventListener("responsive", handlemobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentView((prev) => (prev + 1) % steps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMobile, steps.length]);

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
        <div
          className="journey-visual"
          style={
            isMobile
              ? { display: "flex", justifyContent: "center", height: "auto" }
              : {}
          }
        >
          {isMobile ? (
            <div
              className={`dot ${steps[currentView].className}`}
              style={{ position: "static", transform: "none" }}
            >
              {steps[currentView].label}
            </div>
          ) : (
            <>
              <div className="line"></div>
              {steps.map((step) => (
                <div key={step.className} className={`dot ${step.className}`}>
                  {step.label}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
