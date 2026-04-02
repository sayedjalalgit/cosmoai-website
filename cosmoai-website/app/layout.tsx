import type { Metadata } from 'next'
import { Orbitron, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '900'],
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400'],
})

export const metadata: Metadata = {
  title: 'COSMOAI Technologies Ltd – AI-Powered Digital Solutions',
  description:
    'COSMOAI Technologies Ltd builds intelligent digital experiences — websites, school management systems, AI tools, and enterprise software — tailored for Bangladesh businesses. AI-Powered Websites at Local Prices.',
  keywords: [
    'COSMOAI', 'Bangladesh web development', 'school management system',
    'AI website Bangladesh', 'website Dhaka', 'school ERP Bangladesh',
    'bKash payment integration', 'Next.js Bangladesh',
  ],
  authors: [{ name: 'COSMOAI Technologies Ltd' }],
  creator: 'COSMOAI Technologies Ltd',
  metadataBase: new URL('https://cosmoai.world'),
  openGraph: {
    title: 'COSMOAI Technologies Ltd',
    description: 'AI-Powered Websites at Local Prices. Pay after you see your website.',
    url: 'https://cosmoai.world',
    siteName: 'COSMOAI Technologies Ltd',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COSMOAI Technologies Ltd',
    description: 'AI-Powered Websites at Local Prices',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${syne.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
