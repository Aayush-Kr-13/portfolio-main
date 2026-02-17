import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Aayush-Kr-13', color: 'hover:text-[#333] dark:hover:text-white' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/aayush-kumar', color: 'hover:text-[#0077b5]' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/aayushkr', color: 'hover:text-[#1DA1F2]' },
  { name: 'Email', icon: Mail, href: 'mailto:2301aayush@gmail.com', color: 'hover:text-primary' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-4 bg-secondary/50 overflow-hidden">
      {/* Animated wave effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
      
      {/* Floating orbs */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-6 animate-fade-in-up">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 rounded-full bg-background border border-border transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 ${social.color} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              )
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-linear-to-r from-transparent via-border to-transparent animate-fade-in-up" style={{ animationDelay: '0.4s' }} />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-foreground/60 text-sm hover:text-foreground/80 transition-colors duration-300">
              © 2026 Aayush Kumar. All rights reserved.
            </p>
            <span className="hidden md:inline text-foreground/40">•</span>
            <p className="text-foreground/60 text-sm">
              Built with <span className="text-primary hover:text-primary/80 transition-colors duration-300 cursor-default">Next.js</span> & <span className="text-primary hover:text-primary/80 transition-colors duration-300 cursor-default">Tailwind CSS</span>
            </p>
          </div>

          {/* Back to top hint */}
          <div className="mt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-xs text-foreground/40 flex items-center gap-2">
              <span className="animate-bounce">↑</span>
              Scroll to top
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
