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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {t.trust_marquee.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400"
        >
          {t.trust_marquee.subtitle}
        </motion.p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-32 py-12">
          {brands.map((brand, i) => (
            <span key={i} className="text-2xl md:text-3xl font-black text-slate-700 tracking-widest uppercase hover:text-slate-500 transition-colors">
              {brand}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-32 py-12">
          {brands.map((brand, i) => (
            <span key={i} className="text-2xl md:text-3xl font-black text-slate-700 tracking-widest uppercase hover:text-slate-500 transition-colors">
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
