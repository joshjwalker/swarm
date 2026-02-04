import React from "react"
import * as styles from "./HowItWorks.module.css"

const steps = [
  {
    step: "STEP 01",
    stepClass: styles.step1,
    progressClass: styles.progressFill1,
    title: "Design Session",
    description: "Product describes. Engineer prompts. AI generates. Iterate and product approves.",
    duration: "Minutes",
    durationClass: styles.duration1,
  },
  {
    step: "STEP 02",
    stepClass: styles.step2,
    progressClass: styles.progressFill2,
    title: "Prototype Session",
    description: "Drop the design in. Get working UI. Iterate live with product.",
    duration: "Minutes",
    durationClass: styles.duration2,
  },
  {
    step: "STEP 03",
    stepClass: styles.step3,
    progressClass: styles.progressFill3,
    title: "Build Session",
    description: "Engineer builds page logic and backend with AI. The frontend is already approved.",
    duration: "Hours",
    durationClass: styles.duration3,
  },
  {
    step: "STEP 04",
    stepClass: styles.step4,
    progressClass: styles.progressFill4,
    title: "Demo + Ship",
    description: "Feature done. Demo it at standup. Collect feedback. Iterate same day if needed.",
    duration: "Next morning",
    durationClass: styles.duration4,
  },
]

const HowItWorks = () => (
  <section id="how-it-works" className={styles.section}>
    <h2 className={styles.heading}>How It Works</h2>
    <div className={styles.grid}>
      {steps.map((s, i) => (
        <div key={i} className={styles.card}>
          <span className={`${styles.stepBadge} ${s.stepClass}`}>{s.step}</span>
          <div className={styles.progressBar}>
            <div className={s.progressClass} />
          </div>
          <h3 className={styles.cardTitle}>{s.title}</h3>
          <p className={styles.cardDescription}>{s.description}</p>
          <div className={`${styles.cardDuration} ${s.durationClass}`}>{s.duration}</div>
        </div>
      ))}
    </div>
  </section>
)

export default HowItWorks
