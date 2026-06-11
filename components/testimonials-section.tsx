import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Mercy",
    location: "Nairobi",
    quote: "I switched to Superfy and haven't looked back — no lag, no stress.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David",
    location: "Kisumu",
    quote: "Best WiFi we've used for the office. Reliable and fast!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Sarah",
    location: "Mombasa",
    quote: "Gaming has never been smoother. Superfy Max is worth every shilling.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

function TestimonialsSection() {
  return (
    <section className="py-20 bg-navy-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#119E3A]">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from real Superfy customers across Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#119E3A] fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 text-lg mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-[#119E3A]">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSection }
