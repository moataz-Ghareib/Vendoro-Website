'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wallet, Database, Layers, Shield, Zap, BarChart3 } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const icons = [Wallet, Database, Layers, Shield, Zap, BarChart3]

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden bg-slate-950">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature, idx) => {
            const Icon = icons[idx]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative h-full"
              >
                {/* Glowing border effect on hover */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-cyan-500/40 via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card Content */}
                <div className="relative h-full flex flex-col p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 transition-all duration-500 group-hover:bg-slate-900/90 group-hover:-translate-y-2">
                  
                  {/* Icon Container */}
                  <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 shadow-inner group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-indigo-600 group-hover:border-transparent transition-all duration-500">
                    <Icon size={30} className="text-cyan-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 text-base leading-relaxed flex-1 group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
