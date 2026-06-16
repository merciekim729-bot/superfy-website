import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Flame } from "lucide-react"

const packages = [
  {
    name: "Superfy Lite",
    speed: "Up to 6 Mbps",
    ideal: ["Web browsing", "Social media", "Emails & messaging", "Online use"],
    price: "1,100",
    popular: false,
    color: "border-slate-200 hover:border-slate-300",
  },
  {
    name: "Superfy Basic",
    speed: "Up to 10 Mbps",
    ideal: ["social", "HD streaming", "video calls", "laptop & phones"],
    price: "1,800",
    popular: false,
    color: "border-slate-200 hover:border-slate-300",
  },
  {
    name: "Superfy Plus",
    speed: "Up to 15 Mbps",
    ideal: ["Remote work", "Online classes", "Smart home Devices", "Multiple connected devices"],
    price: "2,000",
    popular: false,
    color: "border-slate-200 hover:border-slate-300",
  },
  {
    name: "Superfy Pro",
    speed: "Up to 25 Mbps",
    ideal: ["Online gaming", "Large Households", "Heavy downloads and uploads", "4K streaming multiple screens"],
    price: "2,500",
    popular: true,
    color: "border-[#FFFFFF] bg-[#FFFFFF] hover:border-[#FFFFFF] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:text-[#FFFFFF]",
  },
  {
    name: "Superfy Max",
    ideal: ["Content creation", "Small businesses", "CCTV & cloud backups", "High-demand users"],
    price: "3,000",
    speed: "Up to 40 Mbps",
    popular: false,
    color: "border-slate-200 hover:border-slate-300",
  },
]

function PackagesSection() {
  return (
    <section id="packages" className="py-12 sm:py-16 lg:py-20 bg-[url('/wifiii.jpg')] bg-fit bg-center relative transition ease-in-out duration-5s">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our <span className="text-[#119E3A]">Packages</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 max-w-2xl mx-auto lg:max-w-none lg:mx-0">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${pkg.color} transition-all duration-300 hover:shadow-xl scroll-fade-in-up ${pkg.popular ? "transform scale-105 shadow-lg" : "text-white"
                }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-white">
                  <Badge className="bg-[#445E8D] text-white px-3 py-1 text-xs lg:text-sm font-bold animate-pulse">
                    <Flame className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-[#008738] mb-2 bg-[ url('/wifi.png')] bg-no-repeat bg-center bg-contain">
                  <span className ="text-[#008738] font-bold tracking-widest uppercase text-lg sm:text-xl lg:text-2xl">{pkg.name}
                  </span>
                  </CardTitle>

                <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#0E173C]">{pkg.speed}</div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-8">
                  {pkg.ideal.map((ideal, idealIndex) => (
                    <li key={idealIndex} className="flex items-center">
                      <Check className="h-4 w-4 lg:h-5 lg:w-5 text-[#119E3A] mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm lg:text-base">{ideal}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E173C]">Ksh {pkg.price}</span>
                <span className="text-[#0E173C] text-sm sm:text-base">/month</span>
              </div>

                <Button
                  className={`w-full font-semibold py-2 lg:py-3 rounded-full transition-all duration-200 hover:scale-105 ${pkg.popular
                    ? "bg-[#119E3A] hover:bg-[#119E3A] text-white shadow-lg hover:shadow-xl"
                    : "bg-white border-2 border-[#119E3A] text-[#119E3A] hover:bg-[#0E173C] hover:text-white"
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
