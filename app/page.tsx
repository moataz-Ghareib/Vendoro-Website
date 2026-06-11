import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero'
import { HomeStats } from '@/components/home-stats'
import { TrustMarquee } from '@/components/trust-marquee'
import { FeaturesSection } from '@/components/features'
import { ImageBlock } from '@/components/image-block'
import { HomeCta } from '@/components/home-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-slate-950">
        <HeroSection />
        <HomeStats />
        {/* We reuse the Bento grid as a features teaser on the home page since it looks great */}
        <FeaturesSection />
        <ImageBlock />
        <TrustMarquee />
        <HomeCta />
      </main>
      <Footer />
    </>
  )
}
