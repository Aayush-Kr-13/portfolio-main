import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

export function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Technology',
      school: 'Indian Institute of Information Technology (IIIT), Dharwad',
      location: 'Dharwad, Karnataka',
      year: 'Jun. 2025',
      description: 'Specialized in algorithms, cloud computing, and full-stack development',
      highlights: [
        'Data Structures & Algorithms',
        'Cloud Computing & AWS',
        'Full-Stack Development',
        'Machine Learning',
      ],
      type: 'university',
    },
    {
      degree: 'Senior Secondary (PCM)',
      school: 'The Tribhuvan School',
      location: 'Patna, Bihar',
      year: 'Mar. 2021',
      grade: '93%',
      description: 'Focused on Physics, Chemistry, and Mathematics',
      highlights: [
        'Physics',
        'Chemistry', 
        'Mathematics',
        'Computer Science',
      ],
      type: 'school',
    },
  ]

  return (
    <section id="education" className="py-20 px-4 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl xl:max-w-6xl mx-auto relative z-10">
        <div className="mb-16 animate-fade-in-up text-center">
          <span className="text-primary text-sm font-mono uppercase tracking-wider bg-gradient-to-r from-primary/20 via-emerald-500/20 to-primary/20 border border-primary/30 px-4 py-2 rounded-full inline-block">Education</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-pretty bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent">
            My learning journey
          </h2>
          <p className="text-foreground/60 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row gap-6 lg:gap-8 relative z-10">
                {/* Icon Section */}
                <div className="shrink-0 flex md:flex-col items-center md:items-start">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br ${edu.type === 'university' ? 'from-emerald-400 via-green-500 to-teal-500' : 'from-blue-400 via-cyan-500 to-sky-500'} p-[2px] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg ${edu.type === 'university' ? 'shadow-emerald-500/30' : 'shadow-blue-500/30'}`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <GraduationCap className={`w-8 h-8 lg:w-10 lg:h-10 ${edu.type === 'university' ? 'text-emerald-500' : 'text-blue-500'} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="mb-4 lg:mb-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="flex items-center gap-2 text-sm lg:text-base text-emerald-600 dark:text-emerald-400 font-medium bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full shadow-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      {edu.grade && (
                        <div className="flex items-center gap-2 text-sm lg:text-base bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 px-3 py-1.5 rounded-full shadow-sm">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold">{edu.grade}</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 lg:mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-emerald-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-foreground/80 font-medium mb-2">
                      {edu.school}
                    </p>
                    
                    <div className="flex items-center gap-1.5 text-sm lg:text-base text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 text-base lg:text-lg mb-4 lg:mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights/Subjects */}
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {edu.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className={`text-xs sm:text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 backdrop-blur-sm border rounded-lg font-medium transition-all duration-300 cursor-default transform hover:scale-105 hover:-translate-y-0.5 shadow-sm
                          ${idx % 4 === 0 ? 'bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-violet-500/30 text-violet-600 dark:text-violet-400 hover:shadow-violet-500/20' : ''}
                          ${idx % 4 === 1 ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400 hover:shadow-blue-500/20' : ''}
                          ${idx % 4 === 2 ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:shadow-emerald-500/20' : ''}
                          ${idx % 4 === 3 ? 'bg-gradient-to-r from-rose-500/10 to-pink-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400 hover:shadow-rose-500/20' : ''}
                        `}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative bottom border */}
              <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-border/50 relative z-10">
                <div className={`h-1 lg:h-1.5 w-full bg-gradient-to-r rounded-full transition-all duration-500 ${edu.type === 'university' ? 'from-transparent via-emerald-500/30 to-transparent group-hover:via-emerald-500/60' : 'from-transparent via-blue-500/30 to-transparent group-hover:via-blue-500/60'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="mt-12 lg:mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 lg:gap-3 text-sm lg:text-base text-foreground/80 bg-gradient-to-r from-primary/10 via-emerald-500/10 to-primary/10 backdrop-blur-sm px-6 py-3 lg:px-8 lg:py-4 rounded-full border border-primary/30 shadow-lg shadow-primary/10">
            <Award className="w-4 h-4 lg:w-5 lg:h-5 text-primary animate-pulse" />
            <span className="font-medium">Continuous learner with a passion for innovation and technology</span>
          </div>
        </div>
      </div>
    </section>
  )
}
