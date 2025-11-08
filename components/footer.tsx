"use client"

import Link from "next/link"
import { Linkedin, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold text-primary">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-lg">F</span>
              ynity
            </div>
            <p className="text-muted-foreground">
              Empowering innovators through real-time learning and expert mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-card border border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="p-2 bg-card border border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Youtube size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="p-2 bg-card border border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Instagram size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Fynity Innovations LLP — All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
