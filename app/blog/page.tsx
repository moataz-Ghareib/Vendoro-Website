'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function BlogPage() {
  const { t, language } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-slate-950 overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              {t.footer.links.blog}
            </h1>
            <p className="text-xl text-slate-400 mb-12">
              {language === 'ar' ? 'مقالات وأخبار عن تطوير الأعمال والتكنولوجيا قريباً...' : 'Articles and news about business and tech coming soon...'}
            </p>
            
            <div className="p-12 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <div className="w-20 h-20 mx-auto border-4 border-slate-800 border-t-cyan-500 rounded-full animate-spin mb-8" />
              <h2 className="text-2xl font-bold text-white mb-4">
                {language === 'ar' ? 'نحن نجهز محتوى رائعاً لك!' : 'We are preparing awesome content for you!'}
              </h2>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
