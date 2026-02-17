import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Aayush-Kr-13', color: 'hover:text-[#333] dark:hover:text-white' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/aayush-kumar', color: 'hover:text-[#0077b5]' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/aayushkr', color: 'hover:text-[#1DA1F2]' },
  { name: 'Email', icon: Mail, href: 'mailto:2301aayush@gmail.com', color: 'hover:text-primary' },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-background border border-border transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary/20 ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <p className="text-foreground/60 text-sm">
              © 2026 Aayush Kumar. All rights reserved.
            </p>
            <span className="hidden md:inline text-foreground/40">•</span>
            <p className="text-foreground/60 text-sm">
              Built with <span className="text-primary">Next.js</span> & <span className="text-primary">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
