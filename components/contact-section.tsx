"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-navy-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Get in <span className="text-[#119E3A]">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-900 max-w-2xl mx-auto">
            Ready to get connected? Contact us today and we'll help you choose the perfect plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 scroll-fade-in-left">
            <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white transition-colors duration-300">
              <div className="bg-[#119E3A] p-3 rounded-lg">
                <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                <p className="text-gray-600">+254 700 000 000</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white transition-colors duration-300">
              <div className="bg-[#119E3A] p-3 rounded-lg">
                <MessageCircle className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">WhatsApp</h3>
                <p className="text-gray-600">Chat Support Available</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white transition-colors duration-300">
              <div className="bg-[#119E3A] p-3 rounded-lg">
                <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                <p className="text-gray-600">support@superfy.co.ke</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white transition-colors duration-300">
              <div className="bg-[#119E3A] p-3 rounded-lg">
                <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Coverage</h3>
                <p className="text-gray-600">Nairobi, Kisumu, Mombasa & More</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-slate-100 scroll-fade-in-right">
            <CardHeader>
              <CardTitle className="text-xl lg:text-2xl text-center text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-slate-200 focus:border-[#119E3A] transition-colors duration-300"
                  required
                />
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-slate-200 focus:border-[#119E3A] transition-colors duration-300"
                  required
                />
                <Input
                  name="location"
                  placeholder="Your Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="border-slate-200 focus:border-[#119E3A] transition-colors duration-300"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-slate-200 focus:border-[#119E3A] min-h-[100px] lg:min-h-[120px] transition-colors duration-300"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-[#119E3A] hover:bg-[#119E3A] text-white font-semibold py-2 lg:py-3 rounded-full hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export { ContactSection }
