'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import Link from 'next/link'
import ShaderBackground from './shader-background'

export function HomeCta() {
  const { t } = useLanguage()

  return (
    <section className="relative z-0 py-32 sm:py-48 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Shader Animation Background */}
      <ShaderBackground />
      
      {/* Optional overlay gradient to ensure text readability at top/bottom edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none -z-10" />
      
      {/* Soft dark radial glow to ensure text readability without sharp box edges */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-slate-950/80 blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-3 text-balance drop-shadow-2xl">
            {t.home_cta.title}
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 tracking-tight leading-tight mb-8 drop-shadow-xl">
            {t.home_cta.highlight}
          </h2>
        </motion.div>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-2xl text-pretty leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {t.home_cta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/pricing" className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-slate-900 border border-slate-700 rounded-full hover:border-cyan-500 hover:bg-slate-800 shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              {t.home_cta.btn}
              <svg className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            {/* Shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
