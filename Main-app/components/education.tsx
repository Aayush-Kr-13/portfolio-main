import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

export function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Technology',
      school: 'Indian Institute of Information Technology (IIIT), Dharwad',
      location: 'Dharwad, Karnataka',
      year: 'Jun. 2025',
      grade: '7.09/10.0 CGPA',
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
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 animate-fade-in-up text-center">
          <span className="text-primary text-sm font-mono uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-pretty bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My learning journey
          </h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon Section */}
                <div className="shrink-0">
                  <div className={`w-16 h-16 rounded-xl bg-linear-to-br ${edu.type === 'university' ? 'from-primary to-accent' : 'from-blue-500 to-cyan-500'} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <GraduationCap className={`w-8 h-8 ${edu.type === 'university' ? 'text-primary' : 'text-blue-500'}`} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <div className="flex items-center gap-2 text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                        <Award className="w-4 h-4" />
                        <span className="font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-foreground/80 font-medium mb-1">
                      {edu.school}
                    </p>
                    
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights/Subjects */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="text-xs sm:text-sm px-3 py-1.5 bg-secondary/80 backdrop-blur-sm border border-border rounded-lg text-foreground/80 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative bottom border */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="h-1 w-full bg-linear-to-r from-transparent via-primary/20 to-transparent rounded-full group-hover:via-primary/40 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 text-sm text-foreground/60 bg-secondary/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border">
            <Award className="w-4 h-4 text-primary" />
            <span>Continuous learner with a passion for innovation and technology</span>
          </div>
        </div>
      </div>
    </section>
  )
}
