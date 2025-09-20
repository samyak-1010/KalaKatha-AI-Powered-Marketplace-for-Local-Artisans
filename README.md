# 🌸 KalaKatha – Where Craft Meets AI

KalaKatha is an **AI-powered marketplace assistant** designed to empower local artisans by bridging the gap between traditional crafts and digital audiences. It enables artisans to onboard easily, share their stories, and market their products online—**without needing digital or marketing expertise**.

This repo contains both the **Frontend (React)** and **Backend (Node.js + Google Cloud)** code.

## 🚀 Features

- 🎙 **Voice-First Onboarding** – Artisans can describe products by simply speaking in their local language.
- ✍️ **AI Storytelling** – Vertex AI (Gemini) converts artisan input into SEO-friendly product descriptions & stories.
- 🎨 **AI Visual Marketing** – Imagen + Veo generate posters & promo videos aligned with local culture.
- ☁️ **Cloud Native Scalability** – Serverless backend using Cloud Functions + Firestore.
- 📦 **Personalized Buyer Recommendations** – Suggests crafts based on buyer preferences.
- 📱 **Offline-First Support** – Works in poor connectivity areas with automatic sync.

## 📂 Project Structure

```
KalaKatha-Where-Craft-Meets-AI/
│── frontend/                # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
│── backend/                 # Node.js + Express backend
│   ├── index.js
│   ├── routes/
│   ├── services/
│   ├── config/
│   └── package.json
│
└── README.md                # You are here
```

## ⚙️ Setup Instructions

### 🔹 1. Clone the Repo

```bash
git clone https://github.com/samyak-1010/KalaKatha-Where-Craft-Meets-AI.git
cd KalaKatha-Where-Craft-Meets-AI
```

### 🔹 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

👉 Runs the React frontend at `http://localhost:3000`

### 🔹 3. Backend Setup

```bash
cd backend
npm install
```

Enable the following **Google Cloud APIs** in your project:
- Firestore
- Cloud Functions
- Vertex AI
- Speech-to-Text
- Translation
- Cloud Storage

Authenticate locally:

```bash
gcloud auth application-default login
```

Run locally:

```bash
npm start
```

Deploy to Cloud Functions:

```bash
gcloud functions deploy app --runtime nodejs20 --trigger-http --allow-unauthenticated
```

## 📡 API Overview

### 🎙 Artisan Onboarding
`POST /artisan/onboard`
- Input: Base64 audio + language code
- Output: Transcribed + translated text, artisan ID

### ✍️ Product Storytelling
`POST /product/add`
- Input: artisanId + raw text
- Output: AI-generated description

### 🎨 Media Generation
`POST /media/generate`
- Input: description
- Output: Poster & video URLs

### 🤝 Buyer Recommendations (optional)
`GET /recommendation/:buyerId`
- Output: Personalized crafts

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- ShadCN UI
- Axios (API calls)

### Backend
- Node.js + Express
- Google Cloud Functions
- Firestore (Database)
- Vertex AI (Gemini) – Storytelling
- Imagen + Veo – Posters & Videos
- Speech-to-Text + Translation – Voice onboarding

## 🎯 Future Scope

- Full Recommendation AI integration
- Analytics dashboards for artisans
- Multilingual AI chatbot for guidance
- Integration with digital payments & logistics
