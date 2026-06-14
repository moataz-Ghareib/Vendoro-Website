'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function TrustMarquee() {
  const { t } = useLanguage()

  // Abstract brand names as placeholders (similar to Gucci, Prada etc in Fasla)
  const brands = ["VENDORA", "AURA", "NOVA", "VERTEX", "LUMINA", "ZENITH", "NEXUS", "OMNI", "VENDORA", "AURA", "NOVA", "VERTEX"]

  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-cyan-500 mb-6 tracking-tight"
        >
          {t.trust_marquee.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          {t.trust_marquee.subtitle}
        </motion.p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-24 md:gap-40 py-12">
          {brands.map((brand, i) => (
            <span key={i} className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-800 tracking-[0.2em] uppercase hover:text-slate-600 transition-colors duration-500">
              {brand}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-24 md:gap-40 py-12">
          {brands.map((brand, i) => (
            <span key={i} className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-800 tracking-[0.2em] uppercase hover:text-slate-600 transition-colors duration-500">
              {brand}
            </span>
          ))}
        </div>
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
      </div>
    </section>
  )
}
