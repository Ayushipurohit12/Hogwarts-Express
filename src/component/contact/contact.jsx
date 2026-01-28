import React from "react";
import "./contact.scss";
export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-info">
          <p className="subtitle">Get in Touch</p>
          <h2 className="title">Ready to Begin Your Magical Journey?</h2>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quia asperiores inventore omnis, dolore voluptatibus debitis nesciunt reprehenderit at nulla fuga? Explicabo sit dolorum voluptate ratione sapiente nisi officiis vel.</p>
          <div className="details">
            <p> Platform 1234 King's Cross Station</p>
            <p>expreses@hogwartsexpresss.com</p>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
