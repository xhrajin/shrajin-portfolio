import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingElements from "@/components/floating-elements"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shrajin Maharjan - ITSD Analyst | AI Enthusiast",
  description:
    "Portfolio of Shrajin Maharjan - ITSD Analyst with ITIL V4 certification, specializing in IT service optimization, process automation, and AI integration for business transformation.",
  keywords:
    "Shrajin Maharjan, ITSD Analyst, AI Enthusiast, IT Service Optimization, Process Automation, Web Development, Nepal",
  authors: [{ name: "Shrajin Maharjan" }],
  openGraph: {
    title: "Shrajin Maharjan - ITSD Analyst | AI Enthusiast",
    description:
      "Professional portfolio showcasing expertise in IT service optimization, process automation, and AI integration.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingElements />
      </body>
    </html>
  )
}
