'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export function ImageBlock() {
  const { t, dir } = useLanguage()

  return (
    <section className="py-24 sm:py-32 bg-slate-950 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Container */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center order-first"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight text-balance">
              {t.image_block.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed text-pretty">
              {t.image_block.subtitle}
            </p>

            <ul className="space-y-5 mb-10">
              {t.image_block.points.map((point, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-slate-300 font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>

            <Link 
              href="/features"
              className="group inline-flex items-center gap-3 text-cyan-400 font-bold hover:text-cyan-300 transition-colors w-fit"
            >
              <span className="text-lg relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400/50 after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                {t.image_block.link}
              </span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative order-last"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 aspect-[4/5] md:aspect-square flex items-center justify-center">
              <Image 
                src="/images/vendora-dashboard.png" 
                alt="Vendora POS Dashboard"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
