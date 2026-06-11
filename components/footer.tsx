'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Share2, Send } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow duration-300">
                <span className="text-white font-black text-xl tracking-tighter group-hover:scale-110 transition-transform duration-300">V</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Vendora
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{t.footer.product}</h4>
            <ul className="space-y-4">
              {[
                { key: 'features', path: '/features' },
                { key: 'solutions', path: '/features#solutions' },
                { key: 'pricing', path: '/pricing' },
                { key: 'security', path: '/about' }
              ].map((item) => (
                <li key={item.key}>
                  <Link href={item.path} className="text-sm font-medium text-slate-400 hover:text-cyan-400 hover:translate-x-1 inline-block transition-all duration-300">
                    {t.footer.links[item.key as keyof typeof t.footer.links]}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{t.footer.company}</h4>
            <ul className="space-y-4">
              {[
                { key: 'about', path: '/about' },
                { key: 'blog', path: '#' },
                { key: 'careers', path: '#' },
                { key: 'contact', path: '/about#contact' }
              ].map((item) => (
                <li key={item.key}>
                  <Link href={item.path} className="text-sm font-medium text-slate-400 hover:text-cyan-400 hover:translate-x-1 inline-block transition-all duration-300">
                    {t.footer.links[item.key as keyof typeof t.footer.links]}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{t.footer.legal}</h4>
            <ul className="space-y-4">
              {['privacy', 'terms', 'cookies', 'gdpr'].map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} className="text-sm font-medium text-slate-400 hover:text-cyan-400 hover:translate-x-1 inline-block transition-all duration-300">
                    {t.footer.links[item as keyof typeof t.footer.links]}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-800/60 pt-8 mt-8">
          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-500 font-medium">
              © {currentYear} {t.footer.rights}
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300 group"
              >
                <Share2 size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500 hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 group"
              >
                <Send size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:hello@vendora.com"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-500 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
