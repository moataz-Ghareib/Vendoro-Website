'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function PrivacyPage() {
  const { t, language } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-slate-950 overflow-hidden pt-32 pb-20">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right md:text-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-black text-white mb-10 text-center">
              {t.footer.links.privacy}
            </h1>
            
            <div className="prose prose-invert prose-slate mx-auto text-slate-300 text-right md:text-right" style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
              <p className="mb-6">
                {language === 'ar' 
                  ? 'نحن في فندورا نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.' 
                  : 'At Vendora, we respect your privacy and are committed to protecting your personal data.'}
              </p>
              
              <h2 className="text-xl font-bold text-white mb-4 mt-8">
                {language === 'ar' ? '1. جمع البيانات' : '1. Data Collection'}
              </h2>
              <p className="mb-6">
                {language === 'ar'
                  ? 'نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند التسجيل أو استخدام خدماتنا، بالإضافة إلى المعلومات التقنية اللازمة لتشغيل النظام.'
                  : 'We collect information you provide directly when registering or using our services, as well as technical information necessary to run the system.'}
              </p>
              
              <h2 className="text-xl font-bold text-white mb-4 mt-8">
                {language === 'ar' ? '2. استخدام البيانات' : '2. Data Usage'}
              </h2>
              <p className="mb-6">
                {language === 'ar'
                  ? 'تُستخدم بياناتك فقط لتوفير الخدمة المطلوبة وتحسين تجربة المستخدم. لا نقوم ببيع بياناتك لأي أطراف خارجية.'
                  : 'Your data is used solely to provide the requested service and improve user experience. We do not sell your data to any third parties.'}
              </p>
              
              <h2 className="text-xl font-bold text-white mb-4 mt-8">
                {language === 'ar' ? '3. أمان البيانات' : '3. Data Security'}
              </h2>
              <p className="mb-6">
                {language === 'ar'
                  ? 'تُحفظ بياناتك في خوادم سحابية آمنة ومحمية بأحدث تقنيات التشفير ذات المعايير البنكية لضمان سريتها التامة.'
                  : 'Your data is stored on secure cloud servers protected by the latest bank-grade encryption technologies to ensure complete confidentiality.'}
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
