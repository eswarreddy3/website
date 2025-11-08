"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background with gradient effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-accent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-balance">
                <span className="text-foreground">Empowering Future </span>
                <span className="text-accent">Innovators</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Real-Time Learning, Mentorship & Government Consulting for Forward-Thinking Professionals
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Trained with Us
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right side visual */}
          <div className="relative h-96 md:h-full min-h-96 animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-transparent rounded-2xl"></div>
            <div className="absolute top-12 right-12 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-12 left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>

            {/* Tech icons grid */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Students Trained</div>
                </div>
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Mentors</div>
                </div>
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
                  <div className="text-3xl font-bold text-accent">30+</div>
                  <div className="text-sm text-muted-foreground">Tech Domains</div>
                </div>
                <div className="p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Gov Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
