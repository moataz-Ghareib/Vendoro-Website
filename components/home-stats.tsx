'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function HomeStats() {
  const { t } = useLanguage()

  const stats = [
    { value: "99.9%", label: t.home_stats.uptime },
    { value: "10M+", label: t.home_stats.invoices },
    { value: "+500", label: t.home_stats.brands },
    { value: "+2M", label: t.home_stats.transactions },
  ]

  return (
    <div className="relative w-full border-t border-b border-white/5 bg-slate-950/80 backdrop-blur-xl py-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="flex flex-col gap-2 items-center text-center group cursor-pointer"
            >
              <motion.h3 
                className="text-4xl md:text-5xl font-black text-white tracking-tighter transition-colors duration-300 group-hover:text-cyan-400 drop-shadow-lg"
              >
                {stat.value}
              </motion.h3>
              <p className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest transition-colors duration-300 group-hover:text-slate-200">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
