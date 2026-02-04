import React from "react"
import * as styles from "./Header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>Swarm Runner</div>
    <nav className={styles.nav}>
      <a href="#how-it-works" className={styles.navLink}>How It Works</a>
      <a href="#features" className={styles.navLink}>Features</a>
      <a href="#early-access" className={styles.navLink}>Early Access</a>
    </nav>
  </header>
)

export default Header
