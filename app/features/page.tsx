import { Navbar } from '@/components/navbar'
import { FeaturesSection } from '@/components/features'
import { SolutionsSection } from '@/components/solutions'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Features & Solutions - Vendora',
  description: 'Explore the powerful features and industry-specific solutions of Vendora ERP.',
}

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-24 min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-transparent to-transparent pointer-events-none -z-10" />
        <FeaturesSection />
        <div className="py-12" />
        <SolutionsSection />
      </main>
      <Footer />
    </>
  )
}
