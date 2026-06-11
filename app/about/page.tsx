'use client'

import { Navbar } from '@/components/navbar'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { motion } from 'framer-motion'
import { Shield, Zap, HeartHandshake } from 'lucide-react'

export default function AboutPage() {
  const { t } = useLanguage()

  const icons = [Zap, Shield, HeartHandshake]

  return (
    <>
      <Navbar />
      <main className="relative pt-32 min-h-screen bg-slate-950 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
              {t.about.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed text-pretty">
              {t.about.subtitle}
            </p>
          </motion.div>

          <div className="mt-24">
            <h2 className="text-2xl font-bold text-center text-white mb-12 uppercase tracking-widest">{t.about.values.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.about.values.items.map((value, idx) => {
                const Icon = icons[idx]
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
