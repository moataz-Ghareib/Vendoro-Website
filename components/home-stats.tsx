'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function HomeStats() {
  const { t } = useLanguage()

  const stats = [
    { value: "2M+", label: t.home_stats.transactions },
    { value: "500+", label: t.home_stats.brands },
    { value: "99.9%", label: t.home_stats.uptime },
  ]

  return (
    <div className="w-full border-t border-b border-white/5 bg-slate-950/50 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-1 items-start"
            >
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
