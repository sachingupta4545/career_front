"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Sparkles, User, Bot, Loader2, Sun, Moon } from "lucide-react";

type Message = {
  role: "assistant" | "user";
  body: string;
};

const featuredMarks = [
  { symbol: "Re", label: "React & Next.js" },
  { symbol: "Ts", label: "TypeScript" },
  { symbol: "Nd", label: "Node.js & APIs" },
  { symbol: "Db", label: "Databases & CI/CD" },
];

const seedMessages: Message[] = [
  {
    role: "assistant",
    body: "Hello! I'm Sachin's AI assistant. Ask me about his tech stack, recent projects, or how to get in touch.",
  }
];

const quickActions = [
  "Tech stack",
  "Recent projects",
  "Contact info",
  "Experience",
];

const statCards = [
  { value: "05+", label: "years experience" },
  { value: "20+", label: "projects shipped" },
  { value: "Full", label: "stack mastery" },
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>(seedMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: "user", body: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response based on queries
    const lowerInput = userMessage.body.toLowerCase();

    setTimeout(() => {
      let responseBody = "I'm here to help. If you're looking to hire or collaborate, feel free to reach out directly via contact details.";

      if (lowerInput.includes("stack") || lowerInput.includes("tech")) {
        responseBody = "Sachin specializes in React, Next.js, TypeScript on the frontend, and Node.js with various databases on the back end.";
      } else if (lowerInput.includes("project")) {
        responseBody = "He has built numerous full-stack applications, from complex dashboards to high-performance AI copilots.";
      } else if (lowerInput.includes("contact")) {
        responseBody = "You can reach Sachin at hi@example.com or find him on LinkedIn and GitHub.";
      }

      const aiMessage: Message = {
        role: "assistant",
        body: responseBody
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
  };

  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sachin Gupta",
            jobTitle: "Software Engineer",
            url: "https://yourportfolio.com",
          }),
        }}
      />

      <header className="topbar">
        <motion.div whileHover={{ scale: 1.05 }} className="brand-lockup">
          <span className="brand-burst" aria-hidden="true">
            S
          </span>
          <span className="brand-name">SACHIN GUPTA</span>
        </motion.div>

        <nav className="topnav" aria-label="Primary">
          <motion.a whileHover={{ y: -2 }} href="#overview">Profile</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#chatbox">AI Assistant</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#contact">Contact</motion.a>
        </nav>

        <motion.button
          whileHover={{ scale: 1.05, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
          className="login-pill"
          aria-label="Toggle theme"
          style={{ width: "42px", height: "42px", padding: 0, display: "grid", placeItems: "center" }}
        >
          <AnimatePresence mode="wait">
            {theme === "light" ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <Sun size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <Moon size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </header>

      <section className="hero-card" id="overview">
        <aside className="story-column">
          <div className="story-intro">
            <p className="eyebrow-copy">
              Full-Stack Engineer crafting premium web experiences, blending modern UI design with robust backend architecture.
            </p>

            <div className="service-pills" aria-label="Skills">
              <span>Frontend Dev</span>
              <span>Backend Architecture</span>
              <span>UI / UX Polish</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="wordmark-block"
            style={{ marginBottom: 'auto' }}
          >
            <motion.h1
              className="hero-wordmark"
              initial={{ scale: 0.85, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              style={{ paddingBottom: '10px' }}
            >
              SACHIN
            </motion.h1>
            <motion.p
              className="wordmark-support"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Software Engineer building products that feel smooth and perform fast.
            </motion.p>
          </motion.div>

          <div className="story-actions">
            <motion.a whileHover={{ scale: 1.05 }} href="#chatbox" className="primary-link">
              Talk to my AI
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="secondary-link">
              View Resume
            </motion.a>
          </div>

          <nav className="legal-links" aria-label="Secondary">
            <a href="#github">GitHub Profile</a>
            <a href="#linkedin">LinkedIn Network</a>
            <a href="#email">Email Me</a>
          </nav>

          <p className="made-by" id="contact">
            Built with Next.js, Framer Motion, and custom AI tooling.
          </p>
        </aside>

        <section className="chat-column" aria-label="Animated chatbot showcase">
          <div className="halo-mark">S</div>
          <div className="status-dot" />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="chat-frame"
            id="chatbox"
          >
            <div className="chat-header">
              <div className="chat-title" style={{ gap: '14px', alignItems: 'center' }}>
                <span className="tiny-mark" aria-hidden="true">
                  <Sparkles size={18} strokeWidth={2.5} />
                </span>
                <div>
                  <p className="chat-name">Sachin's Copilot</p>
                  <p className="chat-subtitle">
                    AI agent trained on my resume & projects
                  </p>
                </div>
              </div>
              <span className="chat-badge">Live</span>
            </div>

            <div className="chat-toolbar" aria-label="Quick actions">
              {quickActions.map((action) => (
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.7)", color: "#111" }}
                  whileTap={{ scale: 0.95 }}
                  key={action}
                  className="toolbar-pill"
                  type="button"
                  onClick={() => handleQuickAction(action)}
                >
                  {action}
                </motion.button>
              ))}
            </div>

            <div className="message-stack">
              <AnimatePresence initial={false}>
                {messages.map((message, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={`message-bubble ${message.role}`}
                  >
                    <div className="message-topline" style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', opacity: 0.7, justifyContent: 'flex-start' }}>
                      {message.role === "assistant" ? <Bot size={18} /> : <User size={18} />}
                      <span className="message-title" style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>
                        {message.role === "assistant" ? "Copilot" : "You"}
                      </span>
                    </div>
                    <p style={{ margin: 0 }}>{message.body}</p>
                  </motion.article>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="message-bubble assistant"
                    style={{ alignSelf: 'flex-start', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <Loader2 size={16} className="lucide-icon-spin" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Copilot is responding...</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <div className="composer">
              <div className="composer-box">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="composer-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="send-button"
                  aria-label="Send prompt"
                  type="button"
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                >
                  <ArrowUp size={20} strokeWidth={2.5} />
                </motion.button>
              </div>
            </div>

          </motion.div>

          <div className="dock-row" aria-hidden="true" style={{ marginTop: '14px' }}>
            {statCards.map((card) => (
              <motion.div whileHover={{ y: -8 }} key={card.label} className="dock-card stat-card">
                <strong>{card.value}</strong>
                <span>{card.label}</span>
              </motion.div>
            ))}
            <motion.div whileHover={{ y: -8 }} className="dock-card text-card">Available for new opportunities</motion.div>
          </div>
        </section>

        <aside className="symbols-column" aria-label="Tech Stack">
          {featuredMarks.map((mark, index) => (
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              key={`${mark.label}-${index}`}
              className="symbol-tile hover-invert"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <span className="symbol-mark" style={{ fontSize: '1.5rem' }}>{mark.symbol}</span>
              <span className="symbol-label">
                {mark.label}
              </span>
            </motion.div>
          ))}
        </aside>
      </section>

      {/* Dynamic inline styles to support spin animation for Loader2 */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .lucide-icon-spin {
          animation: spin 1s linear infinite;
        }
      `}} />
    </main>
  );
}
