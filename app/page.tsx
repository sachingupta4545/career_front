"use client";

import { useEffect, useState } from "react";

type Message = {
  role: "assistant" | "user";
  title: string;
  body: string;
  meta: string;
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
    title: "SChat",
    body: "Welcome in. Tell me what you are launching and I will shape the homepage, chat journey, and conversion flow.",
    meta: "online now",
  },
  {
    role: "user",
    title: "You",
    body: "We need a premium AI-first homepage with a better chatbot, stronger art direction, and mobile responsiveness.",
    meta: "brief received",
  },
  {
    role: "assistant",
    title: "SChat",
    body: "I am setting up a sharper layout: editorial storytelling on the left, guided prompts in the center, and a modular visual rail on the right.",
    meta: "drafting concept",
  },
  {
    role: "assistant",
    title: "SChat",
    body: "Next I would wire this surface to an OpenAI endpoint so the same UI becomes a live assistant instead of a static showcase.",
    meta: "ready for integration",
  },
];

const promptSamples = [
  "Design an AI-first brand story",
  "Build a premium support chatbot",
  "Create a motion-led launch page",
  "Map an SEO landing page system",
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
  const [activePrompt, setActivePrompt] = useState(promptSamples[0]);
  const [visibleMessages, setVisibleMessages] = useState(seedMessages.slice(0, 2));

  useEffect(() => {
    const messageTimer = window.setInterval(() => {
      setVisibleMessages((current) => {
        if (current.length === seedMessages.length) {
          return seedMessages.slice(0, 2);
        }

        return seedMessages.slice(0, current.length + 1);
      });
    }, 2400);

    const promptTimer = window.setInterval(() => {
      setActivePrompt((current) => {
        const currentIndex = promptSamples.indexOf(current);
        const nextIndex = (currentIndex + 1) % promptSamples.length;
        return promptSamples[nextIndex];
      });
    }, 2200);

    return () => {
      window.clearInterval(messageTimer);
      window.clearInterval(promptTimer);
    };
  }, []);

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
        <div className="brand-lockup">
          <span className="brand-burst" aria-hidden="true">
            S
          </span>
          <span className="brand-name">SAND DESKTOP</span>
        </div>

        <nav className="topnav" aria-label="Primary">
          <a href="#overview">Overview</a>
          <a href="#chatbox">SChat</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#chatbox" className="login-pill">
          Open chat
        </a>
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

          <div className="wordmark-block">
            <h1 className="hero-wordmark">SAND</h1>
            <p className="wordmark-support">
              Built to feel sharp on desktop and composed on mobile.
            </p>
          </div>

          <div className="info-grid">
            <div className="weather-chip">
              <span className="weather-icon" aria-hidden="true">
                31
              </span>
              <div>
                <p className="temperature">31.2 C</p>
                <p className="muted-copy">Clear sky, Kolkata studio</p>
              </div>
            </div>

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
            <a href="#chatbox" className="primary-link">
              Start SChat
            </a>
            <a href="#contact" className="secondary-link">
              Request build
            </a>
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

          <div className="chat-frame" id="chatbox">
            <div className="chat-header">
              <div className="chat-title">
                <span className="tiny-mark" aria-hidden="true">
                  SC
                </span>
                <div>
                  <p className="chat-name">SChat Concierge</p>
                  <p className="chat-subtitle">
                    OpenAI-ready assistant for websites, launches, and support
                  </p>
                </div>
              </div>
              <span className="chat-badge">Live assistant</span>
            </div>

            <div className="chat-toolbar" aria-label="Quick actions">
              {quickActions.map((action) => (
                <button key={action} className="toolbar-pill" type="button">
                  {action}
                </button>
              ))}
            </div>

            <div className="message-stack">
              {visibleMessages.map((message, index) => (
                <article
                  key={`${message.role}-${index}`}
                  className={`message-bubble ${message.role}`}
                >
                  <div className="message-topline">
                    <p className="message-title">{message.title}</p>
                    <span className="message-meta">{message.meta}</span>
                  </div>
                  <p>{message.body}</p>
                </article>
              ))}

              <div className="typing-row" aria-label="Assistant typing">
                <span>SChat is shaping the next response</span>
                <div className="typing-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className="suggestion-row" aria-label="Suggested prompts">
              {promptSamples.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className={`suggestion-chip${
                    activePrompt === prompt ? " active" : ""
                  }`}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="composer">
              <div className="composer-label">Prompt in rotation</div>
              <div className="composer-box">
                <div className="composer-copy">
                  <span className="composer-kicker">Ask SChat</span>
                  <span className="composer-text">{activePrompt}</span>
                </div>
                <button className="send-button" aria-label="Send prompt" type="button">
                  Send
                </button>
              </div>
            </div>

            <div className="chat-footer">
              <div>
                <p>hi@sandchatui.com</p>
                <p>Privacy and AI disclosure</p>
              </div>
              <div className="powered-by">Powered by OpenAI-compatible UX</div>
            </div>
          </div>

          <div className="dock-row" aria-hidden="true">
            {statCards.map((card) => (
              <div key={card.label} className="dock-card stat-card">
                <strong>{card.value}</strong>
                <span>{card.label}</span>
              </div>
            ))}
            <div className="dock-card text-card">email and message concierge</div>
          </div>
        </section>

        <aside className="symbols-column" aria-label="Visual motifs">
          {featuredMarks.map((mark, index) => (
            <div
              key={`${mark.label}-${index}`}
              className="symbol-tile"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <span className="symbol-mark">{mark.symbol}</span>
              <span className="symbol-label">{mark.label}</span>
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}
