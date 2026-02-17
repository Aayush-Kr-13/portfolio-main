'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Code2, Users, Zap } from 'lucide-react'

const skills = [
  { name: 'Python', level: 90, color: 'bg-[#3776AB]' },
  { name: 'JavaScript', level: 88, color: 'bg-[#F7DF1E]' },
  { name: 'React.js', level: 92, color: 'bg-[#61DAFB]' },
  { name: 'Node.js', level: 85, color: 'bg-[#339933]' },
  { name: 'AWS', level: 87, color: 'bg-[#FF9900]' },
  { name: 'TensorFlow', level: 80, color: 'bg-[#FF6F00]' },
  { name: 'PostgreSQL', level: 83, color: 'bg-[#4169E1]' },
  { name: 'Docker', level: 82, color: 'bg-[#2496ED]' },
]

const stats = [
  { icon: Award, label: 'Hackathon Wins', value: '3+', color: 'text-amber-500' },
  { icon: Code2, label: 'Projects Built', value: '10+', color: 'text-blue-500' },
  { icon: Users, label: 'Daily Users Impact', value: '10K+', color: 'text-green-500' },
  { icon: Zap, label: 'Performance Boost', value: '40%', color: 'text-purple-500' },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Trigger counter animations
          stats.forEach((stat) => {
            animateCounter(stat.value, stat.label)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const animateCounter = (target: string, label: string) => {
    const numericValue = parseInt(target.replace(/[^0-9]/g, ''))
    const duration = 1500
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCounters(prev => ({ ...prev, [label]: numericValue }))
        clearInterval(timer)
      } else {
        setCounters(prev => ({ ...prev, [label]: Math.floor(current) }))
      }
    }, duration / steps)
  }

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 animate-fade-in-up text-center">
          <span className="text-primary text-sm font-mono uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-pretty bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Who I am</h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const displayValue = counters[stat.label] !== undefined 
              ? `${counters[stat.label]}${stat.value.replace(/[0-9]/g, '')}`
              : stat.value
            return (
              <div 
                key={stat.label}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Icon className={`w-8 h-8 mb-3 ${stat.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`} />
                  <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ backgroundColor: 'currentColor' }}
                  />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1 tabular-nums">{displayValue}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Background
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                I&apos;m a recent Computer Science graduate from <span className="text-primary font-medium">IIIT Dharwad</span>, currently working as a System Engineer at <span className="text-primary font-medium">CGI</span>. I specialize in developing cloud-based customer engagement solutions using AWS technologies like Lambda, Connect, and CloudWatch.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                With a passion for competitive programming and hackathons, I&apos;ve won multiple awards including <span className="text-amber-500 font-medium">1st place at SandCodes Hackathon</span>. I combine my strong foundation in algorithms with modern web technologies to build scalable, performant applications that make a real impact.
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
              <h3 className="text-lg font-semibold mb-3 text-foreground">🚀 Key Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="text-primary mt-1">▸</span>
                  <span>Reduced AWS Lambda execution time by <strong>40%</strong></span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="text-primary mt-1">▸</span>
                  <span>Built solutions serving <strong>10,000+</strong> daily users</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="text-primary mt-1">▸</span>
                  <span>Decreased system downtime by <strong>60%</strong></span>
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="text-primary mt-1">▸</span>
                  <span>Achieved <strong>85%</strong> accuracy in ML predictions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 h-full">
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Skills & Proficiency
              </h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">{skill.name}</span>
                      <span className="text-xs text-foreground/60 font-mono bg-secondary px-2 py-1 rounded group-hover:bg-primary/10 transition-colors">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-secondary/50 rounded-full overflow-hidden relative">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`,
                        }}
                      >
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
