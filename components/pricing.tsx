'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)
  const { t } = useLanguage()

  const pricingPlans = [
    {
      ...t.pricing.plans.starter,
      monthlyPrice: 499,
      highlighted: false,
    },
    {
      ...t.pricing.plans.professional,
      monthlyPrice: 999,
      highlighted: true,
    },
    {
      ...t.pricing.plans.enterprise,
      monthlyPrice: 1999,
      highlighted: false,
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  }

  return (
    <section id="pricing" className="relative px-4 py-20 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            <span className="text-balance">
              {t.pricing.title}
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto text-pretty">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div 
          className="flex flex-col items-center gap-6 mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-full border border-slate-800">
            <span
              className={`text-sm font-bold px-4 py-2 rounded-full transition-all cursor-pointer ${
                !isAnnual ? 'bg-slate-800 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              {t.pricing.monthly}
            </span>
            
            <span
              className={`text-sm font-bold px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-2 ${
                isAnnual ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]' : 'text-slate-400 hover:text-white'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              {t.pricing.annually}
              <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-2 py-0.5">
                <span className="text-[10px] font-black text-white uppercase tracking-wider">{t.pricing.save}</span>
              </div>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingPlans.map((plan, index) => {
            const displayPrice = isAnnual 
              ? Math.round(plan.monthlyPrice * 12 * 0.8)
              : plan.monthlyPrice
            const pricePerMonth = isAnnual 
              ? Math.round(displayPrice / 12)
              : displayPrice

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative group transition-all duration-500 ${
                  plan.highlighted 
                    ? 'md:-translate-y-4 md:z-10'
                    : ''
                }`}
              >
                {/* Highlighted Card Glow Effect */}
                {plan.highlighted && (
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" 
                    animate={{ scale: [1, 1.02, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  />
                )}

                {/* Card Container */}
                <div
                  className={`relative h-full flex flex-col rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
                    plan.highlighted
                      ? 'border-indigo-500/50 bg-slate-900/90 shadow-2xl shadow-indigo-500/20'
                      : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  {/* Most Popular Badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-indigo-500/30">
                        {t.pricing.most_popular}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    {/* Plan Name and Description */}
                    <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-200'}`}>
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-8 h-10">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-5xl font-black tracking-tight ${plan.highlighted ? 'text-white' : 'text-slate-200'}`}>
                          {pricePerMonth.toLocaleString()}
                        </span>
                        <span className="text-slate-400 font-medium">
                          {t.pricing.currency} / {isAnnual ? t.pricing.annually : t.pricing.monthly}
                        </span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-indigo-400 font-medium mt-3">
                          {t.pricing.billed_annually} ({displayPrice.toLocaleString()} {t.pricing.currency})
                        </p>
                      )}
                      {!isAnnual && <div className="h-5 mt-3" />}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full mb-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] hover:scale-105'
                          : 'bg-slate-800 text-white hover:bg-slate-700 hover:scale-105'
                      }`}
                    >
                      {plan.cta}
                    </button>

                    {/* Features List */}
                    <div className="space-y-6">
                      <p className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                        {t.pricing.whats_included}
                      </p>
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className={`mt-1 p-0.5 rounded-full ${plan.highlighted ? 'bg-indigo-500/20' : 'bg-slate-800'}`}>
                              <Check 
                                className={`w-4 h-4 ${plan.highlighted ? 'text-cyan-400' : 'text-slate-400'}`} 
                                strokeWidth={3}
                              />
                            </div>
                            <span className="text-slate-300 font-medium leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-2 font-medium">
            {t.pricing.footer_text}
          </p>
          <p className="text-slate-400 font-medium">
            {t.pricing.custom_plan_text} <a href="#contact" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">{t.pricing.contact_sales}</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
