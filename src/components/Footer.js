import React from "react"
import * as styles from "./Footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <div className={styles.footerTop}>
        <div className={styles.logo}>Swarm Runner</div>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>About</a>
          <a href="#" className={styles.footerLink}>White Paper</a>
          <a href="#" className={styles.footerLink}>Contact</a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; 2024 Swarm Runner. All rights reserved.
      </div>
    </div>
  </footer>
)

export default Footer
