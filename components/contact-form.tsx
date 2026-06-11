'use client'

import { motion } from 'framer-motion'
import { Send, Mail } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setFormData({ name: '', businessType: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-cyan-950/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900/50 border border-cyan-500/30 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
            <Mail size={18} className="text-cyan-400" />
            <span className="text-sm font-bold text-cyan-300 tracking-wide">{t.contact.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-balance text-white">
            {t.contact.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="relative perspective-1000"
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Gradient Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-30" />

          {/* Form Container */}
          <div className="relative rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Business Type Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-bold mb-2 text-slate-300">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.name_placeholder}
                    className="w-full px-5 py-4 rounded-xl border border-slate-600 bg-slate-800/60 text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 hover:border-slate-500"
                  />
                </motion.div>

                {/* Business Type Select */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="businessType" className="block text-sm font-bold mb-2 text-slate-300">
                    {t.contact.form.business_type}
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-600 bg-slate-800/60 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 hover:border-slate-500 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">{t.contact.form.business_type_placeholder}</option>
                    <option value="retail" className="bg-slate-900">{t.contact.form.options.retail}</option>
                    <option value="fbh" className="bg-slate-900">{t.contact.form.options.fbh}</option>
                    <option value="enterprise" className="bg-slate-900">{t.contact.form.options.enterprise}</option>
                    <option value="other" className="bg-slate-900">{t.contact.form.options.other}</option>
                  </select>
                </motion.div>
              </div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-slate-300">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.form.email_placeholder}
                  className="w-full px-5 py-4 rounded-xl border border-slate-600 bg-slate-800/60 text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 hover:border-slate-500"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-slate-300">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder={t.contact.form.message_placeholder}
                  className="w-full px-5 py-4 rounded-xl border border-slate-600 bg-slate-800/60 text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 hover:border-slate-500 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-lg hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />

                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send size={24} className="group-hover:rotate-12 transition-transform" />
                      {t.contact.form.submit}
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
