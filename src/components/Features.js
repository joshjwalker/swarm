import React from "react"
import * as styles from "./Features.module.css"

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#00e5c8" strokeWidth="1.5"/>
        <path d="M7 10h6M10 7v6" stroke="#ff3366" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Live Design Collaboration",
    description: "Engineers, product, designers, AI — everyone edits designs in real time. Iterate together until it's right.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l5-5 3 3 6-6" stroke="#00e5c8" strokeWidth="1.5"/>
        <path d="M14 6h3v3" stroke="#00e5c8" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Instant Prototype Generation",
    description: "Toss in a design, get working code — interactions, hover states, animations. Not a mockup. Real code.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l8 4v8l-8 4-8-4V6z" stroke="#00e5c8" strokeWidth="1.5"/>
        <path d="M10 10v8M10 10l8-4M10 10L2 6" stroke="#00e5c8" strokeWidth="1"/>
      </svg>
    ),
    title: "Same-Day Implementation",
    description: "Once the prototype is approved, build the real thing. Page logic, API integrations, backend. Ship before end of day.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="#00e5c8" strokeWidth="1.5"/>
        <path d="M7 7h6M7 10h6M7 13h4" stroke="#00e5c8" strokeWidth="1"/>
      </svg>
    ),
    title: "Automatic Ticket Generation",
    description: "Approved prototype becomes scoped tickets automatically. Clear acceptance criteria, dependencies mapped, ready to execute.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#00e5c8" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="3" fill="#00e5c8" opacity="0.3"/>
        <circle cx="10" cy="10" r="1.5" fill="#00e5c8"/>
      </svg>
    ),
    title: "Codebase-Aware AI",
    description: "Swarm Runner learns your design system, your component library, your conventions. Generated code fits your stack.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5h14M3 10h14M3 15h14" stroke="#00e5c8" strokeWidth="1.5"/>
        <circle cx="16" cy="5" r="2" fill="#00e5c8"/>
      </svg>
    ),
    title: "Demo-Ready Standups",
    description: "The workflow is built for daily delivery. Every standup becomes a showcase of finished work.",
  },
]

const Features = () => (
  <section id="features" className={styles.section}>
    <h2 className={styles.heading}>Built for teams that ship.</h2>
    <div className={styles.grid}>
      {features.map((f, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.icon}>{f.icon}</div>
          <h3 className={styles.cardTitle}>{f.title}</h3>
          <p className={styles.cardDescription}>{f.description}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Features
