import { HeroSection } from '@/components/portal/HeroSection'
import { CapabilitiesSection } from '@/components/portal/CapabilitiesSection'
import { ContactSection } from '@/components/portal/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div id="solutions" className="h-1" />
      <CapabilitiesSection />
      <ContactSection />
    </>
  )
}
