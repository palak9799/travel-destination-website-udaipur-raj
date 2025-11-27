import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { getChatResponseStream } from '../services/geminiService';
import { GenerateContentResponse } from "@google/genai";

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Khamma Ghani! I am your royal guide to Udaipur. How may I assist you today? Ask me about itineraries, hidden gems, or costs.' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Optimistic model message placeholder
      const modelMessageIndex = messages.length + 1;
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      const stream = await getChatResponseStream(messages.map(m => ({ role: m.role, text: m.text })), userMessage.text);
      
      let fullText = '';
      
      for await (const chunk of stream) {
        const content = chunk as GenerateContentResponse;
        if (content.text) {
            fullText += content.text;
            setMessages(prev => {
                const newHistory = [...prev];
                newHistory[modelMessageIndex] = { role: 'model', text: fullText };
                return newHistory;
            });
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Apologies, I seem to be having trouble connecting to the royal archives. Please try again later.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-royal-900 text-amber-500 p-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 border-2 border-amber-500 ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
      >
        <Sparkles size={24} />
        <span className="font-bold hidden sm:inline">Ask Royal Guide</span>
      </button>

      {/* Chat Interface */}
      <div className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right border border-stone-200 ${isOpen ? 'scale-100 opacity-100 h-[600px] max-h-[80vh]' : 'scale-0 opacity-0 h-0 w-0'}`}>
        
        {/* Header */}
        <div className="bg-royal-900 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="text-amber-500" size={20} />
            <div>
              <h3 className="font-serif font-bold text-lg">Mewar Guide</h3>
              <p className="text-xs text-royal-100">AI-Powered Travel Assistant</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-amber-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-royal-900 text-white rounded-br-none' 
                    : 'bg-white border border-stone-200 text-slate-800 rounded-bl-none shadow-sm'
                } ${msg.isError ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
              >
                {/* Simple Markdown rendering for bolding */}
                {msg.text.split('**').map((part, i) => 
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1].role === 'user' && (
             <div className="flex justify-start">
               <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center">
                 <Loader2 className="animate-spin text-amber-600" size={16} />
                 <span className="ml-2 text-xs text-slate-500">Consulting the archives...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about tickets, timings, or history..."
              className="flex-1 p-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-800 focus:border-transparent text-sm"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-royal-900 text-white rounded-lg hover:bg-royal-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="mt-2 text-[10px] text-center text-slate-400">
            AI can make mistakes. Please verify important travel info.
          </div>
        </div>
      </div>
    </>
  );
};
