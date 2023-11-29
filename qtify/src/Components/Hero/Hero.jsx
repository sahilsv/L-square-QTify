import React from "react";
import styles from './Hero.module.css';
import headphones from "../../Assets/headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroHeading}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          className={styles.headphone}
          src={headphones}
          alt="headphones img not available"
        />
      </div>
    </div>
  );
}

export default Hero;
