'use client'

import { useEffect } from 'react'
import styles from './ClientEffects.module.css'

export default function ClientEffects() {
  useEffect(() => {
    // ── Starfield ──
    const canvas = document.getElementById('starfield') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let stars: { x: number; y: number; r: number; o: number; s: number }[] = []
    let animId: number

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function initStars() {
      stars = []
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4,
          o: Math.random() * 0.6 + 0.1,
          s: Math.random() * 0.25 + 0.05,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,220,255,${s.o})`
        ctx.fill()
        s.y += s.s
        if (s.y > canvas.height) {
          s.y = 0
          s.x = Math.random() * canvas.width
        }
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    initStars()
    draw()

    const onResize = () => { resize(); initStars() }
    window.addEventListener('resize', onResize)

    // ── Scroll Reveal ──
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach(r => observer.observe(r))

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      id="starfield"
      className={styles.starfield}
      aria-hidden="true"
    />
  )
}
