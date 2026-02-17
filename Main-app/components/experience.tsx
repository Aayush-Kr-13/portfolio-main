export function Experience() {
  const experiences = [
    {
      role: 'System Engineer',
      company: 'CGI',
      period: 'Jul 2025 - Present',
      location: 'Bengaluru, Karnataka',
      description: 'Developing cutting-edge cloud solutions for customer engagement, optimizing AWS infrastructure, and implementing AI-powered features.',
      highlights: [
        'Developing customer engagement solutions using Amazon Connect for 10,000+ daily users',
        'Optimizing AWS Lambda functions, reducing execution time by 40% and cloud costs by 25%',
        'Implementing real-time monitoring with CloudWatch, decreasing system downtime by 60%',
        'Integrating Amazon Q for AI-powered agent assistance, improving customer satisfaction by 35%',
      ],
      technologies: ['AWS Lambda', 'Amazon Connect', 'CloudWatch', 'Amazon Q', 'DynamoDB', 'Python'],
      color: 'from-emerald-500 to-green-600',
      accentColor: 'emerald',
    },
  ]

  const getAccentClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      emerald: {
        border: 'border-emerald-500/50',
        bg: 'bg-emerald-500/10',
        hover: 'hover:bg-emerald-500/20 hover:border-emerald-500',
        text: 'text-emerald-500',
        shadow: 'shadow-emerald-500/20',
        glow: 'group-hover:shadow-lg group-hover:shadow-emerald-500/30',
      },
      teal: {
        border: 'border-teal-500/50',
        bg: 'bg-teal-500/10',
        hover: 'hover:bg-teal-500/20 hover:border-teal-500',
        text: 'text-teal-500',
        shadow: 'shadow-teal-500/20',
        glow: 'group-hover:shadow-lg group-hover:shadow-teal-500/30',
      },
      cyan: {
        border: 'border-cyan-500/50',
        bg: 'bg-cyan-500/10',
        hover: 'hover:bg-cyan-500/20 hover:border-cyan-500',
        text: 'text-cyan-500',
        shadow: 'shadow-cyan-500/20',
        glow: 'group-hover:shadow-lg group-hover:shadow-cyan-500/30',
      },
    }
    return colorMap[color]
  }

  const getTechColor = (tech: string) => {
    const techColors: Record<string, any> = {
      'React': {
        bg: 'bg-blue-500/10',
        text: 'text-blue-500',
        border: 'border-blue-500/50',
        hover: 'hover:bg-blue-500/20 hover:border-blue-500',
        glow: 'hover:shadow-blue-500/30',
      },
      'TypeScript': {
        bg: 'bg-sky-500/10',
        text: 'text-sky-500',
        border: 'border-sky-500/50',
        hover: 'hover:bg-sky-500/20 hover:border-sky-500',
        glow: 'hover:shadow-sky-500/30',
      },
      'Next.js': {
        bg: 'bg-foreground/5',
        text: 'text-foreground',
        border: 'border-foreground/30',
        hover: 'hover:bg-foreground/10 hover:border-foreground/50',
        glow: 'hover:shadow-foreground/20',
      },
      'Tailwind CSS': {
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-500',
        border: 'border-cyan-500/50',
        hover: 'hover:bg-cyan-500/20 hover:border-cyan-500',
        glow: 'hover:shadow-cyan-500/30',
      },
      'Node.js': {
        bg: 'bg-green-500/10',
        text: 'text-green-500',
        border: 'border-green-500/50',
        hover: 'hover:bg-green-500/20 hover:border-green-500',
        glow: 'hover:shadow-green-500/30',
      },
      'PostgreSQL': {
        bg: 'bg-indigo-500/10',
        text: 'text-indigo-500',
        border: 'border-indigo-500/50',
        hover: 'hover:bg-indigo-500/20 hover:border-indigo-500',
        glow: 'hover:shadow-indigo-500/30',
      },
      'AWS': {
        bg: 'bg-orange-500/10',
        text: 'text-orange-500',
        border: 'border-orange-500/50',
        hover: 'hover:bg-orange-500/20 hover:border-orange-500',
        glow: 'hover:shadow-orange-500/30',
      },
      'JavaScript': {
        bg: 'bg-yellow-500/10',
        text: 'text-yellow-500',
        border: 'border-yellow-500/50',
        hover: 'hover:bg-yellow-500/20 hover:border-yellow-500',
        glow: 'hover:shadow-yellow-500/30',
      },
      'HTML/CSS': {
        bg: 'bg-rose-500/10',
        text: 'text-rose-500',
        border: 'border-rose-500/50',
        hover: 'hover:bg-rose-500/20 hover:border-rose-500',
        glow: 'hover:shadow-rose-500/30',
      },
      'Vue.js': {
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-500',
        border: 'border-emerald-500/50',
        hover: 'hover:bg-emerald-500/20 hover:border-emerald-500',
        glow: 'hover:shadow-emerald-500/30',
      },
      'Firebase': {
        bg: 'bg-amber-500/10',
        text: 'text-amber-500',
        border: 'border-amber-500/50',
        hover: 'hover:bg-amber-500/20 hover:border-amber-500',
        glow: 'hover:shadow-amber-500/30',
      },
      'AWS Lambda': {
        bg: 'bg-orange-500/10',
        text: 'text-orange-500',
        border: 'border-orange-500/50',
        hover: 'hover:bg-orange-500/20 hover:border-orange-500',
        glow: 'hover:shadow-orange-500/30',
      },
      'Amazon Connect': {
        bg: 'bg-orange-600/10',
        text: 'text-orange-600',
        border: 'border-orange-600/50',
        hover: 'hover:bg-orange-600/20 hover:border-orange-600',
        glow: 'hover:shadow-orange-600/30',
      },
      'CloudWatch': {
        bg: 'bg-pink-500/10',
        text: 'text-pink-500',
        border: 'border-pink-500/50',
        hover: 'hover:bg-pink-500/20 hover:border-pink-500',
        glow: 'hover:shadow-pink-500/30',
      },
      'Amazon Q': {
        bg: 'bg-violet-500/10',
        text: 'text-violet-500',
        border: 'border-violet-500/50',
        hover: 'hover:bg-violet-500/20 hover:border-violet-500',
        glow: 'hover:shadow-violet-500/30',
      },
      'DynamoDB': {
        bg: 'bg-blue-600/10',
        text: 'text-blue-600',
        border: 'border-blue-600/50',
        hover: 'hover:bg-blue-600/20 hover:border-blue-600',
        glow: 'hover:shadow-blue-600/30',
      },
      'Python': {
        bg: 'bg-blue-500/10',
        text: 'text-blue-500',
        border: 'border-blue-500/50',
        hover: 'hover:bg-blue-500/20 hover:border-blue-500',
        glow: 'hover:shadow-blue-500/30',
      },
    }
    
    // Return specific color if found, otherwise return a default purple
    return techColors[tech] || {
      bg: 'bg-purple-500/10',
      text: 'text-purple-500',
      border: 'border-purple-500/50',
      hover: 'hover:bg-purple-500/20 hover:border-purple-500',
      glow: 'hover:shadow-purple-500/30',
    }
  }

  return (
    <section id="experience" className="py-20 px-4 relative bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 animate-fade-in-up">
          <span className="text-primary text-sm font-mono uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-pretty bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Where I&apos;ve worked</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = getAccentClasses(exp.accentColor)
            return (
              <div 
                key={index} 
                className={`border-l-4 ${colors.border} pl-8 pb-8 relative group animate-fade-in-up hover:pl-12 transition-all duration-300`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Accent dot with gradient */}
                <div className={`absolute w-5 h-5 bg-gradient-to-br ${exp.color} rounded-full -left-3 mt-1 group-hover:w-7 group-hover:h-7 group-hover:-left-4 transition-all duration-300 shadow-lg ${colors.shadow} ${colors.glow}`}></div>
                
                {/* Enhanced glow effect on hover */}
                <div className={`absolute -left-8 top-0 w-16 h-full bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg blur-xl`}></div>

                {/* Content card with enhanced styling */}
                <div className={`bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border group-hover:border-primary/50 transition-all duration-300 ${colors.glow}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold ${colors.text} group-hover:scale-105 transform transition-all duration-300 inline-block`}>
                        {exp.role}
                      </h3>
                      <p className="text-lg text-foreground/90 font-medium mt-1 group-hover:text-primary transition-colors duration-300">{exp.company}</p>
                      {exp.location && <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>}
                    </div>
                    <p className="text-muted-foreground font-mono text-sm mt-2 md:mt-0 px-3 py-1 bg-secondary rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">{exp.period}</p>
                  </div>

                  <p className="text-foreground/80 mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">{exp.description}</p>

                  {exp.highlights && (
                    <ul className="space-y-2 mb-6">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/70 text-sm">
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.text} shrink-0`}></span>
                          <span className="group-hover:text-foreground/90 transition-colors duration-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => {
                      const techColor = getTechColor(tech)
                      return (
                        <span 
                          key={tech} 
                          className={`px-4 py-2 ${techColor.bg} ${techColor.text} rounded-lg font-medium text-sm border ${techColor.border} ${techColor.hover} transition-all duration-300 transform hover:scale-110 shadow-lg ${techColor.glow}`}
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
