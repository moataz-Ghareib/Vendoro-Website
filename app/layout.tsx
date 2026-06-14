import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Tajawal, Open_Sans } from 'next/font/google'
import './globals.css'

const tajawal = Tajawal({ 
  subsets: ['arabic'], 
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal'
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  title: 'Vendora - أفضل نظام محاسبي ونقاط بيع (ERP)',
  description: 'نظام Vendora هو الحل المتكامل لإدارة المخازن، المبيعات، ونقاط البيع السحابية. صمم خصيصاً ليناسب نمو أعمالك مهما كان حجمها.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // SEO Schema Definition
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Vendora ERP - فندورا',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '499',
      priceCurrency: 'EGP',
    },
    description: 'نظام سحابي متكامل لإدارة الأعمال، المخزون، ونقاط البيع للمحلات والشركات.',
  }

  return (
    <html lang="ar" dir="rtl" className={`dark bg-background ${tajawal.variable} ${openSans.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <SmoothScroll>
          <LanguageProvider>
            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  )
}
