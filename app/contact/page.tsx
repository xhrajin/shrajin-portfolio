"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, User, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [emailError, setEmailError] = useState("")

  const validateEmail = (email: string) => {
    if (!email) return "" // Email is optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email) ? "" : "Please enter a valid email address"
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Validate email on change
    if (name === "email") {
      setEmailError(validateEmail(value))
    }
  }

  const handleSendMessage = () => {
    const { name, email, subject, message } = formData

    if (!message.trim()) {
      alert("Please enter a message before sending.")
      return
    }

    // Validate email if provided
    if (email && validateEmail(email)) {
      setEmailError(validateEmail(email))
      return
    }

    const emailSubject = subject || "Contact from Portfolio Website"
    const emailBody = `Name: ${name || "Not provided"}
Email: ${email || "Not provided"}

Message:
${message}

---
Sent from Shrajin's Portfolio Website`

    const mailtoLink = `mailto:shrajinmaharjan@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    // Open the default email client
    window.location.href = mailtoLink

    // Reset form and error after sending
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setEmailError("")
  }

  const handleQuickContact = () => {
    const subject = "Quick Contact - Portfolio Website"
    const body = `Hi Shrajin,

I found your portfolio website and would like to get in touch with you.

Best regards,`

    const mailtoLink = `mailto:shrajinmaharjan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next project or have questions about my services? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Combined Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Multiple ways to reach me - choose what works best for you
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Social Media - Compact */}
                <div className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">SM</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-purple-600 dark:text-purple-400 text-sm sm:text-base">
                      Social Media
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Connect with me on professional and social platforms
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="rounded-full bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1 h-7"
                        onClick={() => window.open("https://linkedin.com/in/shrajin-maharjan", "_blank")}
                      >
                        <Linkedin className="w-3 h-3 mr-1" />
                        LinkedIn
                      </Button>
                      <Button
                        size="sm"
                        className="rounded-full bg-pink-600 hover:bg-pink-700 text-xs px-3 py-1 h-7"
                        onClick={() => window.open("https://instagram.com/techwith_shrajin", "_blank")}
                      >
                        <Instagram className="w-3 h-3 mr-1" />
                        Instagram
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 sm:p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 text-sm sm:text-base">Email</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Drop me a line anytime - I typically respond within 24 hours
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <span className="font-medium text-sm break-all">shrajinmaharjan@gmail.com</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full w-fit"
                        onClick={() => (window.location.href = "mailto:shrajinmaharjan@gmail.com")}
                      >
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 sm:p-4 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-green-600 dark:text-green-400 text-sm sm:text-base">Phone</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Available for calls during business hours (9 AM - 6 PM NPT)
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <span className="font-medium text-sm">+977 9869370599</span>
                      <Button
                        size="sm"
                        className="rounded-full bg-green-600 hover:bg-green-700 w-fit"
                        onClick={() => (window.location.href = "tel:+9779869370599")}
                      >
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 sm:p-4 rounded-lg bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-red-600 dark:text-red-400 text-sm sm:text-base">Location</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Based in the heart of Nepal's tech hub
                    </p>
                    <span className="font-medium text-sm">Kathmandu, Nepal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">Tell me about your project or just say hello!</p>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name (Optional)
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 rounded-xl border-2 focus:border-purple-500 h-12 text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email (Optional)
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`pl-10 rounded-xl border-2 focus:border-purple-500 h-12 text-base ${
                          emailError ? "border-red-500 focus:border-red-500" : ""
                        }`}
                      />
                      {emailError && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                          <AlertCircle className="w-3 h-3" />
                          <span>{emailError}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject (Optional)
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Discussion"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="rounded-xl border-2 focus:border-purple-500 h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Hi Shrajin, I'd like to discuss..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="resize-none rounded-xl border-2 focus:border-purple-500 text-base min-h-[120px]"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl h-12 text-base font-medium"
                  onClick={handleSendMessage}
                  disabled={!formData.message.trim() || !!emailError}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center px-2">
                  This will open your default email client with the message pre-filled
                </p>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-2 hover:bg-green-50 dark:hover:bg-gray-800 h-12 text-base"
                onClick={() =>
                  window.open(
                    "https://wa.me/9779869370599?text=Hi%20Shrajin,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
                    "_blank",
                  )
                }
              >
                <span className="text-green-600 mr-2 text-lg">📱</span>
                WhatsApp Chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-2 hover:bg-blue-50 dark:hover:bg-gray-800 h-12 text-base"
                onClick={handleQuickContact}
              >
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                Quick Email
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">What's your typical response time?</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  I typically respond to emails within 24 hours and phone calls during business hours (9 AM - 6 PM NPT).
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Do you work with international clients?</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  Yes! I work with clients globally and am comfortable with remote collaboration across different time
                  zones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">What services do you offer?</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  IT service optimization, process automation, web development, AI integration, and e-commerce
                  solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">How do you handle project timelines?</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                  I provide realistic timelines based on project scope and maintain regular communication throughout the
                  development process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
