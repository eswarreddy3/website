"use client"

import { BookOpen, Users, Building2, FileText } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Student Training",
    description:
      "Real-time niche technology training designed to bridge the gap between academia and industry demands.",
  },
  {
    icon: Users,
    title: "Personalized Mentorship",
    description: "One-on-one mentorship programs connecting you with industry experts for career guidance.",
  },
  {
    icon: Building2,
    title: "Corporate Training",
    description: "Upskill your workforce with customized corporate and faculty training on advanced technologies.",
  },
  {
    icon: FileText,
    title: "Government Consulting",
    description: "Expert consulting and proposal development for government initiatives and strategic projects.",
  },
]

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Core Offerings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to empower learners, institutions, and government bodies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all duration-300 hover:shadow-lg animate-in fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
