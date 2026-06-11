import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Flame } from "lucide-react"

const packages = [
  {
    name: "Superfy Basic",
    price: "1,500",
    speed: "Up to 20 Mbps",
    ideal: "Browsing, social media, emails",
    features: ["Unlimited data", "24/7 support", "Easy setup", "Secure connection"],
    popular: false,
    color: "border-slate-200 hover:border-slate-300",
  },
  {
    name: "Superfy Plus",
    price: "1,800",
    speed: "Up to 50 Mbps",
    ideal: "HD streaming, remote work",
    features: ["Unlimited data", "Priority support", "Free installation", "Advanced security"],
    popular: true,
    color: "border-emerald-500 bg-emerald-50/20",
  },
  {
    name: "Superfy Max",
    price: "3,000",
    speed: "Up to 100 Mbps",
    ideal: "Gaming, offices, heavy downloads",
    features: ["Unlimited data", "Premium support", "Free router upgrade", "Business features"],
    popular: false,
    color: "border-slate-200 hover:border-slate-300",
  },
]

function PackagesSection() {
  return (
    <section id="packages" className="py-12 lg:py-20 bg-gradient-to-b from-emerald-50/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 scroll-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-500">Packages</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All packages include unlimited data and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${pkg.color} transition-all duration-300 hover:shadow-xl scroll-fade-in-up ${
                pkg.popular ? "transform scale-105 shadow-lg" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-500 text-white px-3 py-1 text-xs lg:text-sm font-bold animate-pulse">
                    <Flame className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{pkg.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl lg:text-4xl font-bold text-emerald-600">Ksh {pkg.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <div className="text-base lg:text-lg font-semibold text-gray-700 mb-2">{pkg.speed}</div>
                <p className="text-gray-600 text-sm lg:text-base">Ideal for: {pkg.ideal}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6 lg:mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 lg:h-5 lg:w-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-semibold py-2 lg:py-3 rounded-full transition-all duration-200 hover:scale-105 ${
                    pkg.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white"
                  }`}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export { PackagesSection }
