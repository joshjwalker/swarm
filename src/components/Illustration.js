import React from "react"
import * as styles from "./Illustration.module.css"

const Illustration = () => (
  <section className={styles.section}>
    <svg width="300" height="160" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Connection lines */}
      <line x1="75" y1="65" x2="130" y2="75" stroke="#00e5c8" strokeWidth="1.5" opacity="0.3" />
      <line x1="170" y1="75" x2="225" y2="65" stroke="#00e5c8" strokeWidth="1.5" opacity="0.3" />
      <line x1="100" y1="120" x2="135" y2="90" stroke="#00e5c8" strokeWidth="1.5" opacity="0.3" />
      <line x1="165" y1="90" x2="200" y2="120" stroke="#00e5c8" strokeWidth="1.5" opacity="0.3" />

      {/* Left node */}
      <circle cx="60" cy="58" r="24" stroke="#00e5c8" strokeWidth="1.5" fill="rgba(0,229,200,0.06)" />
      <circle cx="60" cy="58" r="4" fill="#00e5c8" />

      {/* Center node (larger, glowing) */}
      <circle cx="150" cy="78" r="32" stroke="#00e5c8" strokeWidth="2" fill="rgba(0,229,200,0.1)" />
      <circle cx="150" cy="78" r="32" stroke="#00e5c8" strokeWidth="2" fill="rgba(0,229,200,0.1)" filter="url(#glow)" />
      <circle cx="150" cy="78" r="6" fill="#00e5c8" />

      {/* Right node */}
      <circle cx="240" cy="58" r="24" stroke="#00e5c8" strokeWidth="1.5" fill="rgba(0,229,200,0.06)" />
      <circle cx="240" cy="58" r="4" fill="#00e5c8" />

      {/* Bottom-left small node */}
      <circle cx="95" cy="125" r="18" stroke="#00e5c8" strokeWidth="1.5" fill="rgba(0,229,200,0.05)" />
      <circle cx="95" cy="125" r="3" fill="#00e5c8" />

      {/* Bottom-right small node */}
      <circle cx="205" cy="125" r="18" stroke="#00e5c8" strokeWidth="1.5" fill="rgba(0,229,200,0.05)" />
      <circle cx="205" cy="125" r="3" fill="#00e5c8" />

      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  </section>
)

export default Illustration
