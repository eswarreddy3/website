"use client"

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Who We Are */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who We <span className="text-accent">Are</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Fynity Innovations LLP bridges the gap between academia and industry through personalized mentorship,
                real-time training, and innovative consulting services. We believe in empowering individuals and
                organizations to reach their full potential in the rapidly evolving technological landscape.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced professionals brings together diverse expertise in cutting-edge technologies,
                business strategy, and educational methodologies to deliver unparalleled value to our clients.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl animate-in fade-in slide-in-from-right"></div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 bg-secondary/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
          <div className="bg-primary text-primary-foreground p-12 rounded-2xl text-2xl font-semibold leading-relaxed">
            To nurture technical excellence and create future-ready professionals by connecting learning with real-world
            impact.
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our <span className="text-accent">Core Offerings</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Student Training in Niche Technologies",
                description:
                  "We provide comprehensive training programs covering emerging technologies like AI/ML, cloud computing, blockchain, cybersecurity, and more.",
              },
              {
                title: "Personalized Mentorship Programs",
                description:
                  "One-on-one guidance from industry veterans to shape your career trajectory and professional growth.",
              },
              {
                title: "Corporate and Faculty Skill Enhancement",
                description:
                  "Tailored training solutions for organizations looking to upskill their teams and stay ahead of industry trends.",
              },
              {
                title: "Government Consulting & Project Proposals",
                description:
                  "Strategic consulting services and expert proposal development for government digital initiatives and modernization projects.",
              },
            ].map((offering, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-2xl hover:border-accent transition-all duration-300 animate-in fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">{offering.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision placeholder */}
      <section className="py-20 md:py-32 bg-secondary/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To become the premier destination for technology-driven learning and consulting in South Asia, recognized
            for our commitment to excellence, innovation, and positive societal impact.
          </p>
        </div>
      </section>
    </div>
  )
}
