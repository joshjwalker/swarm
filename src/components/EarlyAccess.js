import React from "react"
import * as styles from "./EarlyAccess.module.css"

const EarlyAccess = () => (
  <section id="early-access" className={styles.section}>
    <h2 className={styles.heading}>Get early access.</h2>
    <p className={styles.subtext}>We're onboarding teams now. Drop your email and we'll be in touch.</p>
    <form
      className={styles.form}
      action="https://formsubmit.co/4223b338fc3ea669b630132fc715512f"
      method="POST"
    >
      <input type="hidden" name="_subject" value="New Swarm Runner Early Access Request" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="email" name="email" placeholder="Work email" className={styles.input} required />
      <input type="text" name="company" placeholder="Company name (optional)" className={styles.input} />
      <select className={styles.select} name="team_size" defaultValue="">
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
