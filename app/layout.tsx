import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollAnimations } from "@/components/scroll-animations"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Superfy - Fast, Reliable WiFi for Kenya",
  description:
    "Get connected with Superfy's affordable WiFi plans. Fast internet for homes, gamers, and businesses across Kenya.",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScrollAnimations />
      </body>
    </html>
  )
}
