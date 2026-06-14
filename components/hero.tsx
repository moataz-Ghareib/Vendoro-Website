'use client'

import Image from 'next/image'
import Link from 'next/link'
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
            <Link href="/pricing" className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold text-lg hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
              {t.hero.start_btn}
              {language === 'ar' ? (
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              )}
            </Link>
            <Link href="/about" className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/50 text-slate-300 font-bold text-lg hover:bg-slate-800 hover:text-white transition-all duration-300 backdrop-blur-sm hover:border-slate-500 flex items-center justify-center">
              {t.hero.demo_btn}
            </Link>
          </motion.div>

          {/* Dashboard Preview Mockup */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-5xl mx-auto mt-24"
            style={{ perspective: "2000px" }}
          >
            {/* Massive Glowing Aura behind the image */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90%] h-[60%] bg-gradient-to-r from-cyan-500/40 via-indigo-500/40 to-purple-500/40 blur-[100px] rounded-full pointer-events-none -z-10" />
            
            {/* Floating Card 1 (Sales) */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: -30, y: 80 }}
              transition={{ duration: 1.5, delay: 0.8, type: "spring", bounce: 0.4 }}
              className="absolute -left-16 top-1/4 z-20 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl hidden lg:flex flex-col gap-2"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-left" dir="ltr">
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Total Revenue</p>
                  <p className="text-lg font-black text-white leading-none">+42.8%</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 (Live Sync) */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 0 }}
              animate={{ opacity: 1, x: 30, y: -40 }}
              transition={{ duration: 1.5, delay: 1, type: "spring", bounce: 0.4 }}
              className="absolute -right-12 bottom-1/3 z-20 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl hidden lg:flex flex-col gap-2"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute" />
                  <div className="w-3 h-3 bg-cyan-400 rounded-full relative" />
                </div>
                <div className="text-left" dir="ltr">
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">System Status</p>
                  <p className="text-lg font-black text-white leading-none">Live Sync</p>
                </div>
              </div>
            </motion.div>

            {/* The 3D Mockup Container */}
            <motion.div 
              className="relative rounded-2xl border border-slate-700/50 bg-slate-900/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-sm group"
              initial={{ rotateX: 15, y: 40, opacity: 0 }}
              animate={{ rotateX: 15, y: 0, opacity: 1 }}
              whileHover={{ rotateX: 0, y: -10, transition: { duration: 0.6, ease: "easeOut" } }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Fake Browser Header (Mac style) */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 relative z-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                </div>
                <div className="ml-4 px-4 py-1.5 bg-slate-950/50 border border-white/5 rounded-md text-xs text-slate-400 font-mono flex-1 text-center max-w-md mx-auto shadow-inner" dir="ltr">
                  app.vendora.com/dashboard
                </div>
              </div>

              {/* Actual Dashboard Image */}
              <div className="relative w-full overflow-hidden bg-slate-950">
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none z-10" />
                
                <Image 
                  src="/dashboard.png" 
                  alt="Vendora Dashboard" 
                  width={1400} 
                  height={900} 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

