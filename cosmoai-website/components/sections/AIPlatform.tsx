import { AI_FEATURES } from '@/lib/data'
import styles from './AIPlatform.module.css'

export default function AIPlatform() {
  return (
    <section id="ai-platform" className={styles.section}>
      <div className="section-inner">
        <p className="section-label reveal">AI Platform</p>
        <div className={styles.layout}>
          {/* Left */}
          <div>
            <h2 className="section-title reveal">
              Meet COSMOAI —<br />Your AI Teaching Assistant
            </h2>
            <p className={`section-desc reveal`}>
              Powered by cutting-edge AI, our platform helps teachers work smarter. Available at{' '}
              <a href="https://cosmoai.hair" target="_blank" rel="noopener noreferrer" className={styles.link}>
                cosmoai.hair
              </a>
            </p>
            <div className={`${styles.features} reveal`}>
              {AI_FEATURES.map((f, i) => (
                <div key={i} className={styles.feature}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <div>
                    <div className={styles.featureTitle}>{f.title}</div>
                    <div className={styles.featureDesc}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Chat Demo */}
          <div className={`${styles.demoWrap} reveal`}>
            <div className={styles.demo}>
              <div className={styles.demoHeader}>
                <div className={styles.statusDot}></div>
                <div className={styles.demoTitle}>COSMOAI Assistant — Live Demo</div>
              </div>
              <div className={styles.demoBody}>
                <div className={`${styles.msg} ${styles.user}`}>
                  Generate 5 MCQ questions on photosynthesis for Class 8
                </div>
                <div className={`${styles.msg} ${styles.bot}`}>
                  <strong>Here are 5 MCQ questions on Photosynthesis (Class 8):</strong>
                  <br /><br />
                  1. Which pigment is primarily responsible for capturing sunlight?<br />
                  &nbsp;&nbsp;a) Carotene &nbsp; b) <strong>Chlorophyll ✓</strong><br />
                  &nbsp;&nbsp;c) Melanin &nbsp;&nbsp;d) Anthocyanin
                  <br /><br />
                  <em className={styles.dim}>3 more questions generated...</em>
                </div>
                <div className={`${styles.msg} ${styles.user}`}>
                  Now write a parent notice for tomorrow&apos;s PTM
                </div>
                <div className={`${styles.msg} ${styles.bot}`}>
                  <strong>Parent Notice – PTM Announcement</strong><br /><br />
                  Dear Parents/Guardians,<br />
                  This is to inform you that the Parent-Teacher Meeting (PTM) is scheduled for <em>tomorrow</em>.
                  Your attendance is earnestly requested...
                </div>
              </div>
              <div className={styles.inputRow}>
                <input className={styles.input} placeholder="Ask COSMOAI anything..." readOnly />
                <button className={styles.send}>→ Send</button>
              </div>
            </div>
            <div className={styles.demoAction}>
              <a href="https://cosmoai.hair" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Try COSMOAI Free →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
