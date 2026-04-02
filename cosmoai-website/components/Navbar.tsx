'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#school', label: 'School ERP' },
  { href: '#ai-platform', label: 'AI Platform' },
  { href: '#portfolio', label: 'Portfolio' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="38" rx="22" ry="10" stroke="url(#g1)" strokeWidth="2.5"/>
            <ellipse cx="30" cy="38" rx="22" ry="10" stroke="url(#g1)" strokeWidth="2.5" transform="rotate(-30 30 38)"/>
            <circle cx="30" cy="16" r="5" fill="url(#g2)"/>
            <defs>
              <linearGradient id="g1" x1="8" y1="38" x2="52" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00d4ff"/><stop offset="1" stopColor="#1e6fff"/>
              </linearGradient>
              <linearGradient id="g2" x1="25" y1="11" x2="35" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00d4ff"/><stop offset="1" stopColor="#1e6fff"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.brand}>
          <span className={styles.brandName}>COSMOAI</span>
          <span className={styles.brandSub}>Technologies Ltd</span>
        </div>
      </Link>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className={styles.cta} onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </li>
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
      </button>
    </nav>
  )
}
