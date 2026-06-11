'use client'

import { Menu, X, Globe } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { VendoraLogo } from '@/components/vendora-logo'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <VendoraLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/features"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {t.nav.features}
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {t.nav.pricing}
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {t.nav.about}
            </Link>
          </div>

          {/* CTA and Language */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-cyan-500/25">
              {t.hero.start_btn}
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium px-2 py-1 rounded-md hover:bg-slate-800/50"
            >
              <Globe size={16} />
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/40 flex flex-col gap-4">
            <Link onClick={() => setIsOpen(false)} href="/" className="text-muted-foreground hover:text-foreground transition-colors px-2">
              {t.nav.home}
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/features" className="text-muted-foreground hover:text-foreground transition-colors px-2">
              {t.nav.features}
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors px-2">
              {t.nav.pricing}
            </Link>
            <Link onClick={() => setIsOpen(false)} href="/about" className="text-muted-foreground hover:text-foreground transition-colors px-2">
              {t.nav.about}
            </Link>
            <button className="w-full mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm hover:opacity-90 transition-all">
              {t.hero.start_btn}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
