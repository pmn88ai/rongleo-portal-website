import { HeroSection } from '@/components/portal/HeroSection'
import { CapabilitiesSection } from '@/components/portal/CapabilitiesSection'
import { HomepageProductsSection } from '@/components/portal/HomepageProductsSection'
import { HomepageThinkingSection } from '@/components/portal/HomepageThinkingSection'
import { ContactSection } from '@/components/portal/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <HomepageProductsSection />
      <HomepageThinkingSection />
      <ContactSection />
    </>
  )
}
