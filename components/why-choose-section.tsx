import { Zap, Package, MapPin, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast Internet",
    description: "Up to 100 Mbps available",
    color: "bg-emerald-500",
  },
  {
    icon: Package,
    title: "Flexible Plans",
    description: "Starting at just Ksh 1,500",
    color: "bg-emerald-400",
  },
  {
    icon: MapPin,
    title: "Local Support",
    description: "We're here when you need us",
    color: "bg-emerald-600",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Safe browsing for all your devices",
    color: "bg-emerald-500",
  },
]

function WhyChooseSection() {
  return (
    <section className="py-12 lg:py-20 bg-navy-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 scroll-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-emerald-500">Superfy?</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver more than just internet — we deliver reliability, speed, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 scroll-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`${feature.color} w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                <feature.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { WhyChooseSection }
