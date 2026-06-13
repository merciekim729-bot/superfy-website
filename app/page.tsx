import { Header } from "@/components/header"
import HeroSection from "@/components/hero-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { PackagesSection } from "@/components/packages-section"
import { StatsSection } from "@/components/stats-section"
import { ConnectivityShowcase } from "@/components/connectivity-showcase"
import { GetConnectedSection } from "@/components/get-connected-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PackagesSection />
        <WhyChooseSection />
        <StatsSection />
        <ConnectivityShowcase />
        <GetConnectedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
