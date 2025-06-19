"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, User, Target, Lightbulb } from "lucide-react"

// Mock project data - in a real app, this would come from a database or API
const projectData = {
  1: {
    title: "Bulk Onetime Secrets Generators",
    description:
      "A comprehensive solution for automated secure password sharing using the Onetime Secrets API, designed to eliminate manual password distribution and enhance security protocols.",
    longDescription:
      "This project addresses the critical need for secure password sharing in enterprise environments. By leveraging the Onetime Secrets API, the system generates bulk secret links that automatically expire after a single use, ensuring maximum security. The solution reduced manual password sharing efforts by 90% and significantly improved security compliance across the organization.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    tags: ["API Integration", "Security", "Automation", "Python", "REST API"],
    technologies: ["Python", "Onetime Secrets API", "Flask", "SQLite", "Bootstrap"],
    duration: "2 months",
    client: "CloudFactory",
    role: "Full Stack Developer",
    challenges: [
      "Integrating with third-party API securely",
      "Handling bulk operations efficiently",
      "Ensuring data security and compliance",
    ],
    solutions: [
      "Implemented robust error handling and retry mechanisms",
      "Created batch processing system for bulk operations",
      "Added comprehensive logging and audit trails",
    ],
    results: [
      "90% reduction in manual password sharing work",
      "100% improvement in security compliance",
      "Saved 15+ hours per week for IT team",
    ],
  },
  2: {
    title: "Next Trade Link Pvt Ltd",
    description:
      "Complete e-commerce platform with integrated local payment gateways (eSewa and Khalti) for seamless online shopping experience in Nepal.",
    longDescription:
      "A full-featured e-commerce platform specifically designed for the Nepali market, featuring integration with local payment gateways eSewa and Khalti. The platform includes inventory management, order processing, customer management, and comprehensive analytics dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    tags: ["E-commerce", "Payment Gateway", "Integration", "PHP", "MySQL"],
    technologies: ["PHP", "Laravel", "MySQL", "eSewa API", "Khalti API", "Bootstrap", "jQuery"],
    duration: "4 months",
    client: "Next Trade Link Pvt Ltd",
    role: "Lead Developer",
    challenges: ["Integrating multiple payment gateways", "Handling currency conversions", "Ensuring PCI compliance"],
    solutions: [
      "Created unified payment interface",
      "Implemented real-time currency conversion",
      "Added comprehensive security measures",
    ],
    results: ["50% increase in online sales", "95% payment success rate", "Expanded customer base by 200%"],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const project = projectData[params.id as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Image Gallery */}
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={project.gallery[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={prevImage}
                    className="rounded-full bg-white/80 hover:bg-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <div className="flex gap-2">
                    {project.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={nextImage}
                    className="rounded-full bg-white/80 hover:bg-white"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Project Overview */}
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-600" />
                  Project Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.longDescription}</p>
              </CardContent>
            </Card>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-600">Challenges</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-600 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Solutions
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <Card className="border-0 bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-2">✓</div>
                      <p className="text-sm opacity-90">{result}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="font-medium">{project.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </Button>
              <Button variant="outline" className="w-full rounded-full">
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            </div>

            {/* Contact CTA */}
            <Card className="border-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Interested in Similar Work?</h3>
                <p className="text-sm opacity-90 mb-4">Let's discuss your project requirements</p>
                <Link href="/contact">
                  <Button variant="secondary" className="rounded-full">
                    Get In Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <div className="mt-16 flex justify-between items-center">
          <Button variant="outline" className="rounded-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous Project
          </Button>
          <Link href="/">
            <Button variant="ghost">Back to Portfolio</Button>
          </Link>
          <Button variant="outline" className="rounded-full">
            Next Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
