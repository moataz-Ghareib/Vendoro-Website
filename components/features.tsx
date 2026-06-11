'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Wallet, Database, Layers, Shield, Zap, BarChart3 } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const icons = [Wallet, Database, Layers, Shield, Zap, BarChart3]
const gradients = [
  'from-cyan-500 to-cyan-600',
  'from-indigo-500 to-indigo-600',
  'from-emerald-500 to-emerald-600',
  'from-red-500 to-red-600',
  'from-amber-500 to-amber-600',
  'from-pink-500 to-pink-600',
]
const sizes = [
  'col-span-1 md:col-span-2 md:row-span-2',
  'col-span-1 md:col-span-1 md:row-span-1',
  'col-span-1 md:col-span-1 md:row-span-1',
  'col-span-1 md:col-span-1 md:row-span-1',
  'col-span-1 md:col-span-1 md:row-span-1',
  'col-span-1 md:col-span-2 md:row-span-1',
]

function TiltCard({ children, className, gradient }: { children: React.ReactNode, className: string, gradient: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-8 overflow-hidden group hover:border-slate-600 transition-colors duration-300 ${className}`}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="relative z-10 h-full flex flex-col">
        {children}
      </div>
      {/* Background Glow */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} 
        style={{ transform: "translateZ(0px)" }}
      />
      {/* Bottom glowing line on hover */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient} w-0 group-hover:w-full transition-all duration-700 ease-out`} />
    </motion.div>
  )
}

export function FeaturesSection() {
  const { t } = useLanguage()

  return (
    <section id="features" className="relative py-20 sm:py-32 overflow-hidden perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent pointer-events-none" />

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
            {t.features.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {t.features.items.map((feature, idx) => {
            const Icon = icons[idx]
            return (
              <motion.div
                key={idx}
                className={sizes[idx]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{ perspective: 1000 }}
              >
                <TiltCard className="h-full" gradient={gradients[idx]}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[idx]} flex items-center justify-center mb-6 shadow-lg shadow-black/50`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 text-base leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
