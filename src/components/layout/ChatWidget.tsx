"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  X,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actionLink?: {
    label: string;
    href: string;
  };
}

const initialMessages: Message[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Hello! I'm SynVael's AI Assistant. How can I help you today? Ask me about our Private AI Models, AI Hologram Avatars, ExecuOS (Autonomous AI CEO/CTO), or Custom Enterprise Software.",
    timestamp: "Just now",
  },
];

const quickPrompts = [
  "What is HoloPresence™?",
  "How does ExecuOS work?",
  "Private AI Model Training",
  "Scope a Custom Project",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const generateBotReply = (userText: string): { text: string; actionLink?: { label: string; href: string } } => {
    const lower = userText.toLowerCase();

    if (lower.includes("holo") || lower.includes("avatar") || lower.includes("digital human")) {
      return {
        text: "SynVael HoloPresence™ deploys photorealistic 3D volumetric digital humans that appear before users on physical optical holographic glass kiosks and spatial platforms with sub-180ms conversational voice cadence and 40+ language fluency.",
        actionLink: { label: "Explore HoloPresence™", href: "/products#holopresence" },
      };
    }

    if (lower.includes("execuos") || lower.includes("ceo") || lower.includes("cto") || lower.includes("os")) {
      return {
        text: "ExecuOS is our Autonomous AI Operating System for business. It orchestrates executive agents — including an Autonomous AI CEO (Aurora-7) and Autonomous AI CTO (Nexus-9) — that forecast strategy, audit pull requests, and delegate tasks to departmental swarms.",
        actionLink: { label: "View ExecuOS™", href: "/products#execuos" },
      };
    }

    if (lower.includes("model") || lower.includes("train") || lower.includes("private") || lower.includes("vault")) {
      return {
        text: "SynVael VaultModel is our sovereign neural foundry for training and fine-tuning private AI foundation models. Built with complete data privacy behind your corporate firewall: zero external API leakage, RLHF domain tuning, and 100% model weights ownership.",
        actionLink: { label: "Explore VaultModel", href: "/products#vaultmodel" },
      };
    }

    if (lower.includes("software") || lower.includes("custom") || lower.includes("app") || lower.includes("web") || lower.includes("system")) {
      return {
        text: "We engineer tailored management software, mobile apps, and cloud web platforms designed specifically around your operational logic. Replacing spreadsheets and manual processes with automated, error-free digital workflows.",
        actionLink: { label: "Start a Custom Project", href: "/start-a-project" },
      };
    }

    if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing") || lower.includes("rate")) {
      return {
        text: "Our solutions range from turnkey modular packages to custom enterprise architectures with flexible dedicated engineering sprints and SLA guarantees.",
        actionLink: { label: "View Pricing Plans", href: "/pricing" },
      };
    }

    if (lower.includes("contact") || lower.includes("hire") || lower.includes("demo") || lower.includes("call")) {
      return {
        text: "We'd love to connect! You can book a direct technical discovery call or submit your project requirements to get a scoped estimate within 24 hours.",
        actionLink: { label: "Contact SynVael", href: "/contact" },
      };
    }

    return {
      text: "Thank you for asking! SynVael specializes in AI Model Building, Autonomous Executive Systems (AI CEO/CTO), 3D Digital Human Holograms, and Custom Enterprise Software. Would you like to scope a project or explore our products?",
      actionLink: { label: "Explore AI Products", href: "/products" },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate intelligent bot thinking
    setTimeout(() => {
      const reply = generateBotReply(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: reply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionLink: reply.actionLink,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, 700);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[70] w-[360px] sm:w-[420px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-7.5rem)] rounded-3xl bg-white border border-black/10 shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Chatbot Header */}
            <div className="bg-[#102738] text-white p-4 sm:p-4.5 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#0f86a1] flex items-center justify-center text-white shadow-xs">
                  <span className="text-base font-black tracking-tight">S</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-extrabold tracking-tight">SynVael AI</p>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-300">
                    Autonomous Intelligence &amp; Software Assistant
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#fbf9f5] text-xs">
              {messages.map((m) => {
                const isBot = m.sender === "bot";

                return (
                  <div
                    key={m.id}
                    className={`flex gap-2.5 ${isBot ? "justify-start" : "justify-end"}`}
                  >
                    {isBot && (
                      <div className="h-7 w-7 rounded-lg bg-[#0f86a1] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Bot className="h-3.5 w-3.5" />
                      </div>
                    )}

                    <div
                      className={`max-w-[82%] rounded-2xl p-3 shadow-xs leading-relaxed ${
                        isBot
                          ? "bg-white text-[#1a1f2e] border border-black/8"
                          : "bg-[#102738] text-white"
                      }`}
                    >
                      <p>{m.text}</p>

                      {/* Action Link Button if provided */}
                      {m.actionLink && (
                        <div className="mt-2.5 pt-2 border-t border-black/5">
                          <Link
                            href={m.actionLink.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0f86a1] hover:underline"
                          >
                            <span>{m.actionLink.label}</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      )}

                      <span
                        className={`text-[9px] mt-1 block text-right ${
                          isBot ? "text-slate-400" : "text-slate-300"
                        }`}
                      >
                        {m.timestamp}
                      </span>
                    </div>

                    {!isBot && (
                      <div className="h-7 w-7 rounded-lg bg-[#102738] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <User className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2.5 items-center">
                  <div className="h-7 w-7 rounded-lg bg-[#0f86a1] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="rounded-2xl bg-white p-3 border border-black/8 shadow-xs flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0f86a1] animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0f86a1] animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0f86a1] animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-3 py-2 bg-white border-t border-black/5 overflow-x-auto flex gap-1.5 shrink-0 scrollbar-none">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-full bg-[#f4f4f7] hover:bg-[#0f86a1]/10 hover:text-[#0f86a1] text-[#4b5563] text-[10px] font-semibold whitespace-nowrap transition-colors cursor-pointer border border-black/5"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Input Field */}
            <div className="p-3 bg-white border-t border-black/8 flex items-center gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask SynVael AI anything..."
                className="flex-1 bg-[#f7f7f9] text-[#1a1f2e] placeholder-[#9ca3af] text-xs px-3.5 py-2.5 rounded-xl border border-black/8 focus:outline-hidden focus:border-[#0f86a1] focus:bg-white transition-all"
              />
              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                aria-label="Send message"
                className={`h-9 w-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  inputValue.trim()
                    ? "bg-[#0f86a1] text-white shadow-xs hover:bg-[#0b6c82]"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button with "S" Icon */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close AI Chatbot" : "Open AI Chatbot"}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/10 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-[#102738] group-hover:text-[#0f86a1] transition-colors" />
          ) : (
            <span className="text-2xl font-black tracking-tighter text-[#0f86a1] select-none font-sans group-hover:scale-110 transition-transform">
              S
            </span>
          )}
        </button>
      </div>
    </>
  );
}
