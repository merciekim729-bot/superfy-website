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
      <div
        className="absolute inset-x-0 top-0 h-[600px] opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 10s ease-out",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left scroll-fade-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
              Bring the Speed <span className="text-[#119E3A]">Home.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-[#0E173C] leading-relaxed">
              Superfy provides powerful, affordable WiFi that works — for homes, gamers, and growing businesses.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#119E3A] text-white hover:bg-[#119E3A] font-bold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
            >
              <Zap className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              Get Started Today
            </Button>
          </div>

          
           

            <div className=" absolute top-6 lg:top-12 right-6 lg:right-12 bg-[#0E173C] text-white px-3 pt-4 lg:px-4 lg:pt-2 square-full font-bold text-sm lg:text-base animate-float">
              Helpline: <br /> <span className="font-bold text-sm">+254 700 432 045 <br /> +254 794 967 383</span>
            </div>

            <div className="flex flex-col bottom-right items-center gap-2 text-navy-900 text-base sm:text-lg lg:mb-6 absolute right-4 lg:right-8 bottom-4 lg:bottom-8">
              <div className="rounded-3xl border border-[#445E8D] bg-white px-5 py-3 shadow-sm lg:mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#119E3A]" />
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-[0.25em] text-[#445E8D] font-semibold">Location</div>
                    <div className="mt-1 text-lg font-bold text-[#0E173C]">Ruiri & Kenyatta Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

