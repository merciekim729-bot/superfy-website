import { Users, Wifi, Clock, Award } from "lucide-react"
import Image from "next/image"

const stats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Happy Customers",
    color: "text-[#119E3A]",
  },
  {
    icon: Wifi,
    number: "99.9%",
    label: "Uptime Guarantee",
    color: "text-[#119E3A]",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Customer Support",
    color: "text-[#119E3A]",
  },
  {
    icon: Award,
    number: "5 Years",
    label: "Industry Experience",
    color: "text-[#119E3A]",
  },
]

function StatsSection() {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-r from-[#445E8D] to-navy-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="scroll-fade-in-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Trusted by <span className="text-[#119E3A]">Thousands</span> Across Kenya
            </h2>
            <p className="text-lg lg:text-xl text-[#FFFFFF] mb-6 lg:mb-8 leading-relaxed">
              From bustling Nairobi offices to cozy homes in Kisumu, Superfy has been connecting communities with
              reliable, high-speed internet that powers their digital lives.
            </p>

            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 lg:p-6 rounded-2xl bg-gray-50 hover:bg-emerald-50/30 transition-colors duration-300 scroll-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className={`h-8 w-8 lg:h-10 lg:w-10 ${stat.color} mx-auto mb-2 lg:mb-3`} />
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative scroll-fade-in-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/woman smiling.jpg"
                alt="Happy Black woman using laptop with fast internet connection"
                width={300}
                height={80}
                className="w-full h-80 object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#119E3A] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-2xl shadow-lg animate-float">
              <div className="text-lg lg:text-xl font-bold">Connecting Kenya</div>
              <div className="text-white text-sm lg:text-base">One home at a time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { StatsSection }
