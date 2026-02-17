'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const rotatingTexts = [
    'Aayush Kumar',
    'Software Developer',
    'Full Stack Developer',
  ]

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Only track mouse on desktop
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
        setIsAnimating(false)
      }, 500) // Fade out for 500ms before changing text
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [rotatingTexts.length])

  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated background elements that follow cursor - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Main cursor follower - center */}
          <div 
            className="fixed w-[300px] h-[300px] bg-primary/15 rounded-full blur-3xl transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          ></div>
          {/* Slightly behind - slower */}
          <div 
            className="fixed w-[260px] h-[260px] bg-accent/12 rounded-full blur-3xl transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              left: `${mousePosition.x * 0.95 + 20}px`,
              top: `${mousePosition.y * 0.95 + 20}px`,
            }}
          ></div>
          {/* Slightly ahead - faster */}
          <div 
            className="fixed w-[240px] h-[240px] bg-primary/10 rounded-full blur-3xl transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              left: `${mousePosition.x * 1.03 - 15}px`,
              top: `${mousePosition.y * 1.03 - 15}px`,
            }}
          ></div>
          {/* Ambient fill */}
          <div 
            className="fixed w-[320px] h-[320px] bg-primary/6 rounded-full blur-3xl transition-all duration-700 ease-out -translate-x-1/2 -translate-y-1/2 z-0"
            style={{
              left: `${mousePosition.x * 0.98}px`,
              top: `${mousePosition.y * 0.98}px`,
            }}
          ></div>
        </div>
      )}

      {/* Static background for mobile */}
      {isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
      )}

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-block animate-fade-in-up">
          <span className="text-primary text-xs sm:text-sm font-mono uppercase tracking-wider animate-glow-pulse px-3 sm:px-4 py-2 rounded-full border border-primary/20">
            <span className="hidden sm:inline">System Engineer at CGI</span>
            <span className="sm:hidden">CGI Engineer</span>
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-pretty animate-slide-in-left min-h-[100px] sm:min-h-[120px] md:min-h-[160px] flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3" style={{ animationDelay: '0.2s' }}>
          <span>Hi, I&apos;m</span>
          <span className="inline-block min-w-[240px] sm:min-w-[320px] md:min-w-[600px] text-center">
            <span 
              className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block transition-all duration-500 ease-in-out"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(-10px)' : 'translateY(0)',
              }}
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-8 text-pretty animate-slide-in-right px-2" style={{ animationDelay: '0.4s' }}>
          Full Stack Developer specializing in cloud technologies, AI integration, and building scalable solutions with React, Node.js, and AWS.
        </p>

        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap animate-fade-in-up px-2" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => handleScroll('#projects')}
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base min-w-[140px]"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300 border border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transform hover:scale-105 active:scale-95 text-sm sm:text-base min-w-[140px]"
          >
            Get in Touch
          </button>
        </div>

        <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-foreground/50 text-xs sm:text-sm mb-4">Scroll to explore</p>
          <div className="flex justify-center">
            <div className="animate-bounce">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-glow-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
