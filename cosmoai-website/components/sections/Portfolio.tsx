import { PORTFOLIO } from '@/lib/data'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className="section-inner">
        <p className="section-label reveal">Our Work</p>
        <h2 className="section-title reveal">Live Projects We Built</h2>
        <p className="section-desc reveal">
          Real websites, real businesses — delivered and running across Bangladesh.
        </p>

        <div className={styles.grid}>
          {PORTFOLIO.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div
                className={styles.preview}
                style={{ background: p.bgColor }}
              >
                <div
                  className={styles.previewGlow}
                  style={{ background: `radial-gradient(circle at 55% 45%, ${p.glow}, transparent)` }}
                />
                <div className={styles.previewUrl}>{p.url.replace('https://','')}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{p.name}</div>
                <div className={styles.type}>{p.type}</div>
                <div className={styles.visitLink}>Visit Live Site →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
