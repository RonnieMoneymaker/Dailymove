'use client'

import { useState } from 'react'
import { MessageCircle, X, Send, User, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'

const mockMessages = [
  { id: 1, type: 'bot', message: 'Hallo! Ik ben Sarah van DailyMove. Hoe kan ik je helpen?', time: '14:32' },
  { id: 2, type: 'user', message: 'Hoi! Ik zoek een goede E-step voor in de stad', time: '14:33' },
  { id: 3, type: 'bot', message: 'Perfect! Voor stadgebruik raad ik de Xiaomi Mi Electric Scooter 4 Pro aan. Deze heeft een bereik van 45km en is zeer betrouwbaar. Wil je meer details?', time: '14:33' },
]

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = () => {
    if (!newMessage.trim()) return
    
    const userMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      message: newMessage,
      time: new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })
    }
    
    setMessages([...messages, userMessage])
    setNewMessage('')
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot' as const,
        message: 'Dank je voor je bericht! Een van onze experts neemt zo snel mogelijk contact met je op. Gemiddelde responstijd: 2 minuten.',
        time: new Date().toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-bounce"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>
        
        {/* Floating message preview */}
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-3 max-w-64 animate-pulse">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <User className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm font-medium">Sarah - Live Support</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-auto"></div>
          </div>
          <p className="text-sm text-gray-600">Hallo! Kan ik je helpen met het kiezen van een E-step? 👋</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Sarah - Live Support</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-100">Online • Reageert meestal binnen 2 min</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.type === 'bot' ? 'bg-blue-500' : 'bg-purple-500'
              }`}>
                {msg.type === 'bot' ? (
                  <Bot className="h-4 w-4 text-white" />
                ) : (
                  <User className="h-4 w-4 text-white" />
                )}
              </div>
              <div className={`max-w-[80%] ${msg.type === 'user' ? 'text-right' : ''}`}>
                <div className={`rounded-2xl p-3 ${
                  msg.type === 'bot' 
                    ? 'bg-white text-gray-800 shadow-sm' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                }`}>
                  <p className="text-sm">{msg.message}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1 block">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Typ je bericht..."
              className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button
              onClick={sendMessage}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-4"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Gemiddelde responstijd: 2 minuten • We zijn online 24/7
          </p>
        </div>
      </div>
    </div>
  )
}
