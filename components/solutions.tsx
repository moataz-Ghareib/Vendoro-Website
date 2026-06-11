'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Barcode, Clock, Package, Zap } from 'lucide-react'
import { useState } from 'react'
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

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<'retail' | 'fbh' | 'enterprise' | 'performance'>('retail')
  const { t, language } = useLanguage()

  const tabs = [
    { id: 'retail' as const, ...t.solutions.items.retail },
    { id: 'fbh' as const, ...t.solutions.items.fbh },
    { id: 'enterprise' as const, ...t.solutions.items.enterprise },
    { id: 'performance' as const, ...t.solutions.items.performance },
  ]

  const activeSolution = tabs.find((s) => s.id === activeTab)!
  const Icon = icons[activeSolution.id]
  const color = colors[activeSolution.id]

  return (
    <section id="solutions" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none -z-20" />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${color} rounded-full blur-[120px] opacity-10 pointer-events-none transition-colors duration-700 -z-10`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-balance text-white">
            {t.solutions.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t.solutions.subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {tabs.map((solution) => {
            const isActive = activeTab === solution.id
            return (
              <motion.button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all relative overflow-hidden group ${
                  isActive
                    ? `text-white shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]`
                    : 'bg-slate-900/50 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={`absolute inset-0 bg-gradient-to-r ${colors[solution.id]} -z-10`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {solution.title}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Active Solution Content with AnimatePresence */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, x: language === 'ar' ? -40 : 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: language === 'ar' ? 40 : -40, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="grid lg:grid-cols-2 gap-12 items-center absolute inset-0"
            >
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-4 mb-6">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{activeSolution.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">{activeSolution.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  {activeSolution.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-800/60 transition-colors"
                      initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                      <span className="text-slate-300 font-medium text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className={`mt-10 px-8 py-4 rounded-xl bg-gradient-to-r ${color} text-white font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1 flex items-center gap-2`}
                >
                  {t.solutions.learn_more}
                </motion.button>
              </div>

              {/* Advanced 3D Visual Preview */}
              <motion.div
                className="relative perspective-1000 hidden lg:block"
                initial={{ opacity: 0, scale: 0.8, rotateY: language === 'ar' ? -30 : 30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              >
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="relative rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl transform-gpu preserve-3d"
                >
                  {/* Fake UI Header */}
                  <div className="flex items-center gap-2 mb-8 pb-4 border-b border-slate-800">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className={`ml-auto px-4 py-1.5 rounded-md bg-gradient-to-r ${color} opacity-20`} />
                  </div>

                  {/* 3D Floating Elements Inside */}
                  <div className="space-y-6 relative z-10">
                    {[1, 2, 3].map((item, i) => (
                      <motion.div 
                        key={item} 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.2 }}
                        className="h-20 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center px-6 relative overflow-hidden group"
                      >
                        {/* Animated fill effect */}
                        <motion.div 
                          className={`absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r ${color} opacity-20 group-hover:w-full transition-all duration-700`} 
                        />
                        <div className={`h-3 w-12 rounded-full bg-gradient-to-r ${color} mr-4`} />
                        <div className="space-y-2 flex-1">
                          <div className="h-2 w-3/4 rounded bg-slate-700" />
                          <div className="h-2 w-1/2 rounded bg-slate-700/50" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Decorative glowing orb inside the card */}
                  <div className={`absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-gradient-to-br ${color} rounded-full blur-[60px] opacity-20 -z-10`} />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
