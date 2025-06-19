"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MapPin, Star, ShoppingCart } from "lucide-react"

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "E-commerce Development Package",
      description: "Complete e-commerce solution with payment gateway integration",
      price: "NPR 50,000",
      image: "/placeholder.svg?height=250&width=300",
      rating: 5,
      features: ["eSewa Integration", "Khalti Integration", "Admin Dashboard", "Mobile Responsive"],
    },
    {
      id: 2,
      name: "IT Service Optimization",
      description: "Streamline your IT processes and reduce manual work",
      price: "NPR 25,000",
      image: "/placeholder.svg?height=250&width=300",
      rating: 5,
      features: ["Process Automation", "Staff Training", "Documentation", "Support"],
    },
    {
      id: 3,
      name: "AI Integration Consultation",
      description: "Transform your business with AI and automation solutions",
      price: "NPR 35,000",
      image: "/placeholder.svg?height=250&width=300",
      rating: 5,
      features: ["AI Strategy", "Workflow Automation", "Implementation", "Training"],
    },
    {
      id: 4,
      name: "Web Development Service",
      description: "Custom web applications tailored to your business needs",
      price: "NPR 40,000",
      image: "/placeholder.svg?height=250&width=300",
      rating: 5,
      features: ["Custom Design", "Database Integration", "API Development", "Maintenance"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Shop Digitally: My E-commerce Ventures
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional digital services and solutions crafted with expertise from real-world experience
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-full"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Explore Products
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Services & Products</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <Button
                    size="sm"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 group-hover:text-green-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs rounded-full">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                    <Button size="sm" variant="outline" className="rounded-full">
                      Quick View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story & Ethos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            My passion for e-commerce development stems from hands-on experience as a Web Developer Intern, where I
            solved complex authentication and database issues, integrated payment gateways, and collaborated with senior
            developers to deliver projects on time. The Next Trade Link project showcases my expertise in integrating
            local payment solutions like eSewa and Khalti, making e-commerce accessible to Nepali businesses.
          </p>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.4041494859!2d85.2479852!3d27.7172453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Digital Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's build something amazing together with proven expertise and local market knowledge
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full"
              onClick={() => window.open("https://shop.nexttradelink.com.np", "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Our Store
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              <Link href="/contact" className="flex items-center text-blue-600 hover:text-white">
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
