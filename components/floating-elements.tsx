"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, ArrowUp, Bot, UserIcon, Minus, Maximize2 } from "lucide-react"
import { generateBotResponse, quickQuestions } from "@/components/shared-chatbot-logic"

export default function FloatingElements() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isChatMinimized, setIsChatMinimized] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message: "Hi! I'm Shrajin's AI assistant. How can I help you learn more about his experience and skills?",
    },
  ])
  const [currentMessage, setCurrentMessage] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Scroll to bottom of chat when new messages are added
    if (scrollAreaRef.current && !isChatMinimized) {
      const scrollElement = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight
      }
    }
  }, [chatMessages, isChatMinimized])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSendMessage = (messageText?: string) => {
    const messageToSend = messageText || currentMessage
    if (!messageToSend.trim()) return

    const newMessages = [...chatMessages, { type: "user", message: messageToSend }]
    const botResponse = generateBotResponse(messageToSend)

    newMessages.push({ type: "bot", message: botResponse })
    setChatMessages(newMessages)
    setCurrentMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <>
      {/* Floating Buttons Group */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 items-end">
        {/* AI Chatbot */}
        {isChatOpen ? (
          <Card
            className={`shadow-2xl border-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm transition-all duration-300 ${
              isChatMinimized ? "w-80 h-16" : "w-80 h-96"
            }`}
            style={{ marginBottom: "60px" }} // Add margin to avoid overlapping with other buttons
          >
            <CardHeader className="pb-2 px-4 py-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span>AI Assistant</span>
                </CardTitle>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-6 h-6 p-0"
                    onClick={() => setIsChatMinimized(!isChatMinimized)}
                  >
                    {isChatMinimized ? <Maximize2 className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
                  </Button>
                  <Button variant="ghost" size="sm" className="w-6 h-6 p-0" onClick={() => setIsChatOpen(false)}>
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {!isChatMinimized && (
              <CardContent className="p-0 flex flex-col h-full">
                <ScrollArea className="flex-1 px-4 pb-2" ref={scrollAreaRef}>
                  <div className="space-y-3">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[85%] p-2.5 rounded-lg text-sm leading-relaxed ${
                            msg.type === "user"
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-sm"
                              : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {msg.type === "bot" && <Bot className="w-3 h-3 mt-1 text-purple-600 flex-shrink-0" />}
                            {msg.type === "user" && <UserIcon className="w-3 h-3 mt-1 flex-shrink-0" />}
                            <span className="break-words">{msg.message}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Quick Questions */}
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {quickQuestions.slice(0, 3).map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs rounded-full h-6 px-2"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="p-3 border-t bg-gray-50/50 dark:bg-gray-800/50">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask me about Shrajin..."
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 rounded-full text-sm h-8 px-3"
                      ref={inputRef}
                    />
                    <Button
                      size="sm"
                      onClick={() => handleSendMessage()}
                      disabled={!currentMessage.trim()}
                      className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 h-8 w-8 p-0"
                    >
                      <Send className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ) : (
          <div className="flex gap-2">
            {/* WhatsApp Button */}
            <Button
              className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-200 hover:scale-105"
              onClick={() =>
                window.open(
                  "https://wa.me/9779869370599?text=Hi%20Shrajin,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
                  "_blank",
                )
              }
            >
              <span className="text-xl">💬</span>
            </Button>

            {/* AI Chat Button */}
            <Button
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all duration-200 hover:scale-105"
              onClick={() => {
                setIsChatOpen(true)
                setIsChatMinimized(false)
              }}
            >
              <Bot className="w-6 h-6" />
            </Button>
          </div>
        )}

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            variant="outline"
            className="w-12 h-12 rounded-full shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-200 hover:scale-105"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        )}
      </div>
    </>
  )
}
