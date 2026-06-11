'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations, Translations } from './translations'

type LanguageContextType = {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') as Language
    const initialLang = savedLang || 'ar'
    setLanguage(initialLang)
    document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = initialLang
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const value: LanguageContextType = {
    language,
    t: translations[language],
    setLanguage: handleSetLanguage,
    dir: language === 'ar' ? 'rtl' : 'ltr'
  }

  if (!mounted) {
    // Return children with default provider to avoid hydration mismatch
    return (
      <LanguageContext.Provider value={value}>
        <div dir={value.dir}>{children}</div>
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={value}>
      <div dir={value.dir}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
