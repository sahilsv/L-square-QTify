import React from "react";
import "./hero.css";
import headphones from "../../Assets/headphones.png";

function Hero() {
  return (
    <div className="hero">
      <div className="heading">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img
        className="headphone"
        src={headphones}
        alt="headphones img not available"
      />
    </div>
  );
}

export default Hero;
