'use client'

import { useEffect, useState } from 'react'

const loadingMessages = [
  'Initializing...',
  'Loading assets...',
  'Almost there...',
  'Finalizing...',
]

export function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)

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

  useEffect(() => {
    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length)
    }, 1500)

    return () => clearInterval(messageInterval)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-100 bg-background flex items-center justify-center transition-opacity duration-500 overflow-hidden"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="text-center space-y-8 relative z-10">
        {/* Enhanced circular loader with multiple rings */}
        <div className="relative w-48 h-48 mx-auto">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-spin z-0" style={{ animationDuration: '8s' }}></div>
          <div className="absolute inset-4 rounded-full border border-accent/10 animate-spin z-0" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
          
          {/* Main circular progress ring with glow */}
          <div className="absolute inset-2 z-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-primary/10"
              />
              {/* Progress circle with gradient */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 48}`}
                strokeDashoffset={`${2 * Math.PI * 48 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(74, 222, 128)" stopOpacity="1" />
                  <stop offset="100%" stopColor="rgb(134, 239, 172)" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Center core with AK and enhanced effects */}
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div 
              className="text-center space-y-2 transition-transform duration-500"
              style={{
                transform: progress >= 100 ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              {/* AK with shimmer effect */}
              <div className="relative mb-3">
                <div className="text-6xl font-bold text-primary drop-shadow-lg">
                  AK
                </div>
              </div>
              
              {/* Progress percentage with scale animation */}
              <div 
                className="text-3xl font-bold text-foreground/90 tabular-nums transition-all duration-300"
                style={{
                  transform: progress >= 100 ? 'scale(1.2)' : 'scale(1)',
                  color: progress >= 100 ? 'rgb(34, 197, 94)' : undefined,
                }}
              >
                {progress}%
              </div>
            </div>
          </div>

          {/* Success checkmark animation */}
          {progress >= 100 && (
            <div className="absolute inset-0 flex items-center justify-center animate-scale-in">
              <div className="absolute w-full h-full rounded-full border-4 border-primary/30 animate-ping"></div>
            </div>
          )}
        </div>

        {/* Cycling loading messages */}
        <div className="h-8">
          <p className="text-sm text-foreground/60 font-medium tracking-wider animate-fade-in-up">
            {progress < 100 ? (
              <span className="inline-block transition-all duration-300">
                {loadingMessages[messageIndex]}
              </span>
            ) : (
              <span className="text-primary font-semibold animate-bounce">
                ✓ Ready!
              </span>
            )}
          </p>
        </div>

        {/* Progress bar at bottom */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-secondary/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-linear-to-r from-primary via-accent to-primary transition-all duration-300 ease-out relative"
              style={{ 
                width: `${progress}%`,
                backgroundSize: '200% auto',
              }}
            >
              {/* Shimmer effect on progress bar */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
