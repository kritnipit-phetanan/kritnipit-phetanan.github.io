---
layout: page
title: AI Anime Sommelier
description: Personalized anime recommendation chatbot built on a multi-agent RAG pipeline (Ongoing)
img: assets/img/ai_anime_sommelier.jpg
importance: 2
category: Personal
related_publications: false
---

## Overview

Built **AI Anime Sommelier**, a Thai-language LINE chatbot that gives hyper-personalized anime recommendations by building a per-user "Taste DNA" profile from their real MyAnimeList watch history — going beyond keyword matching to explain *why* a title fits, and even flag popular titles that likely won't.

---

## Project Context

### Technical Approach

- **Multi-Agent Pipeline (LangGraph)**: Three sequential agents — a Taste DNA Analyzer (built from MAL watch history via OAuth 2.0), a Smart Search agent (semantic search over anime embeddings), and a Personalized Sommelier agent that generates the final recommendation and reasoning
- **Semantic Search**: Query and anime metadata embedded with Google Gemini, matched via **pgvector** HNSW similarity search
- **Large-Scale Data Processing**: PySpark over a ~150M-row ratings dataset and Pandas over ~28K anime metadata records to precompute recommendation features
- **Async API & Background Processing**: FastAPI gateway with Celery-backed background tasks and Redis for caching and rate limiting

---

## Key Features

- **Taste DNA Profiling**: Learns a user's actual preferences from their MAL history, not just stated genres
- **Personalized Reasoning**: Explains *why* a recommended title fits a specific user
- **Anti-Recommendations**: Flags popular titles a user likely won't enjoy, based on their taste profile
- **LINE-Native**: Delivered as Flex Messages inside a LINE Official Account

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Backend** | Python, FastAPI, Celery |
| **AI / LLMs** | LangChain, LangGraph, Google Gemini |
| **Data** | PostgreSQL + pgvector, Redis, PySpark, Pandas |
| **Messaging** | LINE Messaging API (Flex Messages) |
| **Deployment** | Docker, AWS EC2, Nginx, GitHub Actions |

---

## Source & Links

- **GitHub Repository**: [kritnipit-phetanan/ai_anime_sommelier](https://github.com/kritnipit-phetanan/ai_anime_sommelier)
