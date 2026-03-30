"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Sparkles, User, Bot, Loader2 } from "lucide-react";

type Message = {
  role: "assistant" | "user";
  body: string;
};

const featuredMarks = [
  { symbol: "[]", label: "Identity systems" },
  { symbol: "<>", label: "Web experiences" },
  { symbol: "++", label: "AI copilots" },
  { symbol: "//", label: "Motion direction" },
  { symbol: "**", label: "Launch strategy" },
  { symbol: "01", label: "Editorial systems" },
];

const seedMessages: Message[] = [
  {
    role: "assistant",
    body: "Hello! I am SChat, your AI assistant. Tell me what you are launching and I will shape the homepage, chat journey, and conversion flow.",
  }
];

const quickActions = [
  "Launch website",
  "Chat assistant",
  "SEO system",
  "Design audit",
];

const statCards = [
  { value: "04", label: "signature experiences" },
  { value: "24h", label: "prototype turnaround" },
  { value: "SEO", label: "metadata structured" },
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>(seedMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: "user", body: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        body: "I am ready to help you shape this surface. We can proceed with a modular visual setup for that concept."
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1800);
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
            "@type": "WebSite",
            name: "Sand Chat UI",
            description:
              "A Sand Studio-inspired animated AI landing page built with Next.js.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://example.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <header className="topbar">
        <motion.div whileHover={{ scale: 1.05 }} className="brand-lockup">
          <span className="brand-burst" aria-hidden="true">
            S
          </span>
          <span className="brand-name">SAND DESKTOP</span>
        </motion.div>

        <nav className="topnav" aria-label="Primary">
          <motion.a whileHover={{ y: -2 }} href="#overview">Overview</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#chatbox">SChat</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#contact">Contact</motion.a>
        </nav>

        <motion.a whileHover={{ scale: 1.05 }} href="#chatbox" className="login-pill">
          Open chat
        </motion.a>
      </header>

      <section className="hero-card" id="overview">
        <aside className="story-column">
          <div className="story-intro">
            <p className="eyebrow-copy">
              Editorial web design and AI-native chat interfaces shaped into one
              premium landing page.
            </p>

            <div className="service-pills" aria-label="Capabilities">
              <span>Brand systems</span>
              <span>OpenAI chat UI</span>
              <span>Motion direction</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="wordmark-block"
          >
            <h1 className="hero-wordmark">SAND</h1>
            <p className="wordmark-support">
              Built to feel sharp on desktop and composed on mobile.
            </p>
          </motion.div>

          <div className="info-grid">
            <motion.div whileHover={{ scale: 1.02 }} className="weather-chip">
              <span className="weather-icon" aria-hidden="true">
                31
              </span>
              <div>
                <p className="temperature">31.2 C</p>
                <p className="muted-copy">Clear sky, Kolkata studio</p>
              </div>
            </motion.div>

            <div className="city-list">
              <p>Monday 19:32</p>
              <p>Bangkok</p>
              <p>London</p>
              <p>New York</p>
              <p>Singapore</p>
              <p className="accent-copy">LOCAL</p>
            </div>
          </div>

          <div className="story-actions">
            <motion.a whileHover={{ scale: 1.05 }} href="#chatbox" className="primary-link">
              Start SChat
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="secondary-link">
              Request build
            </motion.a>
          </div>

          <nav className="legal-links" aria-label="Secondary">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms and Conditions</a>
            <a href="#cookies">Cookies Policy</a>
          </nav>

          <p className="made-by" id="contact">
            Made for a Sand-inspired Next.js experience with production-ready
            structure.
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
                  <p className="chat-name">SChat Assistant</p>
                  <p className="chat-subtitle">
                    OpenAI-ready assistant for your brand
                  </p>
                </div>
              </div>
              <span className="chat-badge">Live</span>
            </div>

            <div className="chat-toolbar" aria-label="Quick actions">
              {quickActions.map((action) => (
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.7)" }}
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
                        {message.role === "assistant" ? "SChat" : "You"}
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
                    <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>SChat is responding...</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <div className="composer">
              <div className="composer-box">
                <input
                  type="text"
                  placeholder="Message SChat..."
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

            {/* <div className="chat-footer">
              <div style={{ display: 'flex', gap: '16px' }}>
                <p>hi@sandchatui.com</p>
                <p>Privacy and AI disclosure</p>
              </div>
              <div className="powered-by">Powered by OpenAI-compatible UX</div>
            </div> */}
          </motion.div>

          <div className="dock-row" aria-hidden="true" style={{ marginTop: '14px' }}>
            {statCards.map((card) => (
              <motion.div whileHover={{ y: -8 }} key={card.label} className="dock-card stat-card">
                <strong>{card.value}</strong>
                <span>{card.label}</span>
              </motion.div>
            ))}
            <motion.div whileHover={{ y: -8 }} className="dock-card text-card">email and message concierge</motion.div>
          </div>
        </section>

        <aside className="symbols-column" aria-label="Visual motifs">
          {featuredMarks.map((mark, index) => (
            <motion.div
              initial="idle"
              whileHover="hover"
              variants={{
                idle: { scale: 1, rotate: 0, backgroundColor: "rgba(255, 255, 255, 0.3)", color: "#0d0d0d" },
                hover: { scale: 1.05, rotate: 5, backgroundColor: "#0d0d0d", color: "#ffffff" }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              key={`${mark.label}-${index}`}
              className="symbol-tile"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <span className="symbol-mark">{mark.symbol}</span>
              <motion.span 
                variants={{
                  idle: { color: "var(--muted)" },
                  hover: { color: "#cccccc" }
                }}
                className="symbol-label"
              >
                {mark.label}
              </motion.span>
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
