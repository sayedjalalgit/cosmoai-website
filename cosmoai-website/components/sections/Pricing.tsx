import { PRICING } from '@/lib/data'
import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className="section-inner">
        <p className="section-label reveal">Transparent Pricing</p>
        <h2 className="section-title reveal">Own Your Website. Forever.<br />Pay After You See It.</h2>
        <p className="section-desc reveal">
          No hidden charges, no monthly fees. One-time payment and your website belongs to you.
        </p>

        <div className={styles.grid}>
          {PRICING.map((p, i) => (
            <div
              key={i}
              className={`${styles.card} ${p.featured ? styles.featured : ''} reveal reveal-delay-${(i % 4) + 1}`}
            >
              {p.featured && <div className={styles.popularBadge}>POPULAR</div>}
              <div className={styles.cat}>{p.cat}</div>
              <div className={styles.price}>{p.price} <span>BDT</span></div>
              <div className={styles.period}>{p.period}</div>
              <ul className={styles.features}>
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <a
                href="#contact"
                className={p.featured ? 'btn-primary' : 'btn-outline'}
                style={{ width: '100%', textAlign: 'center', fontSize: '0.78rem', padding: '10px 16px' }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className={`${styles.renewNote} reveal`}>
          🔄 After 1 year — renew only Domain & Hosting for{' '}
          <strong>Tk. 2,500/year</strong>. No hidden charges, ever.
        </div>
      </div>
    </section>
  )
}
