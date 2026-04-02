import Navbar from '@/components/Navbar'
import ClientEffects from '@/components/ClientEffects'
import FloatingCTA from '@/components/FloatingCTA'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Pricing from '@/components/sections/Pricing'
import School from '@/components/sections/School'
import AIPlatform from '@/components/sections/AIPlatform'
import Portfolio from '@/components/sections/Portfolio'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      {/* Background starfield canvas + scroll-reveal watcher */}
      <ClientEffects />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        <div className="divider" />

        {/* Services */}
        <Services />

        <div className="divider" />

        {/* Pricing */}
        <Pricing />

        <div className="divider" />

        {/* School ERP */}
        <School />

        <div className="divider" />

        {/* AI Platform */}
        <AIPlatform />

        <div className="divider" />

        {/* Portfolio */}
        <Portfolio />

        <div className="divider" />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingCTA />
    </>
  )
}
