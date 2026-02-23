---
layout: page
title: JobMatcher
description: AI-Powered Resume to Job Matching & Analytics Platform
img: assets/img/jobs.jpg
importance: 1
category: Personal
related_publications: false
---

## Overview

Developed **JobMatcher**, a full-stack automated pipeline that scrapes real job listings, analyzes them using AI, and provides a smart platform for users to upload their resumes. The system calculates match scores, identifies skill gaps, analyzes market demand/salary trends, and automatically generates personalized cover letters.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jobmatcher.jpg" title="JobMatcher AI Platform" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Project Context

This project bridges the gap between advanced RAG (Retrieval-Augmented Generation) applications and robust data engineering. It demonstrates a complete end-to-end system capable of automated continuous data collection, semantic analysis, and user-facing intelligence.

### Technical Approach

- **Semantic Matchmaking (RAG)**: Utilized `pgvector` and Gemini Embeddings to enable semantic resume-to-job matching, surpassing basic keyword search
- **Automated Cloud Scraping Pipeline**: Engineered Playwright-based scraping with advanced Anti-Detection techniques (stealth mode, UA rotation), automated via GitHub Actions
- **Robust ETL Workflow**: Extracted and structured job data (skills, experience) using the Groq API, and generated semantic embeddings with Google Gemini
- **Market Analytics Dashboard**: Visualized real-time tech skill demands and salary trends mapped against specific tools and technologies

---

## Key Features

- **Skill Gap Analysis**: Precisely highlights which required skills from a job description are missing from an applicant's resume
- **Cover Letter Generation**: Automatically drafts highly tailored cover letters referencing specific job requirements and user experience
- **Data Freshness**: Fully automated nightly scraping ensures the platform's job market analytics represent current industry realities

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Frontend** | Next.js 15 (React), TailwindCSS, Recharts |
| **Backend & DB** | Python, FastAPI, Supabase (PostgreSQL + pgvector) |
| **AI / LLMs** | Google Gemini (Embeddings/Generation), Groq (Fast JSON Extraction) |
| **Automation** | GitHub Actions, Playwright |

---

## Source & Links

- **GitHub Repository**: [kritnipit-phetanan/job_match](https://github.com/kritnipit-phetanan/job_match)
