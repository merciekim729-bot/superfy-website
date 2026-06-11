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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-[#119E3A] p-2 rounded-lg">
              <Wifi className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#119E3A]">Superfy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#119E3A] font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-gray-700 hover:text-[#119E3A] font-medium transition-colors"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("coverage")}
              className="text-gray-700 hover:text-[#119E3A] font-medium transition-colors"
            >
              Coverage
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#119E3A] font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#119E3A] hover:bg-[#119E3A] text-white font-semibold px-6 py-2 rounded-full"
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
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-[#119E3A] font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("packages")}
                className="text-gray-700 hover:text-[#119E3A] font-medium text-left"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection("coverage")}
                className="text-gray-700 hover:text-[#119E3A] font-medium text-left"
              >
                Coverage
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-[#119E3A] font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#119E3A] hover:bg-[#119E3A] text-white font-semibold w-full mt-4"
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
