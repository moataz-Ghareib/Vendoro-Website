'use client'

import { Menu, X, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { VendoraLogo } from '@/components/vendora-logo'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, language, setLanguage } = useLanguage()
  const pathname = usePathname()

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/features', label: t.nav.features },
    { href: '/pricing', label: t.nav.pricing },
    { href: '/about', label: t.nav.about },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <VendoraLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-semibold transition-colors ${
                    isActive 
                      ? 'text-cyan-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA and Language */}
          <div className="flex items-center gap-4">
            <Link href="/pricing" className="hidden sm:block px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-cyan-500/25">
              {t.hero.start_btn}
            </Link>
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 transition-colors text-sm font-semibold px-2 py-1 rounded-md ${
                scrolled 
                  ? 'text-slate-300 hover:text-white hover:bg-white/10' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Globe size={18} />
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 flex flex-col gap-4 backdrop-blur-xl shadow-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                  href={link.href}
                  className={`text-lg font-semibold px-2 py-1 transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link onClick={() => setIsOpen(false)} href="/pricing" className="w-full mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-base hover:opacity-90 transition-all text-center">
              {t.hero.start_btn}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
