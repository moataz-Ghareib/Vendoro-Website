'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis for buttery smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Smoother and slower duration (default is 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Calm ease out formula
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1, // Controls how much the wheel scrolls
      touchMultiplier: 2, // Helps on touchpads
      infinite: false,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Reset scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return <>{children}</>
}
