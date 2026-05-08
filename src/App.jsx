import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SocialProofSection from './components/SocialProofSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import BenefitsSection from './components/BenefitsSection'
import PricingSection from './components/PricingSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import { useAppSettings } from './context/AppSettings'

function App() {
  const { theme } = useAppSettings()

  return (
    <div className={`overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : ''}`}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
