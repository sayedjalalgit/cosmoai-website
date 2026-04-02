'use client'

import { useState } from 'react'
import { COMPANY } from '@/lib/data'
import styles from './Contact.module.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="section-inner">
        <p className="section-label reveal">Get In Touch</p>
        <h2 className="section-title reveal">
          Let&apos;s Build Something<br />Amazing Together
        </h2>

        <div className={styles.layout}>
          {/* Info */}
          <div className={`${styles.info} reveal`}>
            {[
              {
                icon: '📍',
                label: 'Office Address',
                content: (
                  <>145, Road 3, Block A, Niketon<br />Gulshan 1, Dhaka, Bangladesh</>
                ),
              },
              {
                icon: '📞',
                label: 'Phone / WhatsApp',
                content: (
                  <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
                ),
              },
              {
                icon: '✉️',
                label: 'Email',
                content: (
                  <>
                    <a href={`mailto:${COMPANY.emails.primary}`}>{COMPANY.emails.primary}</a>
                    <br />
                    <a href={`mailto:${COMPANY.emails.secondary}`}>{COMPANY.emails.secondary}</a>
                  </>
                ),
              },
              {
                icon: '🌐',
                label: 'Web & Social',
                content: (
                  <>
                    <a href={COMPANY.websites.main} target="_blank" rel="noopener noreferrer">
                      www.cosmoai.world
                    </a>
                    <br />
                    <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer">
                      Facebook Page →
                    </a>
                  </>
                ),
              },
              {
                icon: '🤖',
                label: 'AI Platform',
                content: (
                  <a href={COMPANY.websites.ai} target="_blank" rel="noopener noreferrer">
                    www.cosmoai.hair
                  </a>
                ),
              },
            ].map((item, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.icon}>{item.icon}</div>
                <div>
                  <div className={styles.itemLabel}>{item.label}</div>
                  <div className={styles.itemVal}>{item.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="reveal">
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Your Name</label>
                  <input className={styles.input} type="text" placeholder="Full name" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Phone Number</label>
                  <input className={styles.input} type="tel" placeholder="+880..." required />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email Address</label>
                <input className={styles.input} type="email" placeholder="your@email.com" />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Service Interested In</label>
                <input className={styles.input} type="text" placeholder="e.g. School ERP, Restaurant Website..." />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} placeholder="Tell us about your project..." rows={4} />
              </div>
              <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </button>
              {submitted && (
                <p className={styles.successMsg}>
                  Thank you! We will contact you within 24 hours.
                </p>
              )}
              <p className={styles.orCall}>
                Or call/WhatsApp:{' '}
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
