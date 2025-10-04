"use client"

import { Button } from "@/components/ui/button"
import { Wifi } from "lucide-react"

function GetConnectedSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbE9wYWNpdHk9IjAuMSI+CjxwYXRoIGQ9Ik0yMCAyMGMwLTUuNS00LjUtMTAtMTAtMTBzLTEwIDQuNS0xMCAxMCA0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwem0xMCAwYzAtNS41LTQuNS0xMC0xMC0xMHMtMTAgNC41LTEwIDEwIDQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTB6Ii8+CjwvZz4KPHN2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="scroll-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">Internet That Moves With You.</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 mb-8 lg:mb-12 max-w-3xl mx-auto">
            Ready to experience the difference? Join thousands of satisfied customers who've made the switch to Superfy.
          </p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-orange-500 hover:bg-orange-50 font-bold text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
          >
            <Wifi className="mr-2 lg:mr-3 h-5 w-5 lg:h-6 lg:w-6" />
            Get Connected Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export { GetConnectedSection }
