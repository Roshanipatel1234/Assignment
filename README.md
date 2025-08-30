Berkshire Hathaway Intelligence – RAG App
Overview

A RAG application using the Mastra framework to answer questions about Warren Buffett’s investment philosophy using shareholder letters (2019–2024).
Features: real-time chat, persistent memory, source attribution, vector search, and GPT-4o integration.

Architecture
Frontend ←→ Mastra Agents ←→ RAG System ←→ Vector Storage
        ↓               ↓
      Chat UI       Memory & Tools
                      ↓
                  MDocument Database


Agents: GPT-4o AI

Workflows: Document ingestion & retrieval

RAG: Vector search & ETL

Memory: Conversation context

Tools: Document search & retrieval

Setup

Initialize project: npx create-mastra@latest

Configure OpenAI GPT-4o & vector DB

Parse shareholder letters with MDocument

Build agent with persistent memory & vector tools

Frontend: chat UI with streaming responses and source citations

Usage

Start backend: node server/index.js

Start frontend: npm run dev

Ask questions like:

“What is Buffett’s investment philosophy?”

“How has Berkshire’s acquisition strategy evolved?”

Features

Real-time streaming chat

Conversation memory

Source citations

Responsive UI (mobile & desktop)

Error handling & loading indicators

Testing

Validate document ingestion & vector search

Test agent responses with memory

Verify streaming & source attribution

Tech

Mastra Framework

OpenAI GPT-4o

PostgreSQL or compatible vector DB

React frontend
