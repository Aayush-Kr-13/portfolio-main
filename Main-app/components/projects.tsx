'use client'

import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'Cricket Stats Predictor',
      description: 'Machine learning platform predicting cricket player statistics with real-time data visualization and match performance analytics.',
      technologies: ['Python', 'React', 'TensorFlow', 'Data Analytics'],
      highlights: [
        '85% accuracy in predicting player stats from 1,000+ data points',
        'Reduced data processing time by 30%',
        'Real-time match performance dashboard',
      ],
      link: 'https://cricket-code-hack.vercel.app/',
      github: 'https://github.com/Aayush-Kr-13/Cricket-Code-Hack-2302',
      award: '3rd Place - Cricket Code Champions Hack',
    },
    {
      title: 'Adventura',
      description: 'AI-powered travel recommendation platform with personalized itinerary generation and real-time updates.',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'OpenAI API'],
      highlights: [
        '300+ active users',
        '35% boost in responsiveness with Firebase',
        'Personalized itinerary generation using OpenAI',
      ],
      link: 'https://ai-destination-planner.vercel.app/',
      github: 'https://github.com/Aayush-Kr-13/AI-Destination-Planner',
    },
    {
      title: 'Chessify',
      description: 'Python-based chess engine with XBoard integration, featuring game history tracking and competitive rating system.',
      technologies: ['Python', 'XBoard', 'AI Algorithms'],
      highlights: [
        'Chess engine for 20+ users',
        '20% improved GUI interaction speed',
        'Player rating and game history system',
      ],
      link: 'https://devpost.com/software/chessify-czps2o?_gl=1*15m9wap*_gcl_au*MTY3NDQ4ODcxLjE3NjgzMjYyMjY.*_ga*ODQ4MDMzODA0LjE3NjgzMjYyMjc.*_ga_0YHJK3Y10M*czE3NzEzMjI3NjQkbzUkZzEkdDE3NzEzMjI3NzAkajU0JGwwJGgw',
      github: 'https://github.com/Aayush-Kr-13/Chess-Engine-Python',
      award: '2nd Place - HackChess Hackathon',
    },
    {
      title: 'SpaceTec Satellite Tracking',
      description: 'Real-time satellite tracking system developed during SandCodes Hackathon for monitoring space objects.',
      technologies: ['React', 'Node.js', 'Satellite APIs', 'WebGL'],
      highlights: [
        'Real-time satellite position tracking',
        '1st place winning project',
        'Interactive 3D visualization',
      ],
      link: '#',
      github: 'https://github.com/Aayush-Kr-13',
      award: '1st Place - SandCodes Hackathon',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30 relative">
      {/* Animated background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 animate-fade-in-up">
          <span className="text-primary text-sm font-mono uppercase tracking-wider">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-pretty">My recent work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-[1.02] hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.award && (
                    <div className="ml-2 px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-xs text-amber-500 whitespace-nowrap" title={project.award}>
                      🏆
                    </div>
                  )}
                </div>

                {project.award && (
                  <p className="text-xs text-amber-500 mb-2 font-medium">{project.award}</p>
                )}

                <p className="text-foreground/70 mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-foreground/60">
                        <span className="mt-1 w-1 h-1 rounded-full bg-primary shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110"
                      style={{ transitionDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs text-foreground/50">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 pt-4 border-t border-primary/10 group-hover:border-primary/30 transition-colors">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 transform hover:translate-x-1"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">View</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 transform hover:translate-x-1"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
