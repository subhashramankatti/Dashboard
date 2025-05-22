"use client"

import type React from "react"
import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! How can I help you today?", isUser: false },
  ])
  const [newMessage, setNewMessage] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // Add user message
    setMessages([...messages, { text: newMessage, isUser: true }])
    setNewMessage("")

    // Simulate response after a short delay
    setTimeout(() => {
      const responses = [
        "Thanks for your message! I'll help you with that.",
        "I understand what you're looking for. Let me assist you.",
        "Great question! Here's what you need to know...",
        "I'm checking on that for you now.",
        "Let me find the best solution for you.",
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages((prev) => [...prev, { text: randomResponse, isUser: false }])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col z-40 border">
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <h3 className="font-medium">Live Chat Support</h3>
            <p className="text-xs opacity-90">We typically reply within a few minutes</p>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? "bg-blue-500 text-white self-end rounded-br-none"
                    : "bg-gray-100 text-gray-800 self-start rounded-bl-none"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon" className="bg-green-500 hover:bg-green-600 text-white">
              <Send size={18} />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
