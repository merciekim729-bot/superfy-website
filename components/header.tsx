"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Wifi } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-[#119E3A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-[#119E3A] p-2 rounded-lg">
              <Wifi className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold text-[#119E3A]">Superfy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-navy-800 hover:text-[#119E3A] font-medium transition-colors text-sm lg:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-navy-800 hover:text-[#119E3A] font-medium transition-colors text-sm lg:text-base"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("connectivity-showcase")}
              className="text-navy-800 hover:text-[#119E3A] font-medium transition-colors text-sm lg:text-base"
            >
              Coverage
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-navy-800 hover:text-[#119E3A] font-medium transition-colors text-sm lg:text-base"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#119E3A] hover:bg-[#119E3A] text-white font-semibold px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base"
            >
              Get Connected
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t bg-white shadow-sm">
            <nav className="flex flex-col gap-3 px-2 pb-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-navy-800 hover:text-[#119E3A] font-medium text-left text-sm w-full"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("packages")}
                className="text-navy-800 hover:text-[#119E3A] font-medium text-left text-sm w-full"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection("connectivity-showcase")}
                className="text-navy-800 hover:text-[#119E3A] font-medium text-left text-sm w-full"
              >
                Coverage
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-navy-800 hover:text-[#119E3A] font-medium text-left text-sm w-full"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#119E3A] hover:bg-[#0F7C31] text-white font-semibold w-full mt-2 text-sm"
              >
                Get Connected
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
