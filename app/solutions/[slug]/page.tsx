'use client'

import { useEffect, useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle2, Barcode, Clock, Package, Zap } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const icons = {
  retail: Barcode,
  fbh: Clock,
  enterprise: Package,
  performance: Zap,
}

const colors = {
  retail: 'from-cyan-500 to-cyan-600',
  fbh: 'from-indigo-500 to-indigo-600',
  enterprise: 'from-emerald-500 to-emerald-600',
  performance: 'from-amber-500 to-amber-600',
}

export default function SolutionPage() {
  const params = useParams()
  const slug = params?.slug as string
  const { t, language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Validate slug
  if (!slug || !['retail', 'fbh', 'enterprise', 'performance'].includes(slug)) {
    notFound()
  }

  const solutionKey = slug as keyof typeof t.solutions.items
  const solutionData = t.solutions.items[solutionKey]
  const Icon = icons[solutionKey]
  const colorClass = colors[solutionKey]

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-slate-950 overflow-hidden pt-24">
        {/* Background glow specific to solution */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-br ${colorClass} rounded-full blur-[150px] opacity-20 pointer-events-none -z-10`} />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-900/50 border border-slate-700 mb-8 backdrop-blur-md">
                <Icon size={20} className="text-white" />
                <span className="text-sm font-bold text-slate-200 tracking-wide">{t.solutions.title}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
                {solutionData.title}
              </h1>
              
              <p className="text-xl text-slate-400 mb-10 leading-relaxed text-pretty">
                {solutionData.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className={`px-8 py-4 rounded-xl bg-gradient-to-r ${colorClass} text-white font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2`}>
                  {t.hero.start_btn}
                </a>
              </div>
            </motion.div>

            {/* Features List Layout */}
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
                {t.pricing.whats_included}
              </h3>
              <div className="space-y-6">
                {solutionData.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 size={24} className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                    </div>
                    <p className="text-lg text-slate-300 font-medium leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form customized for this page */}
        <div className="relative z-10 border-t border-slate-800/50">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
