'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      setProgress(scrolled)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-secondary/50 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
