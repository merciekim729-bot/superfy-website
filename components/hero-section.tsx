"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const images = [
  "/phone.png",
  "/blu.png",
  "/ps.png",
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative bg-none text-white overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            transition: "background-image 10s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="text-center lg:text-left scroll-fade-in-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
              Bring the Speed <span className="text-[#119E3A]">Home.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-2xl mb-6 lg:mb-8 text-[#E8F0E8] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Superfy provides powerful, affordable WiFi that works — for homes, gamers, and growing businesses.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#119E3A] text-white hover:bg-[#0F7C31] font-bold text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
            >
              <Zap className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              Get Started Today
            </Button>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:hidden">
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-3 text-sm text-white">
                <MapPin className="mr-2 h-4 w-4 text-[#119E3A]" /> Ruiri & Kenyatta Road
              </div>
              <div className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-3 text-sm text-white">
                Helpline: +254 700 432 045
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative scroll-fade-in-right">
            <div className="absolute top-6 right-6 bg-[#0E173C] text-white px-4 py-3 rounded-3xl font-bold text-sm lg:text-base animate-float shadow-xl">
              Helpline: <br /> <span className="font-bold text-sm">+254 700 432 045 <br /> +254 794 967 383</span>
            </div>
            <div className="absolute right-6 bottom-6 rounded-3xl border border-[#445E8D] bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#119E3A]" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#445E8D] font-semibold">Location</div>
                  <div className="mt-1 text-base font-bold text-[#0E173C]">Ruiri & Kenyatta Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

