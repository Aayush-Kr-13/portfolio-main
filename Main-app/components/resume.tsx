'use client'

import { Download, FileText, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Resume() {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/Aayush_Resume.pdf' // Path to resume in public folder
    link.download = 'Aayush_Kumar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const highlights = [
    'Complete work history',
    'Technical skills & expertise',
    'Educational background',
    'Project portfolio',
    'Certifications & awards',
  ]

  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-primary text-sm font-mono uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block">Resume</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-pretty bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Download My Resume
          </h2>
          <p className="text-foreground/70 mt-4 text-lg max-w-2xl mx-auto">
            Get a comprehensive overview of my professional journey, skills, and accomplishments
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon Section */}
            <div className="shrink-0">
              <div className="relative">
                <div className="w-32 h-32 bg-linear-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FileText className="w-16 h-16 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-glow-pulse">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-3">Professional Resume</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                A detailed PDF document showcasing my career trajectory, technical expertise, and key achievements.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {highlights.map((highlight, index) => (
                  <div 
                    key={highlight}
                    className="flex items-center gap-2 text-sm text-foreground/70 group/item"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover/item:bg-primary/30 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="group-hover/item:text-foreground transition-colors duration-300">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Download Button */}
              <Button 
                onClick={handleDownload}
                size="lg"
                className="bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 group/btn"
              >
                <Download className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" />
                Download Resume
              </Button>

              <p className="text-xs text-muted-foreground mt-3">
                PDF Format • Last Updated: February 2026
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground">
            Need a custom format or have questions? 
            <a href="#contact" className="text-primary hover:text-primary/80 ml-1 font-medium transition-colors duration-300 underline underline-offset-4">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
