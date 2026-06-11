import { Navbar } from '@/components/navbar'
import { PricingSection } from '@/components/pricing'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Pricing - Vendora',
  description: 'Simple, transparent pricing for Vendora ERP. Choose the perfect plan for your business.',
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-24 min-h-screen flex flex-col justify-center">
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}
