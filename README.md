# 🚀 Career Frontend

A modern **Next.js frontend** for the Career project. This application provides the user interface for authentication, portfolio management, resume upload, project handling, and chatbot interaction.

---

## ✨ Features

* 🔐 User signup and login
* 👤 Portfolio profile management
* 📄 Resume upload
* 📁 Project listing and management
* 🤖 AI chatbot integration
* 📱 Responsive UI built with Next.js

---

## 🛠 Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS / Custom CSS
* REST API Integration

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 3. Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 📜 Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Run production server
npm run lint    # Run linting
```

---

## 📂 Project Structure

```bash
app/
  layout.tsx
  page.tsx
  globals.css

components/
lib/
services/
public/
```

---

## 🔗 Backend Integration

This frontend connects to the backend API for:

* Authentication
* Portfolio details
* Resume upload
* Project CRUD operations
* Chatbot queries
* RAG-based document search

⚠️ Make sure the backend server is running before using the frontend.

---

## 🏗 Production Build

```bash
npm run build
npm run start
```

---

## ⚙️ Environment Notes

* Store API URLs in environment variables
* Use `.env.local` for local development
* ❌ Do not commit secrets or private keys
