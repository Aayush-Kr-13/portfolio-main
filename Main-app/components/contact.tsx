'use client'

import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setEmail('')
    setMessage('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 animate-fade-in-up">
          <span className="text-primary text-sm font-mono uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-pretty">Let&apos;s connect</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/50"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/50 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-glow-pulse"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm animate-scale-in">
                  ✓ Message sent! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="flex gap-4 items-start group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-6">
                <Mail className="text-primary group-hover:animate-bounce" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Email</h3>
                <a href="mailto:2301aayush@gmail.com" className="text-primary hover:text-primary/80 transition-colors duration-300">
                  2301aayush@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Follow me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Aayush-Kr-13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 hover:bg-primary/10"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/aayush-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:bg-primary/10"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/aayushkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110 hover:-rotate-6 hover:bg-primary/10"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out anytime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
