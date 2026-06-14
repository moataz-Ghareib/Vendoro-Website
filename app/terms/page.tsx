'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function TermsPage() {
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
              {t.footer.links.terms}
            </h1>
            
            <div className="prose prose-invert prose-slate mx-auto text-slate-300 text-right md:text-right" style={{ textAlign: language === 'ar' ? 'right' : 'left' }}>
              <p className="mb-6">
                {language === 'ar' 
                  ? 'مرحباً بك في فندورا. باستخدامك لخدماتنا، فإنك توافق على الشروط والأحكام التالية.' 
                  : 'Welcome to Vendora. By using our services, you agree to the following terms and conditions.'}
              </p>
              
              <h2 className="text-xl font-bold text-white mb-4 mt-8">
                {language === 'ar' ? '1. استخدام الخدمة' : '1. Use of Service'}
              </h2>
              <p className="mb-6">
                {language === 'ar'
                  ? 'يُسمح لك باستخدام نظام فندورا لإدارة أعمالك التجارية الخاصة. لا يُسمح بإعادة بيع أو تأجير الخدمة لأطراف أخرى دون موافقة خطية.'
                  : 'You are permitted to use the Vendora system to manage your own business. Reselling or leasing the service to third parties without written consent is strictly prohibited.'}
              </p>
              
              <h2 className="text-xl font-bold text-white mb-4 mt-8">
                {language === 'ar' ? '2. الاشتراكات والدفع' : '2. Subscriptions and Payment'}
              </h2>
              <p className="mb-6">
                {language === 'ar'
                  ? 'الاشتراكات تُدفع مقدماً حسب الباقة المختارة (شهري/سنوي). لا توجد سياسة استرداد للأموال بعد بدء فترة الاشتراك وتفعيل الخدمة.'
                  : 'Subscriptions are billed in advance according to the chosen plan (monthly/annually). There is no refund policy after the subscription period starts and the service is activated.'}
              </p>
              
              <h2 className="text-xl font-bold text-white mb-4 mt-8">
                {language === 'ar' ? '3. إخلاء المسؤولية' : '3. Disclaimer'}
              </h2>
              <p className="mb-6">
                {language === 'ar'
                  ? 'رغم سعينا لضمان عمل النظام بنسبة 99.9%، فإن الشركة لا تتحمل مسؤولية أية خسائر تجارية غير مباشرة ناتجة عن انقطاع الإنترنت أو سوء استخدام النظام من قبل الموظفين.'
                  : 'While we strive to ensure 99.9% system uptime, the company is not liable for any indirect commercial losses resulting from internet outages or misuse of the system by employees.'}
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
