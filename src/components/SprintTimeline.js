import React from "react"
import * as styles from "./SprintTimeline.module.css"

const SprintTimeline = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>This is why your sprints take two weeks.</h2>

    {/* Traditional Sprint Card */}
    <div className={styles.card}>
      <div className={styles.iconRow}>
        <div className={styles.iconBox}>
          <div className={styles.iconSquare}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2h8v12H4z" stroke="#555a6a" strokeWidth="1.5"/><path d="M6 5h4M6 7h4M6 9h2" stroke="#555a6a" strokeWidth="1"/></svg>
          </div>
          <span className={styles.iconLabel}>Spec</span>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.iconSquareRed}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="#ff3366"/><path d="M8 2v2M8 12v2M2 8h2M12 8h2" stroke="#ff3366" strokeWidth="1.5"/></svg>
          </div>
          <span className={styles.iconLabel}>Multi-day meetings</span>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.iconSquare}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 4h10v2H3zM5 8h6v2H5zM7 12h2v2H7z" stroke="#555a6a" strokeWidth="1"/></svg>
          </div>
          <span className={styles.iconLabel}>Planning</span>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.iconSquareRed}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="#ff3366"/><path d="M8 2v2M8 12v2M2 8h2M12 8h2" stroke="#ff3366" strokeWidth="1.5"/></svg>
          </div>
          <span className={styles.iconLabel}>Multi-day meetings</span>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.iconSquare}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l4-2 4 2v5l-4 5-4-5z" stroke="#555a6a" strokeWidth="1.2"/><path d="M6 7h4M8 6v3" stroke="#555a6a" strokeWidth="1"/></svg>
          </div>
          <span className={styles.iconLabel}>Dev</span>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.iconSquareRed}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="1.5" fill="#ff3366"/><path d="M8 8v3" stroke="#ff3366" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <span className={styles.iconLabel}>Dev Questions</span>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.iconSquare}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="4" stroke="#555a6a" strokeWidth="1.2"/><path d="M5 12h6" stroke="#555a6a" strokeWidth="1.2"/></svg>
          </div>
          <span className={styles.iconLabel}>Review</span>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.iconSquareRed}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="#ff3366" strokeWidth="1.5"/></svg>
          </div>
          <span className={styles.iconLabel}>Redesign meetings</span>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.iconSquare}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l6 10H2z" stroke="#555a6a" strokeWidth="1.2"/></svg>
          </div>
          <span className={styles.iconLabel}>Ship</span>
        </div>
      </div>
      <div className={styles.duration}>2-4 WEEKS</div>
      <div className={styles.durationSub}>Average sprint: 2-4 weeks</div>
      <div className={styles.tagline}>Most of your sprint isn't building, it's waiting.</div>
    </div>

    {/* Swarm Card */}
    <div className={styles.swarmCard}>
      <div className={styles.roleRow}>
        <div className={styles.role}>
          <div className={styles.roleIconProduct}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" fill="#00e5c8"/><path d="M10 3v2M10 15v2M3 10h2M15 10h2" stroke="#00e5c8" strokeWidth="1.5"/></svg>
          </div>
          <span className={styles.roleLabel}>Product</span>
        </div>
        <span className={styles.arrow}>↔</span>
        <div className={styles.role}>
          <div className={styles.roleIconAi}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="5" fill="#00e5c8" opacity="0.3"/><circle cx="11" cy="11" r="3" fill="#00e5c8"/></svg>
          </div>
          <span className={styles.roleLabel}>AI</span>
        </div>
        <span className={styles.arrow}>↔</span>
        <div className={styles.role}>
          <div className={styles.roleIconEngineer}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 7l-4 3 4 3M14 7l4 3-4 3M12 5l-4 10" stroke="#00e5c8" strokeWidth="1.5"/></svg>
          </div>
          <span className={styles.roleLabel}>Engineer</span>
        </div>
      </div>
      <div className={styles.downArrow}>↓</div>
      <div className={styles.shipBadge}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-8" stroke="#08090d" strokeWidth="2"/></svg>
        Ship
      </div>
      <div><div className={styles.swarmDuration}>1 DAY</div></div>
      <div className={styles.swarmTagline}>Same room. Same screen. Ship the same day.</div>
    </div>
  </section>
)

export default SprintTimeline
