import { COMPANY, PORTFOLIO, SERVICES } from '@/lib/data'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div>
          <div className={styles.brandName}>COSMOAI</div>
          <div className={styles.brandTagline}>Technologies Ltd · AI-Powered Websites at Local Prices</div>
          <p className={styles.brandDesc}>
            Building Bangladesh&apos;s digital future — one intelligent website at a time.
            From simple business sites to complete school ERP systems, we deliver quality at local prices.
          </p>
        </div>

        {/* Services */}
        <div>
          <div className={styles.colTitle}>Services</div>
          <ul className={styles.links}>
            {SERVICES.slice(0, 5).map((s, i) => (
              <li key={i}><a href="#services">{s.title}</a></li>
            ))}
          </ul>
        </div>

        {/* Portfolio */}
        <div>
          <div className={styles.colTitle}>Portfolio</div>
          <ul className={styles.links}>
            {PORTFOLIO.map((p, i) => (
              <li key={i}>
                <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className={styles.colTitle}>Contact</div>
          <ul className={styles.links}>
            <li><a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a></li>
            <li><a href={`mailto:${COMPANY.emails.primary}`}>{COMPANY.emails.primary}</a></li>
            <li><a href={`mailto:${COMPANY.emails.secondary}`}>{COMPANY.emails.secondary}</a></li>
            <li><a href={COMPANY.websites.main} target="_blank" rel="noopener noreferrer">www.cosmoai.world</a></li>
            <li><a href={COMPANY.websites.ai} target="_blank" rel="noopener noreferrer">cosmoai.hair (AI)</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>
          © {year} COSMOAI Technologies Ltd · 145, Road 3, Block A, Niketon, Gulshan 1, Dhaka · All rights reserved
        </div>
        <div className={styles.socials}>
          <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="Facebook">📘</a>
          <a href={COMPANY.websites.ai} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="COSMOAI">🤖</a>
          <a href={`mailto:${COMPANY.emails.primary}`} className={styles.socialBtn} title="Email">✉️</a>
          <a href={`tel:${COMPANY.phone}`} className={styles.socialBtn} title="Call">📞</a>
          <a href={COMPANY.social.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title="WhatsApp">💬</a>
        </div>
      </div>
    </footer>
  )
}
