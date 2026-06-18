import { HeroSection } from '@/components/portal/HeroSection'
import { CapabilitiesSection } from '@/components/portal/CapabilitiesSection'
import { HomepageProductsSection } from '@/components/portal/HomepageProductsSection'
import { ContactSection } from '@/components/portal/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <HomepageProductsSection />
      <ContactSection />
    </>
  )
}
