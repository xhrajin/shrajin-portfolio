"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, ExternalLink, Github, Award, Play, Send } from "lucide-react"
import { generateBotResponse, quickQuestions } from "@/components/shared-chatbot-logic"

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isDaytime, setIsDaytime] = useState(true)
  const [selectedExperience, setSelectedExperience] = useState(0)
  const [selectedEducation, setSelectedEducation] = useState(0)
  const [selectedProjectCategory, setSelectedProjectCategory] = useState("ALL")
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Shrajin's AI assistant. How can I help you learn more about his experience and skills?",
      sender: "bot",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      const nepalTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }))
      setCurrentTime(nepalTime)
      const hour = nepalTime.getHours()
      setIsDaytime(hour >= 6 && hour < 18)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleHireMe = () => {
    const subject = "Hiring Inquiry - Portfolio Website"
    const body = `Hi Shrajin,

I found your portfolio website and I'm interested in discussing a potential opportunity with you.

Could we schedule a time to talk about:
- Project requirements
- Timeline
- Budget
- Your availability

Looking forward to hearing from you!

Best regards,`

    const mailtoLink = `mailto:shrajinmaharjan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Try to open the default email client
    window.location.href = mailtoLink
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const projectCategories = ["ALL", "Web Apps", "API Integration", "E-commerce", "Automation", "Security", "Learning"]

  const projects = [
    {
      id: 1,
      title: "Bulk Onetime Secrets Generator",
      description: "Automated secure password sharing using the Onetime Secrets API for enterprise security.",
      image: "/placeholder.svg?height=200&width=300",
      category: ["Web Apps", "API Integration", "Security", "Automation"],
      technologies: ["Python", "API Integration", "Security"],
      githubLink: "https://github.com/Shrajino/Shrajin-Portfolio",
    },
    {
      id: 2,
      title: "Next Trade Link E-commerce",
      description: "Complete e-commerce platform with integrated local payment gateways (eSewa & Khalti).",
      image: "/placeholder.svg?height=200&width=300",
      category: ["Web Apps", "E-commerce"],
      technologies: ["PHP", "Laravel", "eSewa", "Khalti"],
      githubLink: "https://github.com/Shrajino/Shrajin-Portfolio",
    },
    {
      id: 3,
      title: "OCR Document Verification",
      description: "Document verification system using OCR technology with form-data comparison.",
      image: "/placeholder.svg?height=200&width=300",
      category: ["Web Apps", "API Integration", "Automation"],
      technologies: ["FastAPI", "OCR", "Python"],
      githubLink: "https://github.com/Shrajino/Shrajin-Portfolio",
    },
    {
      id: 4,
      title: "Online PC Builder Tool",
      description: "Interactive tool for building custom desktop configurations with compatibility checking.",
      image: "/placeholder.svg?height=200&width=300",
      category: ["Web Apps", "Learning"],
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Shrajino/Shrajin-Portfolio",
    },
    {
      id: 5,
      title: "Blood Bank Management",
      description: "Web application for blood bank operations with donor and inventory management.",
      image: "/placeholder.svg?height=200&width=300",
      category: ["Web Apps", "Learning"],
      technologies: ["Laravel", "PHP", "MySQL"],
      githubLink: "https://github.com/Shrajino/Shrajin-Portfolio",
    },
    {
      id: 6,
      title: "IT Service Automation",
      description: "Collection of automation scripts that reduced manual work by 90% in IT operations.",
      image: "/placeholder.svg?height=200&width=300",
      category: ["Automation", "API Integration"],
      technologies: ["Python", "Automation", "ITIL"],
      githubLink: "https://github.com/Shrajino/Shrajin-Portfolio",
    },
  ]

  const filteredProjects =
    selectedProjectCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category.includes(selectedProjectCategory))

  const services = [
    {
      title: "IT Service Optimization",
      description: "Trained and onboarded L1 staff, cutting onboarding time by 30%",
      icon: "⚡",
    },
    {
      title: "Process Automation",
      description: "Improved efficiency by automating software installations, reducing manual work by 90%",
      icon: "🤖",
    },
    {
      title: "Cross-functional Collaboration",
      description: "Expert in coordinating between teams for seamless project delivery",
      icon: "🤝",
    },
    {
      title: "AI Integration for Business",
      description: "Passionate about leveraging AI and automation for business transformation",
      icon: "🧠",
    },
  ]

  const workExperience = [
    {
      id: 0,
      company: "CloudFactory",
      fullCompany: "CloudFactory (Sprout Technology Pvt. Ltd)",
      period: "2021 - Present",
      role: "Business Application IT Secondment",
      roleDate: "May 2025 - Present",
      color: "orange",
      achievements: [
        "Learn and assist Business Application team to help building JIRA Automations",
        "Proactively collaborate with BizApps Tech members to design and implement automation solutions",
        "Support business application infrastructure and workflow optimization",
      ],
      skills: ["JIRA Automation", "Business Applications", "Workflow Optimization", "Cross-functional Collaboration"],
    },
    {
      id: 1,
      company: "CloudFactory",
      fullCompany: "CloudFactory (Sprout Technology Pvt. Ltd)",
      period: "2022 - 2025",
      role: "SecOps IT Secondment",
      roleDate: "Jan 2025 - Apr 2025",
      color: "yellow",
      achievements: [
        "Led the Device Authentication Project within the Security Operations team",
        "Successfully onboarded and registered over 2,500+ devices",
        "Centralized both historical and active device data for quick decision-making",
        "Enhanced organizational security compliance requirements",
      ],
      skills: ["Security Operations", "Device Management", "Data Centralization", "Compliance"],
    },
    {
      id: 2,
      company: "CloudFactory",
      fullCompany: "CloudFactory (Sprout Technology Pvt. Ltd)",
      period: "2022 - 2025",
      role: "IT Service Delivery Analyst",
      roleDate: "Nov 2022 - Jan 2025",
      color: "gray",
      achievements: [
        "Ensured uninterrupted IT service delivery across Nepal, Kenya, UK, USA",
        "Automated software deployments reducing manual efforts by 70%",
        "Trained and onboarded new L1 analysts, reducing ramp-up time by 30%",
        "Managed comprehensive IT asset inventory and reporting",
      ],
      skills: ["ITIL V4", "Automation", "Asset Management", "Global Operations"],
    },
  ]

  const education = [
    {
      id: 0,
      institution: "St. Xavier's College",
      fullInstitution: "St. Xavier's College, Maitighar, Nepal",
      period: "2017 - 2022",
      degree: "Bachelor of Information Management (BIM)",
      degreeDate: "2017 - 2022",
      color: "blue",
      achievements: [
        "Achieved CGPA of 3.31 with focus on technology and business management",
        "Worked with classmates to fund and donate stationary items to remote schools",
        "Got structured and practical knowledge to bridge IT with Business",
        "Completed comprehensive coursework in AI, Software Engineering, and Business Finance",
      ],
      skills: ["Artificial Intelligence", "Software Engineering", "Database Design", "Business Finance"],
    },
    {
      id: 1,
      institution: "Moonlight Secondary School",
      fullInstitution: "Moonlight Secondary School",
      period: "2015 - 2017",
      degree: "High School",
      degreeDate: "2015 - 2017",
      color: "green",
      achievements: [
        "Achieved First Division with 68.60% marks demonstrating academic excellence",
        "Specialized in Computer Science with strong programming fundamentals",
        "Completed advanced coursework in Mathematics and Economics",
        "Participated in various academic competitions and extracurricular activities",
      ],
      skills: ["Computer Science", "Mathematics", "Economics", "Accounting"],
    },
    {
      id: 2,
      institution: "Jupiter English Boarding School",
      fullInstitution: "Jupiter English Boarding School",
      period: "Passed 2015",
      degree: "School Leaving Certificate (SLC)",
      degreeDate: "Passed Year 06/2015",
      color: "purple",
      achievements: [
        "Successfully completed School Leaving Certificate examination",
        "Built strong foundation in core academic subjects",
        "Developed excellent English communication skills",
        "Participated in school leadership and community service activities",
      ],
      skills: ["Foundation Studies", "English Communication", "Leadership", "Community Service"],
    },
  ]

  const educationText =
    "St. Xavier's College, Nepal (BIM - CGPA: 3.31, Courses: Artificial Intelligence, Software Engineering, Object-oriented Database, Business Finance, IT Supply Chain Management and Economics) • Moonlight Secondary School (High School - First division 68.60%, Subjects: Computer Science, Account, Math, Economics and English) • Jupiter English Boarding School (SLC - Passed Year 06/2015) • "

  const getColorClasses = (color: string, isSelected: boolean) => {
    const colors = {
      orange: {
        bg: isSelected ? "bg-orange-500" : "bg-orange-50 dark:bg-orange-900/20",
        text: isSelected ? "text-white" : "text-orange-600 dark:text-orange-400",
        dot: "bg-orange-500",
        accent: "text-orange-600 dark:text-orange-400",
        detailBg: "bg-orange-50/50 dark:bg-orange-900/10",
      },
      yellow: {
        bg: isSelected ? "bg-yellow-500" : "bg-yellow-50 dark:bg-yellow-900/20",
        text: isSelected ? "text-white" : "text-yellow-600 dark:text-yellow-400",
        dot: "bg-yellow-500",
        accent: "text-yellow-600 dark:text-yellow-400",
        detailBg: "bg-yellow-50/50 dark:bg-yellow-900/10",
      },
      gray: {
        bg: isSelected ? "bg-gray-500" : "bg-gray-50 dark:bg-gray-800",
        text: isSelected ? "text-white" : "text-gray-600 dark:text-gray-400",
        dot: "bg-gray-400",
        accent: "text-gray-600 dark:text-gray-400",
        detailBg: "bg-gray-50/50 dark:bg-gray-800/50",
      },
      blue: {
        bg: isSelected ? "bg-blue-500" : "bg-blue-50 dark:bg-blue-900/20",
        text: isSelected ? "text-white" : "text-blue-600 dark:text-blue-400",
        dot: "bg-blue-500",
        accent: "text-blue-600 dark:text-blue-400",
        detailBg: "bg-blue-50/50 dark:bg-blue-900/10",
      },
      green: {
        bg: isSelected ? "bg-green-500" : "bg-green-50 dark:bg-green-900/20",
        text: isSelected ? "text-white" : "text-green-600 dark:text-green-400",
        dot: "bg-green-500",
        accent: "text-green-600 dark:text-green-400",
        detailBg: "bg-green-50/50 dark:bg-green-900/10",
      },
      purple: {
        bg: isSelected ? "bg-purple-500" : "bg-purple-50 dark:bg-purple-900/20",
        text: isSelected ? "text-white" : "text-purple-600 dark:text-purple-400",
        dot: "bg-purple-500",
        accent: "text-purple-600 dark:text-purple-400",
        detailBg: "bg-purple-50/50 dark:bg-purple-900/10",
      },
    }
    return colors[color as keyof typeof colors] || colors.gray
  }

  const handleSendMessage = async (messageText?: string) => {
    const messageToSend = messageText || inputValue
    if (messageToSend.trim() === "") return

    const newMessage = { text: messageToSend, sender: "user" }
    setMessages((prevMessages) => [...prevMessages, newMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = generateBotResponse(messageToSend)
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: "bot" }])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-pink-200 to-blue-200 p-2">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Shrajin Maharjan - ITSD Analyst and AI Enthusiast"
                    width={250}
                    height={250}
                    className="w-full h-full rounded-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                  <span className="text-2xl">👋</span>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Hi, I am{" "}
                  <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                    Shrajin Maharjan
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  ITSD Analyst | AI Enthusiast with ITIL V4 certification and nearly 3 years of experience in IT
                  optimization, cross-functional collaboration, and passion for AI/automation in business
                  transformation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 hover:bg-pink-50 dark:hover:bg-gray-800"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1haC2kXjch0IqFTYTOSSS-9AOCLXGP6GY/view?usp=sharing",
                      "_blank",
                    )
                  }
                >
                  <Download className="w-4 h-4 mr-2" />
                  View My CV
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 hover:bg-blue-50 dark:hover:bg-gray-800"
                  onClick={handleHireMe}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ITIL V4 certified IT professional with nearly 3 years of experience in optimizing IT services,
              implementing automation solutions, and fostering cross-functional collaboration.
            </p>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
              I am passionate about leveraging technology to solve complex problems and drive business value. My
              expertise lies in IT service management, process automation, and AI integration.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 hover:bg-pink-50 dark:hover:bg-gray-800 mt-4"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1haC2kXjch0IqFTYTOSSS-9AOCLXGP6GY/view?usp=sharing",
                  "_blank",
                )
              }
            >
              <Download className="w-4 h-4 mr-2" />
              View My CV
            </Button>
          </div>

          {/* Chatbot Window */}
          <div className="max-w-3xl mx-auto mt-8">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 h-64 overflow-y-auto">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-2 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`rounded-xl px-4 py-2 text-sm max-w-[80%] ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start mb-2">
                      <div className="rounded-xl px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                        Typing...
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Questions */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs rounded-full"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-grow border rounded-full py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button
                    className="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
                    onClick={() => handleSendMessage()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Experience - Interactive Timeline */}
          <div className="mb-12 mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Professional Journey</h3>
              <p className="text-orange-500 font-medium">Roles that have shaped my expertise</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Left Side - Timeline */}
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="space-y-3">
                    {workExperience.map((exp, index) => {
                      const colorClasses = getColorClasses(exp.color, selectedExperience === index)
                      return (
                        <div
                          key={exp.id}
                          className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                            selectedExperience === index ? "scale-105" : ""
                          }`}
                          onClick={() => setSelectedExperience(index)}
                        >
                          <div
                            className={`absolute left-2 w-4 h-4 ${colorClasses.dot} rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10`}
                          ></div>
                          <div
                            className={`ml-12 p-3 rounded-lg transition-all duration-300 ${colorClasses.bg} hover:shadow-lg`}
                          >
                            <h4
                              className={`font-bold ${selectedExperience === index ? "text-white" : "text-gray-900 dark:text-white"}`}
                            >
                              {exp.company}
                            </h4>
                            <p className={`font-medium text-sm ${colorClasses.text}`}>{exp.period}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="lg:pl-6">
                  {workExperience[selectedExperience] && (
                    <div
                      className={`${getColorClasses(workExperience[selectedExperience].color, false).detailBg} rounded-lg p-5 h-full`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                          {workExperience[selectedExperience].role} @ {workExperience[selectedExperience].company}
                        </h4>
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </div>
                      <p
                        className={`font-medium mb-4 ${getColorClasses(workExperience[selectedExperience].color, false).accent}`}
                      >
                        {workExperience[selectedExperience].roleDate}
                      </p>

                      <div className="space-y-3 mb-4">
                        {workExperience[selectedExperience].achievements.slice(0, 3).map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div
                              className={`w-1.5 h-1.5 ${getColorClasses(workExperience[selectedExperience].color, false).dot} rounded-full mt-2 flex-shrink-0`}
                            ></div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {workExperience[selectedExperience].skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="rounded-full text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Education - Interactive Timeline */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Educational Journey</h3>
              <p className="text-blue-500 font-medium">Academic foundation that built my expertise</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Left Side - Timeline */}
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="space-y-3">
                    {education.map((edu, index) => {
                      const colorClasses = getColorClasses(edu.color, selectedEducation === index)
                      return (
                        <div
                          key={edu.id}
                          className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                            selectedEducation === index ? "scale-105" : ""
                          }`}
                          onClick={() => setSelectedEducation(index)}
                        >
                          <div
                            className={`absolute left-2 w-4 h-4 ${colorClasses.dot} rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10`}
                          ></div>
                          <div
                            className={`ml-12 p-3 rounded-lg transition-all duration-300 ${colorClasses.bg} hover:shadow-lg`}
                          >
                            <h4
                              className={`font-bold ${selectedEducation === index ? "text-white" : "text-gray-900 dark:text-white"}`}
                            >
                              {edu.institution}
                            </h4>
                            <p className={`font-medium text-sm ${colorClasses.text}`}>{edu.period}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="lg:pl-6">
                  {education[selectedEducation] && (
                    <div
                      className={`${getColorClasses(education[selectedEducation].color, false).detailBg} rounded-lg p-5 h-full`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                          {education[selectedEducation].degree} @ {education[selectedEducation].institution}
                        </h4>
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </div>
                      <p
                        className={`font-medium mb-4 ${getColorClasses(education[selectedEducation].color, false).accent}`}
                      >
                        {education[selectedEducation].degreeDate}
                      </p>

                      <div className="space-y-3 mb-4">
                        {education[selectedEducation].achievements.slice(0, 3).map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div
                              className={`w-1.5 h-1.5 ${getColorClasses(education[selectedEducation].color, false).dot} rounded-full mt-2 flex-shrink-0`}
                            ></div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {education[selectedEducation].skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="rounded-full text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Marquee */}
      <section className="py-6 bg-gradient-to-r from-pink-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-base font-medium text-gray-700 dark:text-gray-300">{educationText.repeat(3)}</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized in IT service optimization and automation with a passion for AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{service.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Enhanced Design */}
      <section
        id="projects"
        className="py-12 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Some Things I've Worked On
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              A showcase of my technical expertise and problem-solving abilities
            </p>
          </div>

          {/* Project Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedProjectCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedProjectCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden cursor-pointer"
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* GitHub Icon Overlay */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-2">
                      <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors text-sm">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs rounded-full px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-12 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Professional certifications that validate my expertise</p>
          </div>

          <div className="flex justify-center">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden max-w-md">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/itil-certificate.jpg"
                  alt="ITIL V4 Foundation Certificate - Shrajin Maharjan"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Certificate Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-2">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2 group-hover:text-green-600 transition-colors">
                  ITIL V4 Foundation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Certified in IT Service Management best practices and frameworks for delivering exceptional IT
                  services.
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="secondary" className="rounded-full">
                    IT Service Management
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    ITIL V4
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Featured Video
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Watch my latest content and insights</p>
          </div>

          <div className="relative">
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/DWI2Q2X3G4U?si=UxZI7AS-VsfNS_hW"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Play Icon Decoration */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-3 shadow-lg">
              <Play className="w-6 h-6 text-white fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Let's Work Together</h2>
          <p className="text-lg mb-6 opacity-90">Ready to transform your business with AI and automation?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full" onClick={handleHireMe}>
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-colors duration-200"
              onClick={() => (window.location.href = "tel:+9779869370599")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
