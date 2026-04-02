import { SERVICES } from '@/lib/data'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="section-inner">
        <p className="section-label reveal">What We Build</p>
        <h2 className="section-title reveal">Complete Digital Solutions<br />for Every Business</h2>
        <p className="section-desc reveal">
          From simple websites to complex enterprise systems — we engineer solutions that grow with your business.
        </p>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${s.delay}`}>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <ul className={styles.features}>
                {s.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <span className={styles.tag}>{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
