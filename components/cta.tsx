"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-12 md:p-20 text-center space-y-8 animate-in fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">Ready to Transform Your Career?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Join hundreds of professionals who have already taken the first step towards excellence with Fynity
            Innovations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Contact Us Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
