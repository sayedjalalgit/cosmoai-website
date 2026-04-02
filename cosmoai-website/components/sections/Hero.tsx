import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.gridOverlay} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          AI-Powered Digital Solutions
        </div>

        <h1 className={styles.title}>
          <span className={styles.cosmo}>COSMOAI</span>
          <span className={styles.line2}>Technologies Ltd</span>
        </h1>

        <p className={styles.tagline}>AI-Powered Websites at Local Prices</p>

        <p className={styles.desc}>
          We build intelligent digital experiences — websites, school management systems, AI tools,
          and enterprise software — tailored for Bangladesh&apos;s businesses.
          Own your website forever. <strong>Pay after you see it.</strong>
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className="btn-primary">View Pricing</a>
          <a href="#contact" className="btn-outline">Get Free Demo</a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>50+</span>
            <span className={styles.statLabel}>Projects Done</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>On-Time Delivery</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>24/7</span>
            <span className={styles.statLabel}>Tech Support</span>
          </div>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.orbitContainer}>
          <div className={`${styles.orbitRing} ${styles.ring1}`}>
            <div className={styles.orbitDot}></div>
          </div>
          <div className={`${styles.orbitRing} ${styles.ring2}`}>
            <div className={styles.orbitDot}></div>
          </div>
          <div className={`${styles.orbitRing} ${styles.ring3}`}>
            <div className={styles.orbitDot}></div>
          </div>
          <div className={styles.orbitCore}></div>
        </div>
      </div>
    </section>
  )
}
