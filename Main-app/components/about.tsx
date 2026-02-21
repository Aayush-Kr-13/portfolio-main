'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Code2, Users, Zap } from 'lucide-react'
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress,
  SiAmazon,
  SiAwslambda,
  SiAmazondynamodb,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiTailwindcss,
  SiTensorflow,
  SiFirebase,
  SiVuedotjs
} from 'react-icons/si'

const skills = [
  { name: 'Python', level: 90, color: 'from-[#3776AB] to-[#4B8BBE]', glow: 'shadow-[#3776AB]/50', icon: SiPython },
  { name: 'JavaScript', level: 88, color: 'from-[#F7DF1E] to-[#F0DB4F]', glow: 'shadow-[#F7DF1E]/50', icon: SiJavascript },
  { name: 'TypeScript', level: 92, color: 'from-[#3178C6] to-[#235A97]', glow: 'shadow-[#3178C6]/50', icon: SiTypescript },
  { name: 'React', level: 92, color: 'from-[#61DAFB] to-[#00D8FF]', glow: 'shadow-[#61DAFB]/50', icon: SiReact },
  { name: 'Next.js', level: 90, color: 'from-[#000000] to-[#1a1a1a]', glow: 'shadow-black/50', icon: SiNextdotjs },
  { name: 'Node.js', level: 85, color: 'from-[#339933] to-[#5FA04E]', glow: 'shadow-[#339933]/50', icon: SiNodedotjs },
  { name: 'Express', level: 84, color: 'from-[#000000] to-[#404040]', glow: 'shadow-black/50', icon: SiExpress },
  { name: 'AWS', level: 87, color: 'from-[#FF9900] to-[#FF9900]', glow: 'shadow-[#FF9900]/50', icon: SiAmazon },
  { name: 'Lambda', level: 86, color: 'from-[#FF9900] to-[#EC7211]', glow: 'shadow-[#FF9900]/50', icon: SiAwslambda },
  { name: 'DynamoDB', level: 83, color: 'from-[#4053D6] to-[#2E3F9E]', glow: 'shadow-[#4053D6]/50', icon: SiAmazondynamodb },
  { name: 'PostgreSQL', level: 83, color: 'from-[#4169E1] to-[#336791]', glow: 'shadow-[#4169E1]/50', icon: SiPostgresql },
  { name: 'MongoDB', level: 85, color: 'from-[#47A248] to-[#3FA037]', glow: 'shadow-[#47A248]/50', icon: SiMongodb },
  { name: 'Postman', level: 88, color: 'from-[#FF6C37] to-[#FF5722]', glow: 'shadow-[#FF6C37]/50', icon: SiPostman },
  { name: 'Docker', level: 82, color: 'from-[#2496ED] to-[#1D63ED]', glow: 'shadow-[#2496ED]/50', icon: SiDocker },
  { name: 'Git', level: 90, color: 'from-[#F05032] to-[#E44D2E]', glow: 'shadow-[#F05032]/50', icon: SiGit },
  { name: 'GCP', level: 85, color: 'from-[#4285F4] to-[#34A853]', glow: 'shadow-[#4285F4]/50', icon: SiGooglecloud },
  { name: 'Tailwind', level: 93, color: 'from-[#06B6D4] to-[#0891B2]', glow: 'shadow-[#06B6D4]/50', icon: SiTailwindcss },
  { name: 'TensorFlow', level: 80, color: 'from-[#FF6F00] to-[#FF8F00]', glow: 'shadow-[#FF6F00]/50', icon: SiTensorflow },
  { name: 'Firebase', level: 84, color: 'from-[#FFCA28] to-[#FFA000]', glow: 'shadow-[#FFCA28]/50', icon: SiFirebase },
  { name: 'Vue.js', level: 78, color: 'from-[#4FC08D] to-[#42B883]', glow: 'shadow-[#4FC08D]/50', icon: SiVuedotjs },
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
    <section id="about" className="py-20 px-4 lg:px-8 xl:px-12 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full px-4 lg:px-8 xl:px-12 relative z-10">
        <div className="mb-12 lg:mb-16 animate-fade-in-up text-center">
          <span className="text-primary text-sm lg:text-base font-mono uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block">About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-pretty bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Who I am</h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 lg:mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
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

        <div className="space-y-8 lg:space-y-12">
          {/* Bio and Highlights in Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Bio Section */}
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-primary flex items-center gap-2">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                Background
              </h3>
              <p className="text-base lg:text-lg text-foreground/80 leading-relaxed mb-4">
                I&apos;m a recent Computer Science graduate from <span className="text-primary font-medium">IIIT Dharwad</span>, currently working as a System Engineer at <span className="text-primary font-medium">CGI</span>. I specialize in developing cloud-based customer engagement solutions using AWS technologies like Lambda, Connect, and CloudWatch.
              </p>
              <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                With a passion for competitive programming and hackathons, I&apos;ve won multiple awards including <span className="text-amber-500 font-medium">1st place at SandCodes Hackathon</span>. I combine my strong foundation in algorithms with modern web technologies to build scalable, performant applications that make a real impact.
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-xl p-6 lg:p-8 border border-primary/20">
              <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6 text-foreground">🚀 Key Highlights</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start gap-2 lg:gap-3 text-sm lg:text-base text-foreground/80">
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  <span>Reduced AWS Lambda execution time by <strong>40%</strong></span>
                </li>
                <li className="flex items-start gap-2 lg:gap-3 text-sm lg:text-base text-foreground/80">
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  <span>Built solutions serving <strong>10,000+</strong> daily users</span>
                </li>
                <li className="flex items-start gap-2 lg:gap-3 text-sm lg:text-base text-foreground/80">
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  <span>Decreased system downtime by <strong>60%</strong></span>
                </li>
                <li className="flex items-start gap-2 lg:gap-3 text-sm lg:text-base text-foreground/80">
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  <span>Achieved <strong>85%</strong> accuracy in ML predictions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section - Full Width */}
      <div className="mt-12 lg:mt-16 relative z-10">
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-10 border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden group">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-8 lg:mb-10">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Code2 className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    Technical Stack
                  </h3>
                  <div className="text-xs lg:text-sm text-muted-foreground font-mono bg-secondary/50 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-border/50">
                    20 technologies
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-10 gap-3 sm:gap-4 lg:gap-4 xl:gap-5">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="group/skill relative w-full"
                      style={{ 
                        animationDelay: `${index * 80}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      <div className="relative bg-linear-to-br from-secondary/80 via-secondary/50 to-secondary/30 backdrop-blur-sm rounded-xl p-4 lg:p-5 border border-border/50 transition-all duration-500 hover:scale-105 hover:border-transparent hover:-translate-y-1 cursor-pointer aspect-square flex flex-col items-center justify-center">
                        {/* Gradient border effect on hover */}
                        <div className={`absolute inset-0 rounded-xl bg-linear-to-br ${skill.color} opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                        <div className="absolute inset-px rounded-xl bg-card/95 backdrop-blur-sm opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Content */}
                        <div className="relative flex flex-col items-center justify-center gap-2 lg:gap-3 w-full">
                          {/* Icon/Badge area */}
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg bg-linear-to-br ${skill.color} shadow-lg ${skill.glow} group-hover/skill:shadow-2xl transition-all duration-500 flex items-center justify-center group-hover/skill:scale-110 group-hover/skill:rotate-6 shrink-0`}>
                            <skill.icon className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 drop-shadow-lg" />
                          </div>
                          
                          {/* Skill name */}
                          <div className="text-center w-full px-1">
                            <p className="text-xs sm:text-sm lg:text-base font-semibold text-foreground/90 group-hover/skill:text-primary transition-colors duration-300 wrap-break-word">
                              {skill.name}
                            </p>
                          </div>

                          {/* Subtle indicator dots */}
                          <div className="flex justify-center gap-0.5 sm:gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full transition-all duration-500 ${
                                  i < Math.round(skill.level / 20) 
                                    ? 'bg-primary scale-100' 
                                    : 'bg-border/50 scale-75'
                                }`}
                                style={{ transitionDelay: `${i * 50}ms` }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-700 overflow-hidden">
                          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom info */}
                <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between text-xs lg:text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Actively expanding skillset
                  </p>
                  <p className="font-mono">Production-ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
