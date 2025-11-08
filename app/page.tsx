import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Services from "@/components/services"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </div>
  )
}
