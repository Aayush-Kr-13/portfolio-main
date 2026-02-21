'use client'

import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      setEmail('')
      setMessage('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 lg:px-8 xl:px-12 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-5xl xl:max-w-6xl mx-auto relative z-10">
        <div className="mb-12 lg:mb-16 animate-fade-in-up">
          <span className="text-primary text-sm lg:text-base font-mono uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-pretty">Let&apos;s connect</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8" aria-label="Contact form">
              <div>
                <label htmlFor="email" className="block text-sm lg:text-base font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 lg:px-5 lg:py-4 text-base lg:text-lg bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/50"
                  required
                  aria-required="true"
                  aria-describedby="email-description"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm lg:text-base font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 lg:px-5 lg:py-4 text-base lg:text-lg bg-secondary border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 hover:border-primary/50 resize-none"
                  required
                  aria-required="true"
                  aria-describedby="message-description"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg bg-primary/10 hover:bg-primary/20 text-primary hover:text-foreground border-2 border-primary hover:border-primary rounded-lg font-semibold hover:shadow-md hover:shadow-primary/15 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                aria-label="Send contact message"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className="p-4 lg:p-5 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm lg:text-base animate-scale-in" role="alert" aria-live="polite">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {error && (
                <div className="p-4 lg:p-5 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm lg:text-base animate-scale-in" role="alert" aria-live="assertive">
                  ✗ {error}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:space-y-10 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="flex gap-4 lg:gap-5 items-start group cursor-pointer">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-6">
                <Mail className="text-primary group-hover:animate-bounce" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-base lg:text-lg text-foreground mb-1 group-hover:text-primary transition-colors">Email</h3>
                <a href="mailto:2301aayush@gmail.com" className="text-sm lg:text-base text-primary hover:text-primary/80 transition-colors duration-300">
                  2301aayush@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-base lg:text-lg text-foreground mb-4 lg:mb-6">Follow me</h3>
              <div className="flex gap-4 lg:gap-5">
                <a
                  href="https://github.com/Aayush-Kr-13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 lg:w-14 lg:h-14 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 hover:bg-primary/10"
                  aria-label="Visit GitHub profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aayush-kumar-904967218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 lg:w-14 lg:h-14 bg-secondary border border-border rounded-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:bg-primary/10"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <p className="text-foreground/80 text-base lg:text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out anytime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
