"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen py-20 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-in fade-in slide-in-from-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder-muted-foreground transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder-muted-foreground transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder-muted-foreground transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-accent/20 border border-accent rounded-lg text-accent font-medium animate-in fade-in">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out to us through any of the channels below. We're here to help and answer any questions you might
                have.
              </p>
            </div>

            <div className="space-y-4">
              {/* <div className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-accent transition-colors">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div> */}

              <div className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-accent transition-colors">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@fynityinnovations.com" className="hover:text-accent transition-colors">
                      info@fynityinnovations.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-accent transition-colors">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border flex items-center justify-center">
              <p className="text-muted-foreground">Google Map Integration Placeholder</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
