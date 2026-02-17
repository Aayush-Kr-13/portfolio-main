'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-100 bg-background flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      <div className="text-center space-y-6">
        {/* Animated logo/text */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer"
            style={{ backgroundSize: '200% auto' }}
          >
            AK
          </h1>
          <div className="absolute inset-0 blur-xl bg-linear-to-r from-primary/20 to-accent/20 animate-pulse"></div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-linear-to-r from-primary to-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading text */}
        <p className="text-sm text-foreground/60 font-mono">
          {progress < 100 ? 'Loading...' : 'Ready!'}
        </p>
      </div>
    </div>
  )
}
