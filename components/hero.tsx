'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function HeroSection() {
  const { t, language } = useLanguage()

  return (
    <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-slate-950 -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] opacity-30 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 backdrop-blur-sm">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-sm font-medium text-indigo-300">{t.hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight text-white tracking-tight"
          >
            {t.hero.headline_part1}
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
               {t.hero.headline_part2}
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.subtext}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
              {t.hero.start_btn}
              {language === 'ar' ? (
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              )}
            </button>
            <button className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/50 text-slate-300 font-bold text-lg hover:bg-slate-800 hover:text-white transition-all duration-300 backdrop-blur-sm hover:border-slate-500">
              {t.hero.demo_btn}
            </button>
          </motion.div>

          {/* Dashboard Preview Mockup */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-5xl mx-auto perspective-1000"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
            
            <div className="relative rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden transform rotate-x-2 hover:rotate-x-0 transition-transform duration-700 ease-out">
              {/* Fake Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-400 font-mono flex-1 text-left" dir="ltr">
                  app.vendora-erp.com/dashboard
                </div>
              </div>

              {/* Actual Dashboard Image */}
              <div className="bg-slate-950 w-full overflow-hidden">
                <Image 
                  src="/dashboard.png" 
                  alt="Vendora Dashboard" 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

