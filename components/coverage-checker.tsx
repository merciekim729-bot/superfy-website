"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

function CoverageChecker() {
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle coverage check logic here
    console.log("Checking coverage for:", location)
  }

  return (
    <section id="coverage" className="py-20 bg-orange-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Coverage Checker</h2>
          <p className="text-xl text-orange-100 mb-12">
            Not sure if we're available in your area? Enter your location below to check coverage.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="text"
              placeholder="Enter your estate, town, or building"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 px-6 py-4 text-lg rounded-full border-0 focus:ring-4 focus:ring-orange-300"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Search className="mr-2 h-5 w-5" />
              Check Availability
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export { CoverageChecker }
