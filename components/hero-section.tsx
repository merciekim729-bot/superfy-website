"use client"

import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import Image from "next/image"

function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 text-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPgo8ZyBmaWxsPSIjZmZmZmZmIiBmaWxsT3BhY2l0eT0iMC4xIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPgo8L2c+CjwvZz4KPHN2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left scroll-fade-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
              Bring the Speed <span className="text-yellow-300">Home.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-orange-100 leading-relaxed">
              Superfy provides powerful, affordable WiFi that works — for homes, gamers, and growing businesses.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-orange-500 hover:bg-orange-50 font-bold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
            >
              <Zap className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              Get Started Today
            </Button>
          </div>

          <div className="relative scroll-fade-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 lg:p-8 border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center"
                alt="Modern WiFi router and connectivity setup"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-yellow-400 text-orange-800 px-3 py-1 lg:px-4 lg:py-2 rounded-full font-bold shadow-lg text-sm lg:text-base animate-float">
              Up to 100 Mbps!
            </div>
            <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-white text-orange-500 px-3 py-1 lg:px-4 lg:py-2 rounded-full font-bold shadow-lg text-sm lg:text-base animate-float-delayed">
              From Ksh 1,500
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
