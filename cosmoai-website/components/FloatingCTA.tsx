import { COMPANY } from '@/lib/data'
import styles from './FloatingCTA.module.css'

export default function FloatingCTA() {
  return (
    <div className={styles.wrap}>
      <a
        href={COMPANY.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        title="WhatsApp Us"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  )
}
