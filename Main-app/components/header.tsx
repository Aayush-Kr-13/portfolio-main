'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Resume', href: '#resume' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.href)}
              className="text-foreground/70 hover:text-primary transition-all duration-300 relative group transform hover:scale-110"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary hover:text-primary/80 transition-all duration-300 transform hover:scale-125"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden animate-fade-in-up">
            <div className="flex flex-col gap-4 px-4 py-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.href)}
                  className="text-foreground/70 hover:text-primary transition-all duration-300 text-left pl-4 py-2 rounded-lg hover:bg-primary/10 hover:pl-6 transform hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </button>
              ))}
              <div className="pl-4 py-2 flex items-center gap-2">
                <span className="text-foreground/70 text-sm">Theme:</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
