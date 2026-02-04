import React from "react"
import * as styles from "./Hero.module.css"

const Hero = () => (
  <section className={styles.hero}>
    <h1 className={styles.headline}>
      Two weeks is too long<br />to ship a feature.
    </h1>
    <p className={styles.subheadline}>
      Swarm Runner gets it done in a day.
    </p>
    <div className={styles.ctaRow}>
      <input
        type="email"
        placeholder="your@email.com"
        className={styles.emailInput}
      />
      <button className={styles.ctaButton}>Get Early Access</button>
    </div>
    <p className={styles.description}>
      Swarm Runner is an AI-powered collaboration platform that collapses the distance
      between product vision and shipped code.
    </p>
  </section>
)

export default Hero
