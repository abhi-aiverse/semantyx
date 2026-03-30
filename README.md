# SEMANTYX v1 Setup

1. **Install Dependencies**: `npm install`
2. **Environment**: Create `.env` with `DATABASE_URL=your_postgres_url`
3. **Database**: `npm run db:push`
4. **Run**: `npm run dev`


# 🚀 Semantyx

**Semantyx** is a full-stack TypeScript application designed as a foundation for building intelligent, AI-powered tools and APIs.

It follows a modular architecture with a clear separation between frontend, backend, and shared logic, making it scalable and production-ready.

---

## 🧠 Purpose

The goal of Semantyx is to provide a reusable system for:

* Building AI-powered applications
* Creating structured APIs with shared schemas
* Developing dashboards to visualize data and insights
* Experimenting with intelligent features like text processing, automation, and analytics

---

## 🏗️ Project Structure

```
abhi-aiverse/
├── client/        # Frontend (UI / Dashboard)
├── server/        # Backend (API / Business Logic)
├── shared/        # Shared schemas and types
├── package.json
├── tsconfig.json
```

### 🔹 Client

Contains the frontend interface (React + TypeScript).
Used for dashboards, visualizations, and user interaction.

### 🔹 Server

Handles backend logic using Node.js and Express.
Responsible for APIs, processing, and future AI integrations.

### 🔹 Shared

Contains reusable schemas and types used across both client and server.
Ensures consistency and type safety.

---

## ⚙️ Tech Stack

* **Frontend:** React + TypeScript + Tailwind CSS
* **Backend:** Node.js + Express
* **Language:** TypeScript
* **Architecture:** Monorepo (client + server + shared)

---

## 🚀 Current Features

* Basic Express server setup
* Modular folder structure
* Shared schema system
* Ready for API expansion

---

## 🔮 Future Scope

Semantyx can evolve into:

* 🤖 AI-powered tools (chatbots, analyzers, generators)
* 📊 Data dashboards
* 🧠 Semantic search / NLP systems
* ⚡ Microservices backend
* 🌐 Full SaaS product under *Abhiaiverse*

---

## ▶️ Running the Project

### Backend

```
cd server
npm install
npm run dev
```

### Frontend (if configured)

```
cd client
npm install
npm run dev
```

---

## 🌍 Vision

Semantyx is part of the **Abhiaiverse ecosystem**, aiming to build intelligent, scalable, and user-focused applications powered by modern AI and web technologies.

---

## 👤 Author

Built by Abhi as part of the journey into AI engineering and full-stack development.

---
