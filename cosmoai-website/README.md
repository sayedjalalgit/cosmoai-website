# COSMOAI Technologies Ltd — Official Website

> **Next.js 14 · TypeScript · CSS Modules · Vercel Ready**

AI-Powered company website for COSMOAI Technologies Ltd, Dhaka, Bangladesh.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
cosmoai-website/
├── app/
│   ├── layout.tsx          ← Root layout, SEO metadata, Google Fonts
│   ├── page.tsx            ← Main page (assembles all sections)
│   └── globals.css         ← Design tokens, animations, global styles
│
├── components/
│   ├── Navbar.tsx           ← Responsive navigation with mobile menu
│   ├── Navbar.module.css
│   ├── ClientEffects.tsx    ← Starfield canvas + scroll-reveal (client)
│   ├── ClientEffects.module.css
│   ├── FloatingCTA.tsx      ← Floating WhatsApp button
│   ├── FloatingCTA.module.css
│   └── sections/
│       ├── Hero.tsx + .css         ← Hero with orbital animation
│       ├── Services.tsx + .css     ← 6 service cards
│       ├── Pricing.tsx + .css      ← 4 pricing tiers
│       ├── School.tsx + .css       ← School ERP + dashboard mockup
│       ├── AIPlatform.tsx + .css   ← COSMOAI platform + chat demo
│       ├── Portfolio.tsx + .css    ← 6 live project cards
│       ├── Contact.tsx + .css      ← Contact form + info
│       └── Footer.tsx + .css       ← Full footer with links
│
├── lib/
│   └── data.ts             ← All content: services, pricing, portfolio
│
├── public/                 ← Static assets (add logo.png here)
├── vercel.json             ← Vercel deployment config
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🌐 Deploy to Vercel (Step by Step)

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "feat: COSMOAI website initial build"

# Create repo on github.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/cosmoai-website.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to **https://vercel.com**
2. Click **"Add New Project"**
3. Click **"Import Git Repository"** → select `cosmoai-website`
4. Framework: **Next.js** (auto-detected ✅)
5. Click **"Deploy"** 🚀

### Step 3 — Add Custom Domain

1. In Vercel → your project → **Settings → Domains**
2. Add: `cosmoai.world`
3. Add: `www.cosmoai.world`
4. Vercel shows required DNS values

### Step 4 — Update DNS at Your Registrar

| Type   | Host  | Value                  |
|--------|-------|------------------------|
| A      | `@`   | `76.76.21.21`          |
| CNAME  | `www` | `cname.vercel-dns.com` |

> ⏱ DNS propagation: 5 minutes to 24 hours

---

## ✏️ How to Update Content

All website content is in **`lib/data.ts`** — edit there to update:

- Company info → `COMPANY` object
- Services → `SERVICES` array
- Pricing → `PRICING` array
- Portfolio projects → `PORTFOLIO` array
- School modules → `SCHOOL_MODULES` array
- AI features → `AI_FEATURES` array

---

## 🎨 Design System

| Variable          | Value              |
|-------------------|--------------------|
| Background        | `#03050f`          |
| Accent Cyan       | `#00d4ff`          |
| Accent Blue       | `#1e6fff`          |
| Text Primary      | `#e8f4ff`          |
| Text Secondary    | `#7a9cc4`          |
| Display Font      | Orbitron           |
| Body Font         | Syne               |
| Mono Font         | JetBrains Mono     |

---

## 📞 Contact

- **Phone/WhatsApp:** +880 1326 047213
- **Email:** info@cosmoai.world
- **Address:** 145, Road 3, Block A, Niketon, Gulshan 1, Dhaka
- **Website:** https://cosmoai.world
- **AI Platform:** https://cosmoai.hair
- **Facebook:** https://www.facebook.com/profile.php?id=61587080355854

---

© 2025 COSMOAI Technologies Ltd. All rights reserved.
