import Link from "next/link"
import { Wifi, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Wifi className="h-6 w-6 text-[#119E3A]" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">Superfy</span>
            </Link>
            <p className="text-slate-300 leading-relaxed max-w-md text-xs sm:text-sm text-[#c8d8cb]">
              Fast and Reliable <br />
             With you, every step of your journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-slate-300 hover:text-[#119E3A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#packages" className="text-slate-300 hover:text-[#119E3A] transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#coverage" className="text-slate-300 hover:text-[#119E3A] transition-colors">
                  Coverage
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-300 hover:text-[#119E3A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-[#119E3A] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-[#119E3A] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-300 hover:text-[#119E3A] transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-center sm:text-left">
          <p className="text-slate-400 mb-4 md:mb-0">© 2026 Superfy. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex space-x-4 align-items-right">
            <Link href="#" className="text-slate-300 hover:text-[#119E3A] transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-slate-300 hover:text-[#119E3A] transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-slate-300 hover:text-[#119E3A] transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
