import Image from "next/image"
import { Wifi, Smartphone, Laptop, Gamepad2 } from "lucide-react"

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
    <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-emerald-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 scroll-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-emerald-500">Connected</span> Living
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience seamless connectivity across all your devices with Superfy's reliable internet solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div className="scroll-fade-in-left">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center"
                alt="Happy Black family using devices with WiFi at home"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="scroll-fade-in-right">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
              Every Device, <span className="text-emerald-500">Every Moment</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
              Whether you're streaming your favorite shows, working from home, or gaming with friends, Superfy ensures
              every device in your home stays connected with lightning-fast speeds.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {devices.map((device, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 scroll-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <device.icon className="h-5 w-5 text-emerald-600" />
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 scroll-fade-in-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
              <span className="text-emerald-500">Gaming</span> Without Limits
            </h3>
            <p className="text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
              Experience zero-lag gaming with our ultra-fast connections. Stream, compete, and dominate with Superfy's
              gaming-optimized internet plans designed for serious gamers.
            </p>
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-emerald-50/50">
              <Gamepad2 className="h-8 w-8 text-emerald-600" />
              <div>
                <div className="font-bold text-gray-900">Ultra-Low Latency</div>
                <div className="text-gray-600">Perfect for competitive gaming</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 scroll-fade-in-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop&crop=center"
                alt="Happy Black man gaming online with fast internet"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ConnectivityShowcase }
