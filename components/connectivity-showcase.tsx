import Image from "next/image"
import { Wifi, Smartphone, Laptop, Gamepad2, MapPin } from "lucide-react"

const devices = [
  {
    icon: Wifi,
    name: "WiFi Router",
    description: "High-speed connectivity",
  },
  {
    icon: Smartphone,
    name: "Mobile Devices",
    description: "Seamless streaming",
  },
  {
    icon: Laptop,
    name: "Work From Home",
    description: "Reliable remote work",
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    description: "Zero lag gaming",
  },
]

function ConnectivityShowcase() {
  return (
    <section id="connectivity-showcase" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-navy-50 via-navy-400 to-navy-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            <span className="text-[#119E3A]">With you</span> Every step
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="scroll-fade-in-left">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/womansmiling.jpg"
                alt="Happy Black family using devices with WiFi at home"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="scroll-fade-in-right">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              no lags, <span className="text-[#119E3A]">Despite the rain</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
              Whether you're streaming your favorite shows, working from home, or gaming with friends, Superfy ensures
              every device in your home stays connected with lightning-fast speeds.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {devices.map((device, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 scroll-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-[#F5F7F2] p-2 rounded-lg">
                    <device.icon className="h-5 w-5 text-[#119E3A]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{device.name}</div>
                    <div className="text-gray-600 text-xs">{device.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ConnectivityShowcase }
