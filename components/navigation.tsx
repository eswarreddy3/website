"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light")
    setIsDark(html.classList.contains("dark"))
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-lg">F</span>
            ynity
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center gap-4">
            {mounted && (
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                {isDark ? <Sun size={20} className="text-accent" /> : <Moon size={20} className="text-primary" />}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-in fade-in">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
