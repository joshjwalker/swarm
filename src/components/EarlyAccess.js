import React from "react"
import * as styles from "./EarlyAccess.module.css"

const EarlyAccess = () => (
  <section id="early-access" className={styles.section}>
    <h2 className={styles.heading}>Get early access.</h2>
    <p className={styles.subtext}>We're onboarding teams now. Drop your email and we'll be in touch.</p>
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Work email" className={styles.input} />
      <input type="text" placeholder="Company name (optional)" className={styles.input} />
      <select className={styles.select} defaultValue="">
        <option value="" disabled>Team size (optional)</option>
        <option value="1-5">1-5</option>
        <option value="6-20">6-20</option>
        <option value="21-50">21-50</option>
        <option value="51-200">51-200</option>
        <option value="200+">200+</option>
      </select>
      <button type="submit" className={styles.submitButton}>Request Access</button>
    </form>
    <p className={styles.disclaimer}>No spam. No sales drip. Just early access.</p>
  </section>
)

export default EarlyAccess
