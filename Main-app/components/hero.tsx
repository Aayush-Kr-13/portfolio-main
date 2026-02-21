'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const rotatingTexts = [
    ['Aayush', 'Kumar'],
    ['Software', 'Developer'],
    ['Full Stack', 'Developer'],
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
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 lg:px-8 xl:px-12 relative overflow-hidden">
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

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-6 inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-primary text-xs sm:text-sm font-mono uppercase tracking-wider animate-glow-pulse px-3 sm:px-4 py-2 rounded-full border border-primary/20">
                <span className="hidden sm:inline">System Engineer at CGI</span>
                <span className="sm:hidden">CGI Engineer</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 text-pretty animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <span className="block mb-2">Hi, I&apos;m</span>
              <span 
                className="block bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent transition-all duration-500 ease-in-out"
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? 'translateY(-10px)' : 'translateY(0)',
                }}
              >
                {rotatingTexts[currentTextIndex].map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-foreground/70 mb-8 text-pretty animate-slide-in-right max-w-xl xl:max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: '0.5s' }}>
              Full Stack Developer specializing in cloud technologies, AI integration, and building scalable solutions with React, Node.js, and AWS.
            </p>

            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
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
          </div>

          {/* Right Column - Profile Picture */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary via-accent to-primary animate-spin-slow opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  animation: 'spin 8s linear infinite',
                  padding: '3px'
                }}
              ></div>
              
              {/* Image container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/Aayush.png"
                  alt="Aayush Kumar"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating ring animation */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
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
