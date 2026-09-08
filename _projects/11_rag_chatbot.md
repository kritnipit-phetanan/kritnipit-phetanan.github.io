---
layout: page
title: Intelligent FAQ Chatbot Migration to Serverless
description: Migrated a legacy chatbot's matching engine off constrained CMS hosting to AWS Lambda
img: assets/img/rag_chatbot.jpg
importance: 4
category: Work
related_publications: false
---

## Overview

Migrated an existing FAQ chatbot's entire matching engine off constrained legacy CMS hosting onto **AWS Lambda**, replacing what had been running inside a content-management platform that couldn't support the required Python NLP dependencies.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rag_chatbot_widget.png" title="Live Chat Widget" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The live chat widget in production, answering citizen questions about general information, agencies, contact channels, and public services.
</div>

---

## Technical Approach

- **Legacy Constraint**: The chatbot lived on a CMS server not built to run a Python NLP stack (tokenization, spell-correction, fuzzy-matching libraries), so the entire matching engine was moved off it entirely rather than patched in place
- **Serverless Matching Engine**: A single AWS Lambda Function URL now handles the full request pipeline — Thai text normalization, tokenization, synonym expansion, spell correction, and fuzzy-match scoring against a curated knowledge base
- **Confidence-Based Routing**: Matches route to a direct answer, a topic overview, a disambiguation prompt, or a scoped fallback depending on match confidence, rather than a single fixed response path
- **Cold-Start Optimization**: Expensive index-building work happens lazily on first use per warm container instead of on every cold start

---

## Key Features

- **Serverless, Dependency-Isolated**: No NLP dependencies run on the original CMS server anymore
- **Guardrails**: Filters out-of-scope and low-signal queries before they reach the matching engine
- **Config-Driven Tuning**: Matching thresholds and response templates are adjustable without redeploying code

---

## Technologies Used

| Category | Tools |
|----------|-------|
| **Cloud** | AWS Lambda |
| **NLP** | Thai tokenization, synonym expansion, fuzzy string matching, spell correction |
| **Templating** | Jinja2 |
